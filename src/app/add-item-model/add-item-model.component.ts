import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../model/items';

@Component({
  selector: 'app-add-item-model',
  templateUrl: './add-item-model.component.html',
  styleUrls: ['./add-item-model.component.css']
})
export class AddItemModelComponent implements OnInit {

  itemCategory = ["General","OBC","SC","ST"];
  genderCategory= ["Male","Female", "Other"]
  formsubmitted: boolean= false;

  itemDetail!: FormGroup;

  candidateName!: FormControl;
  candidateCategory! : FormControl;
  candidateEmail! : FormControl;
  candidatePhone! : FormControl;
  candidateGender! : FormControl;
  candidateAddress! : FormControl;
  candidatePincode! : FormControl;

  constructor(private itemService : ItemService, private router: Router) { }

  ngOnInit(): void {
    this.candidateName= new FormControl('', [Validators.required, Validators.minLength(3),
      Validators.pattern('[a-zA-Z]*')]);
    this.candidateCategory= new FormControl('', [Validators.required, Validators.minLength(2),
                                        Validators.pattern('[a-zA-Z]*')]);
    this.candidateEmail= new FormControl('', [Validators.required]);
    this.candidatePhone= new FormControl('', [Validators.required, Validators.min(10)]);
    this.candidateGender= new FormControl(' ', Validators.required);
    this.candidateAddress= new FormControl('', [Validators.required, Validators.minLength(5),
                                               Validators.pattern('[a-zA-Z]*')]);
    this.candidatePincode= new FormControl(' ', [Validators.required]);

    this.itemDetail= new FormGroup(
      {
        'candidateName': this.candidateName,
        'candidateCategory' : this.candidateCategory,
        'candidateEmail' : this.candidateEmail,
        'candidatePhone' : this.candidatePhone,
        'candidateGender' : this.candidateGender,
        'candidateAddress' : this.candidateAddress,
        'candidatePincode' : this.candidatePincode
      }
    )

  }

  addItem(item : Item){
    this.itemService.addItems(item).subscribe((_result : any)=>{ 
    this.formsubmitted= true;
    this.router.navigateByUrl('/listItem');
  });   

  }
}
