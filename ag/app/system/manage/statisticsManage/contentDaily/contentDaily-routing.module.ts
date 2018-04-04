import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentDailyComponent } from './contentDaily.component';

const routes: Routes = [
    {
        path: '', component: ContentDailyComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContentDailyRoutingModule {}
