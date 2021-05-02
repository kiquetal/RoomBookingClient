import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenuComponent} from "./menu/menu.component";
import { UsersComponent } from './admin/users/users.component';
import { RoomsComponent } from './admin/rooms/rooms.component';
import { CalendarComponent } from './admin/calendar/calendar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RoomDetailComponent} from "./admin/rooms/room-detail/room-detail.component";
import { UserDetailComponent } from './admin/users/user-detail/user-detail.component';
import { UserEditComponent } from './admin/users/user-edit/user-edit.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    RoomsComponent,
    CalendarComponent,
    PageNotFoundComponent,
    RoomDetailComponent,
    UserDetailComponent,
    UserEditComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
