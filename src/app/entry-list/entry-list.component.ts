import {Component, Input, OnInit} from '@angular/core';
import { JournalEntry } from "../journal/journal_entry";

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  @Input() entries!: JournalEntry[];
  constructor() { }

  ngOnInit(): void {
  }

}
