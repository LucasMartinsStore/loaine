import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibSearchComponent } from './lib-search/lib-search.component';
import { ReactiveSearchModule } from './reactive-search/reactive-search.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LibSearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveSearchModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
