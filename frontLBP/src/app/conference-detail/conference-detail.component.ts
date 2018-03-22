import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConferenceService } from '../services/conference.service';
import { ClassService } from '../services/class.service';

@Component({
  selector: 'app-conference-detail',
  templateUrl: './conference-detail.component.html',
  styleUrls: ['./conference-detail.component.css']
})
export class ConferenceDetailComponent implements OnInit {

  classes;
  idConference;
constructor(private classS: ClassService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activateRoute.params
      .subscribe(params => {
        console.log(params['id'])
        this.idConference = params['id']
      });
    this.classS.fetchItems()
    .subscribe(res => this.classes = res);
  }
  
  submitForm(myForm) {
   this.classS.addItem(myForm.value, this.idConference)
   .subscribe(() => this.router.navigate(['classes']));
  }
}