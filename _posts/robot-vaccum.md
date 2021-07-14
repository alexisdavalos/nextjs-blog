---
title: "How to Solve: Robot Vaccum Algorithm Problem"
excerpt: "Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively."
coverImage: "/assets/blog/posts/robot-vaccum-cover.jpg"
date: "2020-09-22T10:51:07.322Z"
author:
  name: Alexis Davalos
  picture: "/assets/blog/authors/alexis.jpeg"
ogImage:
  url: "/assets/blog/posts/robot-vaccum-cover.jpg"
topics:
  - "algorithms"
  - "coding"
  - "javascript"
  - "big-o"
---

Over the course of the last couple of weeks, I've been practicing a daily committment to solving at least one coding challenge per day. So today I'm going to be writing about my approach to solving the Robot Vaccum Problem and breaking down the complexity analysis. We will be focusing on writing the solution in **Javascript** in this article.

## Problem Statement

> Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.

### Starter Code:

```javascript
const robotVacuum = (string) => {
  // Write Solution Here
};

// Ex: Given the following strings...
console.log(robotVacuum("LR")); // "LR", return true
console.log(robotVacuum("URURD")); // "URURD", return false
console.log(robotVacuum("RUULLDRD")); // "RUULLDRD", return true
```

### Variable Initialization:

```javascript
const robotVacuum = (string) => {
  // Initialized Variables:
  let hashTable = {};
  let moves = {
    L: "R",
    R: "L",
    D: "U",
    U: "D",
  };
};
```

So here we are utilizing an **Object/Dictionary** to store the count of every instruction within the input string as well as an opposites **Object/Dictionary.**

We are now going to move forward to looping through our input string with a **for Loop** to populate **moveCounts in: <br>** _`O(n) time | O(n) space.`_

```javascript
// counting robot instructions
for (char of string) {
  // move/key not in hash table
  if (!hashTable[char]) {
    // initialize key as 1
    hashTable[char] = 1;
  } else {
    // increment key count by 1
    hashTable[char] += 1;
  }
}
```

After this **for Loop** we should see **moveCounts** populate like this if we were to print it out in a **Node** environment:

```javascript
// Example of passing "LR" into our function
robotVacuum("LR")
// Adding a print statement after the first for loop
console.log(hashTable);
// Result:
{ L: 1, R: 1 }
```

Next, we are going to compare the values stored in **moveCounts** utilizing our **oppositeMoves** **Object/Dictionary.**

```javascript
// loop through keys in opposite moves obj
for (key in hashTable) {
  // check equality of opposite counts
  if (hashTable[key] === hashTable[moves[key]]) {
    // keep looping
    continue;
  } else {
    // encountered uneven key pairs break out of loop
    return false;
  }
}
// All keys had even counts, cycled all keys
return true;
```

By using this mirroring technique with a pre-built **Object/Dictionary** you can take advantage of the `O(1) time` look-up speed to solve this quickly with a final complexity of: <br> _`O(n) time | O(n) space`_.

<h3>Final Solution Code:</h3>

```javascript
const robotVacuum = (string) => {
  // Initialized Variables:
  let hashTable = {};
  let moves = {
    L: "R",
    R: "L",
    D: "U",
    U: "D",
  };

  // counting robot instructions
  for (char of string) {
    // move/key not in hash table
    if (!hashTable[char]) {
      // initialize key as 1
      hashTable[char] = 1;
    } else {
      // increment key count by 1
      hashTable[char] += 1;
    }
  }

  // loop through keys in opposite moves obj
  for (key in hashTable) {
    // check equality of opposite counts
    if (hashTable[key] === hashTable[moves[key]]) {
      // keep looping
      continue;
    } else {
      // encountered uneven key pairs break out of loop
      return false;
    }
  }
  // All keys had even counts, cycled all keys
  return true;
};

// Ex Test Cases: Given the following strings...

console.log(robotVacuum("LR")); // "LR", return true
console.log(robotVacuum("URURD")); // "URURD", return false
console.log(robotVacuum("RUULLDRD")); // "RUULLDRD", return true
```

<p class="text-lg text-black text-bold">You can find the source code to this problem on <a class="text-gray-700  font-bold hover:underline hover:text-blue-500 duration-200 transition-colors" href="https://github.com/alexisdavalos/CodingChallenges/tree/master/RobotVaccum">Github</a></p>
