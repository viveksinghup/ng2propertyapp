import { Component, OnInit, Input } from '@angular/core';
import { CribInterface } from '../cribinterface';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {

	@Input('crib') crib: CribInterface;
	// @Input('index') index: cribinterface;
	// showDetails: number;


	// showprop(index) {
	// 	if(this.showDetails == index){
	// 		this.showDetails = undefined;
	// 	}
	// 	else{
	// 		this.showDetails = index;
	// 	}
	// }

  constructor() { }

  ngOnInit() {
  }

}
