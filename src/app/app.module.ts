import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventsListResolverService,
  CreateSessionComponent,
  SessionListComponent,
  EventsListComponent, DurationPipe, UpvoteComponent, VoterService, LocationValidator, EventResolverService
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import {NavbarComponent} from "./nav/navbar.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {Error404Component} from "./errors/404.component";
import {AuthService} from "./user/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  CollapsibleWellComponent,
  JQ_TOKEN,
  ModalTrigerDirective,
  SimpleModalComponent,
  Toastr,
  TOASTR_TOKEN
} from "./common";
import {HttpClientModule} from "@angular/common/http";

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NavbarComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTrigerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },
    EventsListResolverService,
    EventResolverService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    AuthService,
    VoterService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty){
    return window.confirm('You have not saved this event, do you really want to cancel');
  }
  return true;
}
