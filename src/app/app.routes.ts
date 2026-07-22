import { Routes } from '@angular/router';
import { BooksTableComponent } from './books-table/books-table.component';


export const routes: Routes = [
    {
        path: "list",
        component: BooksTableComponent
    },
    {
        path: "details",
        loadComponent: () => import('./book-details/book-details.component').then(m => m.BookDetailsComponent)
    },
    {
        path: 'addons',
        loadComponent: ()=>import('./add-ons/add-ons.component').then(m => m.AddOnsComponent)
    },
    {
        path: 'invoice',
        loadComponent: () => import('./invoice/invoice.component').then(m => m.InvoiceComponent)
    },
    {
        path: "",
        redirectTo: "list",
        pathMatch: 'full'

    }
];
