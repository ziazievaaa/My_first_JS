// let obj = { key1:1, key2: 2, key3: 3 };

// console.log(obj.key1 + obj.key2 + obj.key3)

// console.log(obj);

// let user = { name: 'Inna ', surname: 'Halantiyk ', patronymic: 'Yuriivna ' };
// console.log(user);
// alert(user.name + user.patronymic + user.surname);

// let date = { year: 2022, month: '01', day: 30 };
// let result = date.year + '/' + date.month + '/' + date.day;
// alert(result);

// let arr = ['a', 'b', 'c'];
// let ky = 2;
// console.log(arr[ky]);

// let arr = [1, 2, 3, 4, 5];
// let key1 = 1;
// let key2 = 2;
// console.log(arr[key1] + arr[key2]);

// let obj = { 'a': 1, 'b': 2, 'c': 3 };
// let key = 'b';
// console.log(obj[key]);

// let arr = [1, 2, 3];
// console.log(typeof arr[0]);

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
arr2[1] = 'b';

console.log(arr2);

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// console.log('e' in obj);
// console.log('f' in obj);

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
delete obj.e;
console.log('e' in obj);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// delete arr[1];
// delete arr[3];
// console.log(arr);
// console.log(arr.length);

// const arr = ['a', 'b', 'c'];
// arr[1] = '!';
// console.log(arr);

const a = 1;
const b = 2;
const c = a + b;

console.log(c);

const arr = [1, 2, 3, 4, 5];
const res = arr[1] + arr[2];

console.log(res);



// let test1= prompt('first number');
// let test2= prompt('second number');
// if (test1 > test2) {
//     alert('first number bigger');
// } else {
//     alert('second number bigger');
// }

// let num1 = prompt('You 1 number');
// let num2 = prompt('You 2 number');
// if (num1 <=1  && num2 >= 3) {
//     alert('okey');
// } else {
//     alert('wrong');
// }

// let test = true;
// if (test === true) {
//     alert('true');
// } else {
//     alert('wrong');
// }
//

// let num =prompt('number?');
// let num1 = (num % 10);
// let num2 = (num - num1) / 10;
// let resultate = num1 + num2;

// if (num < 10 || num > 99) {
//     alert('this number is not super');
// } else {
    
//     if (resultate / 10 < 1) {
//         alert('сумма цифр однозначна');
//     } else {
//         alert('сумма цифр двузначна.')
//     }
// }



// let age = 47;
// let result;

// if (age >= 18) {
// 	if (age <= 23) {
// 		 result = 'от 18 до 23';
// 	} else {
// 		 result = 'больше 23';
// 	}
// } else {
// 	 result = 'меньше 18';
// }

// console.log(result);

// let min = prompt('min?')

// if (min >= 0 && min <= 20) {
//     console.log('1/3 godyn');
// } else if (min > 20 && min < 40) {
//     console.log('2/3 godyn');
// } else if (min >= 40  && min <= 60) {
//     alert('3/3 godyn');
// }else {
//     console.log('wrong');
// }


let ar = [ 5, 15, 30];
let summa = ar[0] + ar[1] + ar[2];

if (ar.length == 3) {
    console.log(summa);
}else{ console.log(false);}

// let str = '12345';
// let last = str[str.length - 1];

// if (last == 5) {
// 	console.log('!');
// }


let num = 40;
let str = String(num);
let last = str[str.length - 1];
if (last == 0) {
    console.log(true);
} else {
    console.log(false);
}

// let chee = prompt('number?');
// let fin = chee % 2;
// if (fin == 0) {
//     console.log('Число четнoe');
// } else {
//     console.log('Число HE четнoe');
// }


// let num5 = prompt('number?');
// let num6 = 3;
// let dil = num5 % num6;
// if (dil == 0) {
//     console.log('оно делится на 3');
// } else {
//     console.log('оно  делится на 3 с остатком '+ dil);
// }
// let month = prompt('number month?');
// if (month > 12 || month < 1) {
//     console.log('wrong');
// }
// else if (month == 12 || month <= 2) {
//     console.log('its winter!');
// } else if (month == 3 || month <= 5) {
//     console.log('its spring!');
// } else if (month == 6 || month <= 8) {
//     console.log('its summer!');
// } else  {
//     console.log('its autoum!');
// }

// let stroka = 12345;
// let ska = String(stroka);
// let first = ska[0];
// if (first==1 ||first==2||first==3) {
//     console.log('yes!!!');
// } else {
//     console.log('no');
// }


// let name6 = prompt('number 3x?');
// let name1 = name6 % 100;
// let name2 = name1 % 10;
// let name3 = (name6 - name1) / 100;
// let name4 = (name1 - name2) / 10;
// let rez = name2 + name3+name4;

// console.log(rez);

let z = [123046];
let s = String(z);
let qwe = +s[0] + +s[1] + +s[2];
let rty = +s[3] + +s[4] + +s[5];
if (qwe == rty) {
    console.log('yes');
} else {
     console.log('no');
}

let year=+prompt('number 1-4');
switch (year) {
    case (1):
        alert('winter');
        break;
    case (2):
        alert('spring');
        break;
    case (3):
        alert('autoumn');
        break;
    case (4):
        alert('summer');
        break;
    default:
        alert('wrong');
    break;
}

