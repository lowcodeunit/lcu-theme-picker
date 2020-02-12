import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { ThemePickerService } from './services/theme-picker.service';
import { ThemePickerComponent } from './controls/theme-picker/theme-picker.component';
import { ThemePickerDirective } from './directives/theme-picker.directive';
@NgModule({
  declarations: [ThemePickerComponent, ThemePickerDirective],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [ThemePickerComponent, ThemePickerDirective],
  entryComponents: []
})
export class LcuThemePickerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LcuThemePickerModule,
      providers: [ThemePickerService]
    };
  }
}
