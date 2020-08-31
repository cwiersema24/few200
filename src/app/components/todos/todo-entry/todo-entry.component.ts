import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.scss']
})
export class TodoEntryComponent implements OnInit {
  @Output() itemAdded = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }
  add(descriptionEL: HTMLInputElement): void {
    console.log(descriptionEL.value);
    this.itemAdded.emit(descriptionEL.value);
    descriptionEL.value = '';
    descriptionEL.focus();
  }
}
