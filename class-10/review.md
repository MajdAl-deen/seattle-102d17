# Review before the 201 Entrance Exam

- X Functions
- X Loops
- Conditionals
- X CSS
- X HTML
- X Linking
- X Logging

- Loops

For loop and  a while loop
for - executes a certain number of times
while - execute until a condition is true

Above the loop we had to make this userAnswer = 'yes'
while (userAnswer == 'no'){
    We do something in the loopo
    We do something to change the userAnswer variable
    Then evaluate again
}

for(var i = 7; i < 10; i = i + 1){
    we do somehting in here x amount of time
    we iterate or add to our counter, then evaluate/ i = i + 1
}

function getAnswer(){
    var message = prompt('Enter a message');
    var age = prompt('Enter your Age');
    var name = prompt('Enter your name');
    retrun [message, age, name];
}

message12 = getAnswer();
message12 = 'Hello There...'

***********************************
come back to this format of function

HTML
body - Anything in the body tag is displayed.  This is the content of the site.
nav > ul > li
Link to another page <a> tag or anchor tag
First item in html
<!doctype html>
Each tag has a specific property inline or block
<-inline tag->   <-inline tag->  <-inline tag->
block tag                   --------------------------------------------------------------------> 
A ----------------------
<-inline tag-> block tag -------------------------------------------------------------------------------------->
A A----------------

CSS
Target Data in CSS?
html tag <body> <li> <h1> <p>
class="class_name"   .class_name
id="id_name"    #id_name


JavaScript Conditionals
var age1 = '45'
var age2 = 45
             1 == 1                2 == 1
&& = ( (This must be true) && (this must be true) )

             1 == 1                2 == 1
|| = ( (This must be true) || (this must be true) )

+ = Concantonate ('Hello' + ' ' + 'There')
'Hello There'


=== 'use strict' 

does value check, but also a type check
'45' === 45  // This is false

'45' == 45 // This is true

= This is an assignment operator

var person = 'John'
var age = 21
 1 = 1