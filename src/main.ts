import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// This is not under Appcomponent tree , so we are not using this way
// bootstrapApplication(HeaderComponent).catch((err) => console.error(err))
