//
// 1.
//

/*

function Dog(name) { 
 this.name = name; 
}
const myDog = new Dog('Burek'); 
const myObject = {}; 
const myString = 'Hello'; 
const myNumber = 42; 

    Co zwróci myDog.constructor? Dlaczego? 
        Nic, bo nie jest on w console.log / document.write
    Co zwróci myObject.constructor? Dlaczego? 
        Nic, bo nie jest on w console.log / document.write
    Co zwróci myString.constructor? Jak to możliwe, skoro string jest typem prymitywnym? 
        Bo myString to tylko nazwa
    Czy poniższe porównania zwrócą true czy false? 
         myDog.constructor === Dog 
            true
         myObject.constructor === Object 
            true
         myString.constructor === String 
            true
         myNumber.constructor === Number 
            true
    Która skladnia jest lepsza i dlaczego? 
        const a = 'tekst'; 
        const b = new String('tekst'); 
        
        Obie są poprwane. Użycie ich zależy od potrzeby. Obiekt czy zmienna

*/

//
// 2.
//
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function Movie(title, director, duration) {
  this.title = title;
  this.director = director;
  this.duration = duration;
}

function Song(title, artist, duration) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
}

function identifyMedia(item) {
  if (item.constructor === Book) {
    console.log("Książka: " + item.title + " autorstwa" + item.author + ". " + item.pages + "stron");
  } else if (item.constructor === Movie) {
    console.log("Film: " + item.title + " reżyseria " + item.director + ", czas trwania " + item.duration +" min");
  } else if (item.constructor === Song) {
    console.log("Piosenka: " + item.title + " wykonawca "+ item.artist + " czas trwania " +item.duration+" min");
  } else {
    console.log("Nieznany typ mediów");
  }
}

const book1 = new Book("Wiedźmin: Ostatnie życzenie", "Andrzej Sapkowski", 320);
const movie1 = new Movie("Oppenheimer", "Christopher Nolan", 148);
const song1 = new Song("遥か彼方", "ASIAN KUNG-FU GENERATION", 4);
const randomObj = { name: "Obiekt testowy", value: 42 };
console.log(identifyMedia(book1));
console.log(identifyMedia(movie1));
console.log(identifyMedia(song1));
console.log(identifyMedia(randomObj));

//
// 3.
//

function BasicAccount(username, email) {
  this.username = username;
  this.email = email;
  this.accountType = "basic";
  this.maxProjects = 3;
}

function PremiumAccount(username, email) {
  this.username = username;
  this.email = email;
  this.accountType = "premium";
  this.maxProjects = 10;
  this.supportPriority = true;
}

function EnterpriseAccount(username, email, companyName) {
  this.username = username;
  this.email = email;
  this.companyName = companyName;
  this.accountType = "enterprise";
  this.maxProjects = Infinity;
  this.supportPriority = true;
  this.dedicatedManager = true;
}

function getAccountInfo(account) {
  let info = {};
  if (account.constructor === BasicAccount) {
    info = {
      type: "Basic Account",
      features: ["Podstawowe funkcje"],
      limits: `Maksymalnie ${account.maxProjects} projekty`
    };
  } else if (account.constructor === PremiumAccount) {
    info = {
      type: "Premium Account",
      features: ["Priorytetowe wsparcie", "Większy limit projektów"],
      limits: `Maksymalnie ${account.maxProjects} projektów`
    };
  } else if (account.constructor === EnterpriseAccount) {
    info = {
      type: "Enterprise Account",
      features: ["Priorytetowe wsparcie", "Dedykowany menedżer", "Nielimitowane projekty"],
      limits: "Brak limitu projektów"
    };
  } else {
    info = {
      type: "Nieznany typ konta",
      features: [],
      limits: "Brak danych"
    };
  }
  console.log(info);
}

function canCreateProject(account, currentProjects) {
  if (currentProjects < account.maxProjects) {
    console.log("Możesz utworzyć nowy projekt. Obecnie masz "+currentProjects);
  } else {
    console.log("Osiągnięto limit projektów "+account.maxProjects);
  }
}

function upgradeAccount(account, newType) {
  let upgradedAccount;
  if (newType === "premium" && account.constructor !== PremiumAccount) {
    upgradedAccount = new PremiumAccount(account.username, account.email);
    console.log(`Konto ${account.username} zostało zaktualizowane do Premium.`);
  } else if (newType === "enterprise" && account.constructor !== EnterpriseAccount) {
    upgradedAccount = new EnterpriseAccount(account.username, account.email, account.companyName || "Firma");
    console.log(`Konto ${account.username} zostało zaktualizowane do Enterprise.`);
  } else {
    console.log("Nie można dokonać aktualizacji lub konto już ma ten typ.");
    upgradedAccount = account;
  }
  return upgradedAccount;
}

const basic = new BasicAccount("janek", "janek@example.com");
const premium = new PremiumAccount("ania", "ania@example.com");
const enterprise = new EnterpriseAccount("marek", "marek@example.com", "TechCorp");


getAccountInfo(basic);
getAccountInfo(premium);
getAccountInfo(enterprise);

canCreateProject(basic, 2);
canCreateProject(basic, 3);
canCreateProject(premium, 9);
canCreateProject(premium, 10);
canCreateProject(enterprise, 1000);

let upgraded = upgradeAccount(basic, "premium");
getAccountInfo(upgraded);

upgraded = upgradeAccount(upgraded, "enterprise");
getAccountInfo(upgraded);
