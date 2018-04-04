import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';
import {CKEditorModule} from 'ng2-ckeditor';
const routes: Routes = [/*
    { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'not-found' }*/
    { path: '', redirectTo: '/comPageMain/first', pathMatch: 'full' },
    { path: 'systemAdminLogin',  loadChildren: './system/userAdminLogin/userAdminLogin.module#UserAdminLoginModule'},
    { path: 'main', loadChildren: './system/common/main/main.module#MainModule' },
    { path: 'comPageMain', loadChildren: './comPage/index/main/main.module#MainModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), CKEditorModule],
    exports: [RouterModule]
})
export class AppRoutingModule {}
