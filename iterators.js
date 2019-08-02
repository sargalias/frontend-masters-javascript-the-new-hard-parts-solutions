// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

// CHALLENGE 1

function sumFunc(arr) {
  // YOUR CODE HERE
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Uncomment the lines below to test your work
const array = [1, 2, 3, 4];
console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
  // YOUR CODE HERE
  let i = 0;
  function iterator() {
    const element = arr[i];
    i++;
    return element;
  }
  return iterator;
}

// Uncomment the lines below to test your work
const array2 = ['a', 'b', 'c', 'd'];
const myIterator = returnIterator(array2);
console.log(myIterator()); // -> should log 'a'
console.log(myIterator()); // -> should log 'b'
console.log(myIterator()); // -> should log 'c'
console.log(myIterator()); // -> should log 'd'



// CHALLENGE 2

function nextIterator(arr) {
  // YOUR CODE HERE
  let i = 0;
  return {
    next() {
      const element = arr[i];
      i++;
      return element;
    }
  }
}

// Uncomment the lines below to test your work
const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
console.log(iteratorWithNext.next()); // -> should log 1
console.log(iteratorWithNext.next()); // -> should log 2
console.log(iteratorWithNext.next()); // -> should log 3



// CHALLENGE 3

function sumArray(arr) {
  // YOUR CODE HERE
  // use your nextIterator function
  let sum = 0;
  const it = nextIterator(arr);
  for (let i = 0; i < arr.length; i++) {
    sum += it.next();
  }
  return sum;
}

// Uncomment the lines below to test your work
const array4 = [1, 2, 3, 4];
console.log(sumArray(array4)); // -> should log 10



// CHALLENGE 4

function setIterator(set) {
  // YOUR CODE HERE
  const it = set.values();
  return {
    next() {
      return it.next().value;
    }
  }
}

// Uncomment the lines below to test your work
const mySet = new Set('hey');
const iterateSet = setIterator(mySet);
console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'



// CHALLENGE 5

function indexIterator(arr) {
  // YOUR CODE HERE
  let i = 0;
  return {
    next() {
      const result = [i, arr[i]];
      i++;
      return result;
    }
  }
}

// Uncomment the lines below to test your work
const array5 = ['a', 'b', 'c', 'd'];
const iteratorWithIndex = indexIterator(array5);
console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
console.log(iteratorWithIndex.next()); // -> should log [2, 'c']



// CHALLENGE 6

function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function () {
  const words = this.str.split(' ');
  let i = 0;

  return {
    next() {
      if (i < words.length) {
        const word = words[i];
        i++;
        return {
          value: word,
          done: false,
        };
      }
      return { done: true };
    }
  }
}

// Uncomment the lines below to test your work
const helloWorld = new Words('Hello World');
for (const word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'


// CHALLENGE 7

function valueAndPrevIndex(array) {
  let i = 0;
  return {
    sentence() {
      const suffix = i === 0 ? 'first' : `was found after index ${i - 1}`;
      const element = array[i];
      i++;
      return `${element} ${suffix}`;
    }
  }
}

const returnedSentence = valueAndPrevIndex([4, 5, 6])
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());


//CHALLENGE 8

function* createConversation(string) {
  const data = yield new Promise(resolve => {
    setTimeout(() => {
      resolve(string === 'english' ? 'hello there' : 'gibberish')
    }, 3000);
  });
  console.log(data);
  challenge8();
}

function step(value) {
  it.next(value);
}

function challenge8() {
  it = createConversation('english');
  const futureData = it.next();
  futureData.value.then(step);
}

let it;
challenge8();



//CHALLENGE 9
function waitForVerb(noun) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${noun} runs`), 3000);
  });
}

async function f(noun) {
  const sentence = await waitForVerb(noun);
  console.log(sentence);
}

f("dog");

