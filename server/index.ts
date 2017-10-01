import 'zone.js/dist/zone-node';
import * as functions from 'firebase-functions';
import * as express from 'express';
import { renderModuleFactory } from '@angular/platform-server';
import * as fs from 'fs';

const document = fs.readFileSync(__dirname + '/dist-server/index.html', 'utf8');
const AppServerModuleNgFactory = require(__dirname + '/dist-server/main.bundle').AppServerModuleNgFactory;

const app = express();
app.get('/^(.(?!\.js$))+$/', (req, res) => {
    const url = req.path;
    renderModuleFactory(AppServerModuleNgFactory, {document, url})
    .then(html => {
        res.set('cache-control', 'public, max-age=600, s-maxage=1200');
        res.send(html);
    });
});

export let hnAngularApp = functions.https.onRequest(app);

// import { enableProdMode } from '@angular/core';
// import * as angularUniversal from 'angular-universal-express-firebase';
// export let hnAngularApp = angularUniversal.trigger({
//     index: __dirname + '/dist-server/index.html',
//     main: __dirname + '/dist-server/main.bundle',
//     enableProdMode: true,
//     cdnCacheExpiry: 1200,
//     browserCacheExpiry: 600
// });
