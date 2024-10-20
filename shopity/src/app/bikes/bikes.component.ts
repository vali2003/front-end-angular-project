import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CardService } from '../services/card.service';
import { Products } from '../services/products';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrl: './bikes.component.css'
})
export class BikesComponent {
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
