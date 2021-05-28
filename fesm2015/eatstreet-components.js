import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Optional, SkipSelf } from '@angular/core';

class EatstreetComponentsService {
    constructor() { }
}
EatstreetComponentsService.ɵfac = function EatstreetComponentsService_Factory(t) { return new (t || EatstreetComponentsService)(); };
EatstreetComponentsService.ɵprov = i0.ɵɵdefineInjectable({ token: EatstreetComponentsService, factory: EatstreetComponentsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EatstreetComponentsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class EatstreetComponentsComponent {
    constructor() { }
    ngOnInit() {
    }
}
EatstreetComponentsComponent.ɵfac = function EatstreetComponentsComponent_Factory(t) { return new (t || EatstreetComponentsComponent)(); };
EatstreetComponentsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EatstreetComponentsComponent, selectors: [["lib-eatstreet-components"]], decls: 2, vars: 0, template: function EatstreetComponentsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, " eatstreet-components works! ");
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EatstreetComponentsComponent, [{
        type: Component,
        args: [{
                selector: 'lib-eatstreet-components',
                template: `
    <p>
      eatstreet-components works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class EatstreetComponentsModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('EatstreetComponentsModule is already loaded. Import it in the AppModule only');
        }
    }
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
EatstreetComponentsModule.ɵmod = i0.ɵɵdefineNgModule({ type: EatstreetComponentsModule });
EatstreetComponentsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EatstreetComponentsModule_Factory(t) { return new (t || EatstreetComponentsModule)(i0.ɵɵinject(EatstreetComponentsModule, 12)); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EatstreetComponentsModule, { declarations: [EatstreetComponentsComponent], exports: [EatstreetComponentsComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EatstreetComponentsModule, [{
        type: NgModule,
        args: [{
                declarations: [EatstreetComponentsComponent],
                imports: [],
                exports: [EatstreetComponentsComponent],
                entryComponents: [EatstreetComponentsComponent]
            }]
    }], function () { return [{ type: EatstreetComponentsModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();

/*
 * Public API Surface of eatstreet-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { EatstreetComponentsComponent, EatstreetComponentsModule, EatstreetComponentsService };
//# sourceMappingURL=eatstreet-components.js.map
