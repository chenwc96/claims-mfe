import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ClaimRoutingModule } from './claim-routing.module';
import { ClaimListComponent } from './pages/claim-list/claim-list.component';
import { ClaimDetailComponent } from './pages/claim-detail/claim-detail.component';
import { ClaimFormComponent } from './components/claim-form/claim-form.component';

@NgModule({
  declarations: [
    ClaimListComponent,
    ClaimDetailComponent,
    ClaimFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaimRoutingModule
  ]
})
export class ClaimModule { }