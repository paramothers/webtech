"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var feature_component_1 = require("~/app/feature-module/feature.component");
var feature_routing_module_1 = require("~/app/feature-module/feature-routing.module");
var feat_component_1 = require("~/app/feature-module/feat.component");
var FeatureModuleModule = /** @class */ (function () {
    function FeatureModuleModule() {
    }
    FeatureModuleModule = __decorate([
        core_1.NgModule({
            declarations: [feature_component_1.FeatureComponent, feat_component_1.FeatComponent],
            imports: [
                common_1.NativeScriptCommonModule,
                feature_routing_module_1.FeatureRoutingModule
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], FeatureModuleModule);
    return FeatureModuleModule;
}());
exports.FeatureModuleModule = FeatureModuleModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tb2R1bGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVhdHVyZS1tb2R1bGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSw0RUFBd0U7QUFDeEUsc0ZBQWlGO0FBQ2pGLHNFQUFrRTtBQVVsRTtJQUFBO0lBQW1DLENBQUM7SUFBdkIsbUJBQW1CO1FBUi9CLGVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLG9DQUFnQixFQUFDLDhCQUFhLENBQUM7WUFDOUMsT0FBTyxFQUFFO2dCQUNQLGlDQUF3QjtnQkFDeEIsNkNBQW9CO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDNUIsQ0FBQztPQUNXLG1CQUFtQixDQUFJO0lBQUQsMEJBQUM7Q0FBQSxBQUFwQyxJQUFvQztBQUF2QixrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7RmVhdHVyZUNvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2ZlYXR1cmUtbW9kdWxlL2ZlYXR1cmUuY29tcG9uZW50XCI7XG5pbXBvcnQge0ZlYXR1cmVSb3V0aW5nTW9kdWxlfSBmcm9tIFwifi9hcHAvZmVhdHVyZS1tb2R1bGUvZmVhdHVyZS1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHtGZWF0Q29tcG9uZW50fSBmcm9tIFwifi9hcHAvZmVhdHVyZS1tb2R1bGUvZmVhdC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRmVhdHVyZUNvbXBvbmVudCxGZWF0Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICBGZWF0dXJlUm91dGluZ01vZHVsZVxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZU1vZHVsZU1vZHVsZSB7IH1cbiJdfQ==