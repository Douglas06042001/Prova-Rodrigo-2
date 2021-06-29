import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from './Bill';

@Injectable({
  providedIn: 'root'
})

export class BillService {

  private url ="https://calm-anchorage-20290.herokuapp.com/api/v1/bills"

  constructor(private http: HttpClient) { }


  //Metedo Post

  post(bill: Bill) : Observable<Bill> {
    console.log(bill)
    return this.http.post<Bill>(this.url, bill)
  } 

  get() : Observable<Bill[]> {
    return this.http.get<Bill[]>(this.url + '?customer')
  }

  getById(nome : any) : Observable<Bill[]> {
    return this.http.get<Bill[]>(this.url + '?customer=' + nome)
  }

  delete(BillId: number) : Observable<Bill> {
    return this.http.delete<Bill>(this.url + "/" + BillId)
  }
  
}
