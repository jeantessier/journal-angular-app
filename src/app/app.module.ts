import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShowdownModule } from 'ngx-showdown';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { EntryListComponent } from './entry-list/entry-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    EntryListComponent
  ],
  imports: [
    BrowserModule,
    ShowdownModule.forRoot({
      emoji: true,
      ghCodeBlocks: true,
      openLinksInNewWindow: true,
      splitAdjacentBlockquotes: true,
      strikethrough: true,
      tables: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
