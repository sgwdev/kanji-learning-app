import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KanjiListComponent } from './kanji/kanji-list/kanji-list.component';
import { KanjiDetailComponent } from './kanji/kanji-detail/kanji-detail.component';
import { NewKanjiComponent } from './kanji/new-kanji/new-kanji.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KanjiEditComponent } from './kanji/kanji-edit/kanji-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    KanjiListComponent,
    KanjiDetailComponent,
    NewKanjiComponent,
    KanjiEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
