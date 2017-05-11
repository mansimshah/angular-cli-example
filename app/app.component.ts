import {Component} from "angular2/core";
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.component";

@Component({
   selector: 'my-app',
   template: `<h1>Angular App </h1><courses></courses><authors></authors>
   			   <div>
		            <p>
		                <a href="/courses">Course</a> |
		                <a href="/authors">Author</a>
		            </p>
		            <div>
		                <router-outlet></router-outlet>
		            </div>    
        		</div>
   				`,
   directives: [CoursesComponent,AuthorsComponent]
})

export class AppComponent {
}