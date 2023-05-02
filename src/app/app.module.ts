import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditCardModalComponent } from './dashboard/edit-card-modal/edit-card-modal.component';
import { YesCancelModalComponent } from './common/yes-cancel-modal/yes-cancel-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceProxyModule } from '../nswag/service-proxy.module';
import { PublicationsService } from './dashboard/publications.service';
import { API_BASE_URL } from 'src/nswag/service-proxies';

export function getRemoteServiceBaseUrl(): string {
  return "http://localhost:5055";
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToolbarComponent,
    EditCardModalComponent,
    YesCancelModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServiceProxyModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    PublicationsService,
    { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
