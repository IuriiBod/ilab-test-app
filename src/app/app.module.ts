import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdInputModule, MdCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { GiphyDetailComponent } from './components/detail/detail.component';

import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    GiphyDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    MdInputModule,
    MdCardModule,
    BrowserAnimationsModule
  ],
  providers: [
    SearchService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
