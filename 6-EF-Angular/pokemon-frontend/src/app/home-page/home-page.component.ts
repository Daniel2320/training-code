import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { 
    console.log("Home Page Constructed");
  }

  ngOnInit(): void {
    console.log("Home Page initialized");
  }

}
