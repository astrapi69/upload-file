import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private baseUrl = 'http://localhost:10080/v1';
  private restUploadFile = '/files';

  constructor(private https: HttpClient) {
  }

  pushFileToStorage(file: File): Observable<HttpEvent<any>> {
    const data: FormData = new FormData();
    data.append('multipartFile', file);
    data.append('filepath', file.name);
    const request = new HttpRequest('POST', `${this.baseUrl}${this.restUploadFile}/file`, data, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.https.request(request);
  }
}
