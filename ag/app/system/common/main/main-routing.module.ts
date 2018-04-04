import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
          { path: '', redirectTo: 'firstPage' },
          { path: 'firstPage', loadChildren: '../../manage/firstPage/firstPage.module#FirstPageModule' },
          { path: 'contentData', loadChildren: '../../manage/statisticsManage/contentData/contentData.module#ContentDataModule' },
          { path: 'contentManage', loadChildren: '../../manage/statisticsManage/contentManage/contentManage.module#ContentManageModule' },
          { path: 'contentGoods', loadChildren: '../../manage/statisticsManage/contentGoods/contentGoods.module#ContentGoodsModule' },
          { path: 'contentGoodsStatistics',
            loadChildren: '../../manage/statisticsManage/contentGoodsStatistics/contentGoodsStatistics.module#ContentGoodsStatisticsModule'
          },
          { path: 'contentDaily', loadChildren: '../../manage/statisticsManage/contentDaily/contentDaily.module#ContentDailyModule'},
          { path: 'contentVending',
            loadChildren: '../../manage/statisticsManage/contentVending/contentVending.module#ContentVendingModule'},
          { path: 'contentVending',
            loadChildren: '../../manage/statisticsManage/contentVending/contentVending.module#ContentVendingModule'},

          { path: 'vmInventory', loadChildren: '../../manage/warehouseManage/vmInventory/vmInventory.module#VmInventoryModule' },
          { path: 'userTest', loadChildren: '../../manage/userTest/userTest.module#UserTestModule' },
          { path: 'sendNews', loadChildren: '../../manage/sendNews/sendNews.module#SendNewsModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {}
