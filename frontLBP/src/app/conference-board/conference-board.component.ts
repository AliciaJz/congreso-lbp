import { Component, OnInit } from '@angular/core';
import {ConferenceService} from '../services/conference.service';

@Component({
  selector: 'app-conference-board',
  templateUrl: './conference-board.component.html',
  styleUrls: ['./conference-board.component.css']
})
export class ConferenceBoardComponent implements OnInit {

  constructor(private conferenceService: ConferenceService) { }

  ngOnInit() {
  }

  submitForm(form) {
    console.log(form.value);
    this.conferenceService.addItem(form.value)
    .subscribe(res => {
      console.log(res);
    });
  }


}
