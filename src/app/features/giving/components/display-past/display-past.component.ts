import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { GivingListItem } from '../../model';
import { Store, select } from '@ngrx/store';
import { GivingState } from '../../reducers/list.reducer';
import { getPastList } from '../../reducers';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-display-past',
  templateUrl: './display-past.component.html',
  styleUrls: ['./display-past.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DisplayPastComponent implements OnInit {
  items$: Observable<GivingListItem[]>;
  item: GivingListItem[];
  constructor(private store: Store<GivingState>, private change: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.items$ = this.store.pipe(select(getPastList));
    // this.items$.subscribe(a => { this.item = a; this.change.markForCheck(); });
  }

}
