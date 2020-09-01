import { Component } from '@angular/core';
import { AppState } from './reducers';
import { Store } from '@ngrx/store';
import { applicationStarted } from '../app/action/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Front End Web 200';


  constructor(store: Store<AppState>) {
    store.dispatch(applicationStarted());
  }
}
