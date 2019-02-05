import { Component } from "@angular/core";
import {SelectedIndexChangedEventData} from "tns-core-modules/ui/tab-view";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    onSelectedIndexChanged(args: SelectedIndexChangedEventData): void{

        console.log(`Selected Index oldIndex ${args.oldIndex} and new Index ${args.newIndex}`);
    }
}
