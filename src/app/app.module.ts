import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { NgHttpLoaderModule } from 'ng-http-loader';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './component/upload/upload.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { DocumentComponent } from './component/upload/document/document.component';
import { OtpComponent } from './component/upload/otp/otp.component';
import { UploadFileComponent } from './component/upload/upload-file/upload-file.component';
import { SuccessComponent } from './component/upload/success/success.component';
import { CustomerCharterComponent } from './component/customer-charter/customer-charter.component';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    HeaderComponent,
    FooterComponent,
    DocumentComponent,
    OtpComponent,
    UploadFileComponent,
    SuccessComponent,
    CustomerCharterComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatStepperModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    NgxSpinnerModule,
    NgHttpLoaderModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
