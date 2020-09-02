import { Component, OnInit } from '@angular/core';
import { AppState, selectHasError, selectError } from './reducers';
import { Store, select } from '@ngrx/store';
import { applicationStarted, clearApplicationFeatureError } from '../app/action/app.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Front End Web 200';

  hasError$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store<AppState>) {
    store.dispatch(applicationStarted());
  }

  ngOnInit(): void {
    this.hasError$ = this.store.pipe(select(selectHasError));

    this.error$ = this.store.pipe(select(selectError));
  }

  clearError(): void {
    this.store.dispatch(clearApplicationFeatureError());
  }
}
