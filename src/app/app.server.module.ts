import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { UniversalInterceptor } from './services';
// import { ServerPrebootModule } from 'preboot/server';

import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  imports: [
    ServerModule,
    AppModule,
    ModuleMapLoaderModule,
    // ServerPrebootModule.recordEvents({ appRoot: 'app-root' })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UniversalInterceptor,
    /* Multi is important or you will delete all the other interceptors */
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppServerModule { }
