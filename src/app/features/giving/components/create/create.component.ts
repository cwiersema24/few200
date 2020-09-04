import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { GivingListState } from '../../reducers/list.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../../actions/list.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private store: Store<GivingListState>) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      holiday: ['', [Validators.required]],
      date: ['', [Validators.required]],
      needsCard: [false],
      needsGift: [false]
    });

  }
  get name(): AbstractControl { return this.form.get('name'); }
  get holiday(): AbstractControl { return this.form.get('holiday'); }
  get date(): AbstractControl { return this.form.get('date'); }
  get needsCard(): AbstractControl { return this.form.get('needsCard'); }
  get needsGift(): AbstractControl { return this.form.get('needsGift'); }
  submit(): void {
    this.store.dispatch(actions.addedGivingItem(this.form.value));
    this.form.reset();
  }
}
