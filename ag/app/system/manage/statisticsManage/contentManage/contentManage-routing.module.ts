import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentManageComponent } from './contentManage.component';

const routes: Routes = [
    {
        path: '', component: ContentManageComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContentManageRoutingModule {}
