import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor() { }

  ngOnInit() {
  }

  login() {
    // this.http.get('http://localhost:5000/api/values').subscribe(response => {
    //   this.values = response;
    // }, error => {
    //   console.log(error);
    // });
    console.log(this.model);
  }
}
