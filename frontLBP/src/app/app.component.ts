import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user: any;
  constructor(private sessionS: SessionService) { }

  ngOnInit() {
    this.sessionS.loggedIn()
      .subscribe(userLogged => this.user = userLogged);
  }
  logout() {
    this.sessionS.logout()
      .subscribe(() => console.log('Adios'));
  }
}
