/** ЗАДАЧА 23 - ИЛИ и И операторы
 *
 * Что будет выведено в консоль?
 */

console.log(3 || (true && null) || false)
//оператор или находит первое правдивое значаение и это будет 3 тк выражение в скобках (true && null) вернет null и вторым шагом будет сравнивать 3 и null и тк 3 правдивое он вернет этот результат