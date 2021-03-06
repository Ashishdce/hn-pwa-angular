import { NoDataModule } from './components/no-data/no-data.module';
import { BrowserModule, BrowserTransferStateModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent, PLATFORM_TOKEN } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';

import { ContentModule } from './components/content/content.module';
import { ItemModule } from './components/item/item.module';
import { UserModule } from './components/user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { Services } from './services';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'angularHNA'}),
    AppRoutingModule,
    ContentModule,
    UserModule,
    ItemModule,
    HttpClientModule,
    NoDataModule,
    BrowserTransferStateModule 
  ],
  providers: [Services, { provide: PLATFORM_TOKEN, useValue: 'Client' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
