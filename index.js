
let a = prompt('введіть перше число',0);
let b = prompt('введіть друге число', 0);
let userQuention = prompt('Які дії з числами бажаєте здійснити? Оберіть з запропонованих: +, -, *, /');
if (userQuention == '+') {
    alert('Результат:' + (+a + +b));  
} else if (userQuention == '-') {
    alert('Результат:' + (+a - +b));  
} else if (userQuention == '*') {
    alert('Результат:' + (+a * +b));
} else if (userQuention == '/') {
    alert('Результат:' + (+a / +b));
}  else {
    alert('Не правильний вибір');
}