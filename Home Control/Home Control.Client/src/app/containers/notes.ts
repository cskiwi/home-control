import { Component } from '@angular/core';

@Component({
    selector: 'notes-container',
    styles: [`
    .notes {
        padding-top: 50px;
    }
    .creator {
        margin-bottom: 40px; 
    }
	`],
    template: `
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">
        <note-creator ></note-creator>
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card 
            class="col-md-4 col-xs-6" 
            [note]="note"
            *ngFor="let note of notes; let i = index" 
            (checked)="onNoteChecked(i)"
          >
          </note-card>
        </div>
      </div>
    </div>
	`
})

export class NotesContainer {
    notes = [{ 
        title: 'this is a note', 
        value: 'eat some food', 
        color: 'lightblue'
    },
    { 
        title: 'Cook', 
        value: 'Cook your food', 
        color: 'red'
    },
    { 
        title: 'Catzzz', 
        value: 'Walk the cat', 
        color: 'yellow'
    }]

    onNoteChecked(i: number) {
        this.notes.splice(i, 1);
    }
}
