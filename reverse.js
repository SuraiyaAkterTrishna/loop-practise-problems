// while loop reverse
var number = 10; 
while(number >=1) {
    // console.log(number);
    number--;
}

// for loop reverse
for(var i = 10; i >= 1; i--) {
    // console.log(i);
} 

// reverse array
var fruits = ['apple', 'orange', 'mango', 'jackfruit', 'grape', 'guava', 'watermelon'];
for(var i = 1; i < fruits.length; i++) {
    var fruit = fruits[i];
    // console.log(fruit);
}
for(var i = fruits.length-1; i > 1; i--) {
    var fruit = fruits[i];
    console.log(fruit);
}