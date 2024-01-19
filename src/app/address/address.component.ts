import { Component } from '@angular/core';

@Component({
    template:`
    <ul>
        <li>
        <a [routerLink] ="['addresslist']" routerLinkActive ="active">Address List </a>
        </li>
    </ul>
    <router-outlet></router-outlet> `
  })
  export class AddressComponent {

  }