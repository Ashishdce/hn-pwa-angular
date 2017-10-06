import { enableProdMode } from '@angular/core';
import * as angularUniversal from 'angular-universal-express-firebase';
export let hnAngularApp = angularUniversal.trigger({
    index: __dirname + '/dist-server/index.html',
    main: __dirname + '/dist-server/main.bundle',
    enableProdMode: true,
    cdnCacheExpiry: 1200,
    browserCacheExpiry: 600
});

