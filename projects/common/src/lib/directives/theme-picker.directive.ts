import { Directive, OnInit, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ThemeColorPickerService } from '@lcu/common';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Directive({
  selector: '[lcu-theme-picker-class]'
})
export class ThemePickerDirective implements OnInit {
  private currentTheme: string;
  private themeClass: BehaviorSubject<string>;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private themeService: ThemeColorPickerService
  ) {
    this.resetTheme();
    this.themeClass.subscribe(
      (value: string) => {
        console.log('The theme has changed to: ', value);
        this.updateThemeClass(value);
      }
    );
  }

  public ngOnInit(): void {
    console.log('ngOnInit(): ', this.themeClass.value);
    this.currentTheme = this.themeClass.value;
  }

  private resetTheme(): void {
    console.log('resetTheme() ');
    this.themeClass = this.themeService.GetColorClass();
  }

  private updateThemeClass(theme: string): void {
    console.log('updateThemeClass(): ', theme);
    if (this.currentTheme) {
      console.log('updateThemeClass() removing currentTheme: ', this.currentTheme);
      this.renderer.removeClass(this.elRef.nativeElement, this.currentTheme);
    } else if (theme !== this.currentTheme) {
      console.log('updateThemeClass() removing different theme: ', this.currentTheme);
      this.renderer.removeClass(this.elRef.nativeElement, this.currentTheme);
    }

    if (theme) {
      console.log('updateThemeClass() adding theme: ', theme);
      console.log('updateThemeClass() adding to: ', this.elRef.nativeElement);
      this.renderer.addClass(this.elRef.nativeElement, theme);
      this.currentTheme = theme;
    }
  }

}
