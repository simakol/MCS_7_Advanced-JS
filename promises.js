//* promise - це обʼєкт, який представляє результат асинхронної операції (створення промісу є синхронною операцією, а його обробка - асинхронною (мікрозадача))

// В event loop асинхронні операції починають виконуватись тільки тоді як закінчаться усі синхронні (тобто стек викликів буде пустим). У нас є дві черги для асинхронних задач: Макрозадачі (setTimeout, setInterval, addEventListener) і Мікрозадачі (promise). Макрозадачі починають виконуватись (падати в стек викликів) тільки тоді, коли черга мікрозадач буде пуста. Це означає що перед виконанням будь-якої макрозадачі спочатку повинні виконатись усі мікрозадачі які є у черзі. (Наприклад, якщо у нас одночасно виконався таймаут і проміс, то проміс буде виконано першим, бо він є мікрозадачею)

/*
Проміс має 3 стани:
- Pending - стан створення промісу, означає, що проміс поки що не виконався
- Fullfilled - проміс виконався успішно (обролюється методом .then())
- Rejected - проміс виконався неуспішно (обролюється методом .catch())

-- Також між програмістами ви можете почути термін Settled - означає, що проміс виконався (тобто, два стани: Fullfilled, Rejected)
*/

console.log(1);
const promise = new Promise((resolve, reject) => {
  //* resolve - фукнція, яка переведе проміс у стан Fullfilled
  //* reject - функція, яка переведе проміс у стан Rejected
  console.log(2);

  //   const userNumber = Number(prompt("Enter your number"));
  const userNumber = 5;

  if (isNaN(userNumber)) {
    reject("значення не є числом");
  }

  if (userNumber <= 0) {
    reject(`${userNumber} <= 0`);
  } else {
    resolve(`${userNumber} > 0`);
  }
});

// console.log(promise);

// асинхронна операція
promise
  .then((value) => {
    console.log(`THEN BLOCK: ✅ ${value}`);
    return 10
  })
  .then((value) => console.log(`THEN 2: ${value}`))
  .catch((err) => console.log(`CATCH BLOCK: ❌ ${err}`))
  .finally(() => {
    console.log("FINALLY: проміс завершився");
  });

console.log(3);
