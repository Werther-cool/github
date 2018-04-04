import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserTestComponent } from './userTest.component';

const routes: Routes = [
    {
        path: '',
        component: UserTestComponent,
        children: [
            { path: '', redirectTo: 'dashboard' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserTestRoutingModule {}
