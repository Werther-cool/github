import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentDataComponent } from './contentData.component';

const routes: Routes = [
    {
        path: '', component: ContentDataComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContentDataRoutingModule {}
