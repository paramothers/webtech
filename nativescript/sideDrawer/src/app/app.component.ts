import {Component, ViewChild} from "@angular/core";
import {RadSideDrawerComponent} from "nativescript-ui-sidedrawer/angular";
import {RouterExtensions} from "nativescript-angular";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    @ViewChild(RadSideDrawerComponent)
    sideDrawerComponent: RadSideDrawerComponent;

    constructor(private routerExensions: RouterExtensions){}


    navigateToFeatured(): void {

        this.routerExensions.navigate(["/featured"],{clearHistory: true});
        this.sideDrawerComponent.sideDrawer.closeDrawer();
    }

    navigateToBrose(): void {

        this.routerExensions.navigate(["/browse"], {clearHistory:true});
        this.sideDrawerComponent.sideDrawer.closeDrawer();

    }
    navigateToSearch(): void {

        this.routerExensions.navigate(["/search"], {clearHistory:true});
        this.sideDrawerComponent.sideDrawer.closeDrawer();
    }
}
