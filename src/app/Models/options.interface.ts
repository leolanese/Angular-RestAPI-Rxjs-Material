import { HttpHeaders } from '@angular/common/http';

export interface OptionsInterface {
  headers: HttpHeaders
}

export interface ErrorRequestModel {
  statusText: string,
  message: string,
  status: string
}
