// meaning of : >, <, <=, >=, ==, !=, ===, !==,
// meaning of &&
// meaning of ||
// let's say you have x amount of money. if you have more than 80,000. then if more than 60,000 then you will by a gaming laptop. if you more then 40,000 then you will by lenovo yoga. if you have more than 20,000 then you will by an used laptop, otherwise, you will use your phone.

var money = 15000;
if(money >= 80000){
    console.log('mac')
}else if(money >= 60000){
    console.log('gaming laptop')
}else if (money >= 40000){
    console.log('lenovo yoga')
}else if(money >= 20000){
    console.log('old laptop')
}else{
    console.log('use mobile phone')
}