import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';

import { Note } from './Note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  notes: Note[];

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.notes = this.notesService.getNotes();
  }
}
