import { Component, OnInit } from '@angular/core';
import { eventInt, eventList } from 'src/assets/data/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }
  events: eventInt[] = []
  ngOnInit(): void {
    this.events = eventList;
  }

}
