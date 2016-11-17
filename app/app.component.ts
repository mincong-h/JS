import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>

    <h2>Leader - {{ leader.name }}!</h2>
    <div>
      <label>id: </label>{{ leader.id }}
    </div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="leader.name" placeholder="name">
    </div>

    <h2>Members</h2>
    <ul class="members">
      <!-- The (*) prefix to ngFor indicates that the <li> element and its
           children constitute a master template. And the square brackets []
           is the syntax for a property binding, an expression to a property -->
      <li *ngFor="let member of members"
          (click)="onSelect(member)"
          [class.selected]="member === selectedMember">
        <span class="badge">{{ member.id }}</span> {{ member.name }}
      </li>
    </ul>

    <div *ngIf="selectedMember">
      <h2>Detail of N°{{ selectedMember.id }} {{ selectedMember.name }}</h2>
      <div>
        <label>id: </label>{{ selectedMember.id }}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedMember.name" placeholder="name">
      </div>
    </div><!-- End of selectedMember -->
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .members {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .members li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .members li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .members li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .members .text {
      position: relative;
      top: -3px;
    }
    .members .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'Tour of Heroes';
  members = HEROES;
  selectedMember: Hero; // undefined by default
  leader: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  onSelect(member: Hero): void {
    this.selectedMember = member;
  }
}
