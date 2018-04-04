import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentGoodsStatisticsComponent } from './contentGoodsStatistics.component';

const routes: Routes = [
    {
        path: '', component: ContentGoodsStatisticsComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContentGoodsStatisticsRoutingModule {}
