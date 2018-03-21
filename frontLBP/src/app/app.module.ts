import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { UserslistComponent } from './userslist/userslist.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserNewComponent } from './user-new/user-new.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { ConferenceBoardComponent } from './conference-board/conference-board.component';
import { ConferenceEditComponent } from './conference-edit/conference-edit.component';
import { ConferenceNewComponent } from './conference-new/conference-new.component';

import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { MyPrivatePageComponent } from './my-private-page/my-private-page.component';

import { ClassesComponent } from './classes/classes.component';
import { ClassEditComponent } from './class-edit/class-edit.component';
import { ClassNewComponent } from './class-new/class-new.component';
import { ClassesDetailComponent } from './classes-detail/classes-detail.component';

// services
import { UserService } from './services/user.service';
import { ClassService } from './services/class.service';
import { ConferenceService } from './services/conference.service';
import { SessionService } from './services/session.service';

// routes

const routes = [
  {path: '', component: DashboardComponent},
  {path: 'users', component: UserslistComponent},
  {path: 'users/new', component: UserNewComponent},
  {path: 'user/:id', component: UserDetailComponent},
  {path: 'user/:id/edit', component: UserEditComponent},

  {path: 'classes', component: ClassesComponent},
  {path: 'class/new', component: ClassNewComponent},
  {path: 'classes/:id', component: ClassesComponent},
  {path: 'conferences', component: ConferenceBoardComponent},
  {path: 'conferences/:id', component: ConferenceBoardComponent},
  {path: 'login' , component:AuthLoginComponent},
  {path: 'signup' , component:AuthSignupComponent},
  {path: 'private', component:MyPrivatePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserslistComponent,
    UserDetailComponent,
    DashboardComponent,
    ConferenceBoardComponent,
    ClassesComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    MyPrivatePageComponent,
    UserEditComponent,
    ConferenceEditComponent,
    ClassEditComponent,
    UserNewComponent,
    ClassNewComponent,
    ConferenceNewComponent,
    ClassesDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, ClassService, ConferenceService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
