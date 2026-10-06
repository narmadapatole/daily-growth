import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const JavaScriptCodes = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      {/* ========================================================= */}
      {/* PAGE HEADER */}
      {/* ========================================================= */}

      <Card>
        <CardContent>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            flexWrap="wrap"
          >
            <Typography variant="h4" fontWeight={800}>
              🟨 JavaScript Codes
            </Typography>

            <Chip
              label="Coding Practice"
              size="small"
              color="primary"
            />
          </Stack>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1 }}
          >
            JavaScript coding programs, interview questions,
            array methods, functions and practical examples.
          </Typography>
        </CardContent>
      </Card>

      {/* ========================================================= */}
      {/* 1. UNIQUE VALUES */}
      {/* ========================================================= */}

      <TopicCard
        number="1"
        title="Function to Find Unique Values in JavaScript"
        description="Find unique values from an array by removing duplicate values."
      >
        <SectionTitle>
          Method 1: Using Set ⭐ Fastest & Recommended
        </SectionTitle>

        <CodeBlock>
{`const findUniqueValues = (arr) => [...new Set(arr)];

console.log(
  findUniqueValues([1, 2, 2, 3, 4, 4, 5])
);

// Output: [1, 2, 3, 4, 5]`}
        </CodeBlock>

        <Explanation>
          <b>Explanation:</b>
          <br />
          <br />
          <b>new Set(arr)</b> removes duplicates because a Set
          only stores unique values.
          <br />
          <br />
          <b>[...new Set(arr)]</b> converts the Set back into
          an array.
        </Explanation>

        <Divider sx={{ my: 3 }} />

        <SectionTitle>
          Method 2: Using filter()
        </SectionTitle>

        <CodeBlock>
{`const findUniqueValues = (arr) =>
  arr.filter(
    (value, index, self) =>
      self.indexOf(value) === index
  );

console.log(
  findUniqueValues([1, 2, 2, 3, 4, 4, 5])
);

// Output: [1, 2, 3, 4, 5]`}
        </CodeBlock>

        <Typography fontWeight={600} sx={{ mb: 1 }}>
          Another way:
        </Typography>

        <CodeBlock>
{`const uniqueValues = arr.filter(
  (value, index, self) =>
    self.indexOf(value) === index
);`}
        </CodeBlock>

        <Typography fontWeight={600} sx={{ mb: 1 }}>
          Using normal function:
        </Typography>

        <CodeBlock>
{`const uniqueValues = arr.filter(
  (value, index, array) => {
    return array.indexOf(value) === index;
  }
);`}
        </CodeBlock>

        <Divider sx={{ my: 3 }} />

        <SectionTitle>
          Method 3: Using reduce()
        </SectionTitle>

        <Explanation>
          <b>includes()</b> is an array method used to check
          whether a specific value exists in an array.
        </Explanation>

        <CodeBlock>
{`const findUniqueValues = (arr) =>
  arr.reduce(
    (acc, curr) =>
      acc.includes(curr)
        ? acc
        : [...acc, curr],
    []
  );

console.log(
  findUniqueValues([1, 2, 2, 3, 4, 4, 5])
);

// Output: [1, 2, 3, 4, 5]`}
        </CodeBlock>

        <Typography fontWeight={600} sx={{ mb: 1 }}>
          Another way:
        </Typography>

        <CodeBlock>
{`const reduceValue = arr.reduce(
  (acc, value, index, array) => {
    return acc.includes(value)
      ? acc
      : [...acc, value];
  },
  []
);`}
        </CodeBlock>

        <Divider sx={{ my: 3 }} />

        <SectionTitle>
          Method 4: Using an Array with includes()
        </SectionTitle>

        <CodeBlock>
{`const findUniqueValues = (arr) => {
  const unique = [];

  arr.forEach((value) => {
    if (!unique.includes(value)) {
      unique.push(value);
    }
  });

  return unique;
};

console.log(
  findUniqueValues([1, 2, 2, 3, 1, 4])
);

// Output: [1, 2, 3, 4]`}
        </CodeBlock>
      </TopicCard>

      {/* ========================================================= */}
      {/* 2. FIZZBUZZ */}
      {/* ========================================================= */}

      <TopicCard
        number="2"
        title="FizzBuzz"
        description="Print Fizz, Buzz or FizzBuzz based on multiples of 3 and 5."
      >
        <CodeBlock>
{`const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(11);`}
        </CodeBlock>

        <Explanation>
          <b>Rules:</b>
          <br />
          <br />
          Multiples of 3 → <b>Fizz</b>
          <br />
          Multiples of 5 → <b>Buzz</b>
          <br />
          Multiples of 3 and 5 → <b>FizzBuzz</b>
          <br />
          Otherwise → print the number.
        </Explanation>

        <OutputBlock>
{`1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11`}
        </OutputBlock>
      </TopicCard>

      {/* ========================================================= */}
      {/* 3. FLATTEN ARRAY */}
      {/* ========================================================= */}

      <TopicCard
        number="3"
        title="Flattening an Array"
        description="Convert a multi-dimensional array into a single-dimensional array."
      >
        <Explanation>
          <b>Flattening an array</b> means converting a multi-dimensional
          array into a single-dimensional array.
          <br />
          <br />
          Example:
          <br />
          <br />
          <b>Nested:</b> [1, [2, 3], [4, 5], 6]
          <br />
          <b>Flattened:</b> [1, 2, 3, 4, 5, 6]
        </Explanation>

        <SectionTitle>
          Method 1: Using flat()
        </SectionTitle>

        <CodeBlock>
{`let nestedArray = [1, [2, 3], [4, 5], 6];

let flattenedArray = nestedArray.flat();

console.log(flattenedArray);

// Output:
// [1, 2, 3, 4, 5, 6]`}
        </CodeBlock>

        <Explanation>
          <b>flat()</b> flattens the array one level deep by default.
        </Explanation>

        <CodeBlock>
{`let deeplyNestedArray = [1, [2, [3, [4]]]];

let flatArray = deeplyNestedArray.flat(3);

console.log(flatArray);

// Output:
// [1, 2, 3, 4]`}
        </CodeBlock>

        <SectionTitle>
          Method 2: Using flat(Infinity)
        </SectionTitle>

        <CodeBlock>
{`let deeplyNestedArray = [1, [2, [3, [4]]]];

let flatArray = deeplyNestedArray.flat(Infinity);

console.log(flatArray);

// Output:
// [1, 2, 3, 4]`}
        </CodeBlock>

        <SectionTitle>
          Method 3: Recursive Function
        </SectionTitle>

        <CodeBlock>
{`const flattenArray = (arr) => {
  return arr.reduce((acc, val) => {
    return acc.concat(
      Array.isArray(val)
        ? flattenArray(val)
        : val
    );
  }, []);
};

const nestedArray = [
  1,
  [2, 3],
  [4, [5, 6]]
];

console.log(flattenArray(nestedArray));

// Output:
// [1, 2, 3, 4, 5, 6]`}
        </CodeBlock>

        <SectionTitle>
          Method 4: Using reduce()
        </SectionTitle>

        <CodeBlock>
{`const reduceArray = (nestedArray) => {
  return nestedArray.reduce((acc, value) => {
    return acc.concat(value);
  }, []);
};

console.log(
  reduceArray([1, [2, 3], [4, 5], 6])
);

// Output:
// [1, 2, 3, 4, 5, 6]`}
        </CodeBlock>
      </TopicCard>

      {/* ========================================================= */}
      {/* 4. FLATTEN OBJECT */}
      {/* ========================================================= */}

      <TopicCard
        number="4"
        title="Flatten Object"
        description="Convert nested object properties into a single-level object."
      >
        <CodeBlock>
{`const myDetails = {
  name: "sachin",
  place: "karad",

  education: {
    edu: "MCA",
    place: "Pune",
  },

  company: {
    companyName: "probity soft",

    companyAddress: {
      companyPlace: "Baner",
    },
  },
};

const mergeObject = (
  currentObj,
  updatedObj = {}
) => {
  for (let key in currentObj) {
    if (
      typeof currentObj[key] !== "object" ||
      currentObj[key] === null
    ) {
      updatedObj[key] = currentObj[key];
    } else {
      mergeObject(currentObj[key], updatedObj);
    }
  }

  return updatedObj;
};

console.log(mergeObject(myDetails));`}
        </CodeBlock>

        <OutputBlock>
{`{
  name: "sachin",
  place: "karad",
  edu: "MCA",
  companyName: "probity soft",
  companyPlace: "Baner"
}`}
        </OutputBlock>
      </TopicCard>

      {/* ========================================================= */}
      {/* 5. INFINITE CURRYING */}
      {/* ========================================================= */}

      <TopicCard
        number="5"
        title="Infinite Currying"
        description="Transform a function into a sequence of functions, each taking one argument."
      >
        <Explanation>
          <b>Currying</b> is a functional programming technique
          where a function is transformed into a sequence of
          functions, each taking a single argument.
        </Explanation>

        <CodeBlock>
{`const add = (input1) => {
  return (input2) => {
    if (input2) {
      return add(input1 + input2);
    } else {
      return input1;
    }
  };
};

console.log(
  add(1)(2)(3)(4)(5)()
);

// Output:
// 15`}
        </CodeBlock>

        <Explanation>
          <b>How it works:</b>
          <br />
          <br />
          1. <b>add()</b> takes input1.
          <br />
          2. It returns another function.
          <br />
          3. The returned function takes input2.
          <br />
          4. It recursively calls add() with the sum.
          <br />
          5. Empty () ends the chain and returns the result.
        </Explanation>

        <SectionTitle>
          Simple Currying Example
        </SectionTitle>

        <CodeBlock>
{`function add(a) {
  return function(b) {
    return a + b;
  };
}

const addTwo = add(2);

console.log(addTwo(3));

// Output:
// 5`}
        </CodeBlock>
      </TopicCard>

      {/* ========================================================= */}
      {/* 6. LARGEST & SMALLEST */}
      {/* ========================================================= */}

      <TopicCard
        number="6"
        title="Largest Number and Smallest Number"
        description="Find the maximum and minimum number from an array."
      >
        <SectionTitle>
          Largest Number
        </SectionTitle>

        <CodeBlock>
{`const num = [
  12,
  3,
  5,
  787,
  3332,
  2,
  14,
  2,
  2,
  25,
  3
];

const maxNum = Math.max(...num);

console.log(maxNum);

// Output:
// 3332`}
        </CodeBlock>

        <SectionTitle>
          Largest Number Using Loop
        </SectionTitle>

        <CodeBlock>
{`let maxNum = num[0];

for (let i = 1; i < num.length; i++) {
  if (num[i] > maxNum) {
    maxNum = num[i];
  }
}

console.log(maxNum);

// Output:
// 3332`}
        </CodeBlock>

        <SectionTitle>
          Smallest Number
        </SectionTitle>

        <CodeBlock>
{`let minNum = num[0];

for (let i = 1; i < num.length; i++) {
  if (num[i] < minNum) {
    minNum = num[i];
  }
}

console.log(minNum);

// Output:
// 2`}
        </CodeBlock>
      </TopicCard>

      {/* ========================================================= */}
      {/* 7. MERGE SORTED ARRAYS */}
      {/* ========================================================= */}

      <TopicCard
        number="7"
        title="Merge Two Sorted Arrays Into One Sorted Array"
        description="Merge two already sorted arrays into one sorted array."
      >
        <CodeBlock>
{`const Array1 = [1, 3, 5, 7, 9];

const Array2 = [2, 4, 6, 8, 10];

const mergeTwoSortedArray = (arr1, arr2) => {
  const tempArr = [];

  let i = 0;
  let j = 0;

  while (
    i < arr1.length &&
    j < arr2.length
  ) {
    if (arr1[i] > arr2[j]) {
      tempArr.push(arr2[j]);
      j++;
    } else {
      tempArr.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    tempArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    tempArr.push(arr2[j]);
    j++;
  }

  return tempArr;
};

console.log(
  mergeTwoSortedArray(Array1, Array2)
);

// Output:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`}
        </CodeBlock>
      </TopicCard>

      {/* ========================================================= */}
      {/* 8. PALINDROME NUMBER */}
      {/* ========================================================= */}

      <TopicCard
        number="8"
        title="Palindrome Number"
        description="Check whether a number reads the same forward and backward."
      >
        <CodeBlock>
{`let num = prompt(
  "Enter a number to check if it is a palindrome:"
);

const str = num.toString();

console.log(str);

const newNum = str
  .split("")
  .reverse()
  .join("");

console.log(newNum);

if (newNum === str) {
  console.log(
    num + " is a palindrome Number"
  );
} else {
  console.log(
    num + " is not a palindrome number"
  );
}`}
        </CodeBlock>
      </TopicCard>

      {/* ========================================================= */}
      {/* 9. SORT ARRAY */}
      {/* ========================================================= */}

      <TopicCard
        number="9"
        title="Sort Array"
        description="Different ways to sort numbers, strings and objects."
      >
        <SectionTitle>
          1. Ascending Order
        </SectionTitle>

        <CodeBlock>
{`const tempArray = [
  4321,
  321,
  34,
  76,
  45
];

const sortArray = (arr) => {
  const newArray = arr.sort(
    (a, b) => a - b
  );

  return newArray;
};

console.log(sortArray(tempArray));

// Output:
// [34, 45, 76, 321, 4321]`}
        </CodeBlock>

        <SectionTitle>
          2. Descending Order
        </SectionTitle>

        <CodeBlock>
{`let numbers = [4, 2, 9, 1, 5];

numbers.sort((a, b) => b - a);

console.log(numbers);

// Output:
// [9, 5, 4, 2, 1]`}
        </CodeBlock>

        <SectionTitle>
          3. Sorting Strings Alphabetically
        </SectionTitle>

        <CodeBlock>
{`let fruits = [
  "banana",
  "apple",
  "cherry",
  "date"
];

fruits.sort();

console.log(fruits);

// Output:
// ["apple", "banana", "cherry", "date"]`}
        </CodeBlock>

        <SectionTitle>
          4. Case-Insensitive Sorting
        </SectionTitle>

        <CodeBlock>
{`let fruits = [
  "banana",
  "Apple",
  "cherry",
  "Date"
];

fruits.sort(
  (a, b) =>
    a.localeCompare(
      b,
      undefined,
      { sensitivity: "base" }
    )
);

console.log(fruits);

// Output:
// ["Apple", "banana", "cherry", "Date"]`}
        </CodeBlock>

        <SectionTitle>
          5. Sort Objects by Age
        </SectionTitle>

        <CodeBlock>
{`let people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 }
];

people.sort(
  (a, b) => a.age - b.age
);

console.log(people);`}
        </CodeBlock>

        <SectionTitle>
          6. Sort Objects by Name
        </SectionTitle>

        <CodeBlock>
{`people.sort(
  (a, b) =>
    a.name.localeCompare(b.name)
);

console.log(people);`}
        </CodeBlock>

        <SectionTitle>
          7. Sort Strings by Length
        </SectionTitle>

        <CodeBlock>
{`let words = [
  "dog",
  "elephant",
  "bat"
];

words.sort(
  (a, b) => a.length - b.length
);

console.log(words);

// Output:
// ["dog", "bat", "elephant"]`}
        </CodeBlock>
      </TopicCard>

      {/* ========================================================= */}
      {/* 10. ARRAY CONTAINS VALUE */}
      {/* ========================================================= */}

      <TopicCard
        number="10"
        title="Array Contains a Value"
        description="Check whether an array contains a value, find its index and count occurrences."
      >
        <CodeBlock>
{`const num = [
  23423,
  4,
  56,
  7,
  34,
  234,
  3,
  4,
  56546,
  3234
];`}
        </CodeBlock>

        <SectionTitle>
          1. Check if Array Contains a Value
        </SectionTitle>

        <CodeBlock>
{`console.log(num.includes(4));

// Output:
// true`}
        </CodeBlock>

        <SectionTitle>
          2. Find Index of Value
        </SectionTitle>

        <CodeBlock>
{`console.log(num.indexOf(4));

// Output:
// 1`}
        </CodeBlock>

        <SectionTitle>
          3. Count How Many Times a Value Appears
        </SectionTitle>

        <CodeBlock>
{`const count = num.filter(
  n => n === 4
).length;

console.log(count);

// Output:
// 2`}
        </CodeBlock>

        <SectionTitle>
          4. Check if Any Value Meets a Condition
        </SectionTitle>

        <CodeBlock>
{`const hasLargeNumber = num.some(
  n => n > 1000
);

console.log(hasLargeNumber);

// Output:
// true`}
        </CodeBlock>
      </TopicCard>

      {/* ========================================================= */}
      {/* 11. BOOLEAN */}
      {/* ========================================================= */}

      <TopicCard
        number="11"
        title="Boolean Test"
        description="Understand truthy and falsy values using Boolean()."
      >
        <Explanation>
          In JavaScript, values such as non-empty strings and
          non-zero numbers are generally truthy.
          <br />
          <br />
          Common falsy values include:
          <br />
          <b>false, 0, "", null, undefined</b>
        </Explanation>

        <SectionTitle>
          1. Boolean true
        </SectionTitle>

        <CodeBlock>
{`let abc = true;

let xyz = Boolean(abc);

console.log(
  "TestResult",
  abc,
  xyz
);

// true true`}
        </CodeBlock>

        <SectionTitle>
          2. Boolean false
        </SectionTitle>

        <CodeBlock>
{`let abc = false;

let xyz = Boolean(abc);

console.log(
  "TestResult",
  abc,
  xyz
);

// false false`}
        </CodeBlock>

        <SectionTitle>
          3. String "true"
        </SectionTitle>

        <CodeBlock>
{`let abc = "true";

let xyz = Boolean(abc);

console.log(
  "TestResult",
  abc,
  xyz
);

// true true`}
        </CodeBlock>

        <SectionTitle>
          4. String "false"
        </SectionTitle>

        <CodeBlock>
{`let abc = "false";

let xyz = Boolean(abc);

console.log(
  "TestResult",
  abc,
  xyz
);

// false true`}
        </CodeBlock>

        <SectionTitle>
          5. Number 1
        </SectionTitle>

        <CodeBlock>
{`let abc = 1;

let xyz = Boolean(abc);

console.log(
  "TestResult",
  abc,
  xyz
);

// 1 true`}
        </CodeBlock>

        <SectionTitle>
          6. Number 0
        </SectionTitle>

        <CodeBlock>
{`let abc = 0;

let xyz = Boolean(abc);

console.log(
  "TestResult",
  abc,
  xyz
);

// 0 false`}
        </CodeBlock>

        <SectionTitle>
          7. String "1"
        </SectionTitle>

        <CodeBlock>
{`let abc = "1";

let xyz = Boolean(abc);

console.log(
  "TestResult",
  abc,
  xyz
);

// "1" true`}
        </CodeBlock>

        <SectionTitle>
          8. String "0"
        </SectionTitle>

        <CodeBlock>
{`let abc = "0";

let xyz = Boolean(abc);

console.log(
  "TestResult",
  abc,
  xyz
);

// "0" true`}
        </CodeBlock>

        <SectionTitle>
          9. Non-empty String
        </SectionTitle>

        <CodeBlock>
{`let abc = "32432";

let xyz = Boolean(abc);

console.log(
  "TestResult",
  abc,
  xyz
);

// "32432" true`}
        </CodeBlock>

        <SectionTitle>
          10. Empty String
        </SectionTitle>

        <CodeBlock>
{`let abc = "";

let xyz = Boolean(abc);

console.log(
  "TestResult",
  abc,
  xyz
);

// false`}
        </CodeBlock>

        <SectionTitle>
          11. Space String
        </SectionTitle>

        <CodeBlock>
{`let abc = " ";

let xyz = Boolean(abc);

console.log(
  "TestResult",
  abc,
  xyz
);

// true`}
        </CodeBlock>

        <SectionTitle>
          12. null
        </SectionTitle>

        <CodeBlock>
{`let abc = null;

let xyz = Boolean(abc);

console.log(
  "TestResult",
  abc,
  xyz
);

// false`}
        </CodeBlock>

        <SectionTitle>
          13. undefined
        </SectionTitle>

        <CodeBlock>
{`let abc = undefined;

let xyz = Boolean(abc);

console.log(
  "TestResult",
  abc,
  xyz
);

// false`}
        </CodeBlock>

        <SectionTitle>
          14. Number 5
        </SectionTitle>

        <CodeBlock>
{`let abc = 5;

let xyz = Boolean(abc);

console.log(
  "TestResult",
  abc,
  xyz
);

// true`}
        </CodeBlock>
      </TopicCard>

      {/* ========================================================= */}
      {/* 12. COUNT REPETITION */}
      {/* ========================================================= */}

      <TopicCard
        number="12"
        title="Count Repetition Using reduce()"
        description="Count how many times each value appears in an array."
      >
        <CodeBlock>
{`const countRepeation = (arr) => {
  let newCountObj = arr.reduce(
    (acc, curr) => {
      if (!acc[curr]) {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }

      return acc;
    },
    {}
  );

  return newCountObj;
};

const newArray = [
  23,
  3,
  5,
  5,
  6,
  7,
  3,
  2,
  1,
  8,
  7
];

console.log(
  countRepeation(newArray)
);`}
        </CodeBlock>

        <OutputBlock>
{`{
  "1": 1,
  "2": 1,
  "3": 2,
  "5": 2,
  "6": 1,
  "7": 2,
  "8": 1,
  "23": 1
}`}
        </OutputBlock>
      </TopicCard>

      {/* ========================================================= */}
      {/* 13. FIBONACCI */}
      {/* ========================================================= */}

      <TopicCard
        number="13"
        title="Fibonacci"
        description="Generate Fibonacci numbers using loop, array and recursion."
      >
        <SectionTitle>
          Method 1: Using Loop
        </SectionTitle>

        <CodeBlock>
{`const fibbo = () => {
  let a = 0;
  let b = 1;

  let n = 10;

  console.log(a);
  console.log(b);

  for (let i = 2; i < n; i++) {
    let c = a + b;

    console.log(c);

    a = b;
    b = c;
  }
};

fibbo();`}
        </CodeBlock>

        <OutputBlock>
{`0
1
1
2
3
5
8
13
21
34`}
        </OutputBlock>

        <SectionTitle>
          Method 2: Store Fibonacci Numbers in Array
        </SectionTitle>

        <CodeBlock>
{`const fibbo = () => {
  let a = 0;
  let b = 1;

  let n = 10;

  let fibSeries = [a, b];

  for (let i = 2; i < n; i++) {
    let c = a + b;

    fibSeries.push(c);

    a = b;
    b = c;
  }

  console.log(fibSeries);
};

fibbo();`}
        </CodeBlock>

        <OutputBlock>
{`[
  0, 1, 1, 2, 3,
  5, 8, 13, 21, 34
]`}
        </OutputBlock>

        <SectionTitle>
          Method 3: Using Recursion
        </SectionTitle>

        <CodeBlock>
{`const fibbo = (n) => {
  if (n === 0) return 0;

  if (n === 1) return 1;

  return fibbo(n - 1) + fibbo(n - 2);
};

for (let i = 0; i < 10; i++) {
  console.log(fibbo(i));
}`}
        </CodeBlock>

        <OutputBlock>
{`0
1
1
2
3
5
8
13
21
34`}
        </OutputBlock>
      </TopicCard>

      {/* ========================================================= */}
      {/* 14. PALINDROME FUNCTION */}
      {/* ========================================================= */}

      <TopicCard
        number="14"
        title="Palindrome Function"
        description="Create a reusable function to check whether a number is a palindrome."
      >
        <CodeBlock>
{`const isPalindrome = (num) => {
  const str = num.toString();

  const reversedStr = str
    .split("")
    .reverse()
    .join("");

  return str === reversedStr;
};

console.log(isPalindrome(121));
// true

console.log(isPalindrome(123));
// false

console.log(isPalindrome(1221));
// true

console.log(isPalindrome(10));
// false`}
        </CodeBlock>
      </TopicCard>

      {/* ========================================================= */}
      {/* 15. ARMSTRONG */}
      {/* ========================================================= */}

      <TopicCard
        number="15"
        title="Armstrong Number"
        description="Check whether a number is an Armstrong number."
      >
        <Explanation>
          A number is an <b>Armstrong number</b> if the sum of
          its digits, each raised to the power of the number of
          digits, is equal to the number itself.
          <br />
          <br />
          Example:
          <br />
          <b>153 = 1³ + 5³ + 3³ = 153</b>
        </Explanation>

        <CodeBlock>
{`const armStrong = (num) => {
  let numToString = num.toString();

  let numLength = numToString.length;

  let sum = 0;

  for (let digit of numToString) {
    sum += Math.pow(
      Number(digit),
      numLength
    );
  }

  if (num === sum) {
    console.log(
      "num is an Armstrong Number"
    );
  } else {
    console.log(
      "num is NOT an Armstrong Number"
    );
  }
};

armStrong(153);`}
        </CodeBlock>

        <SectionTitle>
          Another Way
        </SectionTitle>

        <CodeBlock>
{`const isArmstrong = (num) => {
  let numStr = num.toString();

  let numLength = numStr.length;

  let sum = 0;

  for (
    let i = 0;
    i < numStr.length;
    i++
  ) {
    sum += Math.pow(
      Number(numStr[i]),
      numLength
    );
  }

  if (sum === num) {
    console.log(
      num + " is an Armstrong number"
    );
  } else {
    console.log(
      num + " is NOT an Armstrong number"
    );
  }
};

isArmstrong(153);
// Armstrong

isArmstrong(154);
// Not Armstrong`}
        </CodeBlock>
      </TopicCard>

      {/* ========================================================= */}
      {/* 16. MAP FILTER REDUCE */}
      {/* ========================================================= */}

      <TopicCard
        number="16"
        title="map(), filter() and reduce()"
        description="Important JavaScript array methods for React interviews."
      >
        <Explanation>
          <b>1. map()</b>
          <br />
          map() is used to transform each element of an array.
          <br />
          <br />

          <b>2. filter()</b>
          <br />
          filter() is used to keep only some elements based on
          a condition.
          <br />
          <br />

          <b>3. reduce()</b>
          <br />
          reduce() is used to combine all elements into one value
          such as sum, product, object, etc.
        </Explanation>

        <SectionTitle>
          reduce() Callback Parameters
        </SectionTitle>

        <Paper
          elevation={0}
          sx={{
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Box sx={{ overflowX: "auto" }}>
            <Box
              component="table"
              sx={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: 600,
              }}
            >
              <Box component="thead">
                <Box component="tr">
                  <TableCell>
                    Parameter
                  </TableCell>

                  <TableCell>
                    Meaning
                  </TableCell>
                </Box>
              </Box>

              <Box component="tbody">
                <TableRow>
                  <TableCell>
                    accumulator (acc)
                  </TableCell>

                  <TableCell>
                    The result you are building step-by-step
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    currentValue
                  </TableCell>

                  <TableCell>
                    Current element from the array
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    index
                  </TableCell>

                  <TableCell>
                    Current index of the array
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    array
                  </TableCell>

                  <TableCell>
                    Original array being reduced
                  </TableCell>
                </TableRow>
              </Box>
            </Box>
          </Box>
        </Paper>
      </TopicCard>

      {/* ========================================================= */}
      {/* 17. MAP EXAMPLES */}
      {/* ========================================================= */}

      <TopicCard
        number="17"
        title="map() Examples"
        description="Different practical examples using map()."
      >
        <SectionTitle>
          1. Double Every Number
        </SectionTitle>

        <CodeBlock>
{`const numbers = [
  1,
  2,
  3,
  4,
  5
];

const newNumbers = numbers.map(
  (currVal, index, array) =>
    currVal * 2
);

console.log(newNumbers);

// Output:
// [2, 4, 6, 8, 10]`}
        </CodeBlock>

        <SectionTitle>
          2. Convert Numbers to Strings
        </SectionTitle>

        <CodeBlock>
{`const numbers = [
  10,
  20,
  30
];

const stringNumbers = numbers.map(
  (num) => {
    return num.toString();
  }
);

console.log(stringNumbers);

// Output:
// ["10", "20", "30"]`}
        </CodeBlock>

        <SectionTitle>
          3. Add Index to Each Element
        </SectionTitle>

        <CodeBlock>
{`const names = [
  "Aman",
  "Riya",
  "John"
];

const namesWithIndex = names.map(
  (name, index) => {
    return \`\${index + 1}. \${name}\`;
  }
);

console.log(namesWithIndex);

// Output:
// ["1. Aman", "2. Riya", "3. John"]`}
        </CodeBlock>

        <SectionTitle>
          4. Get Only Names from Objects
        </SectionTitle>

        <CodeBlock>
{`const users = [
  {
    id: 1,
    name: "Rahul"
  },
  {
    id: 2,
    name: "Sneha"
  },
  {
    id: 3,
    name: "David"
  }
];

const names = users.map(
  (user) => {
    return user.name;
  }
);

console.log(names);

// Output:
// ["Rahul", "Sneha", "David"]`}
        </CodeBlock>
      </TopicCard>

      {/* ========================================================= */}
      {/* 18. FILTER + MAP */}
      {/* ========================================================= */}

      <TopicCard
        number="18"
        title="filter() + map() Example"
        description="Get names of active employees whose salary is greater than 30000."
      >
        <CodeBlock>
{`const employees = [
  {
    id: 1,
    name: "John",
    salary: 50000,
    active: true
  },
  {
    id: 2,
    name: "Sara",
    salary: 25000,
    active: false
  },
  {
    id: 3,
    name: "Mike",
    salary: 60000,
    active: true
  },
  {
    id: 4,
    name: "Tom",
    salary: 20000,
    active: true
  }
];

const activeEmp = employees
  .filter((value) => {
    return (
      value.active &&
      value.salary > 30000
    );
  })
  .map((value) => {
    return value.name;
  });

console.log(
  "activeEmp",
  activeEmp
);

// Output:
// ["John", "Mike"]`}
        </CodeBlock>
      </TopicCard>

      {/* ========================================================= */}
      {/* 19. REDUCE CITY COUNT */}
      {/* ========================================================= */}

      <TopicCard
        number="19"
        title="Count Users by City Using reduce()"
        description="Group and count users based on their city."
      >
        <CodeBlock>
{`const users = [
  {
    name: "John",
    city: "Pune"
  },
  {
    name: "Sara",
    city: "Mumbai"
  },
  {
    name: "Mike",
    city: "Pune"
  },
  {
    name: "Tom",
    city: "Mumbai"
  },
  {
    name: "Alex",
    city: "Delhi"
  }
];

const count = users.reduce(
  (acc, value) => {
    if (!acc[value.city]) {
      acc[value.city] = 0;
    }

    acc[value.city] += 1;

    return acc;
  },
  {}
);

console.log("count", count);`}
        </CodeBlock>

        <OutputBlock>
{`{
  Pune: 2,
  Mumbai: 2,
  Delhi: 1
}`}
        </OutputBlock>
      </TopicCard>

      {/* ========================================================= */}
      {/* 20. PASSED FAILED */}
      {/* ========================================================= */}

      <TopicCard
        number="20"
        title="Group Passed and Failed Students"
        description="Use reduce() to separate students into passed and failed groups."
      >
        <CodeBlock>
{`const students = [
  {
    name: "John",
    marks: 80
  },
  {
    name: "Sara",
    marks: 45
  },
  {
    name: "Mike",
    marks: 90
  },
  {
    name: "Tom",
    marks: 30
  }
];

const result = students.reduce(
  (acc, value) => {
    if (value.marks >= 40) {
      acc.passed.push(value.name);
    } else {
      acc.failed.push(value.name);
    }

    return acc;
  },
  {
    passed: [],
    failed: []
  }
);

console.log("result", result);`}
        </CodeBlock>

        <OutputBlock>
{`{
  passed: [
    "John",
    "Sara",
    "Mike"
  ],
  failed: [
    "Tom"
  ]
}`}
        </OutputBlock>
      </TopicCard>

      {/* ========================================================= */}
      {/* 21. GROUP EMPLOYEES BY DEPARTMENT */}
      {/* ========================================================= */}

      <TopicCard
        number="21"
        title="Group Employees by Department"
        description="Use reduce() to group employee names according to department."
      >
        <CodeBlock>
{`const employees = [
  {
    name: "John",
    department: "IT"
  },
  {
    name: "Sara",
    department: "HR"
  },
  {
    name: "Mike",
    department: "IT"
  },
  {
    name: "Tom",
    department: "HR"
  },
  {
    name: "Alex",
    department: "Finance"
  }
];

const dept = employees.reduce(
  (acc, value) => {
    if (value.department === "IT") {
      acc.IT.push(value.name);
    } else if (
      value.department === "HR"
    ) {
      acc.HR.push(value.name);
    } else {
      acc.Finance.push(value.name);
    }

    return acc;
  },
  {
    IT: [],
    HR: [],
    Finance: []
  }
);

console.log("dept", dept);`}
        </CodeBlock>

        <OutputBlock>
{`{
  IT: [
    "John",
    "Mike"
  ],
  HR: [
    "Sara",
    "Tom"
  ],
  Finance: [
    "Alex"
  ]
}`}
        </OutputBlock>
      </TopicCard>

      {/* ========================================================= */}
      {/* 22. TOTAL ORDERS */}
      {/* ========================================================= */}

      <TopicCard
        number="22"
        title="Calculate Total Orders by Customer"
        description="Use reduce() to calculate the total order amount for each customer."
      >
        <CodeBlock>
{`const orders = [
  {
    customer: "John",
    amount: 1000
  },
  {
    customer: "Sara",
    amount: 2000
  },
  {
    customer: "John",
    amount: 1500
  },
  {
    customer: "Mike",
    amount: 3000
  },
  {
    customer: "Sara",
    amount: 500
  }
];

const total = orders.reduce(
  (acc, value) => {
    if (!acc[value.customer]) {
      acc[value.customer] = 0;
    }

    acc[value.customer] +=
      value.amount;

    return acc;
  },
  {}
);

console.log("total", total);`}
        </CodeBlock>

        <OutputBlock>
{`{
  John: 2500,
  Sara: 2500,
  Mike: 3000
}`}
        </OutputBlock>
      </TopicCard>

      {/* ========================================================= */}
      {/* FINAL SUMMARY */}
      {/* ========================================================= */}

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight={700}>
            🎯 JavaScript Coding Topics Completed
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1 }}
          >
            Unique Values • FizzBuzz • Flatten Array •
            Flatten Object • Currying • Largest/Smallest •
            Merge Sorted Arrays • Palindrome • Sorting •
            Array Methods • Boolean • Count Repetition •
            Fibonacci • Armstrong • map/filter/reduce •
            Employee Filtering • Grouping • Reduce Examples
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

/* ============================================================= */
/* REUSABLE COMPONENTS */
/* ============================================================= */

const TopicCard = ({
  number,
  title,
  description,
  children,
}) => {
  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          flexWrap="wrap"
        >
          <Chip
            label={`Topic ${number}`}
            size="small"
            color="primary"
          />

          <Typography
            variant="h5"
            fontWeight={700}
          >
            {title}
          </Typography>
        </Stack>

        {description && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mt: 1,
              mb: 2,
            }}
          >
            {description}
          </Typography>
        )}

        <Divider sx={{ mb: 3 }} />

        {children}
      </CardContent>
    </Card>
  );
};

const SectionTitle = ({ children }) => {
  return (
    <Typography
      variant="h6"
      fontWeight={700}
      sx={{
        mb: 1,
        mt: 2,
      }}
    >
      {children}
    </Typography>
  );
};

const CodeBlock = ({ children }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#1e1e1e",
        color: "#ffffff",
        p: 2,
        borderRadius: 2,
        overflowX: "auto",
        mb: 2,
      }}
    >
      <Typography
        component="pre"
        sx={{
          margin: 0,
          fontFamily: "monospace",
          fontSize: "14px",
          lineHeight: 1.7,
          whiteSpace: "pre",
        }}
      >
        {children}
      </Typography>
    </Paper>
  );
};

const Explanation = ({ children }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        mb: 2,
        backgroundColor: "action.hover",
        borderRadius: 2,
      }}
    >
      <Typography
        variant="body1"
        sx={{
          lineHeight: 1.7,
        }}
      >
        {children}
      </Typography>
    </Paper>
  );
};

const OutputBlock = ({ children }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        mb: 2,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography
        variant="subtitle2"
        fontWeight={700}
        sx={{ mb: 1 }}
      >
        Output:
      </Typography>

      <Typography
        component="pre"
        sx={{
          margin: 0,
          fontFamily: "monospace",
          fontSize: "14px",
          lineHeight: 1.7,
          whiteSpace: "pre-wrap",
        }}
      >
        {children}
      </Typography>
    </Paper>
  );
};

const TableCell = ({ children }) => {
  return (
    <Box
      component="th"
      sx={{
        textAlign: "left",
        p: 1.5,
        borderBottom: "1px solid",
        borderColor: "divider",
        fontWeight: 700,
      }}
    >
      {children}
    </Box>
  );
};

const TableRow = ({ children }) => {
  return (
    <Box
      component="tr"
      sx={{
        "&:last-child td": {
          borderBottom: 0,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default JavaScriptCodes;