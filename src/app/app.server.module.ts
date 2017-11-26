import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule  } from '@angular/platform-server';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent, PLATFORM_TOKEN  } from './app.component';
import { AppModule } from './app.module';
import { UniversalInterceptor } from './services';

import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  imports: [
    ServerModule,
    ServerTransferStateModule,
    AppModule,
    ModuleMapLoaderModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UniversalInterceptor,
    /* Multi is important or you will delete all the other interceptors */
    multi: true
  }, { provide: PLATFORM_TOKEN, useValue: 'Server' }],
  bootstrap: [AppComponent]
})
export class AppServerModule { }
