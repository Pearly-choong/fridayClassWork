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
document.getElementById('submit3').addEventListener('click', function(){

  var givenSentence = 'The good news is that everyone makes mistakes. All of the mistakes you make, have been made by others who started off just like you.';

  document.getElementById('result').innerHTML = '</br> Given Sentence: </br>' + givenSentence;

  var replacedSentence = givenSentence.replace(/mistakes/g, 'bugs');

  document.getElementById('message').innerHTML = '</br> Replace sentence : </br>' + replacedSentence;

});


// ============================= Algorithm 4 ======================

var foods = ['pizza','ice-cream','sushi'];
document.getElementById('add').addEventListener('click', function(){
  var newFood = document.getElementById('textBox').value;
  foods.push(newFood);
document.getElementById('result2').innerHTML = "new food has been added";
document.getElementById('result2').innerHTML += "<br>food array is now: " + foods;
});
