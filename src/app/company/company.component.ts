import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  constructor(){
    console.log('Company Module Loaded');
    
  }
  ngOnInit(){
    localStorage.setItem('localData','local:Ikram sabir')
    sessionStorage.setItem('sessionData','session:Kami')

    // console.log(localStorage.getItem('localData'));
    // console.log(sessionStorage.getItem('sessionData'));
  }
}
