import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { WordsComponent } from './words/words.component';
import { ClicksComponent } from './clicks/clicks.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { ParagraafComponent } from './paragraaf/paragraaf.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    WordsComponent,
    ClicksComponent,
    BooksComponent,
    BookComponent,
    ParagraafComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
