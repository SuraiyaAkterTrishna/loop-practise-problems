var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];
for(var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if(number > 100){ //100 er upore gelei theme jabe
        break;
    }
}
for(var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if(number > 50){ //50 er upore gele skip korbe
        continue;
    }
    console.log(number);
}

