//
// 1.
//
/*

function multiply(a, b) {
 return a * b;
}
const person = {
 name: 'Jan',
 age: 30
};
multiply.customProperty = 'To jest funkcja mnożenia';

Co zwrócą następujące wyrażenia i dlaczego? 
     multiply.name 
        multiply - Bo to nazwa funkcji
     multiply.length 
        2   - Bo to liczba zmiennych
     multiply.constructor 
        Function - Zwróci typ obiektu
     multiply.customProperty 
        To jest funkcja mnożenia - Zwróci coś co jest w linijce 13
Czy możemy dodać właściwości do funkcji? Dlaczego to działa? 
    Tak - Bo można
Co robi następujący kod i jaki będzie wynik? 
     function greet() { 
      console.log(`Cześć, ${this.name}!`); 
     } 
     greet.call(person); 
        No ukazuje "Cześć, person"

Jaka jest różnica między tymi dwoma wywołaniami? 
     multiply.call(null, 5, 3); 
     multiply.apply(null, [5, 3]); 
        Jedno daje 3 zmienne, a drugie 2 zmienne, z czego ta druga jest listą
        poza tym nazwa wykonanej akcji, jedno ma call a drugie apply
Jak operator new wykorzystuje metodę call() wewnętrznie? 
    const nazwa = new nazwa(zmienna1, zmienna2);
*/

//
// 2.
//

const product = {
  name: 'Laptop',
  price: 2999,
  category: 'Elektronika',
  displayInfo: function() {
    console.log("Produkt: "+this.name);
    console.log("Cena: "+this.price +" zł");
    console.log("Kategoria: "+this.category);
  },
  comparePrice: function(otherProduct) {
    if (this.price > otherProduct.price) {
      console.log(this.name +" jest droższy niż "+ otherProduct.name);
    } else if (this.price < otherProduct.price) {
      console.log(otherProduct.name+" jest droższy niż "+this.name);
    } else {
      console.log(this.name + " i "+ otherProduct.name + " mają tę samą cenę");
    }
  }
};

const book = {
  name: 'Wiedźmin: Ostatnie życzenie',
  price: 49,
  category: 'Książki',
  author: 'Andrzej Sapkowski'
};

const tshirt = {
  name: 'Koszulka sportowa',
  price: 99,
  category: 'Odzież',
  size: 'L'
};

const phone = {
  name: 'Smartfon Galaxy',
  price: 3999,
  category: 'Elektronika',
  brand: 'Samsung'
};

console.log("=== Informacje o produktach ===");
product.displayInfo.call(book);
product.displayInfo.call(tshirt);
product.displayInfo.call(phone);

console.log("=== Porównania cen ===");
product.comparePrice.call(book, phone);
product.comparePrice.call(tshirt, book);

//
// 3.
//

function Character(name, health) {
  this.name = name;
  this.health = health;
}

Character.prototype.introduce = function() {
  console.log("Jestem " + this.name + ", mam " + this.health + " HP");
};

function Warrior(name, health, weapon) {
  Character.call(this, name, health);
  this.weapon = weapon;
}

Warrior.prototype = Object.create(Character.prototype);
Warrior.prototype.constructor = Warrior;

Warrior.prototype.attack = function() {
  console.log(this.name + " atakuje używając " + this.weapon + "!");
};

function Mage(name, health, spell) {
  Character.call(this, name, health);
  this.spell = spell;
}

Mage.prototype = Object.create(Character.prototype);
Mage.prototype.constructor = Mage;

Mage.prototype.castSpell = function() {
  console.log(this.name + " rzuca czar: " + this.spell + "!");
};

function Paladin(name, health, weapon, spell) {
  Warrior.call(this, name, health, weapon);
  Mage.call(this, name, health, spell);
}

Paladin.prototype = Object.create(Character.prototype);
Paladin.prototype.constructor = Paladin;

Paladin.prototype.attack = Warrior.prototype.attack;
Paladin.prototype.castSpell = Mage.prototype.castSpell;

function healCharacter(character, amount) {
  character.health += amount;
  console.log(character.name + " został uzdrowiony o " + amount + " HP. Aktualne HP: " + character.health);
  Character.prototype.introduce.call(character);
}

function battleSimulation(char1, char2) {
  console.log("=== Rozpoczyna się walka między " + char1.name + " a " + char2.name + "! ===");

  let attacker = char1;
  let defender = char2;

  while (char1.health > 0 && char2.health > 0) {
    if (attacker.attack) {
      attacker.attack();
    } else if (attacker.castSpell) {
      attacker.castSpell();
    }
    defender.health -= 20;
    console.log(defender.name + " traci 20 HP. Aktualne HP: " + defender.health);
    if (defender.health <= 0) {
      console.log(attacker.name + "zwycięża!");
      break;
    }
    let temp = attacker;
    attacker = defender;
    defender = temp;
  }
}

const char1 = new Character("Zwykły Bohater", 100);
const warrior = new Warrior("Ragnar", 120, "Miecz");
const mage = new Mage("Merlin", 80, "Ognista kula");
const paladin = new Paladin("Uther", 150, "Młot", "Święty blask");

char1.introduce();
warrior.introduce();
mage.introduce();
paladin.introduce();
healCharacter(warrior, 30);
healCharacter(mage, 50);
battleSimulation(warrior, mage);
battleSimulation(paladin, warrior);
