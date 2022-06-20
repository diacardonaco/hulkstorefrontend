import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultProductComponent } from './components/consult-product/consult-product.component';
import { InventoryComponent } from './components/inventory/inventory.component';

const routes: Routes = [ { path: 'consultProduct', component: ConsultProductComponent }, { path: 'consultInventory', component: InventoryComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
