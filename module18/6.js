const productsDetails = {
    name:"Appple macbook air 2020 Laptop",
    price:82000,
    color:"Grey",
    harddisk:"256 GB",
};
console.log("Below are the product details.");
for(let keys of Object.keys(productsDetails)){
    console.log(`${keys} : $${productsDetails[keys]}`);
}