(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('eatstreet-components', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['eatstreet-components'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var EatstreetComponentsService = /** @class */ (function () {
        function EatstreetComponentsService() {
        }
        return EatstreetComponentsService;
    }());
    EatstreetComponentsService.ɵfac = function EatstreetComponentsService_Factory(t) { return new (t || EatstreetComponentsService)(); };
    EatstreetComponentsService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: EatstreetComponentsService, factory: EatstreetComponentsService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(EatstreetComponentsService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var EatstreetComponentsComponent = /** @class */ (function () {
        function EatstreetComponentsComponent() {
        }
        EatstreetComponentsComponent.prototype.ngOnInit = function () {
        };
        return EatstreetComponentsComponent;
    }());
    EatstreetComponentsComponent.ɵfac = function EatstreetComponentsComponent_Factory(t) { return new (t || EatstreetComponentsComponent)(); };
    EatstreetComponentsComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: EatstreetComponentsComponent, selectors: [["lib-eatstreet-components"]], decls: 2, vars: 0, template: function EatstreetComponentsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "p");
                i0__namespace.ɵɵtext(1, " eatstreet-components works! ");
                i0__namespace.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(EatstreetComponentsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-eatstreet-components',
                        template: "\n    <p>\n      eatstreet-components works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var EatstreetComponentsModule = /** @class */ (function () {
        function EatstreetComponentsModule(parentModule) {
            if (parentModule) {
                throw new Error('EatstreetComponentsModule is already loaded. Import it in the AppModule only');
            }
        }
        EatstreetComponentsModule.forRoot = function ($injector) {
            return {
                ngModule: EatstreetComponentsModule,
                providers: [
                    {
                        provide: '$injector', useValue: $injector
                    }
                ]
            };
        };
        return EatstreetComponentsModule;
    }());
    EatstreetComponentsModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: EatstreetComponentsModule });
    EatstreetComponentsModule.ɵinj = i0__namespace.ɵɵdefineInjector({ factory: function EatstreetComponentsModule_Factory(t) { return new (t || EatstreetComponentsModule)(i0__namespace.ɵɵinject(EatstreetComponentsModule, 12)); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(EatstreetComponentsModule, { declarations: [EatstreetComponentsComponent], exports: [EatstreetComponentsComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(EatstreetComponentsModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [EatstreetComponentsComponent],
                        imports: [],
                        exports: [EatstreetComponentsComponent],
                        entryComponents: [EatstreetComponentsComponent]
                    }]
            }], function () {
            return [{ type: EatstreetComponentsModule, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.SkipSelf
                        }] }];
        }, null);
    })();

    /*
     * Public API Surface of eatstreet-components
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.EatstreetComponentsComponent = EatstreetComponentsComponent;
    exports.EatstreetComponentsModule = EatstreetComponentsModule;
    exports.EatstreetComponentsService = EatstreetComponentsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=eatstreet-components.umd.js.map
