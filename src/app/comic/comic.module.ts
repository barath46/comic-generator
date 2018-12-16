import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComicComponent } from './comic.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
      BrowserModule,
      NgModule,
      HttpClientModule
    ],
    declarations: [ComicComponent],
    exports: [ComicComponent],
    providers: [],
  })

export class ComicModule { }
  