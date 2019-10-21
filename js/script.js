console.log('Friday Class Work');


// ============================= Algorithm 1 ======================
document.getElementById('submit').addEventListener('click', function(){

  // declare and prompt user to enter a string
  var givenString = prompt('Enter a word');
  console.log(givenString);

  // reverse function
  function reverse(){
    var splitString = givenString.split('');

    var reversedString = splitString.reverse();

    var joinString = reversedString.join('');

    console.log(joinString);
    return joinString;


  }


// call the function
reverse();

document.getElementById('result').innerHTML = '</br> your string is ' + givenString + '</br> and reverse is ' + reverse();

// to check if it is palindrome
  if(reverse() == givenString ){
    document.getElementById('message').innerHTML = '</br>' + givenString + ' is palindrome.';
  } else {
    document.getElementById('message').innerHTML = '</br>' + givenString + ' is not palindrome.';
  }

  // document.getElementById('myForm').onsubmit = function(){
  //
  // }
});


// ============================= Algorithm 2 ======================
document.getElementById('submit2').addEventListener('click', function(){
  var number = prompt('Enter a number');
  console.log(number);

  // if ((number == 0) && (number % 2 == 0)){
  //   document.getElementById('message').innerHTML = '</br>' + number + ' is even number.';
  // } else {
  //   document.getElementById('message').innerHTML = '</br>' + number + ' is odd number.';
  // }
  function isEven(){
    if (number % 2 == 0 ){
    document.getElementById('result').innerHTML = " ";
    document.getElementById('message').innerHTML = '</br>'+ number + ' is even number.';
    } else {
    document.getElementById('result').innerHTML = " ";
    document.getElementById('message').innerHTML = '</br>' + number + ' is odd number.';
    }
  }

  isEven();

});


// ============================= Algorithm 3 ======================
var foods = ['pizza','ice-cream','sushi'];

document.getElementById('add').addEventListener('click', function(){
  var newFood = document.getElementById('textBox').value;
  foods.push(newFood);
document.getElementById('result2').innerHTML = '</br> new food has been added!';
document.getElementById('result2').innerHTML += '<br>food array is now: ' + foods;
});


document.getElementById('delete').addEventListener('click', function(){
var deleteFood = document.getElementById('textBox').value;

for(var i = 0; i < foods.length; i++){
  if(foods[i] === deleteFood){
    foods.splice(i,1);
    document.getElementById('result2').innerHTML = "<br>food has been deleted! ";
    document.getElementById('result2').innerHTML += '<br>food array is now: ' + foods;
    document.getElementById('texBox').innerHTML = '';
  }
}
});


document.getElementById('search').addEventListener('click', function(){
var searchFood = document.getElementById('textBox').value;

  for(var i=0; i < foods.length; i++){
  if(foods[i] === searchFood) {
    foods.search(i);
    document.getElementById('result2').innerHTML += '<br>food found: ' + foods;
    document.getElementById('texBox').innerHTML = '';
    }
  }
});
