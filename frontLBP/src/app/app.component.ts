import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user: any;
  constructor(private sessionS: SessionService, private router: Router) { }

  ngOnInit() {
    this.sessionS.loggedIn()
      .subscribe(userLogged => this.user = userLogged);
  }
  logout() {
    localStorage.removeItem('user');
    this.user = null;
    this.router.navigate(['']);
    this.sessionS.logout()
      .subscribe(() => console.log('Adios'));
  }
}
