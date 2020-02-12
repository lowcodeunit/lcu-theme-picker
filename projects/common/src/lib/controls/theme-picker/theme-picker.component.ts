import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThemePickerModel } from '../../models/theme-picker.model';

@Component({
  selector: 'lcu-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {

  @Input() public card: ThemePickerModel;

  @Output() public cardSelected: EventEmitter<any>;

  constructor() {
    this.cardSelected = new EventEmitter<any>();
  }

  public ngOnInit(): void { }

  public SelectCard(url?: string): void {
    this.cardSelected.emit();

    if (url) {
      window.open(url);
    }
  }

}
