import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lcu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public Title = 'Welcome to the LCU-Starter-App';

  constructor() { }

  public ngOnInit(): void {}


  public DisplayDetails(): void {
    console.log('DisplayDetails()');
  }
}
