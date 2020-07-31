import { NgModule } from '@angular/core';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AbautComponent } from './pages/abaut/abaut.component';
import { ItemComponent } from './pages/item/item.component';
import {Routes, RouterModule} from '@angular/router';
import { SearchComponent } from './pages/search/search.component';

const AppRoutes: Routes = [
    {path: 'home', component: PortafolioComponent},
    {path: 'abaut', component: AbautComponent},
    {path: 'item/:id', component: ItemComponent},
    {path: 'search/:termino', component: SearchComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
imports: [
    RouterModule.forRoot(AppRoutes, {useHash: true})
],

exports: [
RouterModule
]

})
export class AppRoutingModule { }