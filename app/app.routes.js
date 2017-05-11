System.register(['@angular/router', "./courses.component", "./authors.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, courses_component_1, authors_component_1;
    var routes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            }],
        execute: function() {
            routes = [
                { path: '', redirectTo: '/courses', pathMatch: 'full' },
                { path: 'courses', component: courses_component_1.CoursesComponent },
                { path: 'authors', component: authors_component_1.AuthorsComponent }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(routes));
        }
    }
});
//# sourceMappingURL=app.routes.js.map