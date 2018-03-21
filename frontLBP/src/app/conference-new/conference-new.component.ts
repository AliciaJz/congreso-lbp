import { Component, OnInit } from '@angular/core';
import {ConferenceService} from '../services/conference.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-conference-new',
  templateUrl: './conference-new.component.html',
  styleUrls: ['./conference-new.component.css']
})
export class ConferenceNewComponent implements OnInit {

  constructor(private conferenceService: ConferenceService, private route: Router) { }

  ngOnInit() {}

  submitForm(form) {
    console.log(form.value);
    this.conferenceService.addItem(form.value)
      .subscribe(res => {
        this.route.navigate(['conferences']);
    });
    }

}
