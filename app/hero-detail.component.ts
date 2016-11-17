import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>Detail of N°{{ hero.id }} {{ hero.name }}</h2>
      <div>
        <label>id: </label>{{ hero.id }}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  // Declare 'hero' as an input property, so that it can be injected by other
  // components of the module. @Input() decorator is an attribute directive.
  @Input()
  hero: Hero;
}
