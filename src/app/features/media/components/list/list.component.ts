import { Component, OnInit } from '@angular/core';
import { MediaState2 } from '../../reducers/list.reducer';
import { Observable } from 'rxjs';
import { MediaListItem } from '../../models';
import { selectMediaList } from '../../reducers';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items$: Observable<MediaListItem[]>;
  constructor(private store: Store<MediaState2>) { }

  ngOnInit(): void {
    this.items$ = this.store.pipe(select(selectMediaList));
  }

}
