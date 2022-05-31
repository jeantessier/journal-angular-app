import { Component } from '@angular/core';
import { JournalService } from "./journal/journal.service";
import { Journal } from "./journal/journal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private journalService: JournalService) {}

  getJournal(): Journal { return this.journalService.getJournal(); }
}
