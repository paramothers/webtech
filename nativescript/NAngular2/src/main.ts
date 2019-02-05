// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {platformNativeScriptDynamic} from "nativescript-angular/platform";

import {AppModule} from "./app/app.module";
import {
    on as applicationOn,
    launchEvent,
    ApplicationEventData,
    suspendEvent,
    resumeEvent, exitEvent,
    android, AndroidApplication, AndroidActivityBundleEventData, AndroidActivityEventData
} from "tns-core-modules/application";
import {platformNames} from "tns-core-modules/platform";

import {EventData} from "tns-core-modules/data/observable";
import * as applicationSettings from "tns-core-modules/application-settings";

// Event handler for Page "loaded" event attached in main-page.xml.
export function pageLoaded(args: EventData) {
    applicationSettings.setString("Name", "John Doe");
    console.log(applicationSettings.getString("Name"));// Prints "John Doe".
    applicationSettings.setBoolean("Married", false);
    console.log(applicationSettings.getBoolean("Married"));// Prints false.
    applicationSettings.setNumber("Age", 42);
    console.log(applicationSettings.getNumber("Age"));// Prints 42.
    console.log(applicationSettings.hasKey("Name"));// Prints true.
    applicationSettings.remove("Name");// Removes the Name entry.
    console.log(applicationSettings.hasKey("Name"));// Prints false.
}


if (android) {

    android.on(AndroidApplication.activityCreatedEvent, (args: AndroidActivityBundleEventData) => {

        console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    });

    android.on(AndroidApplication.activityDestroyedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    android.on(AndroidApplication.activityStartedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

}

applicationOn(launchEvent, (args: ApplicationEventData) => {

    if (args.android) {

        console.log("Launched android application with following intent ", args.android);
    }
});

applicationOn(suspendEvent, (args: ApplicationEventData) => {

    console.log("Activity", args.android);
});

applicationOn(resumeEvent, (args: ApplicationEventData) => {
    console.log("Activity", args.android);
});

applicationOn(exitEvent, (args: ApplicationEventData) => {
    console.log("Activity", args.android);
});


platformNativeScriptDynamic().bootstrapModule(AppModule);
