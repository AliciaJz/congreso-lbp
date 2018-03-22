import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-classes-detail',
  templateUrl: './classes-detail.component.html',
  styleUrls: ['./classes-detail.component.css']
})
export class ClassesDetailComponent implements OnInit {

  constructor(private userService: UserService) { }
  users;
  ngOnInit() {
    this.userService.fetchItems()
    .subscribe(res=>{
      this.users = res;
    })
  }

}
