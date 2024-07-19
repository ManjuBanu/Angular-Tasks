// import { bootstrapApplication } from '@angular/platform-browser';

// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));

// // This is not under Appcomponent tree , so we are not using this way
// // bootstrapApplication(HeaderComponent).catch((err) => console.error(err))


// To covert this from standalone-component to AngluareModule we need to implement in below method

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);
