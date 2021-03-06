import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './page/events-list/events-list.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { EventEditorComponent } from './page/event-editor/event-editor.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAnimationsModule } from 'ngx-animations';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    NavigationComponent,
    EventEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
