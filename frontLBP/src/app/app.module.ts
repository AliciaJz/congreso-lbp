import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModel } from '@angular/http';


import { AppComponent } from './app.component';
import { UserslistComponent } from './userslist/userslist.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

// services
import { UserService } from './services/user.service';

const routes = [

]

@NgModule({
  declarations: [
    AppComponent,
    UserslistComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModel,
    RouterModule.forRoot(routes)
  ],
  providers: [UserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
