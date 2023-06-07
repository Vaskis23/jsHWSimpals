/** ЗАДАЧА 35 - Итерация по свойствам объекта
 *
 * 1. Переберите все собственные свойства объекта
 *
 * 2. Если имя свойства (ключ) равно "key1" или "key3",
 * выведите значение свойства в консоль.
 */
// я использовал цыкл for in что бы перебрать все собственные свойства объекта .
//а внутри цыкла мы проверяем свойства с помощью условного оператора if 
// нужны квадратные скобки если имя свойства хранится в переменной, то обратиться к нему можно только так
const myObject = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN,
}
// вариант 1
// for (let key in myObject) {
//   if (key === 'key1' || key === 'key3') {
//     console.log(myObject[key]);
//   }
// }
// вариант 2
// через метод keys обекта и через метот перебора массива forEach
const keyObject = Object.keys(myObject);

keyObject.forEach((elements) => {
  if (elements === 'key1' || elements === 'key3') {
    console.log(myObject[elements])
  }
})