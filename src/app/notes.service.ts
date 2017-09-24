import { Injectable } from '@angular/core';
import { Note } from './Note';

var notes: Note[] = [
  {title: "Note 1", content: 'Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note Cool note '},
  {title: "Note 2", content: 'Not as cool note'},
  {title: "Note 3", content: 'Get cat food'},
  {title: "Note 4", content: 'Maybe get a haircut'},
  {title: "Note 5", content: 'One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life One day think about life '},
  {title: "Note 6", content: 'Change the cat litter'}
];

@Injectable()
export class NotesService {
  getNotes(): Note[] {
    return notes;
  }
}