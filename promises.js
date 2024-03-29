// Challenge 1

function sayHello() {
  setTimeout(() => console.log('Hello'), 1000);
}

// Uncomment the line below when ready
sayHello(); // should log "Hello" after 1000ms


// Challenge 2
var promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('Resolved'), 1000);
});

// Should print out "Resolved!"
// ADD CODE HERE
promise.then(console.log);


// Challenge 3

promise = new Promise(function (resolve, reject) {
  reject('Rejected');
})

// Should print out "Reject!"
// ADD CODE HERE
promise.catch(console.log);


// Challenge 4

promise = new Promise(function (resolve, reject) {
  resolve('Promise has been resolved!');
});

// Uncomment the lines below when ready
promise.then(console.log);
console.log("I'm not the promise!");


// Challenge 5
function delay() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
delay().then(sayHello);


// Challenge 6
//
// ADD CODE BELOW
const secondPromise = Promise.resolve('Second!');
const firstPromise = secondPromise;
firstPromise.then(console.log);


// Challenge 7
const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  const numCalls = 3;
  const promises = [];
  for (let i = 0; i < numCalls; i++) {
    promises.push(fakeAPICall(i));
  }
  return Promise.all(promises);
}

getAllData().then(console.log);