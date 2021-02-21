import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/model/event';
import { NgForm } from '@angular/forms';

import {
  trigger, state, style, animate, transition, useAnimation, AnimationEvent,
} from '@angular/animations';

import {
  bounceIn, bounceOut, bounceInUp, bounceInDown, fadeIn, fadeInUp,
  slideInDown, slideInUp, flipInX, shake,
} from 'ngx-animate';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss'],
  animations: [
    trigger('bounce', [
      transition(':enter', useAnimation(bounceIn)),
      transition('void => *', useAnimation(bounceOut)),
    ])
  ]
})
export class EventEditorComponent implements OnInit {

  // 1. Kiolvasni az id paramétert az url-ből.
  // 2. Ezzel a paraméterrel meghívni az EventService.get metódust.
  event$: Observable<Event> = this.activatedRoute.params.pipe(
    switchMap( params => {
      const id = params.id;
      if (id && id != 0) {
        return this.eventService.get(id)
      } else {
        return of(new Event());
      }

     } )
  );


  bounce: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private router: Router,
  ) { }

  ngOnInit(): void {}

  onUpdate(form: NgForm, event: Event): void {

    if (event.id) {
      this.eventService.update(event);
    } else {
      this.eventService.create(event);
    }
    this.router.navigate(['/']);

  }

}
