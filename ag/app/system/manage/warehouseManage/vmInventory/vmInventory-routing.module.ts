import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VmInventoryComponent } from './vmInventory.component';

const routes: Routes = [
    {
        path: '', component: VmInventoryComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VmInventoryRoutingModule {}
