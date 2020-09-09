import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GivingComponent } from './giving.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateComponent } from './components/create/create.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayUpcommingComponent } from './components/display-upcomming/display-upcomming.component';
import { DisplayPastComponent } from './components/display-past/display-past.component';
import { StoreModule } from '@ngrx/store';
import { reducers, featureName } from './reducers';
import { ItemListComponent } from './components/item-list/item-list.component';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from '../giving/effects/list.effects';
import { GivingAppEffects } from '../giving/effects/app.effects';




const routes: Routes = [
  {
    path: 'giving',
    component: GivingComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'upcomming', component: DisplayUpcommingComponent },
      { path: 'create', component: CreateComponent },
      { path: 'past', component: DisplayPastComponent }
    ]
  }
];

@NgModule({
  declarations: [GivingComponent, DashboardComponent, CreateComponent, DisplayUpcommingComponent, DisplayPastComponent, ItemListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers),
    ReactiveFormsModule,
    EffectsModule.forFeature([ListEffects, GivingAppEffects])
  ]
})
export class GivingModule { }
