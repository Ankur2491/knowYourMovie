from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
from math import sqrt
from pymongo import MongoClient
from bson import Binary, Code
import json
from bson.json_util import dumps
client=MongoClient('localhost:27017')
db=client.admin
collection=db.ratings

def sim_pearson(prefs,p1,p2):
    si={}
    for item in prefs[p1]:
        if item in prefs[p2]: si[item]=1
    n=len(si)
    if n==0:
        return 0
    sum1=sum([prefs[p1][it] for it in si])
    sum2=sum([prefs[p2][it] for it in si])

    sum1Sq=sum([pow(prefs[p1][it],2) for it in si])
    sum2Sq=sum([pow(prefs[p2][it],2) for it in si])

    pSum=sum([prefs[p1][it]*prefs[p2][it] for it in si])

    num=pSum-(sum1*sum2/n)
    den=sqrt((sum1Sq-pow(sum1,2)/n)*(sum2Sq-pow(sum2,2)/n))
    if den==0: return 0

    r=num/den
    return r
def getRecommendations(prefs,person):
    totals={}
    simSums={}
    for other in prefs:
        if other==person: continue
        sim=sim_pearson(prefs,person,other)
        if sim<0: continue
        for item in prefs[other]:
            if item not in prefs[person] or prefs[person][item]==0:
                totals.setdefault(item,0)
                totals[item]+=prefs[other][item]*sim
                simSums.setdefault(item,0)
                simSums[item]+=sim
    rankings=[(total/simSums[item],item) for item, total in totals.items()]
    rankings.sort()
    rankings.reverse()
    mov = [r[1] for r in rankings]
    print(mov)
    rankObject = {"recMovies":rankings}
    return mov

app=Flask(__name__)
cors=CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
'''
def hi():
    x="hey I am here!"
    return x
'''
@app.route("/submitreview", methods=["GET","POST"])

def submitReview():
#    y=hi()
    ratingObj={}
    try:
        if request.method == "POST":
            req_data=request.get_json()
#            print(json.dumps(req_data))
#            return json.dumps(req_data)
#            print((dumps(req_data)))
            d=dumps(req_data)
            l=json.loads(d)
#            print(l)
            ratingData = l
            nkName = ratingData['nickname'].replace('.','_')
            persistingData = { ratingData['id']:ratingData['rating'] }
            data=collection.find_one()
#            print("ID::",data['_id'])
            existingCollection = json.loads(dumps(data))
#            print("Existing Data:",existingCollection);
            if nkName in existingCollection:
                existingData = existingCollection[nkName]
                existingData[str(ratingData['id'])] = ratingData['rating']
            else:
                existingData = {}
                existingData[str(ratingData['id'])] = ratingData['rating']
#            print("existingCollection:",persistingData)
            db.ratings.update_one({'_id': data['_id']},{'$set': {nkName:existingData}},upsert=True)
            return d

    except Exception as e:
        print(e)
    return "Default"

@app.route("/recommendMovies", methods=["GET","POST"])

def rMovies():
    try:
        demo=[19995,38,562,335983,381289]
        if request.method == "POST":
            return dumps(demo)
            req_data = request.get_json()
            d = dumps(req_data)
            l = json.loads(d)
            recommendRequest = l
            nkName = recommendRequest['nickname'].replace('.','_')
#            print(nkName)
            data=collection.find_one()
            mData = data
            mData.pop('_id',None)
#            print(mData)
            rec = (getRecommendations(mData,nkName))
#            print("REC:",dumps(rec))
        return dumps(rec)
    except Exception as e:
        print(e)
    return "Default"


if (__name__ == "__main__"):
    app.run(port=5000)
