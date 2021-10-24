import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { GiftsModule } from './gifts/gifts.module';



@NgModule({
  declarations: [
    AppComponent,
  
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShareModule,
    GiftsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
