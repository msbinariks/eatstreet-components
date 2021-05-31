import { Injectable, ɵɵdefineInjectable, Component, NgModule, Optional, SkipSelf } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/eatstreet-components.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EatstreetComponentsService {
    constructor() { }
}
EatstreetComponentsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EatstreetComponentsService.ctorParameters = () => [];
/** @nocollapse */ EatstreetComponentsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function EatstreetComponentsService_Factory() { return new EatstreetComponentsService(); }, token: EatstreetComponentsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/eatstreet-components.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EatstreetComponentsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
EatstreetComponentsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-eatstreet-components',
                template: `
    <p>
      eatstreet-components works!
    </p>
  `
            }] }
];
/** @nocollapse */
EatstreetComponentsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/eatstreet-components.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EatstreetComponentsModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: eatstreet-components.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { EatstreetComponentsComponent, EatstreetComponentsModule, EatstreetComponentsService };
//# sourceMappingURL=eatstreet-components.js.map
