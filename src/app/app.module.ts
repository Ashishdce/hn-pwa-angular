import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { UserComponent } from './components/user/user.component';

import { ContentModule } from './components/content/content.module';
import { ItemModule } from './components/item/item.module';
// import { UserModule } from './components/user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { Services } from './services';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    UserComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'angularHNA'}),
    AppRoutingModule,
    ContentModule,
    // UserModule,
    ItemModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [Services],
  bootstrap: [AppComponent]
})
export class AppModule { }
