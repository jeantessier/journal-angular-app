import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  @Input() entries!: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
