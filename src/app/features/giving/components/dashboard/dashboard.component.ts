import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardSummary } from '../../model/dashboard';
import { Store, select } from '@ngrx/store';
import { GivingState } from '../../reducers/list.reducer';
import { selectDashboardModel } from '../../reducers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  model$: Observable<DashboardSummary>;
  constructor(private store: Store<GivingState>) { }

  ngOnInit(): void {
    this.model$ = this.store.pipe(select(selectDashboardModel));
  }

}
