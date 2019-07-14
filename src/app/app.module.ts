import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AvailableNotesComponent } from './available-notes/available-notes.component';
import { EnterPinComponent } from './enter-pin/enter-pin.component';
import { SelectServicesComponent } from './select-services/select-services.component';
import { StatusComponent } from './status/status.component';
import { LocatorDetailService } from './services/locator-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    AvailableNotesComponent,
    EnterPinComponent,
    SelectServicesComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LocatorDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
