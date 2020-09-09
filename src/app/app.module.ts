import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodoListComponent } from './components/todos/todo-list/todo-list.component';
import { TodoEntryComponent } from './components/todos/todo-entry/todo-entry.component';

import { NavComponent } from './components/nav/nav.component';
import { CommunicationsComponent } from './containers/communications/communications.component';
import { LhsComponent } from './containers/communications/lhs/lhs.component';
import { RhsComponent } from './containers/communications/rhs/rhs.component';
import { CommunicationsService } from './services/communications.service';
import { CounterComponent } from './containers/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { TodoComponent } from './containers/todo/todo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CounterEffects } from './effects/counter.effects';
import { EffectsModule } from '@ngrx/effects';
import { MediaModule } from './features/media/media.module';
import { GivingModule } from './features/giving/giving.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoEntryComponent,
    DashboardComponent,
    NavComponent,
    CommunicationsComponent,
    LhsComponent,
    RhsComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    GivingModule,
    MediaModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [CommunicationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
