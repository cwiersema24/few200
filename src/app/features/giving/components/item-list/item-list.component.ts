import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { GivingListItem } from '../../model';
import { Store } from '@ngrx/store';
import { ListEntity, GivingState } from 'src/app/features/giving/reducers/list.reducer';
import { completedCard, completedGift } from '../../actions/list.actions';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent implements OnInit {

  @Input() items: GivingListItem[] = [];
  constructor(private store: Store<GivingState>) { }

  ngOnInit(): void {
  }

  markCardComplete(payload: ListEntity): void {
    this.store.dispatch(completedCard({ payload }));
  }

  markGiftComplete(payload: ListEntity): void {
    this.store.dispatch(completedGift({ payload }));
  }

}
