import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-claim-form',
  templateUrl: './claim-form.component.html',
  styleUrls: ['./claim-form.component.scss']
})
export class ClaimFormComponent {
  @Input() claim: any = null;
  @Output() claimSubmitted = new EventEmitter<any>();

  formData = {
    title: '',
    amount: 0,
    provider: '',
    description: '',
    date: new Date().toISOString()
  };

  constructor() { }

  onSubmit() {
    this.claimSubmitted.emit(this.formData);
  }
}