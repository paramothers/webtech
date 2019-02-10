"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var feature_component_1 = require("~/app/feature-module/feature.component");
var feat_component_1 = require("~/app/feature-module/feat.component");
var routes = [
    { path: "", component: feature_component_1.FeatureComponent, outlet: "feat" },
    { path: "itemsTemp", component: feat_component_1.FeatComponent, outlet: "feat" },
];
var FeatureRoutingModule = /** @class */ (function () {
    function FeatureRoutingModule() {
    }
    FeatureRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], FeatureRoutingModule);
    return FeatureRoutingModule;
}());
exports.FeatureRoutingModule = FeatureRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZlYXR1cmUtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsc0RBQXVFO0FBRXZFLDRFQUF3RTtBQUN4RSxzRUFBa0U7QUFHbEUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRyxNQUFNLEVBQUMsTUFBTSxFQUFDO0lBQ3hELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxNQUFNLEVBQUMsTUFBTSxFQUFFO0NBQ2pFLENBQUM7QUFNRjtJQUFBO0lBQW9DLENBQUM7SUFBeEIsb0JBQW9CO1FBSmhDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csb0JBQW9CLENBQUk7SUFBRCwyQkFBQztDQUFBLEFBQXJDLElBQXFDO0FBQXhCLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7RmVhdHVyZUNvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2ZlYXR1cmUtbW9kdWxlL2ZlYXR1cmUuY29tcG9uZW50XCI7XG5pbXBvcnQge0ZlYXRDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9mZWF0dXJlLW1vZHVsZS9mZWF0LmNvbXBvbmVudFwiO1xuXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBGZWF0dXJlQ29tcG9uZW50ICwgb3V0bGV0OlwiZmVhdFwifSxcbiAgICB7IHBhdGg6IFwiaXRlbXNUZW1wXCIsIGNvbXBvbmVudDogRmVhdENvbXBvbmVudCwgb3V0bGV0OlwiZmVhdFwiIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZVJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=