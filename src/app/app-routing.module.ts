import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCharterComponent } from './component/customer-charter/customer-charter.component';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';
import { UploadComponent } from './component/upload/upload.component';

const routes: Routes = [
  {
    path: '',
    component: UploadComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'customer-charter',
    component: CustomerCharterComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
