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
