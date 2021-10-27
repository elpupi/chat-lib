import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { /*IonicModule,*/Events } from 'ionic-angular';

import { AppComponent } from './app.component';

import { ChatServerModule } from './modules/chat-server/chat-server.module';
import { ChatClientModule } from './modules/chat-client/chat-client.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    //  IonicModule,
    ChatClientModule
  ],
  providers: [
    Events
  ],
  exports: [
    ChatClientModule,
    ChatServerModule,
  ],
  bootstrap: [AppComponent],
  //   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
