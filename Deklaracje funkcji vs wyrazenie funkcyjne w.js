//
// 1.
//
/*
function calculateSum(a, b) { 
 return a + b; 
}

const calculateProduct = function(a, b) { 
 return a * b; 
}; 
    Która funkcja to deklaracja funkcji, a która to wyrażenie funkcyjne? 
        1 to funkcja, 2 to wyrażenie funkcyjne
    Która funkcja wymaga średnika na końcu i dlaczego? 
        druga, ponieważ to jest wyrażenie funkcyjne, i dana " funkcja " istnieje tylko w zmiennej calculateProduct, nie jako funkcja osobna
    Czy można przypisać funkcję calculateSum do innej zmiennej? Jeśli tak, jak to zrobić?
        chyba nie
*/

//
// 2.
//

const convertTemperature = function(c){
    return c*9/5+32;
}
console.log(convertTemperature(0));
console.log(convertTemperature(20));
console.log(convertTemperature(100));

//
// 3.
//

const todoManager = { 
 tasks: [], 
 addTask: function(taskName) {
     this.tasks.push(taskName);
 }, 
 removeTask: function(taskIndex) {
     console.log("Usunięto zadanie " + this.tasks[taskIndex-1]);
     this.tasks.splice(taskIndex-1, 1)
 }, 
 listTasks: function(){
     console.log("Lista zadań : ");
     for(let i =0; i < this.tasks.length; i++)
     console.log(i+1 +". " + this.tasks[i])
 },
 completeTask: function(taskIndex) {
     console.log("Wykonano zadanie " + this.tasks[taskIndex-1]);
     this.tasks.splice(this.taskIndex-1, 1)
 }
}; 
todoManager.addTask("Oddać mocz");
todoManager.addTask("Wstać z łóżka (opcjonalnie)");
todoManager.addTask("Sans Granie");
todoManager.listTasks();
todoManager.removeTask(2);
todoManager.listTasks();
todoManager.completeTask(1);
todoManager.listTasks();
