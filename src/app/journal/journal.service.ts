import { Injectable } from '@angular/core';
import { JOURNAL } from './mock-journal';
import { Journal } from "./journal";

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor() { }

  getJournal(): Journal { return JOURNAL; }
}
