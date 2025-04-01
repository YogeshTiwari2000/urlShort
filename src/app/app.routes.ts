import { Routes } from '@angular/router';
import { UrlShortComponent } from './components/url-short/url-short.component';

export const routes: Routes = [
    {
        path: "", redirectTo: "url-short", pathMatch: "full"
    },
    {
        path: "url-short", component: UrlShortComponent // Define the route for 'url-short'
    },
];
