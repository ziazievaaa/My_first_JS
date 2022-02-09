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

// let z = [123046];
// let s = String(z);
// let qwe = +s[0] + +s[1] + +s[2];
// let rty = +s[3] + +s[4] + +s[5];
// if (qwe == rty) {
//     console.log('yes');
// } else {
//      console.log('no');
// }

// let year=+prompt('number 1-4');
// switch (year) {
//     case (1):
//         alert('winter');
//         break;
//     case (2):
//         alert('spring');
//         break;
//     case (3):
//         alert('autoumn');
//         break;
//     case (4):
//         alert('summer');
//         break;
//     default:
//         alert('wrong');
//     break;
// }

let ab = 2 ** 4;
let ba = 4 ** 2;
let re = ab != ba;
console.log(re);


// let vopros = confirm('are you 18 years old?');
// vopros ? alert('vzroslui') : alert('maliyk');
// let otvet = vopros == true ? alert('vzroslui') : alert('maliyk');

// let i = 1; // задаем какую-нибудь переменную

// while (i <= 5) {
//     console.log(i); // выводим содержимое i в консоль
//     i =i+ 2;// увеличиваем i на единицу при каждом проходе цикла
// }

// let i = 30;
// while ( i >= 1) {
//     console.log(i);
//     i--;
// }

// for (j = 100; j >= 0; j--){
//     console.log(j);
// }

let result = 0;
for (let y = 1; y <= 99; y+=2){
     result = result + y;
}
console.log(result);



let arra = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arra.length; i++) {
    console.log(arra[i]);
}

// let arka = [1, 2, 3, 4, 5, 6, 7, 8];
// for (i = 0; i < arka.length; i++) {
//     if (arka[i] % 2 != 0) {
//         console.log(arka[i]);
//     }
// }

let rsult = 0;
let ark = [1, 2, 3];
for (let i = 0; i < ark.length; i++) {
    rsult += ark[i] ** 2; 
} console.log(rsult);

let tryu=[2, 5, 9, 15, 1, 4];
for (let i = 0; i < tryu.length; i++) {
    if (tryu[i] > 2 && tryu[i] < 11) {
        console.log(tryu[i]);
    }
}



let mass = [5, 7, 20, 3, -58, -1, -6, 8, -4, 2];
let sym=0;
for (let i = 0; i < mass.length; i++){
    if (mass[i] > 0) {
        sym += mass[i];
    }
} console.log(sym);




let wer = [1, 2, 3, 4, 5];
let razom=0;
let serArifm;

for (let i = 0; i < wer.length; i++){
    razom += wer[i];
    serArifm = razom / wer.length;    
} console.log(serArifm);


let arr10 = [10, 20, 30, 50, 235, 3000];
let viznDes;

for (let i = 0; i < arr10.length; i++) {
    if ((arr10[i] / 10) < 10) {
        viznDes = arr10[i] / 10;   
    } else if ((arr10[i] / 10) < 99) {
        viznDes = arr10[i] / 100;
    } else if((arr10[i] / 10) > 100) {
        viznDes = arr10[i] / 1000;
    }if (Math.trunc(viznDes) == 1 || Math.trunc(viznDes) == 2 || Math.trunc(viznDes) == 5) {
        console.log(arr10[i]);
    }  
}
   
let arr11 = [2, 3, 5, 6, 9, 7, 8];
for (let i = arr11.length - 1; i >= 0;i--){
    console.log(arr11[i]);
}

// Дан массив с числами. С помощью цикла выведите на экран все элементы,
//  значение которых совпадает с их порядковым номером в массиве.
let arr12 = ['a', 1, 5, 6, 4, 5, 8];

for (let i = 0; i < arr12.length; i++) {
    if (i == arr12[i]) {

        console.log(i);
    }
}


// let arr13 = [4, 5, 2, 3, 8, 6, 4];
// for (i = 0; i < arr13.length-1; i++){
//     document.write(arr13[i]+'</br>');
// }

let week = ['mon', 'tue', 'wen', 'thue', 'fri', 'thuter', 'sun'];

for (i = 0; i < week.length ; i++) {
    // if (week[i] >6) {
    //     document.write(week[i]+'<\br>');
    // }else  {
    //     document.write(week[i] +'</b');
    // }
     
    console.log(week[i]);
    // else { document.write(week[i] + '</b>' + '</br>');
        
    
}




let arr17 = [1, 0, 2, 3, 0, 0, 4, 5, 0, 0, 12];
let rezyltat = 0;
for (let i = 0; i < arr17.length; i++){
    if (arr17[i] == 0) {
        rezyltat++;
    }   
}console.log(rezyltat);




// let allCars = [];

// for (let i = 0; i < 5; i++) {
//     allCars[i] = {
//     firmName: prompt('What firm name of your car?', ''),
//     modelName: prompt('What model name of your car?', ''),
//     engineDisplacement: prompt('What engine displacement  of your car?', 0),
//     }
//     console.log(allCars[i]);
// } 

// for (let i = 0; i < 5; i++) {
//     if (allCars[i].engineDisplacement > 2.0) {  
//         console.log(allCars[i]);
//     } 
// }


  

  



let arr19 = [1, 0, 2, 3, 0, 4, 5, 0, 0];
let num1 = 0;
for (let elem of arr19) {
    if (elem == 0) {
        num1++;
       
    } 
}console.log(num1);


let arr20 = [2, 5, 9, 15, 1, 4];
for (let i = 0; i < arr20.length; i++) {
    if (arr20[i] > 3 && arr20[i] < 10) {
        console.log(arr20[i]);
    }
} 


let arr21 = [1, 2, 3, 4, 5];
let rty = 0;
for (let elem of arr21) {
    rty += elem;
   
} console.log(rty);

let obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let qwer = 0;
for (let key in obj1) {
    qwer += obj1[key];
} console.log(qwer);


let arr22 = [1, 2, 3, 4, 5, 6, 0, 4, 2, 8,];
for (let elem of arr22) {
    console.log(elem);
    if (elem == 0) {
        break;
    }
}

let arr23 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let qaq = 0;
let aza = 0;
for (elem of arr23) {
    qaq += elem;
    aza ++;
     
    if (qaq > 20) {
        break;
    }
} console.log(aza);

// let qaz = [2, 51, 185, 11, 5, 6, -40, 50, 4,];
// let rest = 0;

// for (let i = 0; i < qaz.length; i++) {
//     // 2. Перевірити чи є в циклі елемент 5, якщо є то повернути його індекс, якщо немає повернути null
//      // 3. Перевірити чи є в циклі елемент 10, якщо є то повернути його індекс, якщо немає повернути null
//     if (qaz[i] == 5) {
//         console.log(i);
//     }
    
//     if (qaz[i] == 10) {
//         console.log(i);
//     }
     
//     // 1. Знайти найбільший елемент в масиві
//     if (qaz[i] > rest) {
//         rest = qaz[i];
//         console.log(rest);
//     }
// } 


let arr24 = [2, 51, 185, 11, 15, 6, -40, 50, 4];
let flag = false;
let rea;
for (let i = 0; i < arr24.length; i++) {
    if (i === 5) {
        flag = true;
       
    } rea= arr24[i];
	}


if (flag === true) {
   
	console.log(rea);
} else {
	console.log(null);
}