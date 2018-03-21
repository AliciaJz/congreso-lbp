import { Component, OnInit } from '@angular/core';
import { ConferenceService } from '../services/conference.service';

@Component({
  selector: 'app-conference-board',
  templateUrl: './conference-board.component.html',
  styleUrls: ['./conference-board.component.css']
})
export class ConferenceBoardComponent implements OnInit {

  conferences: Array<any>;
  constructor(private conferenceService: ConferenceService) { }

  ngOnInit() {
    this.conferenceService.fetchItems()
       .subscribe(conferences => this.conferences = conferences);
  }
}
