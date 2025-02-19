// Ques 1

// Take the input from the user , if user provide name then take age and check the eligibility as per below conditions
// if age is 18 or less give not eligible
// if age is more then 18 and equal to 40 give partially eligible
// if age is more then 40 give eligible



name=prompt('Enter you name')
if (name) {
    age=parseInt(prompt('Enter you age'))
    if (age <= 18) {
        console.log("Not eligible");
    } else if (age <= 40) {
        console.log("Partially eligible");
    } else {
        console.log("Eligible");
    }
} else {
    console.log("Name not given");
}