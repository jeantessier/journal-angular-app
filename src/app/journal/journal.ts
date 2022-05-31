import { JournalEntry } from "./journal_entry";

export interface Journal {
  title: string;
  entries: JournalEntry[];
}
