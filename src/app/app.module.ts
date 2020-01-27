import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayServiceComponent } from './display-service/display-service.component';
import { SetupServiceComponent } from './setup-service/setup-service.component';
import { MessageService } from './services/shared-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayServiceComponent,
    SetupServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
