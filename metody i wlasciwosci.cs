//
// 1.
//

public class Kalkulator 

{ 

 public int LiczbaOperacji { get; private set; } 
 
 public int Dodaj(int a, int b) 
 { 
  LiczbaOperacji++; 
  return a + b; 
 } 

 

 public int Pomnoz(int a, int b) 
 { 
  LiczbaOperacji++; 
  return a * b; 
 } 
 public double Podziel(double a, double b) 
 { 
  if (b == 0) 
  { 
   return 0; 
  } 
  LiczbaOperacji++; 
  return a / b; 
 } 

 public void ResetujLicznik() 
 { 
  LiczbaOperacji = 0; 
 } 
} 

 

var kalkulator = new Kalkulator(); 
int wynik1 = kalkulator.Dodaj(5, 3); 
int wynik2 = kalkulator.Pomnoz(4, 2); 
double wynik3 = kalkulator.Podziel(10, 2); 
Console.WriteLine($"Liczba operacji: {kalkulator.LiczbaOperacji}"); 

/*

    Jaki typ zwraca metoda Dodaj? Ile parametrów przyjmuje? 
        Żadnej, kod zwraca błąd
    Dlaczego właściwość LiczbaOperacji ma prywatny setter? 
        Żadnej, kod zwraca błąd
    Ile wyniesie wartość LiczbaOperacji po wykonaniu kodu użycia? 
        Żadnej, kod zwraca błąd
    Co zwróci metoda Podziel(10, 0)? 
        Żadnej, kod zwraca błąd
    Jak można wywołać metodę ResetujLicznik i co się stanie z wartością LiczbaOperacji? 
        Żadnej, kod zwraca błąd
*/

//
// 2.
//

using System.ComponentModel.Design;

Console.WriteLine("Liczenie BMI");
while (true) {
    // Deklaracja Zmiennych
    Console.WriteLine("Podaj swoją wagę w Kilogramach: ");
    double waga = Convert.ToDouble(Console.ReadLine());

    Console.WriteLine("Podaj swój wzrost w Metrach: ");
    double wzrost = Convert.ToDouble(Console.ReadLine());

    double bmi = Convert.ToDouble(waga / (wzrost * wzrost));

    Console.WriteLine($"Twoje BMI to : {bmi:f2}");


    if (bmi < 18.5) // Tu liczymy bmi
        Console.WriteLine("Masz niedowagę, zjedz coś, pomoże ci");
    else if (bmi < 25)
        Console.WriteLine("Masz prawidłową wagę, i dobrze");
    else if (bmi < 30)
        Console.WriteLine("Masz nadwagę, schudnij i będziesz miał dziewczyne / chłopaka");
    else
        Console.WriteLine("Masz otyłość, schudnij, serio");
    Console.WriteLine("Jeszcze Raz (T/N)");
    char opcja = Convert.ToChar(Console.ReadLine());
    if (opcja == 't' || opcja == 'T')
    {
        Console.WriteLine("Jeszcze Raz");
    }
    else if (opcja == 'n' || opcja == 'N')
    {
        break;
    }
    else
    {
        Console.WriteLine("Podano złą opcję, wyłączam program");
    }
   }
   
  //
  // 3.
  //
  
  using System;
using System.Collections.Generic;

public class Transaction
{
    public string Type { get; set; }
    public decimal Amount { get; set; }
    public DateTime Date { get; set; }
}

public class BankAccount
{
    public string AccountNumber { get; set; }
    public decimal Balance { get; private set; }
    public string Owner { get; set; }
    public List<Transaction> Transactions { get; private set; }

    public BankAccount(string accountNumber, decimal initialBalance, string owner)
    {
        AccountNumber = accountNumber;
        Balance = initialBalance;
        Owner = owner;
        Transactions = new List<Transaction>();
    }

    public void Deposit(decimal amount)
    {
        Balance += amount;
        Transactions.Add(new Transaction
        {
            Type = "deposit",
            Amount = amount,
            Date = DateTime.Now
        });

        Console.WriteLine($"Dodano {amount} zł do konta, aktualny balans: {Balance}");
    }

    public void Withdraw(decimal amount)
    {
        if (amount > Balance)
        {
            Console.WriteLine("ERROR: Masz za małe saldo na koncie, aby wykonać tę operację");
        }
        else
        {
            Balance -= amount;
            Transactions.Add(new Transaction
            {
                Type = "withdraw",
                Amount = amount,
                Date = DateTime.Now
            });

            Console.WriteLine($"Usunięto {amount} zł z konta, aktualny balans: {Balance}");
        }
    }

    public void GetBalance()
    {
        Console.WriteLine($"Aktualny balans: {Balance}");
    }

    public void GetTransactionHistory()
    {
        Console.WriteLine("Historia transakcji:");
        foreach (var t in Transactions)
        {
            Console.WriteLine($"{t.Date}: {t.Type} - {t.Amount} zł");
        }
    }
}

public class Program
{
    public static void Main()
    {
        BankAccount bankAccount = new BankAccount("1234567890", 1000, "Anna Nowak");

        bankAccount.Deposit(500);
        bankAccount.Withdraw(200);
        bankAccount.Withdraw(2000);
        bankAccount.GetBalance();
        bankAccount.GetTransactionHistory();
    }
}
