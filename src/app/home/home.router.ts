import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children:[

        {
            path: 'menu',
            loadChildren: () => import('../menu/menu.module').then( m => m.MenuPageModule)
        },
        {
            path: 'profile',
            loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
        },
        {
          path: 'transact',
          loadChildren: () => import('../transact/transact.module').then( m => m.TransactPageModule)
        },
         {
    path: 'airtime',
    loadChildren: () => import('../pages/airtime/airtime.module').then( m => m.AirtimePageModule)
  },
  {
    path: 'clothing',
    loadChildren: () => import('../pages/clothing/clothing.module').then( m => m.ClothingPageModule)
  },
  {
    path: 'clothing-pay',
    loadChildren: () => import('../pages/clothing-pay/clothing-pay.module').then( m => m.ClothingPayPageModule)
  },
  {
    path: 'clothing-stores',
    loadChildren: () => import('../pages/clothing-stores/clothing-stores.module').then( m => m.ClothingStoresPageModule)
  },
  {
    path: 'clothing-transfer',
    loadChildren: () => import('../pages/clothing-transfer/clothing-transfer.module').then( m => m.ClothingTransferPageModule)
  },
  {
    path: 'dstv',
    loadChildren: () => import('../pages/dstv/dstv.module').then( m => m.DstvPageModule)
  },
  {
    path: 'education',
    loadChildren: () => import('../pages/education/education.module').then( m => m.EducationPageModule)
  },
  {
    path: 'education-pay',
    loadChildren: () => import('../pages/education-pay/education-pay.module').then( m => m.EducationPayPageModule)
  },
  {
    path: 'education-transfer',
    loadChildren: () => import('../pages/education-transfer/education-transfer.module').then( m => m.EducationTransferPageModule)
  },
  {
    path: 'electricity',
    loadChildren: () => import('../pages/electricity/electricity.module').then( m => m.ElectricityPageModule)
  },
  {
    path: 'fuel-stores',
    loadChildren: () => import('../pages/fuel-stores/fuel-stores.module').then( m => m.FuelStoresPageModule)
  },
  {
    path: 'general',
    loadChildren: () => import('../pages/general/general.module').then( m => m.GeneralPageModule)
  },
  {
    path: 'general-pay',
    loadChildren: () => import('../pages/general-pay/general-pay.module').then( m => m.GeneralPayPageModule)
  },
  {
    path: 'general-transfer',
    loadChildren: () => import('../pages/general-transfer/general-transfer.module').then( m => m.GeneralTransferPageModule)
  },
  {
    path: 'general-withdraw',
    loadChildren: () => import('../pages/general-withdraw/general-withdraw.module').then( m => m.GeneralWithdrawPageModule)
  },
  {
    path: 'invest-pocket',
    loadChildren: () => import('../pages/invest-pocket/invest-pocket.module').then( m => m.InvestPocketPageModule)
  },
  {
    path: 'pay',
    loadChildren: () => import('../pages/pay/pay.module').then( m => m.PayPageModule)
  },
  {
    path: 'pay-fuel',
    loadChildren: () => import('../pages/pay-fuel/pay-fuel.module').then( m => m.PayFuelPageModule)
  },
  {
    path: 'prepaid',
    loadChildren: () => import('../pages/prepaid/prepaid.module').then( m => m.PrepaidPageModule)
  },
  {
    path: 'prepaid-pay',
    loadChildren: () => import('../pages/prepaid-pay/prepaid-pay.module').then( m => m.PrepaidPayPageModule)
  },
  {
    path: 'save',
    loadChildren: () => import('../pages/save/save.module').then( m => m.SavePageModule)
  },
  {
    path: 'save-pocket',
    loadChildren: () => import('../pages/save-pocket/save-pocket.module').then( m => m.SavePocketPageModule)
  },
  {
    path: 'self',
    loadChildren: () => import('../pages/self/self.module').then( m => m.SelfPageModule)
  },
  {
    path: 'self-pay',
    loadChildren: () => import('../pages/self-pay/self-pay.module').then( m => m.SelfPayPageModule)
  },
  {
    path: 'self-transfer',
    loadChildren: () => import('../pages/self-transfer/self-transfer.module').then( m => m.SelfTransferPageModule)
  },
  {
    path: 'self-stores',
    loadChildren: () => import('../pages/self-stores/self-stores.module').then( m => m.SelfStoresPageModule)
  },
  {
    path: 'stores',
    loadChildren: () => import('../pages/stores/stores.module').then( m => m.StoresPageModule)
  },
  {
    path: 'transfer',
    loadChildren: () => import('../pages/transfer/transfer.module').then( m => m.TransferPageModule)
  },
  {
    path: 'transfer-fuel',
    loadChildren: () => import('../pages/transfer-fuel/transfer-fuel.module').then( m => m.TransferFuelPageModule)
  },
  {
    path: 'transport',
    loadChildren: () => import('../pages/transport/transport.module').then( m => m.TransportPageModule)
  },

    {
    path: 'groceries',
    loadChildren: () => import('../pages/groceries/groceries.module').then( m => m.GroceriesPageModule)
  },
   {
    path: 'education-stores',
    loadChildren: () => import('../pages/education-stores/education-stores.module').then( m => m.EducationStoresPageModule)
  },
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouter {}
