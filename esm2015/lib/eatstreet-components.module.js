/**
 * @fileoverview added by tsickle
 * Generated from: lib/eatstreet-components.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EatstreetComponentsComponent } from './eatstreet-components.component';
export class EatstreetComponentsModule {
    /**
     * @param {?=} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('EatstreetComponentsModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?} $injector
     * @return {?}
     */
    static forRoot($injector) {
        return {
            ngModule: EatstreetComponentsModule,
            providers: [
                {
                    provide: '$injector', useValue: $injector
                }
            ]
        };
    }
}
EatstreetComponentsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EatstreetComponentsComponent],
                imports: [],
                exports: [EatstreetComponentsComponent],
                entryComponents: [EatstreetComponentsComponent]
            },] }
];
/** @nocollapse */
EatstreetComponentsModule.ctorParameters = () => [
    { type: EatstreetComponentsModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWF0c3RyZWV0LWNvbXBvbmVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWF0c3RyZWV0LWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZWF0c3RyZWV0LWNvbXBvbmVudHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQVdoRixNQUFNLE9BQU8seUJBQXlCOzs7O0lBRXBDLFlBQW9DLFlBQXdDO1FBQzFFLElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQ2IsOEVBQThFLENBQUMsQ0FBQztTQUNuRjtJQUNILENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTO1FBQ3RCLE9BQU87WUFDTCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxTQUFTO2lCQUMxQzthQUNGO1NBQ0YsQ0FBQTtJQUNILENBQUM7OztZQXpCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsNEJBQTRCLENBQUM7Z0JBQzVDLE9BQU8sRUFBRSxFQUNSO2dCQUNELE9BQU8sRUFBRSxDQUFDLDRCQUE0QixDQUFDO2dCQUN2QyxlQUFlLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzthQUNoRDs7OztZQUdvRCx5QkFBeUIsdUJBQS9ELFFBQVEsWUFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWF0c3RyZWV0Q29tcG9uZW50c0NvbXBvbmVudCB9IGZyb20gJy4vZWF0c3RyZWV0LWNvbXBvbmVudHMuY29tcG9uZW50JztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0VhdHN0cmVldENvbXBvbmVudHNDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGV4cG9ydHM6IFtFYXRzdHJlZXRDb21wb25lbnRzQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbRWF0c3RyZWV0Q29tcG9uZW50c0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRWF0c3RyZWV0Q29tcG9uZW50c01vZHVsZSB7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogRWF0c3RyZWV0Q29tcG9uZW50c01vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0VhdHN0cmVldENvbXBvbmVudHNNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdCgkaW5qZWN0b3IpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEVhdHN0cmVldENvbXBvbmVudHNNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEVhdHN0cmVldENvbXBvbmVudHNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6ICckaW5qZWN0b3InLCB1c2VWYWx1ZTogJGluamVjdG9yXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbn1cbiJdfQ==