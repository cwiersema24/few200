import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GivingState } from './reducers/';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-giving',
  templateUrl: './giving.component.html',
  styleUrls: ['./giving.component.scss']
})
export class GivingComponent implements OnInit {
  filter$: Observable<Date>;
  loaded$: Observable<boolean>;
  constructor(private store: Store<GivingState>) { }

  ngOnInit(): void {
    // this.loaded$ = this.store.pipe(
    //   select(selec);
  }

}
