import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CardService } from '../services/card.service';
import { Products } from '../services/products';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css'
})
export class AutosComponent {
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
