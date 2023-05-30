import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; // Import for Http

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  //Perform DI
  constructor(private http : HttpClient) { }

  batches()
  {
    //Connect to the Node+express server
    return this.http.get("http://localhost:5100/batches");
  }


}
