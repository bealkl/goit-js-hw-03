//GOIT javascript homework 03 task 1

'use strict';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';

user.hobby = 'skydiving';

user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`Elemen ${key} = ${user[key]}`);
}
