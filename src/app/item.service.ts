import { Injectable } from '@angular/core';
import { MockItem } from './mock-item/mock-item-detail';
import { Item } from './model/items';
import { Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[]= [];
  itemUrl= 'https://634242b620f1f9d7997f968a.mockapi.io/item';
  constructor(private httpClient : HttpClient) { 
    //this.items= MockItem.item;
  }

  

  getItems(): Observable <Item[]>{
    //return of(this.items);
    return this.httpClient.get<Item[]>(this.itemUrl).
    pipe(tap(
      (item) =>{
        console.log("Item Fetched from Mock API");
        console.log(item);
      }
    ))
  }

  addItems(item: Item): Observable<Item>{
    const httpHeader= {
      headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
    }

    return this.httpClient.post<Item>(this.itemUrl, item, httpHeader).
          pipe(tap(_ => console.log("Item added Sucessfully")))

  }

  getDeletedItem(id:any): Observable<Item>{
    const url= `${this.itemUrl}/${id}`;
    return this.httpClient.get<Item>(url).pipe(
      tap(_=>{
        console.log("Item Id Fetches Sucessfully")
      })
    );

  }
  

  removeItem(item: any): Observable<Item>{
    const httpHeader= {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    };
    const id= typeof item === 'number' ? item: item.candidateId;
    const itemUrlDetail= `${this.itemUrl}/${id}`;

    return this.httpClient.delete<Item>(itemUrlDetail, httpHeader)

  }

}
