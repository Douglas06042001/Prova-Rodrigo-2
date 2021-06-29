import { Component } from '@angular/core';
import { Bill } from './Bill';
import { BillService } from './Bill.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Bills:Bill [] = []
  newBill:Bill = {} as Bill

  constructor(private BillService : BillService) {}

  ngOnIinit(){
    this.loadData
  }
  
  
  save(myForm: any) {
    this.BillService.post(this.newBill).subscribe(
      () => {
        myForm.reset()
        this.newBill = {} as Bill
      }
    )
  }

  loadData() {
    this.BillService.get().subscribe(
      data => this.Bills = data
    )
  }

  deleteBill(BillId: number) {
    this.BillService.delete(BillId).subscribe(
      () => this.loadData()
    )
  }
   
 }
