import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassService } from '../services/class.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  constructor(private classS: ClassService, private router: Router) { }

  ngOnInit() {
  }
  // submitForm(myForm) {
  //  this.classS.addItem(myForm.value)
  //  .subscribe(() => this.router.navigate(['classes']));
  // }
}
