import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrl: './manageproducts.component.css'
})
export class ManageproductsComponent {
constructor(private service:ProductsService){}
delete(p:any){
  this.service.deleteproduct(p);
  alert("product deleted successfully");
}
products:any;
ngOnInit(){
  this.service.getProducts().subscribe((res)=>{
    this.products=res;
  });
}
toSave(p:any){
  p.productEdit=false;
  this.service.Updateproduct(p);
  alert("product updated success");
}
toUpdate(p:any){
  p.productEdit=true;
}
}
