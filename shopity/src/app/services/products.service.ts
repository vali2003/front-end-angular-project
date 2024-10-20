import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {}
  productsList:Products[]=[
    {
      productName:"OnePlus 10T",
      productCompany:"Oneplus",
      productDescription:"Mobile High-performance smartphone with a sleek design and fast charging support.",
      productPrice:120000,
      productImage:"https://specificationsplus.com/wp-content/uploads/2022/07/OnePlus-10T-Specifications-Plus.jpg",
      productId:"Mobile",
      productEdit:false
    },
    {
      productName:"OnePlus 10T",
      productCompany:"Oneplus",
      productDescription:"Mobile High-performance smartphone with a sleek design and fast charging support.",
      productPrice:120000,
      productImage:"https://specificationsplus.com/wp-content/uploads/2022/07/OnePlus-10T-Specifications-Plus.jpg",
      productId:"Mobile",
      productEdit:false
    },
    {
      productName:"OnePlus 10T",
      productCompany:"Oneplus",
      productDescription:"Mobile High-performance smartphone with a sleek design and fast charging support.",
      productPrice:120000,
      productImage:"https://specificationsplus.com/wp-content/uploads/2022/07/OnePlus-10T-Specifications-Plus.jpg",
      productId:"Mobile",
      productEdit:false
    },
    {
      productName:"OnePlus 10T",
      productCompany:"Oneplus",
      productDescription:"Mobile High-performance smartphone with a sleek design and fast charging support.",
      productPrice:120000,
      productImage:"https://specificationsplus.com/wp-content/uploads/2022/07/OnePlus-10T-Specifications-Plus.jpg",
      productId:"Mobile",
      productEdit:false
    },
    {
      productName:"OnePlus 10T",
      productCompany:"Oneplus",
      productDescription:"Mobile High-performance smartphone with a sleek design and fast charging support.",
      productPrice:120000,
      productImage:"https://specificationsplus.com/wp-content/uploads/2022/07/OnePlus-10T-Specifications-Plus.jpg",
      productId:"Mobile",
      productEdit:false
    },
    {
      productName:"OnePlus 10T",
      productCompany:"Oneplus",
      productDescription:"Mobile High-performance smartphone with a sleek design and fast charging support.",
      productPrice:120000,
      productImage:"https://specificationsplus.com/wp-content/uploads/2022/07/OnePlus-10T-Specifications-Plus.jpg",
      productId:"Mobile",
      productEdit:false
    },
{productId:"bikes",
  productName:"MT15",
  productCompany:"Yamaha",
  productPrice:350000,
  productDescription:"There are 82 sports bikes currently on sale from various manufacturers starting from 1.05 Lakh. The most popular products under this bracket are the Yamaha MT 15 V2 (Rs. 1.93 Lakh), Yamaha R15 V4 (Rs. 2.16 Lakh) and TVS Apache RTR 160 (Rs. 1.40 Lakh) (all prices on-road).The top brands that manufacture sports bikes are Yamaha, TVS, Bajaj. To know more about the latest prices of Sports Bikes in your city",
  productImage:"https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-06613f885e681c.jpg",
  productEdit:false
},
{productId:"bikes",
  productName:"MT15",
  productCompany:"Yamaha",
  productPrice:350000,
  productDescription:"There are 82 sports bikes currently on sale from various manufacturers starting from 1.05 Lakh. The most popular products under this bracket are the Yamaha MT 15 V2 (Rs. 1.93 Lakh), Yamaha R15 V4 (Rs. 2.16 Lakh) and TVS Apache RTR 160 (Rs. 1.40 Lakh) (all prices on-road).The top brands that manufacture sports bikes are Yamaha, TVS, Bajaj. To know more about the latest prices of Sports Bikes in your city",
  productImage:"https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-06613f885e681c.jpg",
  productEdit:false
},
{productId:"bikes",
  productName:"MT15",
  productCompany:"Yamaha",
  productPrice:350000,
  productDescription:"There are 82 sports bikes currently on sale from various manufacturers starting from 1.05 Lakh. The most popular products under this bracket are the Yamaha MT 15 V2 (Rs. 1.93 Lakh), Yamaha R15 V4 (Rs. 2.16 Lakh) and TVS Apache RTR 160 (Rs. 1.40 Lakh) (all prices on-road).The top brands that manufacture sports bikes are Yamaha, TVS, Bajaj. To know more about the latest prices of Sports Bikes in your city",
  productImage:"https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-06613f885e681c.jpg",
  productEdit:false
},
{productId:"bikes",
  productName:"MT15",
  productCompany:"Yamaha",
  productPrice:350000,
  productDescription:"There are 82 sports bikes currently on sale from various manufacturers starting from 1.05 Lakh. The most popular products under this bracket are the Yamaha MT 15 V2 (Rs. 1.93 Lakh), Yamaha R15 V4 (Rs. 2.16 Lakh) and TVS Apache RTR 160 (Rs. 1.40 Lakh) (all prices on-road).The top brands that manufacture sports bikes are Yamaha, TVS, Bajaj. To know more about the latest prices of Sports Bikes in your city",
  productImage:"https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-06613f885e681c.jpg",
  productEdit:false
},
{productId:"bikes",
  productName:"MT15",
  productCompany:"Yamaha",
  productPrice:350000,
  productDescription:"There are 82 sports bikes currently on sale from various manufacturers starting from 1.05 Lakh. The most popular products under this bracket are the Yamaha MT 15 V2 (Rs. 1.93 Lakh), Yamaha R15 V4 (Rs. 2.16 Lakh) and TVS Apache RTR 160 (Rs. 1.40 Lakh) (all prices on-road).The top brands that manufacture sports bikes are Yamaha, TVS, Bajaj. To know more about the latest prices of Sports Bikes in your city",
  productImage:"https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-06613f885e681c.jpg",
  productEdit:false
},
{productId:"bikes",
  productName:"MT15",
  productCompany:"Yamaha",
  productPrice:350000,
  productDescription:"There are 82 sports bikes currently on sale from various manufacturers starting from 1.05 Lakh. The most popular products under this bracket are the Yamaha MT 15 V2 (Rs. 1.93 Lakh), Yamaha R15 V4 (Rs. 2.16 Lakh) and TVS Apache RTR 160 (Rs. 1.40 Lakh) (all prices on-road).The top brands that manufacture sports bikes are Yamaha, TVS, Bajaj. To know more about the latest prices of Sports Bikes in your city",
  productImage:"https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-06613f885e681c.jpg",
  productEdit:false
},
{
  productId:"auto",
    productName:"Mahindra Treo",
    productCompany:"Mahindra",
    productPrice:700000,
    productDescription:"There are 72 Auto Rickshaws currently available for sale. The best Auto Rickshaw models under this bracket are the Mahindra Treo, Bajaj Compact RE and Piaggio Ape E City. To know more about the latest prices and offers of Auto Rickshaw in your city, variants, specifications, mileage, loading capacity, reviews and other details, please select your desired Auto Rickshaw from the list below.",
    productImage:"https://cvimg1.cardekho.com/p/630x420/in/mahindra/treo/mahindra-treo-67242.jpg?impolicy=resize&imwidth=420",
    productEdit:false
},
{
  productId:"auto",
    productName:"Mahindra Treo",
    productCompany:"Mahindra",
    productPrice:700000,
    productDescription:"There are 72 Auto Rickshaws currently available for sale. The best Auto Rickshaw models under this bracket are the Mahindra Treo, Bajaj Compact RE and Piaggio Ape E City. To know more about the latest prices and offers of Auto Rickshaw in your city, variants, specifications, mileage, loading capacity, reviews and other details, please select your desired Auto Rickshaw from the list below.",
    productImage:"https://cvimg1.cardekho.com/p/630x420/in/mahindra/treo/mahindra-treo-67242.jpg?impolicy=resize&imwidth=420",
    productEdit:false
},{
  productId:"auto",
    productName:"Mahindra Treo",
    productCompany:"Mahindra",
    productPrice:700000,
    productDescription:"There are 72 Auto Rickshaws currently available for sale. The best Auto Rickshaw models under this bracket are the Mahindra Treo, Bajaj Compact RE and Piaggio Ape E City. To know more about the latest prices and offers of Auto Rickshaw in your city, variants, specifications, mileage, loading capacity, reviews and other details, please select your desired Auto Rickshaw from the list below.",
    productImage:"https://cvimg1.cardekho.com/p/630x420/in/mahindra/treo/mahindra-treo-67242.jpg?impolicy=resize&imwidth=420",
    productEdit:false
},
{
  productId:"auto",
    productName:"Mahindra Treo",
    productCompany:"Mahindra",
    productPrice:700000,
    productDescription:"There are 72 Auto Rickshaws currently available for sale. The best Auto Rickshaw models under this bracket are the Mahindra Treo, Bajaj Compact RE and Piaggio Ape E City. To know more about the latest prices and offers of Auto Rickshaw in your city, variants, specifications, mileage, loading capacity, reviews and other details, please select your desired Auto Rickshaw from the list below.",
    productImage:"https://cvimg1.cardekho.com/p/630x420/in/mahindra/treo/mahindra-treo-67242.jpg?impolicy=resize&imwidth=420",
    productEdit:false
},
{
  productId:"auto",
    productName:"Mahindra Treo",
    productCompany:"Mahindra",
    productPrice:700000,
    productDescription:"There are 72 Auto Rickshaws currently available for sale. The best Auto Rickshaw models under this bracket are the Mahindra Treo, Bajaj Compact RE and Piaggio Ape E City. To know more about the latest prices and offers of Auto Rickshaw in your city, variants, specifications, mileage, loading capacity, reviews and other details, please select your desired Auto Rickshaw from the list below.",
    productImage:"https://cvimg1.cardekho.com/p/630x420/in/mahindra/treo/mahindra-treo-67242.jpg?impolicy=resize&imwidth=420",
    productEdit:false
},
{
  productId:"auto",
    productName:"Mahindra Treo",
    productCompany:"Mahindra",
    productPrice:700000,
    productDescription:"There are 72 Auto Rickshaws currently available for sale. The best Auto Rickshaw models under this bracket are the Mahindra Treo, Bajaj Compact RE and Piaggio Ape E City. To know more about the latest prices and offers of Auto Rickshaw in your city, variants, specifications, mileage, loading capacity, reviews and other details, please select your desired Auto Rickshaw from the list below.",
    productImage:"https://cvimg1.cardekho.com/p/630x420/in/mahindra/treo/mahindra-treo-67242.jpg?impolicy=resize&imwidth=420",
    productEdit:false
},
{
  productId:"auto",
    productName:"Mahindra Treo",
    productCompany:"Mahindra",
    productPrice:700000,
    productDescription:"There are 72 Auto Rickshaws currently available for sale. The best Auto Rickshaw models under this bracket are the Mahindra Treo, Bajaj Compact RE and Piaggio Ape E City. To know more about the latest prices and offers of Auto Rickshaw in your city, variants, specifications, mileage, loading capacity, reviews and other details, please select your desired Auto Rickshaw from the list below.",
    productImage:"https://cvimg1.cardekho.com/p/630x420/in/mahindra/treo/mahindra-treo-67242.jpg?impolicy=resize&imwidth=420",
    productEdit:false
},
    ];
    getProducts(){
      return of(this.productsList);
    }
    addnewproduct(product:Products){
      this.productsList.push(product);
    }
deleteproduct(prod:Products){
  let res=this.productsList.findIndex(p=>p.productId==prod.productId);
  this.productsList.splice(res,1)
}
Updateproduct(prod:Products){
  let res=this.productsList.findIndex(p=>p.productId==prod.productId);
  this.productsList.splice(res,1,prod);
}
}
  


