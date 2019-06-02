import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare let cordova: any;
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

let onDeviceReady = () => {
  window.open = cordova.InAppBrowser.open;
};
document.addEventListener('deviceready', onDeviceReady, false);
