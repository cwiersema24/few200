import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { GivingListItem } from '../../model';
import { Store, select } from '@ngrx/store';
import { GivingListState } from '../../reducers/list.reducer';
import { getPastList } from '../../reducers';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-display-past',
  templateUrl: './display-past.component.html',
  styleUrls: ['./display-past.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayPastComponent implements OnInit {
  items$: Observable<GivingListItem[]>;
  item: GivingListItem[];
  constructor(private store: Store<GivingListState>, private change: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.items$ = this.store.pipe(select(getPastList));
    this.items$.subscribe(a => { this.item = a; this.change.markForCheck(); });
  }

}
