// #1-------
let currentDay;
switch (new Date().getDay()) {
    case 0:
        currentDay = "კვირა";
        break;
    case 1:
        currentDay = "ორშაბათი";
        break;
    case 2:
        currentDay = "სამშაბათი";
        break;
    case 3:
        currentDay = "ოთხაშბათი";
        break;
    case 4:
        currentDay = "ხუთშაბათი";
        break;
    case 5:
        currentDay = "პარასკევი";
        break;
    case 6:
        currentDay = "შაბათი";
        break;
}
console.log(`დღეს არის ${currentDay}.`);
// #2-------
let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49, 50,];
for(let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}
//#3------- აქ 0-დან 150-მდე ხელით ჩაწერა დამეზარა :)
let arr2 = [];
for(let i = 0; i < 151; i++){
arr2.push(i);
}
console.log(arr2);
let i = 0;
while(i < arr2.length){
    console.log(arr2[i]);
    i++;
};
// #4-------
let arr3 = [];
for(let i = 0; i < 101; i++){
arr3.push(i);
}
console.log(arr3);
let j = 0;
do {
	console.log(arr3[j]);
	j++;
} 
while (j < arr3.length);
// #5------- anu loopi 100jer da mati kvadratebi shevpushe mgoni es iko davaleba tu sworad gavige
let arr4 = []; 
for(let i = 1; i < 101; i++) {
arr4.push(i*i);
}
console.log(arr4);


