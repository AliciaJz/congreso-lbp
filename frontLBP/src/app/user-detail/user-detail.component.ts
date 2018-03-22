import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: Array<any>;
  userId;
  constructor(private userService: UserService, private actRouter: ActivatedRoute) { }

  ngOnInit() {
    this.actRouter.params
      .subscribe(params => {
        console.log(params['id'])
        this.userId = params['id']
        console.log(this.userId);
        this.userService.fetchItem(this.userId)
        .subscribe(res => this.user = res);
      });
  }

}
