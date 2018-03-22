import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: Array<any>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.fetchItem()
    //    .subscribe(user => this.user = user);
  }

}
