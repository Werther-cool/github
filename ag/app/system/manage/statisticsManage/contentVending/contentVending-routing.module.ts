import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentVendingComponent } from './contentVeding.component';

const routes: Routes = [
    {
        path: '', component: ContentVendingComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContentVendingRoutingModule {}
