// przygotuj tablice liczby wpisz 4 liczby od 1 do 10 
// za pomoca concole.table wyświetl 

/*
// jak wylosować liczby 
// jest funcja losujaca od 0 do 1 (bez 1)
var los=Math.random();
console.log(los);
// co robimy z tą liczbą aby losować liczby od 1-49 
// robimy z tego zakres od 0 do 48 
los=los*49
console.log(los)
// pozbywamy się cześci ułamkowej 
los=Math.floor(los);
console.log(los);
los=los+1;// 0-48 1-49 
*/

var los2=Math.floor(Math.random()*49)+1;
console.log(los2);

// w lotto mamy 6 liczby 
// zad: przygotuj petle która wykonuje się 6 razy 
var tablicalosowa=[];
for (var i=0; i<6; i++) {  // 0 1 2 3 4 5  
    // za pomocą medody push dodajemy w pętli liczby do taboicy 
    los2=Math.floor(Math.random()*49)+1;
    // zmienną los2 dodaj do tablicy tablicalosowa 
    // zamim dodam to musze sprawdzić czy los2 jest w tablicy 
    if(tablicalosowa.includes(los2)){
        console.log("powtórka");
        i--; // wykonaj jeszcze raz jak jest powtórka 
    }
    else {
         tablicalosowa.push(los2);
    }
   
}
console.table(tablicalosowa);

// przygotuj funcje lotto 
// pobieramy wartosc z id=liczby do zmiennej 
// liczbyuser
function lotto(){
    //var loss=document.getElementById('liczby').value 
    var loss=""
    var nazwa
    var x
    for(i=1; i<=6;i++){
        nazwa='licz' + i // sklej licz z i czyli liczi
        x=document.getElementById(nazwa).value 
        loss=loss+x+" "
    }
    console.log(loss);
    loss=loss.trim();   // usuwamy spacje z końca i początku 
    var tabuser=loss.split(" ");
    console.log(tabuser);

    // jak przerwać wykonywanie funkcji 
    //alert("Błąd");
    //return 0;
    if(tabuser.length!=6){
        alert("Błąd w ilości liczb ");
        return 0;
    }
    else {  // mamy 6 elementów sprawdzam je 
         // najłtwiej  zrobić for of - borać kolejne elementy 
         for(var x of tabuser){
                var y=parseInt(x);
                if(isNaN(y) || y<=0 || y>49 || y!=x){
                    alert("Błąd w danych ");
                    return 0;
                }
         }
    }

    var ile=0;
    var zgad="";
    for(var liczba of tabuser ){
            liczba=parseInt(liczba);// zamień na liczbę 
            if( tablicalosowa.indexOf(liczba)>=0   ){
               // alert(liczba);
                ile++;
                zgad=zgad+liczba+" ";

            }
    }
    if(ile==0){
        document.writeln("Nie zgadłeś")
    }
    else if(ile==6){
        document.writeln("WYGRANA")
        
    }
    else if(x==x){
        document.writeln("nie mozna powtarzac liczby")
    }
    else {
        var dowrzucenia="Zgadłeś "+ ile + " liczb i są to "+zgad;
    }
    
    document.getElementById('wynik').innerHTML=dowrzucenia;

 }
 

