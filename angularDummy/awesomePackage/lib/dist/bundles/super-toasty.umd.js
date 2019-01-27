(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('super-toasty', ['exports', '@angular/common', '@angular/core'], factory) :
    (factory((global['super-toasty'] = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,i0) { 'use strict';

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
            { type: i0.Component, args: [{
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ToastService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: ['config',] }] }
            ];
        };
        /** @nocollapse */ ToastService.ngInjectableDef = i0.defineInjectable({ factory: function ToastService_Factory() { return new ToastService(i0.inject("config")); }, token: ToastService, providedIn: "root" });
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.ToastMessageComponent = ToastMessageComponent;
    exports.ToastModule = ToastModule;
    exports.ToastService = ToastService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=super-toasty.umd.js.map