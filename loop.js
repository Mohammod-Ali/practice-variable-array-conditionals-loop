// 1. display "ajke amar mon valo nei" gor 39 times

for(var i = 1; i <= 39; i++){
    console.log('ajke amar mon valo nei')
}

// 2. display numbers between 58 to 98.

for(var i = 58; i <= 98; i++){
    console.log(i)
}

// 3. show all even numbers from 412 to 456.

for(var i = 412; i <= 456; i++){
    console.log(i)
    i = i + 1;
}

// 4. show all odd numbers from 581 to 623.
for(var i = 581; i <= 623; i++){
    console.log(i)
    i += 1;
}

// 5. difference between while loop and for loop?
// => Use a for loop when you know the loop should execute n times. Use a while loop for reading a file into a variable. Use a while loop when asking for user input. Use a while loop when the increment value is nonstandard.

// 6. Declare an array for all the topics that you have learned last few days display then as output
 
var skills = ['html', 'css', 'bootstrap', 'tailwind', 'javascript']
for(var i = 0; i < skills.length; i++){
    var skill = skills[i]
    console.log(skill)
} 

// 7. create an array for all the mobile phone. Display all the elements of the array by using a while loop

var mobiles = ['myphone', 'symphony', 'maximus', 'samsung', 'oneplus']

var i = 0;
while(i < mobiles.length){
    var mobile = mobiles[i]
    console.log(mobile)
    i++
}

// 8. run a loop frm 30 to 86. this will stop if the values get higher than 44

for(var i = 30; i <= 86; i++){
    if(i == 44){
        break
    }
    console.log(i)
}

// 9. display the prices if the prices is lower than 200
var books = [150, 300, 250, 180, 345];
for(var i = 0; i < books.length; i++){
    var book = books[i]
    if(book > 200){
        continue
    }
    console.log(book)
}