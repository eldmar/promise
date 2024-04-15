"use strict";

console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});

Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => {
    throw new Error("My Error");
  })
  .catch(() => 1)
  .then((x) => x + 1)
  .then((x) => console.log(x))
  .catch(console.error);

const promise = new Promise((res) => res(2));
promise
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .finally((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
  });
