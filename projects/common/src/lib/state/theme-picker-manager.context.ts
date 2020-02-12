import { Injectable, Injector } from '@angular/core';
import { StateManagerContext } from '@lcu/common';
import { ThemePickerModel } from '../models/theme-picker.model';

@Injectable({
    providedIn: 'root'
})
export class ThemePickerManagerContext extends StateManagerContext<ThemePickerModel> {

    protected State: ThemePickerModel;

    constructor(protected injector: Injector) {
        super(injector);
    }

    public GetThemePickerById(id: number): void {
        this.State.Loading = true;

        this.Execute({
            Arguments: {
                ThemePickerId: id
            },
            Type: 'get-theme-picker-by-id'
        });
    }
    
    protected async loadStateKey() {
        return 'main';
    }

    protected async loadStateName() {
        return 'theme-picker';
    }
}
