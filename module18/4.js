const products =[
    {name:"Laptop", price: 1200000},
    {name:"Mobile", price: 50000},
    {name:"Mobile charger", price:2000},
    {name:"Laptop Bag", price:1500}
];

let maxProduct = {name:"", price:0};
let minProduct = {name:"", price: Number.MAX_VALUE};

for(let product of products){
    if(product.price > maxProduct.price){
        maxProduct = product;
    }
    if(product.price < minProduct.price){
       minProduct = product;
    }
}

console.log(`The product with maximum amount is ${maxProduct.name} which is priced at Rs. ${maxProduct.price}`);
console.log( `The product with minimum amount is ${minProduct.name} which is priced at Rs. ${minProduct.price}`);



