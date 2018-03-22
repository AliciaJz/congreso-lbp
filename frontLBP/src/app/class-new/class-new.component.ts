import { Component, OnInit } from '@angular/core';
import { ClassService } from '../services/class.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class-new',
  templateUrl: './class-new.component.html',
  styleUrls: ['./class-new.component.css']
})
export class ClassNewComponent implements OnInit {
idConference;
  constructor(private classS: ClassService,private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activateRoute.params
      .subscribe(params => {
        console.log(params['idConference'])
        this.idConference = params['idConference']
      });
  }

  submitForm(form) {
    this.classS.addItem(form.value, this.idConference)
    .subscribe(() => {
      this.router.navigate(['conference', this.idConference])
    });
  }
}
