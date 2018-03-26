import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { InMemDbService } from './in-mem-db.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(InMemDbService)],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {}
