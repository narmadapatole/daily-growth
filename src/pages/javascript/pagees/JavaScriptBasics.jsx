import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

const JavaScriptBasics = () => {
  const topics = [
    {
      title: "1. What is JavaScript?",
      notes: [
        "JavaScript is a high-level, interpreted programming language.",
        "It is mainly used to make web pages interactive and dynamic.",
        "JavaScript works together with HTML and CSS to build web applications.",
      ],
    },
    {
      title: "2. What JavaScript Can Do",
      notes: [
        "Change HTML content and attributes.",
        "Change CSS styles dynamically.",
        "Handle user events such as click, input and submit.",
        "Perform calculations and data processing.",
        "Make API calls and communicate with servers.",
        "Create interactive web applications.",
      ],
    },
    {
      title: "3. Features of JavaScript",
      notes: [
        "High-level language.",
        "Interpreted / JIT compiled.",
        "Dynamically typed.",
        "Single-threaded.",
        "Synchronous by default.",
        "Supports asynchronous programming.",
        "Object-oriented and functional programming support.",
      ],
    },
    {
      title: "4. Where JavaScript Runs",
      notes: [
        "JavaScript can run inside browsers.",
        "Modern browsers contain JavaScript engines.",
        "JavaScript can also run outside the browser using environments such as Node.js.",
      ],
    },
    {
      title: "5. Ways of Adding JavaScript",
      notes: [
        "Inline JavaScript can be written directly inside HTML.",
        "Internal JavaScript can be written inside a <script> tag.",
        "External JavaScript can be written in a separate .js file and linked using <script src='...'>.",
      ],
    },
    {
      title: "6. Data Types",
      notes: [
        "Primitive types: string, number, boolean, undefined, null, bigint and symbol.",
        "Non-primitive/reference types include objects, arrays and functions.",
        "JavaScript determines the type of a value at runtime.",
      ],
    },
    {
      title: "7. Dynamic / Loosely Typed Language",
      notes: [
        "JavaScript is dynamically typed.",
        "A variable does not need a fixed data type.",
        "The same variable can hold different types of values during execution.",
      ],
    },
    {
      title: "8. Variables",
      notes: [
        "Variables are used to store values.",
        "JavaScript provides var, let and const.",
        "let and const were introduced with ES6.",
      ],
    },
    {
      title: "9. Execution Context",
      notes: [
        "Execution Context is the environment in which JavaScript code is executed.",
        "It contains information required to execute the code.",
        "Global Execution Context is created when JavaScript starts executing.",
        "Function Execution Context is created whenever a function is invoked.",
      ],
    },
    {
      title: "10. Synchronous and Single-Threaded",
      notes: [
        "JavaScript is single-threaded.",
        "It has one call stack.",
        "JavaScript executes one task at a time.",
        "Synchronous code is executed in sequence.",
      ],
    },
    {
      title: "11. Execution Context Phases",
      notes: [
        "Execution Context is created in two major phases.",
        "Memory Creation Phase: variables and functions are allocated memory.",
        "Code Execution Phase: JavaScript executes the code line by line.",
      ],
    },
    {
      title: "12. Call Stack",
      notes: [
        "Call Stack is used to manage function execution.",
        "It follows LIFO - Last In, First Out.",
        "When a function is called, it is pushed onto the stack.",
        "When the function finishes, it is removed from the stack.",
      ],
    },
    {
      title: "13. Hoisting",
      notes: [
        "Hoisting is JavaScript's behavior of making declarations available before their execution line.",
        "Function declarations can be called before their declaration.",
        "var declarations are hoisted and initialized with undefined.",
        "let and const are hoisted but remain in the Temporal Dead Zone until initialization.",
      ],
    },
    {
      title: "14. Undefined vs Not Defined",
      notes: [
        "undefined means a variable has been declared but does not currently have a value.",
        "Not Defined means JavaScript cannot find the variable in the accessible scope.",
      ],
    },
    {
      title: "15. Global Execution Context",
      notes: [
        "Global Execution Context is created when the JavaScript program starts.",
        "Global variables and functions are available according to their scope.",
        "In browsers, the global object is window.",
        "The global this value refers to the global object in the browser's global context.",
      ],
    },
    {
      title: "16. Scope and Scope Chain",
      notes: [
        "Scope determines where a variable can be accessed.",
        "Lexical scope is determined by where code is written.",
        "JavaScript searches the current scope first.",
        "If the variable is not found, JavaScript searches the outer scope.",
        "This process continues through the scope chain.",
      ],
    },
    {
      title: "17. var vs let vs const",
      notes: [
        "var is function scoped.",
        "let is block scoped.",
        "const is block scoped.",
        "let and const cannot be redeclared in the same scope.",
        "const must be initialized when declared.",
      ],
    },
    {
      title: "18. Temporal Dead Zone",
      notes: [
        "Temporal Dead Zone is the period between entering a scope and initializing a let or const variable.",
        "Accessing let or const before initialization results in a ReferenceError.",
      ],
    },
    {
      title: "19. JavaScript Errors",
      notes: [
        "SyntaxError occurs when JavaScript syntax is invalid.",
        "ReferenceError occurs when a variable cannot be accessed or found.",
        "TypeError occurs when an operation is performed on an inappropriate value.",
      ],
    },
    {
      title: "20. Block and Block Scope",
      notes: [
        "A block is generally represented using curly braces {}.",
        "let and const are block scoped.",
        "Variables declared using let and const inside a block cannot normally be accessed outside that block.",
      ],
    },
    {
      title: "21. Shadowing",
      notes: [
        "Shadowing happens when a variable declared in an inner scope has the same name as a variable in an outer scope.",
        "The inner variable takes precedence within the inner scope.",
      ],
    },
    {
      title: "22. Closure",
      notes: [
        "A closure is created when a function remembers variables from its outer lexical environment.",
        "Closures allow inner functions to access variables from their outer functions even after the outer function has finished execution.",
        "Closures are useful for data hiding, callbacks and maintaining state.",
      ],
    },
    {
      title: "23. Garbage Collector",
      notes: [
        "JavaScript automatically manages memory.",
        "The garbage collector removes objects that are no longer reachable.",
        "This helps prevent unnecessary memory usage.",
      ],
    },
    {
      title: "24. Functions",
      notes: [
        "Functions are reusable blocks of code.",
        "Functions can accept input through parameters.",
        "Functions can return a value.",
        "Functions can be declared, assigned to variables and passed as arguments.",
      ],
    },
    {
      title: "25. Parameters vs Arguments",
      notes: [
        "Parameters are variables defined in a function declaration.",
        "Arguments are actual values passed when calling the function.",
      ],
    },
    {
      title: "26. First-Class Functions",
      notes: [
        "Functions are treated as first-class citizens in JavaScript.",
        "Functions can be assigned to variables.",
        "Functions can be passed as arguments.",
        "Functions can be returned from other functions.",
      ],
    },
    {
      title: "27. Callback Function",
      notes: [
        "A callback is a function passed as an argument to another function.",
        "The receiving function can execute the callback later.",
        "Callbacks are commonly used for asynchronous operations and event handling.",
      ],
    },
    {
      title: "28. Event Loop",
      notes: [
        "The Event Loop helps JavaScript handle asynchronous operations.",
        "It continuously checks whether the call stack is empty.",
        "When appropriate, queued callbacks can be moved to the call stack for execution.",
      ],
    },
    {
      title: "29. Web APIs",
      notes: [
        "Web APIs are browser-provided features available to JavaScript.",
        "Examples include DOM APIs, setTimeout, fetch and event APIs.",
        "These browser features help JavaScript perform operations outside the main call stack.",
      ],
    },
    {
      title: "30. setTimeout",
      notes: [
        "setTimeout schedules a callback to run after a minimum delay.",
        "The callback does not execute immediately after the timer expires if the call stack is busy.",
        "The Event Loop coordinates when the callback can execute.",
      ],
    },
    {
      title: "31. JavaScript Engine",
      notes: [
        "A JavaScript engine executes JavaScript code.",
        "Different browsers use different JavaScript engines.",
        "Chrome uses the V8 JavaScript engine.",
        "The engine parses, compiles and executes JavaScript.",
      ],
    },
    {
      title: "32. Higher Order Function",
      notes: [
        "A Higher Order Function is a function that takes another function as an argument or returns a function.",
        "map, filter and reduce are common examples.",
      ],
    },
    {
      title: "33. map / filter / reduce",
      notes: [
        "map() creates a new array by transforming every element.",
        "filter() creates a new array containing elements that satisfy a condition.",
        "reduce() processes array elements and produces a single accumulated result.",
      ],
    },
    {
      title: "34. Arrow Function",
      notes: [
        "Arrow functions provide shorter syntax for writing functions.",
        "Arrow functions do not have their own this.",
        "They inherit this from their lexical surrounding scope.",
      ],
    },
    {
      title: "35. == vs ===",
      notes: [
        "== performs loose equality comparison and may perform type conversion.",
        "=== performs strict equality comparison.",
        "Strict equality checks both value and type.",
      ],
    },
    {
      title: "36. Loops",
      notes: [
        "Loops are used to execute code repeatedly.",
        "Common loops include for, while and do...while.",
        "for...of is commonly used to iterate over iterable values.",
        "for...in is commonly used to iterate over object properties.",
      ],
    },
    {
      title: "37. ES6 Features",
      notes: [
        "let and const.",
        "Arrow functions.",
        "Template literals.",
        "Destructuring.",
        "Spread and rest operators.",
        "Default parameters.",
        "Classes.",
        "Modules.",
        "Promises.",
      ],
    },
    {
      title: "38. Mutable vs Immutable",
      notes: [
        "Mutable data can be changed after creation.",
        "Immutable data should be treated as data that is not changed directly.",
        "Objects and arrays are mutable by default in JavaScript.",
        "Creating new objects or arrays is commonly used when following immutable update patterns.",
      ],
    },
    {
      title: "39. Shallow Copy vs Deep Copy",
      notes: [
        "A shallow copy copies only the first level.",
        "Nested objects may still reference the same original objects.",
        "A deep copy creates independent copies of nested data.",
        "Spread syntax creates a shallow copy.",
      ],
    },
    {
      title: "40. Local Storage vs Session Storage vs Cookies",
      notes: [
        "localStorage stores data in the browser with persistent storage.",
        "sessionStorage stores data for the browser session.",
        "Cookies can store small pieces of data and can be sent with HTTP requests.",
        "Storage mechanisms have different limits, lifetimes and security considerations.",
      ],
    },
    {
      title: "41. HTTP Methods",
      notes: [
        "GET is generally used to retrieve data.",
        "POST is generally used to create or submit data.",
        "PUT is generally used to replace/update a resource.",
        "PATCH is generally used for partial updates.",
        "DELETE is generally used to remove a resource.",
      ],
    },
    {
      title: "42. CORS",
      notes: [
        "CORS stands for Cross-Origin Resource Sharing.",
        "It controls whether a browser allows requests between different origins.",
        "The server provides CORS headers to allow specific origins or requests.",
      ],
    },
    {
      title: "43. HTTP Headers",
      notes: [
        "HTTP headers provide additional information about an HTTP request or response.",
        "Common headers include Content-Type, Authorization, Accept and Cache-Control.",
        "Headers are commonly used for authentication, content type and request/response configuration.",
      ],
    },
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      {/* Page Header */}
      <Card>
        <CardContent>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            flexWrap="wrap"
          >
            <Typography variant="h4" fontWeight={800}>
              🟨 JavaScript Basics
            </Typography>

            <Chip
              label="Personal Notes"
              size="small"
              color="primary"
            />
          </Stack>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1 }}
          >
            JavaScript theory, interview questions and important concepts.
          </Typography>
        </CardContent>
      </Card>

      {/* JavaScript Topics */}
      <Stack spacing={2} sx={{ mt: 3 }}>
        {topics.map((topic, index) => (
          <Card key={index}>
            <CardContent>
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{ mb: 1.5 }}
              >
                {topic.title}
              </Typography>

              <Divider sx={{ mb: 2 }} />

              <Stack spacing={1}>
                {topic.notes.map((note, noteIndex) => (
                  <Typography
                    key={noteIndex}
                    variant="body1"
                    sx={{
                      lineHeight: 1.7,
                      pl: 1,
                    }}
                  >
                    • {note}
                  </Typography>
                ))}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default JavaScriptBasics;