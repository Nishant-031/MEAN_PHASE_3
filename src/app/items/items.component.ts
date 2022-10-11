import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../model/items';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[]= [];
  constructor(public itemService: ItemService) { 
    //this.items= itemService.getItemDetail();
    //this.items= MockItem.item;
    //this.items= itemService.getItems()
  }


  deleteItem(item: Item){
    // let index= this.items.indexOf(item);
    // if(index !== -1){
    //   this.items.splice(index);
    // }
    this.itemService.removeItem(item).subscribe();
    this.itemService.getItems().subscribe(
      result=>{
        this.items= result;
      }
    )
    
  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(
      (item) => this.items= item
    )
   
  }


}
