import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  users: Array<any>;
  constructor( private userService: UserService) { }

  ngOnInit() {
    this.userService.fetchItems()
       .subscribe(users => this.users = users);
  }
}
