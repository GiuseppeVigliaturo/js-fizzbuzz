//con un ciclo genero i numeri da 1 a 100
/*
for (var i = 1; i <= 100; i++) {

//impongo la condizione per cui se una divisione per 3 e 5 ha resto 0 stampo fizzbuzz
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i,"FizzBuzz");
  }
  //impongo la condizione per cui se una divisione per 3 ha resto 0 stampo fizz

  else if (i % 3 == 0) {
    console.log(i,"Fizz");
  }
  //impongo la condizione per cui se una divisione per 5 ha resto 0 stampo buzz

  else if (i % 5 == 0  ) {
    console.log(i,"Buzz");
  }
  else {
    console.log(i);
  }
}
*/

//uso un ciclo while
var i = 1;
while (i <= 100) {

  //impongo la condizione per cui se una divisione per 3 e 5 ha resto 0 stampo fizzbuzz
    if (i % 3 == 0 && i % 5 == 0) {
      document.getElementById('result').innerHTML += "<li>" + i + " FizzBuzz" + "</li>";
      //console.log(i,"FizzBuzz");
    }
    //impongo la condizione per cui se una divisione per 3 ha resto 0 stampo fizz

    else if (i % 3 == 0) {
      document.getElementById('result').innerHTML +="<li>" +  i + " Fizz"+ "</li>";
      //console.log(i,"Fizz");
    }
    //impongo la condizione per cui se una divisione per 5 ha resto 0 stampo buzz

    else if (i % 5 == 0  ) {
      document.getElementById('result').innerHTML +="<li>" +  i + " Buzz"+ "</li>";
    //  console.log(i,"Buzz");
    }
    else {
      document.getElementById('result').innerHTML +="<li>" +  i +  "</li>";
    //  console.log(i);
    }

    i++;

}
