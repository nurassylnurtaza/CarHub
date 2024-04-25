import {Component, OnInit} from '@angular/core';
import {Dealer, DealerCar} from "../../models";
import {DealerService} from "../../services/dealer.service";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-dealers',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './dealers.component.html',
  styleUrl: './dealers.component.css'
})
export class DealersComponent implements OnInit{
  dealers!: Dealer[];
  dealerCars!: DealerCar[];
  constructor(private dealerService: DealerService) {
    this.dealers = [];
    this.dealerCars =[]
  }



  ngOnInit(): void {
    this.dealerService.getDealers().subscribe((dealers: Dealer[]) => {
      this.dealers = dealers
    })
  }
  // getDealer(id: number) {
  //   // this.dealerService.getDealer(id).subscribe((dealer: Dealer) => {
  //   //
  //   // })
  // }



  getDealerCars(dealer: Dealer){
    this.dealerService.getDealerCars(dealer.id).subscribe((data)=>{
      this.dealerCars = data;
    })
}

}
