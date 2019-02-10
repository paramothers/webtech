import {Component, OnDestroy, OnInit} from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import {android as androidApp, ios as iosApp} from 'tns-core-modules/application';
import * as connectivity from 'tns-core-modules/connectivity';

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit, OnDestroy {
    items: Array<Item>;

    connectionType: string;

    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor(private itemService: ItemService) {

        if (androidApp){
            console.log("you are running in android mobile ");
        }

        let connectionType = connectivity.getConnectionType();
        switch (connectionType) {

            case connectivity.connectionType.none:
                this.connectionType = 'None';
                break;

            case connectivity.connectionType.bluetooth:
                this.connectionType= 'Bluetooth';
                break;

            case connectivity.connectionType.wifi:
                this.connectionType = 'wi-fi';
                break;

            case connectivity.connectionType.mobile:
                this.connectionType = 'mobile';
                break;
            default:
                break;
        }

        console.log("connection tyhpe ",this.connectionType);

    }

    ngOnInit(): void {
        // this.items = this.itemService.getItems();

        connectivity.startMonitoring( (newConnectionType: number) =>{
            switch (newConnectionType) {

                case connectivity.connectionType.none:
                    console.log("Connection type changed to none.");
                    break;

                case connectivity.connectionType.bluetooth:
                    console.log("Connection type changed to bluetooth.");
                    break;

                case connectivity.connectionType.wifi:
                    console.log("Connection type changed to wifi.");
                    break;

                case connectivity.connectionType.mobile:
                    console.log("Connection type changed to mobile.");
                    break;
                default:
                    break;
            }
        });
    }

    ngOnDestroy():void{
        connectivity.stopMonitoring();
    }
}
