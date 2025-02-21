let num =parseInt(prompt('Enter a number'));

if ((num%3==0) && (num %5==0)){
    console.log("divible by both 3 and 5 ")
}
else if (num%5==0){
    console.log("divible by 5")

}
else if (num%3==0) {
    console.log('Divible by 3')

}
else{
    console.log("not divible by 3 and 5")
}
