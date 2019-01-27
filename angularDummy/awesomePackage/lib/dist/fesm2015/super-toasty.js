import { CommonModule } from '@angular/common';
import { Component, Injectable, Inject, NgModule, defineInjectable, inject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ToastMessageComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ToastMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-toast-message',
                template: "<p>\n  toast-message works!\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ToastMessageComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ToastService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
}
ToastService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ToastService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
];
/** @nocollapse */ ToastService.ngInjectableDef = defineInjectable({ factory: function ToastService_Factory() { return new ToastService(inject("config")); }, token: ToastService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ToastModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: ToastModule,
            providers: [
                ToastService,
                { provide: 'config', useValue: config }
            ]
        };
    }
}
ToastModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [ToastMessageComponent],
                exports: [ToastMessageComponent]
            },] }
];

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