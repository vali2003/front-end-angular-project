import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../services/products';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.css'
})
export class MobileComponent {
  constructor(private service:ProductsService,private card:CardService){}
  products:any;
  ngOnInit(){
    this.service.getProducts().subscribe((result)=>{
    this.products=result;
    console.log(this.products);
    }
    )
  }

addtocard(pro:Products){
  this.card.additemtocard(pro);
  alert("your product has been addedto card");
 }

}
