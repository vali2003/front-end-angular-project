import { Component } from '@angular/core';
import { CardService } from '../services/card.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-crad',
  templateUrl: './crad.component.html',
  styleUrl: './crad.component.css'
})
export class CradComponent {
constructor(private card:CardService){}
totalprice:any;
cartitems:any;
cartlength:any;

ngDoCheck(){
  this.cartlength=this.card.getlength();
  this.totalprice=this.card.getTotal();
}

ngOnInit(){
  this.card.getitems().subscribe((res)=>{
    this.cartitems=res;
    console.log(this.cartitems);
  })
}

delete(p:any){
  this.card.deletecartitems(p);
  alert("product deleted successfully");
}
buycart(){
this.card.removeAll();
Swal.fire({
  title: "Good job!",
  text: "buy the product!",
  icon: "success"
});

}

}

