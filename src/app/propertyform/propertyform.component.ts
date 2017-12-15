import { Component, OnInit, ViewChild } from '@angular/core';
// import { CribListingComponent } from '../';
import { CribsService } from '../services/cribs.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-propertyform',
  templateUrl: './propertyform.component.html',
  styleUrls: ['./propertyform.component.css']
})
export class PropertyformComponent implements OnInit {
  
  // @Input('propform') propform: CribListingComponent;
  @ViewChild('newProperty') newProperty: NgForm;
  constructor( public CribsService: CribsService) { }

  ngOnInit() {
  }

  onPropertySubmit(data): void{
    this.CribsService.addProperty(data);
    this.newProperty.reset();
  }

}
