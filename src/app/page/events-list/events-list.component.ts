import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  eventList: BehaviorSubject<Event[]> = this.eventService.list$;
  testEvent: Observable<Event> = this.eventService.get(1);

  @Output() create: EventEmitter<any> = new EventEmitter();

  event: Event = new Event();
  newData: any = {};

  constructor(
    private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.eventService.getAll();
  }

  onCreate(data: any): void {
    this.eventService.create(data);
  }

  onDelete(ev: Event): void {
    this.eventService.remove(ev);

  }

}
