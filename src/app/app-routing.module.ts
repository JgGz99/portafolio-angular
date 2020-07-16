import { NgModule } from '@angular/core';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AbautComponent } from './pages/abaut/abaut.component';
import { ItemComponent } from './pages/item/item.component';
import {Routes, RouterModule} from '@angular/router';

const AppRoutes: Routes = [
    {path: 'home', component: PortafolioComponent},
    {path: 'abaut', component: AbautComponent},
    {path: 'item', component: ItemComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
imports: [
    RouterModule.forRoot(AppRoutes)
],

exports: [
RouterModule
]

})
export class AppRoutingModule { }