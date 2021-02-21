import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Event } from '../model/event';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private list: Event[] = [];


  serverUrl: string = "http://localhost:3000/";

  list$: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>([]);

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): void {
    let url = `${this.serverUrl}event`;
    this.http.get<Event[]>(url).subscribe((events: Event[]) => {
      this.list$.next(events);
    })
  }

  get(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.serverUrl}event/${id}`);
  }

  /*getAll(): void {
    this.list$.next(this.list);
  }

  get(id: number): Observable<Event> {
    id = typeof id === 'string' ? parseInt(id, 10) : id;
    const ev: Event | undefined = this.list.find( item => item.id === id );
    if (ev) {
      return of(ev);
    }

    return of(new Event());
  }



*/
  create(event: Event): void {
    let url = `${this.serverUrl}event`;
    this.http.post(url, event).forEach(response => console.log(response));
    this.getAll();
  }

  update(event: Event): void {
    let url = `${this.serverUrl}event/`;
    this.http.patch(url, event).forEach(response => console.log(response));
    this.getAll();
  }

  remove(event: any): void {
    let url = `${this.serverUrl}event/${event.id}`;
    this.http.delete(url).forEach(response => console.log(response));
    this.getAll();
  }


}
