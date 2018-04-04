import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendNewsComponent } from './sendNews.component';

const routes: Routes = [
    {
        path: '', component: SendNewsComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SendNewsRoutingModule {}
