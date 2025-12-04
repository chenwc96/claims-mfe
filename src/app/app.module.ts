import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Import ClaimModule to ensure it's included in compilation
import { ClaimModule } from './claim/claim.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ClaimModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
