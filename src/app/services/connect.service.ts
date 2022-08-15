import { Injectable } from '@angular/core';
import { OTP } from '../objects/otp';
import { ReturnDTO } from '../objects/return.dto';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class ConnectService {
  constructor(private app: AppService) {}

  async generateOTP(otp: OTP): Promise<ReturnDTO> {
    return this.app
      .post(otp, 'generateOTP')
      .then((ReturnDTO) => ReturnDTO as ReturnDTO);
  }

  async resendOTP(otp: OTP): Promise<ReturnDTO> {
    return this.app
      .post(otp, 'resendOTP')
      .then((ReturnDTO) => ReturnDTO as ReturnDTO);
  }

  async verifyOTP(otp: OTP): Promise<ReturnDTO> {
    return this.app
      .post(otp, 'verifyOTP')
      .then((ReturnDTO) => ReturnDTO as ReturnDTO);
  }

  async upload(data: FormData): Promise<ReturnDTO> {
    return this.app
      .post(data, 'upload')
      .then((ReturnDTO) => ReturnDTO as ReturnDTO);
  }
}
