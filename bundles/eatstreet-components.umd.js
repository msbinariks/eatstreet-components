(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('eatstreet-components', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['eatstreet-components'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/eatstreet-components.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EatstreetComponentsService = /** @class */ (function () {
        function EatstreetComponentsService() {
        }
        EatstreetComponentsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EatstreetComponentsService.ctorParameters = function () { return []; };
        /** @nocollapse */ EatstreetComponentsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function EatstreetComponentsService_Factory() { return new EatstreetComponentsService(); }, token: EatstreetComponentsService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
         * @param {?} $injector
         * @return {?}
         */
        EatstreetComponentsModule.forRoot = /**
         * @param {?} $injector
         * @return {?}
         */
        function ($injector) {
            return {
                ngModule: EatstreetComponentsModule,
                providers: [
                    {
                        provide: '$injector', useValue: $injector
                    }
                ]
            };
        };
        EatstreetComponentsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [EatstreetComponentsComponent],
                        imports: [],
                        exports: [EatstreetComponentsComponent],
                        entryComponents: [EatstreetComponentsComponent]
                    },] }
        ];
        /** @nocollapse */
        EatstreetComponentsModule.ctorParameters = function () { return [
            { type: EatstreetComponentsModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        return EatstreetComponentsModule;
    }());

    exports.EatstreetComponentsComponent = EatstreetComponentsComponent;
    exports.EatstreetComponentsModule = EatstreetComponentsModule;
    exports.EatstreetComponentsService = EatstreetComponentsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=eatstreet-components.umd.js.map
