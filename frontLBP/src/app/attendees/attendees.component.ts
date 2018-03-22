import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.css']
})
export class AttendeesComponent implements OnInit {

  users: Array<any>;
  constructor( private userService: UserService) { }

  ngOnInit() {
    this.userService.fetchItems()
       .subscribe(users => this.users = users);
  }
}
