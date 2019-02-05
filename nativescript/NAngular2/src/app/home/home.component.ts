import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
        console.dir({
            type: "Apple",
            color: "red"
        });
    }

    ngOnInit(): void {
        // Init your component properties here.
        console.log("From home component");
    }
}
