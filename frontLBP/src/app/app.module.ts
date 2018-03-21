import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { UserslistComponent } from './userslist/userslist.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConferenceBoardComponent } from './conference-board/conference-board.component';
import { ClassesComponent } from './classes/classes.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { MyPrivatePageComponent } from './my-private-page/my-private-page.component';

// services
import { UserService } from './services/user.service';
import { ClassService } from './services/class.service';
import { ConferenceService } from './services/conference.service';
import { SessionService } from './services/session.service';

// routes

const routes = [
  {path: '', component: DashboardComponent},
  {path: 'users', component: UserslistComponent},
  {path: 'users/:id', component: UserDetailComponent},
  {path: 'classes', component: ClassesComponent},
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
    MyPrivatePageComponent
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
