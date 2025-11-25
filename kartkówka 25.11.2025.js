let students = [ 
 { name: "Anna Kowalska", grades: [5, 4, 5, 5, 4], attendance: 95, behavior: "bardzo dobra" }, 
 { name: "Jan Nowak", grades: [3, 3, 2, 4, 3], attendance: 78, behavior: "dobra" }, 
 { name: "Maria Wiśniewska", grades: [5, 5, 5, 5, 5], attendance: 100, behavior: "bardzo dobra" }, 
 { name: "Piotr Kowalczyk", grades: [2, 3, 2, 2, 3], attendance: 65, behavior: "poprawna" }, 
 { name: "Ewa Zielińska", grades: [4, 4, 5, 4, 4], attendance: 88, behavior: "dobra" }, 
 { name: "Tomasz Lewandowski", grades: [3, 4, 3, 3, 4], attendance: 82, behavior: "bardzo dobra" }, 
 { name: "Katarzyna Dąbrowska", grades: [5, 4, 5, 4, 5], attendance: 92, behavior: "dobra" }, 
 { name: "Michał Wójcik", grades: [2, 2, 3, 2, 2], attendance: 58, behavior: "nieodpowiednia" } 
];
let temp;
for(let i =0; i < students.length; i++){
    temp = i+1;
    console.log("["+temp+"] "+students[i].name);
};
temp = 0;
let perfectAttendance = 0;
let lowAttendance = 0;

while (temp < students.length){
    if (students[temp].attendance > 90){
        console.log("Uczeń "+ students[temp].name + "ma wzorową frekwencję!");
        perfectAttendance++;
    }
    else if (students[temp].attendance < 75){
        console.log("Uczeń "+ students[temp].name + "ma niską frekwencję!");
        lowAttendance++
    }
    else{
        console.log("")
    }
    temp++;
}
console.log("Liczba uczniów z wzorową frekwencją : "+ perfectAttendance +".");
console.log("Liczba uczniów z niską frekwencją : "+ lowAttendance +".");
let avg = [];
for (let i = 0; i < students.length; i++){
    temp = 0;
    for (let j = 0; j < students[i].grades.length; j++)
    {
        temp = temp + students[i].grades[j];
    }
    avg[i] = (temp/students[i].grades.length).toFixed(2);
    console.log("Średnia ocen ucznia "+ students[i].name +" : "+ avg[i])
}
/*
for(let i = 0; i < students[i].length; i++){
    switch students[i].behaviour{
        case "bardzo dobra":
            console.log("Uczeń " + students[i].name + " ma wzorowe zachowanie!" );
            break;
        case "dobra":
            console.log("Uczeń " + students[i].name + " ma dobre zachowanie!");
            break;
        case "poprawna":
            console.log("Uczeń " + students[i].name + " ma poprawne zachowanie. Przydałoby się coś tam zrobić :/");
            break;
        case "nieodpowiednia":
            console.log("Uczeń " + students[i].name + " ma nieodpowiednie zachowanie. Natychmiastowa rozmowa z wychowawcą zalecana.")
            break;
        default:
            console.log("ae");
            break;
    }
}
*/
