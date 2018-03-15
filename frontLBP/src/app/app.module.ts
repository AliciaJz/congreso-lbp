import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { UserslistComponent } from './userslist/userslist.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConferenceBoardComponent } from './conference-board/conference-board.component';

// services
import { UserService } from './services/user.service';
import { ClassService } from './services/class.service';
import { ConferenceService } from './services/conference.service';

@NgModule({
  declarations: [
    AppComponent,
    UserslistComponent,
    UserDetailComponent,
    DashboardComponent,
    ConferenceBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, ClassService, ConferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
