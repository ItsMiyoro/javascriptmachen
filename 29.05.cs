    class Student{
        string imie;
        string nazwisko;
        double[] oceny;
        double dodajOcene(double ocena){
            oceny.Add(ocena);
            return oceny;
        }
        int obliczSrednia(){
            int liczby;
            for (int i = 0; i < oceny.length; i++){
                liczby=liczby+oceny[i];
            }
            liczby = liczby/oceny.length;
            return liczby;
        }
    }
    class Product{
        string nazwa;
        int ilosc;
        double cenaJednostkowa;
        int dodajProdukty(int ilosc){
            this.ilosc=this.ilosc+ilosc;
            return this.ilosc;
        }
        int usunProdukty(int ilosc){
            if (ilosc<this.ilosc)
                this.ilosc=this.ilosc-ilosc;
            else
                return -1;
        }
    }
