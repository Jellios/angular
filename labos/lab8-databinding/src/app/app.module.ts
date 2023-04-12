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
import { SumaryPipe } from './sumary.pipe';
import { BOOKS } from './mock-books';
import { FinancePipe } from './finance.pipe';
import { CardComponent } from './card/card.component';
import { NewMessageComponent } from './new-message/new-message.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    WordsComponent,
    ClicksComponent,
    BooksComponent,
    BookComponent,
    ParagraafComponent,
    SumaryPipe,
    FinancePipe,
    CardComponent,
    NewMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
