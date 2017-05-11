import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { routing } from "./app.routes";
import { CoursesComponent } from "./courses.component";
import { AuthorsComponent } from "./authors.component";

@NgModule({
    imports:      [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        CoursesComponent,
        AuthorsComponent
    ],
    bootstrap: [
        AppComponent
    ],
    
})
export class AppModule { }