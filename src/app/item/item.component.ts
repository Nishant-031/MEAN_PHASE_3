import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../model/items';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()item: Item;
  @Output() removeItem= new EventEmitter<Item>();
  constructor() { 
    this.item= new Item();
  }

  delete(){
    this.removeItem.emit(this.item);
  }

 

  ngOnInit(): void {
  }

}
