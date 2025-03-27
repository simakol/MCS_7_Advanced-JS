/*
 * Скалярні типи:
 * - boolean
 * - number
 * - string
 * - null and undefined
 *
 * Складні типи:
 * - object
 * - array
 */

//* Скалярні типи для змінних:
// let isOpen: boolean = true;
// let pricePerItem: number = 3000;
// let username: string = 'Oleksii';
// let empty: null = null;
// let notValue: undefined = undefined;

//* Типізація параметрів функції:
// function foo(firstName: string, lastName: string, age: number) {
//   console.log(`${firstName} ${lastName} is ${age} years old.`);
// }

// foo('Garrett', 'Walton', 30);

//* Складні типи:

//* object

type Book = {
  title: string;
  description: string;
  rating: number;
};

// const bookJS: Book = {
//   title: 'JS',
//   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//   rating: 9,
// };

// const bookHTML: Book = {
//   title: 'HTML',
//   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//   rating: 8.5,
// };

//* array
//* v1
// const temperature: number[] = [10, 15, 12.5, 13];
//* v2
// type Temperature = number[];
// const temperature: Temperature = [10, 15, 12.5, 13];

const property: (string | number)[] = ['rating', 10, 'a', 111];

const books: Book[] = [
  {
    title: 'JS',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
    rating: 9,
  },
  {
    title: 'HTML',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
    rating: 8.5,
  },
  {
    title: 'CSS',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
    rating: 9,
  },
];
