import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  constructor(private httpClient: HttpClient) { }

  public getFileList(url: string): Observable<any>{
    return this.httpClient.get(url);
  }
}
