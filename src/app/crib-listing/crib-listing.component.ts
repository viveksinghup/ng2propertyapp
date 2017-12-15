import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CribsService } from './../services/cribs.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

	cribs: Array<any>;

  constructor(
    private http: Http,
    private cribsService: CribsService
  ) { }

  ngOnInit() {
    this.cribsService.getAllData()
    .subscribe(
      data => this.cribs = data
    );

    this.cribsService.newCribSubject.subscribe(
      data => this.cribs = [data, ...this.cribs]
    )
  }

}
