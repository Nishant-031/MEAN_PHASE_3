import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemModelComponent } from './add-item-model/add-item-model.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  {path: 'listItem', component: ItemsComponent},
  {path: 'listItem/:id', component: ViewDetailsComponent},
  {path: 'addItem', component: AddItemModelComponent},
  {path: 'contact', component: ContactComponent},
  {path: ' ', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
