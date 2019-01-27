import { CommonModule } from '@angular/common';
import { Component, Injectable, Inject, NgModule, defineInjectable, inject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ToastMessageComponent = /** @class */ (function () {
    function ToastMessageComponent() {
    }
    /**
     * @return {?}
     */
    ToastMessageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ToastMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-toast-message',
                    template: "<p>\n  toast-message works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ToastMessageComponent.ctorParameters = function () { return []; };
    return ToastMessageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ToastService = /** @class */ (function () {
    function ToastService(config) {
        this.config = config;
    }
    ToastService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ToastService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
    ]; };
    /** @nocollapse */ ToastService.ngInjectableDef = defineInjectable({ factory: function ToastService_Factory() { return new ToastService(inject("config")); }, token: ToastService, providedIn: "root" });
    return ToastService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ToastModule = /** @class */ (function () {
    function ToastModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    ToastModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: ToastModule,
            providers: [
                ToastService,
                { provide: 'config', useValue: config }
            ]
        };
    };
    ToastModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [ToastMessageComponent],
                    exports: [ToastMessageComponent]
                },] }
    ];
    return ToastModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ToastMessageComponent, ToastModule, ToastService };

//# sourceMappingURL=super-toasty.js.map