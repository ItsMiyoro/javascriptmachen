//
// 1
//

function createBook(title, author, pages) {
  return {
    title,
    author,
    pages,
    read() {  
      console.log('Czytam książkę');
    }
  };
}

const book1 = createBook('Wiedźmin', 'Andrzej Sapkowski', 320);
const book2 = createBook('George Droid', 'John F. Goverment', 464);

book1.read();
book2.read();
console.log("");
// bo można reużywac danych czy coś.

//
// 2.
//

function createCar(brand, model, year, mileage){
    return{
        brand,
        model,
        year,
        mileage,
        drive(distance){
            console.log("Przejechano " + distance + " km");
            mileage=mileage+distance;
        },
        showInfo(){
            console.log(brand + " " + model + " rocznika "+ year + ". Przejechane kilometry : "+ mileage);
        } 
    };
}
const car1 = createCar("Volksvagen", "Polo",690, 200);
const car2 = createCar("Alauukar", "9/11",2001, 0);
const car3 = createCar("Mazda", "Miata MX9", 210, 780491112);
car1.showInfo();
car2.showInfo();
car3.showInfo();
car1.drive(3008);
car2.drive(911);
car3.drive(2137);
car1.showInfo();
car2.showInfo();
car3.showInfo();
console.log("");
//
// 3
//

function createProduct(name, price, stock){
    return{
    name,
    price,
    stock,
    validatePrice(){
        if (price <= 0){
            price = 0.01;
        }
    },
    validateStock(){
        if (stock < 0){
            stock = 0;
            console.log("Warning, "+ name + " is not avaible in stock!")
        }
    },
    displayProduct(){
        console.log(name);
        console.log(price + "$. Total Value : "+price*stock+"$.");
        console.log("Stock : " + stock);
    },
    restock(quantity){
        stock=stock+quantity;
        console.log("Restocked "+ name +". In stock : "+stock);
    },
    discount(percentage){
        price=price*(percentage/100);
        console.log("Discount on "+ name +"! It's now worth "+ price + ", "+ percentage +"% of the original price.");
    }
};
}
product1 = createProduct("Margaryna Delma", 14.99, -12);
product1.displayProduct();
product1.validatePrice();
product1.validateStock();
product1.restock(780);
product1.discount(69);
product1.displayProduct();
