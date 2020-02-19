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
        this.updateThemeClass(value);
      }
    );
  }

  public ngOnInit(): void {
    this.currentTheme = this.themeClass.value;
  }

  private resetTheme(): void {
    this.themeClass = this.themeService.GetColorClass();
  }

  private updateThemeClass(theme: string): void {
    if (this.currentTheme) {
      this.renderer.removeClass(this.elRef.nativeElement, this.currentTheme);
    } else if (theme !== this.currentTheme) {
      this.renderer.removeClass(this.elRef.nativeElement, this.currentTheme);
    }

    if (theme) {
      this.renderer.addClass(this.elRef.nativeElement, theme);
      this.currentTheme = theme;
    }
  }

}
