import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { KanjiDetailComponent } from "./kanji/kanji-detail/kanji-detail.component";
import { KanjiEditComponent } from "./kanji/kanji-edit/kanji-edit.component";
import { KanjiListComponent } from "./kanji/kanji-list/kanji-list.component";
import { NewKanjiComponent } from "./kanji/new-kanji/new-kanji.component";

const routes: Routes = [
    { path: '', component: KanjiListComponent },
    { path: 'kanji', component: KanjiListComponent },
    { path: 'kanji/new', component: NewKanjiComponent },
    { path: 'kanji/:id', component: KanjiDetailComponent },
    { path: 'kanji/edit/:id', component: KanjiEditComponent },
    { path: 'not-found', component: KanjiListComponent },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
