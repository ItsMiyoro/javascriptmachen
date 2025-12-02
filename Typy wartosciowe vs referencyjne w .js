//
// 1.
//
/*

let a = 10; 
let b = a; 
b = 20; 

let x = { value: 10 }; 
let y = x; 
y.value = 20; 

let arr1 = [1, 2, 3]; 
let arr2 = arr1; 
arr2.push(4); 

Pytania: 
    Jaką wartość będzie miała zmienna a po wykonaniu całego kodu? Dlaczego? 
        10, Taka była, jest i zostanie
    Jaką wartość będzie miała właściwość x.value? Dlaczego? 
        10, Taka była, jest i zostanie
    Ile elementów będzie miała tablica arr1? Dlaczego? 
        3, Bo jest deklaracja 3 zmiennych w arr1
    Które zmienne wskazują na ten sam obiekt w pamięci? 
        Żadne, bo zmienne które brały wartość od pierwszych się zmieniły, więc te pierwzse nei mają prawa się zmienić
    Wyjaśnij różnicę między przypisaniem b = 20 a y.value = 20. 
        b to zmienna, y.value to zmienna w obiekcie.
    */
    
//
// 2,
//

const shoppingList = {
  items: [],
  budget: 100
};
function addItem(list, item) {
  return {
    items: [...list.items, item],
    budget: list.budget
  };
}
function removeItem(list, itemName) {
  return {
    items: list.items.filter(i => i.name !== itemName),
    budget: list.budget
  };
}
function calculateTotal(list) {
  return list.items.reduce((sum, i) => sum + i.price, 0);
}
function canAfford(list) {
  return calculateTotal(list) <= list.budget;
}

let list1 = addItem(shoppingList, { name: "Chleb", price: 10 });
let list2 = addItem(list1, { name: "Masło", price: 15 });
let list3 = addItem(list2, { name: "Ser", price: 20 });
console.log(list3.items);
let list4 = removeItem(list3, "Masło");
console.log(list4.items);
let total = calculateTotal(list4);
console.log(total);
console.log(canAfford(list4));
console.log(shoppingList.items);

//
// 3.
//

console.log("nie mam pomysłu na to zadanie")
