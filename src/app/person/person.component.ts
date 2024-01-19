import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  constructor(){
    console.log('Person Module Loaded');
  }

  ngOnInit(){
    console.log(localStorage.getItem('localData'));
    console.log(sessionStorage.getItem('sessionData'));
  }
}
