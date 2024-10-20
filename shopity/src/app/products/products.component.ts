import { Component } from '@angular/core';
import { Products } from '../services/products';
import { ProductsService } from '../services/products.service';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
constructor(private service:ProductsService,private card:CardService){}
Products:any;
addtocard(pro:Products){
 this.card.additemtocard(pro);
 alert("your product has been addedto card");
}
ngOnInit(){
  this.service.getProducts().subscribe((result)=>{
  this.Products=result;
  console.log(this.Products);
   }
    )
  }



}
