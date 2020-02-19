import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lcu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public Title = 'Welcome to the LCU-Theme-Picker';

  constructor() { }

  public ngOnInit(): void { }
  
}
