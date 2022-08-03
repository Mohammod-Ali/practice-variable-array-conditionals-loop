// 1. what is array?
// => An array is a collection of similar data elements stored at contiguous memory locations. 

// 2. how to declare an array in js?
var name2 = ['mohammod', 'ali'];
console.log(name2)

// 3. number of elements in an array?
console.log(name2.length)

// 4. what is index?
// 5. find the value of an element by index
console.log(name2.indexOf('mohammod'))

// 6. change an element by index
 name2[0] = 'lazim';
 console.log(name2)

//  7. undefined meaning in array?
// 8. how can you add and element to an array at the last position?
name2.push('habibi')
console.log(name2)

// 9. how can you remove an array at the last position?
name2.pop()
console.log(name2)
 
// 10. adde an element at the first element?
name2.unshift('hahaha')
console.log(name2)

// 11. remove the first element of an array?
name2.shift()
console.log(name2)