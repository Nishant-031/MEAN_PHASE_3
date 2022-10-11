import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { Location } from '@angular/common';
import { Item } from '../model/items';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  item: Item= new Item();
  constructor(private activatedRoute: ActivatedRoute,private location: Location,private itemService: ItemService) { }

  ngOnInit(): void {
    const param= this.activatedRoute.snapshot.paramMap.get('id');
    const id= param?+param: 0;
    this.itemService.getDeletedItem(id).subscribe(result => {
      this.item= result;
    })
  }

  goBack(){
    this.location.back();
  }

}
