import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { GivingListItem } from '../../model';
import { Store, select } from '@ngrx/store';
import { GivingState } from '../../reducers/list.reducer';
import { getUpcommingList } from '../../reducers';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-display-upcomming',
  templateUrl: './display-upcomming.component.html',
  styleUrls: ['./display-upcomming.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DisplayUpcommingComponent implements OnInit {
  items$: Observable<GivingListItem[]>;
  item: GivingListItem[];
  constructor(private store: Store<GivingState>, private change: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.items$ = this.store.pipe(select(getUpcommingList));
    this.items$.subscribe(a => { this.item = a; this.change.markForCheck(); });
  }

}
