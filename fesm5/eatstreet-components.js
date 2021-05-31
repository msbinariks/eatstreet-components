import { Injectable, ɵɵdefineInjectable, Component, NgModule, Optional, SkipSelf } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/eatstreet-components.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EatstreetComponentsService = /** @class */ (function () {
    function EatstreetComponentsService() {
    }
    EatstreetComponentsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EatstreetComponentsService.ctorParameters = function () { return []; };
    /** @nocollapse */ EatstreetComponentsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function EatstreetComponentsService_Factory() { return new EatstreetComponentsService(); }, token: EatstreetComponentsService, providedIn: "root" });
    return EatstreetComponentsService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/eatstreet-components.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EatstreetComponentsComponent = /** @class */ (function () {
    function EatstreetComponentsComponent() {
    }
    /**
     * @return {?}
     */
    EatstreetComponentsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    EatstreetComponentsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-eatstreet-components',
                    template: "\n    <p>\n      eatstreet-components works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    EatstreetComponentsComponent.ctorParameters = function () { return []; };
    return EatstreetComponentsComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/eatstreet-components.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EatstreetComponentsModule = /** @class */ (function () {
    function EatstreetComponentsModule(parentModule) {
        if (parentModule) {
            throw new Error('EatstreetComponentsModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @return {?}
     */
    EatstreetComponentsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: EatstreetComponentsModule,
        };
    };
    EatstreetComponentsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [EatstreetComponentsComponent],
                    imports: [],
                    exports: [EatstreetComponentsComponent],
                    entryComponents: [EatstreetComponentsComponent]
                },] }
    ];
    /** @nocollapse */
    EatstreetComponentsModule.ctorParameters = function () { return [
        { type: EatstreetComponentsModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return EatstreetComponentsModule;
}());

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
