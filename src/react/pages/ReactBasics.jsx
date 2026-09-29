import React, { useMemo, useState } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Collapse,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import {
  Add,
  ArrowDownward,
  Code,
  Delete,
  Edit,
  ExpandMore,
  MenuBook,
  Search,
  Close,
} from "@mui/icons-material";

/* =========================================================
   REACT BASICS - ALL PERSONAL NOTES
========================================================= */

const reactSections = [
  {
    id: "introduction",
    title: "React Introduction",
    icon: "📘",
    topics: [
      {
        title: "What is ReactJS?",
        content: `
React is a JavaScript library used for building user interfaces.

React was created by Facebook and is now maintained by Meta and the open-source community.

React is mainly used for creating interactive and reusable UI components.

React follows a component-based architecture, where a large UI is divided into smaller reusable components.

React is commonly used for Single Page Applications (SPA).
        `,
        points: [
          "React is a JavaScript library.",
          "Used for building user interfaces.",
          "Component-based architecture.",
          "Supports reusable components.",
          "Uses JSX.",
          "Uses Virtual DOM concepts.",
          "Supports one-way data flow.",
          "Can be used with React Native for mobile applications.",
        ],
        example: `const App = () => {
  return <h1>Hello React</h1>;
};

export default App;`,
      },

      {
        title: "Advantages of React",
        content: `
React provides a component-based approach for creating user interfaces.

Instead of creating the complete UI in one large file, we can divide the application into reusable components.
        `,
        points: [
          "Reusable components",
          "Component-based architecture",
          "JSX support",
          "Efficient UI updates",
          "Large ecosystem",
          "React Developer Tools",
          "One-way data flow",
          "Supports modern rendering features",
          "React Native can be used for mobile development",
        ],
      },

      {
        title: "React Building Blocks",
        content: `
The main building blocks of a React application are components, props, state, JSX, events and hooks.

Components are responsible for creating UI.

Props are used to pass data from parent to child.

State stores data that can change during the lifetime of a component.
        `,
        points: [
          "Components",
          "JSX",
          "Props",
          "State",
          "Events",
          "Hooks",
          "Context",
          "Routing",
        ],
      },

      {
        title: "React Library vs Framework",
        content: `
React is generally described as a JavaScript library because its primary focus is the UI layer.

A framework usually provides a more complete application structure and opinionated solutions for areas such as routing, data fetching and application architecture.

React applications can use additional libraries such as React Router, Redux and Axios depending on project requirements.
        `,
      },
    ],
  },

  {
    id: "setup",
    title: "React Setup & Folder Structure",
    icon: "🛠️",
    topics: [
      {
        title: "Create React App",
        content: `
Create React App was a popular way to start a React project.

It provides project configuration and development tooling automatically.

For learning purposes, it is useful to understand because many existing React projects were created using it.

For new projects, modern React applications commonly use frameworks or modern build tools.
        `,
        example: `npx create-react-app hello

cd hello

npm start`,
        points: [
          "npx executes a package without requiring a global installation.",
          "npm is the Node Package Manager.",
          "npm start starts the development server.",
          "Create React App is useful to understand for legacy projects.",
        ],
      },

      {
        title: "React Project Folder Structure",
        content: `
A React project normally contains source code, public assets, dependencies and configuration files.

The exact structure depends on the tooling used to create the project.
        `,
        points: [
          "package.json - project information and dependencies",
          "node_modules - installed packages",
          "public - static public files",
          "src - application source code",
          "App.jsx / App.js - main application component",
          "main.jsx / index.js - application entry point",
          "CSS files - styling",
        ],
      },
    ],
  },

  {
    id: "components",
    title: "Components",
    icon: "🧩",
    topics: [
      {
        title: "What are Components?",
        content: `
A component is an independent and reusable piece of UI.

A large application can be divided into smaller components.

For example:

Header
Sidebar
Main Content
Footer

Each part can be implemented as a separate component.
        `,
        example: `const Header = () => {
  return <header>My Header</header>;
};

const Footer = () => {
  return <footer>My Footer</footer>;
};`,
        points: [
          "Reusable",
          "Independent UI logic",
          "Improves maintainability",
          "Makes applications easier to understand",
          "Can receive props",
          "Can maintain state",
        ],
      },

      {
        title: "Functional Components",
        content: `
A functional component is a JavaScript function that returns JSX.

Modern React development primarily uses function components and hooks.
        `,
        example: `const Greet = () => {
  return <h1>Hello User</h1>;
};

export default Greet;`,
      },

      {
        title: "Class Components",
        content: `
Class components use ES6 classes and historically provided state and lifecycle methods.

Hooks allow function components to use state and other React features, so modern applications generally prefer function components.
        `,
        example: `class Welcome extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}`,
      },

      {
        title: "Props",
        content: `
Props are values passed from a parent component to a child component.

Props are read-only from the receiving component's perspective.

They are commonly used to make components reusable.
        `,
        example: `const User = ({ name, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
};

<User name="Narmada" age={25} />;`,
        points: [
          "Props are passed from parent to child.",
          "Props are read-only.",
          "Props can contain strings, numbers, objects, arrays and functions.",
          "Children are also passed through props.",
        ],
      },

      {
        title: "State",
        content: `
State represents data managed by a component.

When state changes, React can render the component again to reflect the new state.
        `,
        example: `const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};`,
        points: [
          "State is managed by the component.",
          "State can change over time.",
          "Changing state schedules a render.",
          "Do not directly mutate state.",
        ],
      },

      {
        title: "setState",
        content: `
In class components, setState is used to update state.

The state should not be modified directly.

When the new state depends on the previous state, use the functional form.
        `,
        example: `this.setState({
  count: this.state.count + 1
});`,
        points: [
          "Do not directly modify this.state.",
          "Use setState.",
          "State updates may be batched.",
          "Use functional updates when depending on previous state.",
        ],
      },

      {
        title: "Destructuring Props",
        content: `
Props can be destructured directly inside the function parameter.
        `,
        example: `const User = ({ name, email }) => {
  return (
    <>
      <h2>{name}</h2>
      <p>{email}</p>
    </>
  );
};`,
      },
    ],
  },

  {
    id: "jsx",
    title: "JSX",
    icon: "⚛️",
    topics: [
      {
        title: "What is JSX?",
        content: `
JSX stands for JavaScript XML.

It allows us to write HTML-like syntax inside JavaScript.

JSX makes React UI code easier to read and write.

JSX is transformed into JavaScript during the build process.
        `,
        example: `const element = (
  <h1>Hello React</h1>
);`,
        points: [
          "JSX is optional but commonly used.",
          "JavaScript expressions can be written inside {}.",
          "JSX must have a single returned root.",
          "Attributes use camelCase in many cases.",
          "className is used instead of class.",
        ],
      },

      {
        title: "JSX vs React.createElement",
        content: `
JSX is syntax that is transformed into JavaScript calls.

The following JSX:
        `,
        example: `const element = <h1>Hello React</h1>;`,
        points: [
          "JSX makes UI code easier to read.",
          "JSX is transformed by tooling.",
          "JSX itself is not HTML.",
        ],
      },
    ],
  },

  {
    id: "events",
    title: "Events & Event Handling",
    icon: "🖱️",
    topics: [
      {
        title: "Event Handling",
        content: `
React handles events using camelCase event names.

A function is passed as the event handler.

Do not call the function immediately while passing it as a handler.
        `,
        example: `const handleClick = () => {
  console.log("Button clicked");
};

<button onClick={handleClick}>
  Click Me
</button>`,
        points: [
          "React event names use camelCase.",
          "onClick",
          "onChange",
          "onSubmit",
          "onMouseEnter",
          "Pass a function to the event handler.",
        ],
      },

      {
        title: "Passing Arguments to Events",
        content: `
When an event handler needs arguments, use an arrow function.
        `,
        example: `<button
  onClick={() => addDeptLocationList()}
>
  Add
</button>`,
      },

      {
        title: "Methods as Props",
        content: `
A parent component can pass a function to a child using props.

This allows the child component to communicate an action back to the parent.
        `,
        example: `const Parent = () => {
  const handleClick = () => {
    console.log("Clicked");
  };

  return <Child onAction={handleClick} />;
};

const Child = ({ onAction }) => {
  return (
    <button onClick={onAction}>
      Click
    </button>
  );
};`,
      },
    ],
  },

  {
    id: "hooks",
    title: "React Hooks",
    icon: "🪝",
    topics: [
      {
        title: "Hooks Introduction",
        content: `
Hooks allow function components to use React features such as state and effects.

Hooks were introduced in React 16.8.

Common hooks include useState, useEffect, useMemo, useCallback, useRef and useContext.
        `,
        points: [
          "Hooks are functions.",
          "Hooks are mainly used inside function components.",
          "Custom hooks can reuse stateful logic.",
          "Hooks should follow the Rules of Hooks.",
        ],
      },

      {
        title: "useState",
        content: `
useState allows a function component to store state.

It returns the current state value and a setter function.
        `,
        example: `const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
};`,
        points: [
          "First value is the current state.",
          "Second value is the setter.",
          "Initial value can be a value or initializer function.",
          "State updates schedule a render.",
        ],
      },

      {
        title: "useEffect",
        content: `
useEffect is used to synchronize a component with external systems.

Common examples include API calls, subscriptions, timers and browser APIs.

An effect can optionally return a cleanup function.
        `,
        example: `useEffect(() => {
  console.log("Effect executed");

  return () => {
    console.log("Cleanup");
  };
}, []);`,
        points: [
          "Effects are for side effects.",
          "Dependency array controls when the effect is synchronized.",
          "Cleanup is useful for subscriptions and timers.",
          "Do not use effects for calculations that can be done during rendering.",
        ],
      },

      {
        title: "useCallback",
        content: `
useCallback memoizes a function reference.

It is useful when a stable function identity matters, such as when passing a callback to a memoized child.
        `,
        example: `const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);`,
      },

      {
        title: "useMemo",
        content: `
useMemo memoizes a calculated value.

It can be useful when a calculation is expensive and its dependencies have not changed.
        `,
        example: `const total = useMemo(() => {
  return products.reduce(
    (sum, item) => sum + item.price,
    0
  );
}, [products]);`,
      },

      {
        title: "useCallback vs useMemo",
        content: `
useCallback is used for memoizing a function reference.

useMemo is used for memoizing a calculated value.
        `,
        points: [
          "useCallback → returns a function.",
          "useMemo → returns a calculated value.",
          "Both should be used when there is a meaningful performance reason.",
          "Memoization is not automatically required everywhere.",
        ],
      },

      {
        title: "useRef",
        content: `
useRef stores a mutable value that persists between renders without causing a render when the value changes.

It is also commonly used to access DOM elements.
        `,
        example: `const inputRef = useRef(null);

const focusInput = () => {
  inputRef.current.focus();
};

<input ref={inputRef} />`,
      },

      {
        title: "Custom Hooks",
        content: `
A custom hook is a JavaScript function whose name normally starts with use and that can reuse stateful React logic.
        `,
        example: `const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(c => c + 1);
  };

  return {
    count,
    increment
  };
};`,
      },
    ],
  },

  {
    id: "context",
    title: "Context API",
    icon: "🌐",
    topics: [
      {
        title: "Context API",
        content: `
Context allows data to be shared with components without passing props through every intermediate component.

Common examples include theme, language, authentication information and application settings.
        `,
        example: `const ThemeContext = createContext();

const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Home />
    </ThemeContext.Provider>
  );
};

const Home = () => {
  const theme = useContext(ThemeContext);

  return <p>{theme}</p>;
};`,
        points: [
          "Creates shared data.",
          "Reduces prop drilling.",
          "useContext reads the context value.",
          "Provider supplies the value.",
          "Context is not automatically a replacement for every state-management library.",
        ],
      },

      {
        title: "Prop Drilling",
        content: `
Prop drilling occurs when data is passed through several components even though intermediate components do not use that data.

Context can sometimes help avoid this.
        `,
        example: `App
 ↓
Parent
 ↓
Child
 ↓
GrandChild

// value is passed through every level`,
      },
    ],
  },

  {
    id: "virtual-dom",
    title: "Virtual DOM & Rendering",
    icon: "🚀",
    topics: [
      {
        title: "Virtual DOM",
        content: `
The Virtual DOM is an in-memory representation of UI.

React uses its rendering and reconciliation system to determine what needs to change in the host environment.

When state or props change, React creates a new representation and compares it with the previous one.
        `,
        points: [
          "Represents UI in memory.",
          "Helps React reason about UI changes.",
          "React performs reconciliation between renders.",
          "Only required host updates are committed.",
        ],
      },

      {
        title: "Reconciliation",
        content: `
Reconciliation is the process React uses to determine how the UI should change after a render.

React compares the new element tree with the previous one and determines the necessary updates.
        `,
        points: [
          "New render creates a new element tree.",
          "React compares it with the previous tree.",
          "Element types and keys are important.",
          "React determines required updates.",
          "Updates are committed to the host environment.",
        ],
      },

      {
        title: "React Fiber",
        content: `
Fiber is the internal reconciliation architecture introduced in React 16.

It allows React to break rendering work into units and schedule that work more flexibly.

Fiber is an implementation detail that supports modern React rendering capabilities.
        `,
        points: [
          "Introduced with React 16.",
          "Supports scheduling of rendering work.",
          "Uses fiber nodes internally.",
          "Important foundation for modern React rendering.",
        ],
      },

      {
        title: "Rendering",
        content: `
Rendering means React calls components to determine what the UI should look like.

A render does not necessarily mean that every DOM element will be changed.

React can determine that some or all of the existing UI can be reused.
        `,
      },

      {
        title: "React.memo",
        content: `
React.memo can skip rendering a function component when its props have not changed according to its comparison.

It is useful mainly when a component renders often with the same props and the optimization is beneficial.
        `,
        example: `const User = React.memo(({ name }) => {
  return <h2>{name}</h2>;
});`,
        points: [
          "Memoizes a component result based on props.",
          "Default comparison is shallow.",
          "Context or local state changes can still cause rendering.",
          "Do not use memo everywhere without a reason.",
        ],
      },
    ],
  },

  {
    id: "advanced",
    title: "Advanced React",
    icon: "⚡",
    topics: [
      {
        title: "Suspense",
        content: `
Suspense lets React display a fallback UI while some child content is not ready.

It is commonly used with lazy-loaded components and can also participate in other asynchronous rendering patterns supported by React frameworks.
        `,
        example: `const UserPage = React.lazy(
  () => import("./UserPage")
);

<Suspense fallback={<p>Loading...</p>}>
  <UserPage />
</Suspense>`,
      },

      {
        title: "Concurrent React",
        content: `
Modern React has rendering capabilities that allow some work to be scheduled with different priorities.

APIs such as useTransition and useDeferredValue allow developers to mark some updates as non-urgent.
        `,
        points: [
          "Allows React to schedule rendering work.",
          "useTransition can mark updates as non-urgent.",
          "useDeferredValue can defer a value.",
          "It does not mean every application automatically becomes faster.",
        ],
      },

      {
        title: "useTransition",
        content: `
useTransition lets you mark a state update as a non-urgent transition.
        `,
        example: `const [isPending, startTransition] =
  useTransition();

const handleChange = value => {
  startTransition(() => {
    setSearch(value);
  });
};`,
      },

      {
        title: "useDeferredValue",
        content: `
useDeferredValue lets a component use a deferred version of a value so that urgent updates can remain responsive.
        `,
        example: `const deferredSearch =
  useDeferredValue(search);`,
      },

      {
        title: "Server-Side Rendering",
        content: `
With Server-Side Rendering, HTML for a page can be generated on the server and sent to the browser.

The browser receives HTML before the React application becomes fully interactive.
        `,
        points: [
          "HTML can be generated on the server.",
          "Can improve initial page delivery and SEO depending on architecture.",
          "Hydration is needed for interactive React UI.",
        ],
      },

      {
        title: "Hydration",
        content: `
Hydration is the process where React attaches its client-side behavior to HTML that was already generated on the server.
        `,
        points: [
          "Server generates HTML.",
          "Browser displays the HTML.",
          "React hydrates the application.",
          "Event handling and client-side behavior become active.",
        ],
      },

      {
        title: "React Portals",
        content: `
Portals allow React children to be rendered into a different DOM node while remaining part of the same React tree.

They are commonly useful for modals, dialogs and overlays.
        `,
        example: `createPortal(
  <Modal />,
  document.getElementById("modal-root")
);`,
      },

      {
        title: "Higher Order Components",
        content: `
A Higher Order Component (HOC) is a function that takes a component and returns an enhanced component.

HOCs were commonly used for cross-cutting behavior before hooks became available.
        `,
        example: `const withCount = Component => {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);

    return (
      <Component
        {...props}
        count={count}
        setCount={setCount}
      />
    );
  };
};`,
      },
    ],
  },

  {
    id: "forms",
    title: "Forms & Input",
    icon: "📝",
    topics: [
      {
        title: "Controlled Components",
        content: `
In a controlled component, form data is controlled by React state.

The input value is connected to state and onChange updates that state.
        `,
        example: `const [name, setName] = useState("");

<TextField
  value={name}
  onChange={(e) =>
    setName(e.target.value)
  }
/>`,
        points: [
          "React controls the value.",
          "Easy validation.",
          "Easy to access current form state.",
          "Useful for dynamic forms.",
        ],
      },

      {
        title: "Uncontrolled Components",
        content: `
In an uncontrolled component, the DOM keeps the current value.

Refs can be used to access the value when needed.
        `,
        example: `const inputRef = useRef();

<input ref={inputRef} />;

const value = inputRef.current.value;`,
      },
    ],
  },

  {
    id: "state-management",
    title: "State Management",
    icon: "🗃️",
    topics: [
      {
        title: "Local State vs Global State",
        content: `
Not every piece of state needs a global state-management library.

Local component state is usually suitable for UI-specific data.

Shared application state may be handled using Context, Redux or another state-management solution depending on project requirements.
        `,
        points: [
          "Use local state for component-specific data.",
          "Use shared state when multiple distant components need the same data.",
          "Context can be useful for relatively stable shared values.",
          "Redux is useful for larger centralized state-management requirements.",
        ],
      },

      {
        title: "Lifting State Up",
        content: `
When two or more components need to share the same state, the state can be moved to their closest common parent.

The parent then passes the value and callback functions through props.
        `,
        example: `Parent
  ↓
state
  ↓
Child A

Parent
  ↓
state
  ↓
Child B`,
      },
    ],
  },

  {
    id: "projects",
    title: "React Project Ideas",
    icon: "💻",
    topics: [
      {
        title: "Notes App with Markdown Support",
        content: `
Build a notes application where users can create, edit and delete notes.

The application can support Markdown preview and syntax highlighting.
        `,
        points: [
          "Create notes",
          "Edit notes",
          "Delete notes",
          "Markdown preview",
          "localStorage",
          "Syntax highlighting",
          "Dark mode",
          "Forms",
          "Rich text/state persistence",
        ],
      },

      {
        title: "Chat App - Frontend",
        content: `
Build a chat interface containing contacts, conversations and message threads.

Real-time communication can initially be mocked and later implemented using WebSockets.
        `,
        points: [
          "Contact list",
          "Chat window",
          "Message threads",
          "Controlled inputs",
          "Redux",
          "WebSocket later",
          "Reusable components",
        ],
      },

      {
        title: "Expense Tracker",
        content: `
An expense tracker allows users to record income and expenses and calculate the current balance.
        `,
        points: [
          "Income",
          "Expenses",
          "Balance",
          "Date filtering",
          "Type filtering",
          "Charts",
          "localStorage",
          "Backend synchronization later",
        ],
      },

      {
        title: "Portfolio Website with Admin CMS",
        content: `
Create a portfolio where projects, skills and contact information can be managed dynamically.

An admin area can later be connected to a backend.
        `,
        points: [
          "Projects",
          "Skills",
          "Contact form",
          "Admin login",
          "Dynamic rendering",
          "EmailJS or backend",
        ],
      },

      {
        title: "Weather App",
        content: `
Build a weather application using a weather API.

The application can request the user's location and display current weather information.
        `,
        points: [
          "Location permission",
          "Weather API",
          "Loading state",
          "Error handling",
          "Redux Toolkit",
          "API integration",
        ],
      },

      {
        title: "Task Manager - To-do Pro+",
        content: `
Build a professional task management application with CRUD functionality.
        `,
        points: [
          "Create task",
          "Edit task",
          "Delete task",
          "Due dates",
          "Priority",
          "Filtering",
          "Redux",
          "localStorage",
          "Drag and drop",
        ],
      },
    ],
  },

  {
    id: "interview",
    title: "React Interview Questions",
    icon: "🎯",
    topics: [
      {
        title: "What is React?",
        content: `
React is a JavaScript library for building user interfaces using reusable components.

It uses a declarative programming model and supports efficient UI updates through its rendering and reconciliation architecture.
        `,
      },

      {
        title: "What are Props?",
        content: `
Props are inputs passed from a parent component to a child component.

The receiving component should treat props as read-only.
        `,
      },

      {
        title: "What is State?",
        content: `
State is data managed by a component that can change over time and affect what the component renders.
        `,
      },

      {
        title: "Props vs State",
        content: `
Props are passed into a component.

State is managed by the component.

Props are read-only from the receiving component's perspective, while state is updated through the appropriate state setter or state-management mechanism.
        `,
      },

      {
        title: "What is JSX?",
        content: `
JSX is a syntax extension that allows developers to write HTML-like UI syntax inside JavaScript.
        `,
      },

      {
        title: "What are Keys in React?",
        content: `
Keys help React identify items in a list across renders.

A key should be stable and uniquely identify the item among its siblings.
        `,
        example: `users.map(user => (
  <User
    key={user.id}
    user={user}
  />
));`,
      },

      {
        title: "What are Hooks?",
        content: `
Hooks are functions that allow function components to use React features such as state, effects, refs and context.

Examples include useState, useEffect, useMemo, useCallback, useRef and useContext.
        `,
      },

      {
        title: "What is Context API?",
        content: `
Context provides a way to share values through the component tree without manually passing props through every level.
        `,
      },

      {
        title: "What is React.memo?",
        content: `
React.memo can skip rendering a function component when its props are considered equal to the previous props.

It is a performance optimization, not a requirement for normal components.
        `,
      },

      {
        title: "What is Reconciliation?",
        content: `
Reconciliation is React's process for comparing the result of a new render with the previous render and determining what updates are needed.
        `,
      },

      {
        title: "What is React Fiber?",
        content: `
Fiber is React's reconciliation architecture that enables React to represent rendering work as units and schedule that work.
        `,
      },

      {
        title: "What is SSR?",
        content: `
SSR means Server-Side Rendering.

The server generates HTML for the initial page, and the client can later hydrate that HTML to make it interactive.
        `,
      },

      {
        title: "What is Hydration?",
        content: `
Hydration is the process of attaching React's client-side behavior to HTML that was already rendered on the server.
        `,
      },

      {
        title: "What is a Custom Hook?",
        content: `
A custom hook is a reusable function that contains React hook logic.

Custom hook names normally start with use.
        `,
      },

      {
        title: "useMemo vs useCallback",
        content: `
useMemo memoizes a calculated value.

useCallback memoizes a function reference.

Both should be used when their memoization provides a meaningful benefit.
        `,
      },

      {
        title: "Controlled vs Uncontrolled Components",
        content: `
Controlled components store the input value in React state.

Uncontrolled components allow the DOM to maintain the input value and commonly use refs to access it.
        `,
      },

      {
        title: "What is Prop Drilling?",
        content: `
Prop drilling happens when data is passed through multiple components even though intermediate components do not need that data.

Context or another state-management approach can sometimes reduce this.
        `,
      },

      {
        title: "What is a Higher Order Component?",
        content: `
A Higher Order Component is a function that receives a component and returns another component with additional behavior.
        `,
      },

      {
        title: "What is a React Fragment?",
        content: `
A Fragment lets a component return multiple elements without adding an extra DOM element.

Short syntax:

<>...</>

Long syntax:

<React.Fragment>...</React.Fragment>
        `,
        example: `return (
  <>
    <h1>Hello</h1>
    <p>React</p>
  </>
);`,
      },
    ],
  },
];

/* =========================================================
   CODE BLOCK
========================================================= */

const CodeBlock = ({ code }) => {
  if (!code) return null;

  return (
    <Box
      sx={{
        mt: 2,
        p: 2,
        borderRadius: 2,
        backgroundColor: "#1e1e1e",
        color: "#d4d4d4",
        overflowX: "auto",
        fontFamily: "monospace",
        fontSize: "14px",
        lineHeight: 1.7,
      }}
    >
      <pre
        style={{
          margin: 0,
          whiteSpace: "pre-wrap",
        }}
      >
        {code}
      </pre>
    </Box>
  );
};

/* =========================================================
   TOPIC CARD
========================================================= */

const TopicCard = ({ topic }) => {
  return (
    <Card
      elevation={0}
      sx={{
        mb: 2,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ mb: 2 }}
        >
          {topic.title}
        </Typography>

        {topic.content && (
          <Typography
            sx={{
              whiteSpace: "pre-line",
              lineHeight: 1.8,
              color: "text.secondary",
            }}
          >
            {topic.content.trim()}
          </Typography>
        )}

        {topic.points?.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="subtitle1"
              fontWeight={700}
              sx={{ mb: 1 }}
            >
              Important Points
            </Typography>

            <List dense disablePadding>
              {topic.points.map((point, index) => (
                <ListItemButton
                  key={index}
                  sx={{
                    borderRadius: 1,
                    py: 0.4,
                    px: 1,
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      mr: 1,
                      fontWeight: 700,
                    }}
                  >
                    •
                  </Typography>

                  <ListItemText primary={point} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        )}

        {topic.example && (
          <Box sx={{ mt: 3 }}>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <Code fontSize="small" />

              <Typography
                variant="subtitle1"
                fontWeight={700}
              >
                Example
              </Typography>
            </Stack>

            <CodeBlock code={topic.example} />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const ReactBasics = () => {
  const [selectedSection, setSelectedSection] =
    useState("introduction");

  const [searchText, setSearchText] = useState("");

  const [expandedTopic, setExpandedTopic] =
    useState(null);

  /* Notes */
  const [notes, setNotes] = useState([]);

  const [noteText, setNoteText] = useState("");

  const [editingNoteId, setEditingNoteId] =
    useState(null);

  const [showNoteEditor, setShowNoteEditor] =
    useState(false);

  const selectedData = useMemo(() => {
    return reactSections.find(
      section => section.id === selectedSection
    );
  }, [selectedSection]);

  /* Search */
  const filteredTopics = useMemo(() => {
    if (!selectedData) return [];

    if (!searchText.trim()) {
      return selectedData.topics;
    }

    const search = searchText.toLowerCase();

    return selectedData.topics.filter(topic => {
      const content =
        `${topic.title} ${topic.content || ""} ${
          topic.points?.join(" ") || ""
        } ${topic.example || ""}`.toLowerCase();

      return content.includes(search);
    });
  }, [selectedData, searchText]);

  /* =====================================================
     NOTES FUNCTIONS
  ===================================================== */

  const handleSaveNote = () => {
    if (!noteText.trim()) return;

    if (editingNoteId) {
      setNotes(prev =>
        prev.map(note =>
          note.id === editingNoteId
            ? {
                ...note,
                text: noteText,
              }
            : note
        )
      );

      setEditingNoteId(null);
    } else {
      setNotes(prev => [
        ...prev,
        {
          id: Date.now(),
          text: noteText,
        },
      ]);
    }

    setNoteText("");
    setShowNoteEditor(false);
  };

  const handleEditNote = note => {
    setNoteText(note.text);
    setEditingNoteId(note.id);
    setShowNoteEditor(true);
  };

  const handleDeleteNote = id => {
    setNotes(prev =>
      prev.filter(note => note.id !== id)
    );
  };

  const handleCancelNote = () => {
    setNoteText("");
    setEditingNoteId(null);
    setShowNoteEditor(false);
  };

  /* =====================================================
     JSX
  ===================================================== */

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      {/* =================================================
          PAGE HEADER
      ================================================= */}

      <Card
        elevation={0}
        sx={{
          borderRadius: 3,
          mb: 3,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            justifyContent="space-between"
            alignItems={{
              xs: "flex-start",
              md: "center",
            }}
            spacing={2}
          >
            <Box>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
              >
                <Typography
                  variant="h4"
                  fontWeight={800}
                >
                  ⚛️ React Basics
                </Typography>

                <Chip
                  label="Personal Notes"
                  size="small"
                  color="primary"
                />
              </Stack>

              <Typography
                sx={{
                  mt: 1,
                  color: "text.secondary",
                }}
              >
                My personal React learning notes,
                concepts, examples and interview
                preparation.
              </Typography>
            </Box>

            <Stack
              direction="row"
              spacing={1}
            >
              <Chip
                icon={<MenuBook />}
                label={`${reactSections.length} Sections`}
                variant="outlined"
              />

              <Chip
                label={`${reactSections.reduce(
                  (total, section) =>
                    total + section.topics.length,
                  0
                )} Topics`}
                variant="outlined"
              />
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      {/* =================================================
          SEARCH
      ================================================= */}

      <TextField
        fullWidth
        placeholder="Search in React notes..."
        value={searchText}
        onChange={e =>
          setSearchText(e.target.value)
        }
        sx={{
          mb: 3,
          backgroundColor: "background.paper",
          borderRadius: 2,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),

          endAdornment: searchText && (
            <InputAdornment position="end">
              <IconButton
                size="small"
                onClick={() => setSearchText("")}
              >
                <Close />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <Grid container spacing={3}>
        {/* =================================================
            LEFT SIDEBAR
        ================================================= */}

        <Grid item xs={12} md={3}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 3,
              border: "1px solid",
              borderColor: "divider",
              position: {
                md: "sticky",
              },
              top: 20,
            }}
          >
            <CardContent sx={{ p: 1 }}>
              <Typography
                fontWeight={700}
                sx={{ px: 2, py: 1.5 }}
              >
                React Topics
              </Typography>

              <Divider />

              <List disablePadding>
                {reactSections.map(section => (
                  <ListItemButton
                    key={section.id}
                    selected={
                      selectedSection === section.id
                    }
                    onClick={() => {
                      setSelectedSection(section.id);
                      setSearchText("");
                      setExpandedTopic(null);
                    }}
                    sx={{
                      borderRadius: 2,
                      mx: 0.5,
                      my: 0.3,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 20,
                        mr: 1.5,
                      }}
                    >
                      {section.icon}
                    </Typography>

                    <ListItemText
                      primary={section.title}
                      secondary={`${section.topics.length} topics`}
                      primaryTypographyProps={{
                        fontWeight:
                          selectedSection ===
                          section.id
                            ? 700
                            : 500,
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* =================================================
            RIGHT CONTENT
        ================================================= */}

        <Grid item xs={12} md={9}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 3,
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              {/* SECTION HEADER */}

              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                justifyContent="space-between"
                alignItems={{
                  xs: "flex-start",
                  sm: "center",
                }}
                spacing={1}
                sx={{ mb: 3 }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight={800}
                  >
                    {selectedData?.icon}{" "}
                    {selectedData?.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.5 }}
                  >
                    {filteredTopics.length} topics
                  </Typography>
                </Box>

                <Chip
                  label="React Learning"
                  color="primary"
                  variant="outlined"
                />
              </Stack>

              {/* TOPICS */}

              {filteredTopics.length === 0 ? (
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    border: "1px dashed",
                    borderColor: "divider",
                  }}
                >
                  <Typography color="text.secondary">
                    No topic found.
                  </Typography>
                </Paper>
              ) : (
                filteredTopics.map(
                  (topic, index) => (
                    <Accordion
                      key={`${topic.title}-${index}`}
                      expanded={
                        expandedTopic ===
                        `${selectedSection}-${index}`
                      }
                      onChange={() =>
                        setExpandedTopic(
                          expandedTopic ===
                            `${selectedSection}-${index}`
                            ? null
                            : `${selectedSection}-${index}`
                        )
                      }
                      elevation={0}
                      sx={{
                        mb: 1.5,
                        border:
                          "1px solid",
                        borderColor:
                          "divider",
                        borderRadius:
                          "12px !important",

                        "&:before": {
                          display: "none",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          <ExpandMore />
                        }
                        sx={{
                          px: 2,
                          py: 0.5,
                        }}
                      >
                        <Stack
                          direction="row"
                          spacing={1}
                          alignItems="center"
                        >
                          <Typography
                            fontWeight={700}
                          >
                            {index + 1}.
                          </Typography>

                          <Typography
                            fontWeight={600}
                          >
                            {topic.title}
                          </Typography>
                        </Stack>
                      </AccordionSummary>

                      <AccordionDetails
                        sx={{ p: 2 }}
                      >
                        <TopicCard
                          topic={topic}
                        />
                      </AccordionDetails>
                    </Accordion>
                  )
                )
              )}
            </CardContent>
          </Card>

          {/* =================================================
              PERSONAL NOTES
          ================================================= */}

          <Card
            elevation={0}
            sx={{
              mt: 3,
              borderRadius: 3,
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={800}
                  >
                    📝 My Personal Notes
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Add your own learning notes here.
                  </Typography>
                </Box>

                {!showNoteEditor && (
                  <Button
                    variant="contained"
                    startIcon={<Add />}
                    onClick={() =>
                      setShowNoteEditor(true)
                    }
                  >
                    Add Note
                  </Button>
                )}
              </Stack>

              <Divider />

              {/* NOTE EDITOR */}

              <Collapse in={showNoteEditor}>
                <Box sx={{ mt: 3 }}>
                  <TextField
                    fullWidth
                    multiline
                    minRows={5}
                    placeholder="Write your personal React note..."
                    value={noteText}
                    onChange={e =>
                      setNoteText(e.target.value)
                    }
                  />

                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="flex-end"
                    sx={{ mt: 2 }}
                  >
                    <Button
                      variant="outlined"
                      onClick={
                        handleCancelNote
                      }
                    >
                      Cancel
                    </Button>

                    <Button
                      variant="contained"
                      onClick={
                        handleSaveNote
                      }
                    >
                      {editingNoteId
                        ? "Update Note"
                        : "Save Note"}
                    </Button>
                  </Stack>
                </Box>
              </Collapse>

              {/* SAVED NOTES */}

              {notes.length > 0 && (
                <Box sx={{ mt: 3 }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    sx={{ mb: 1.5 }}
                  >
                    Saved Notes
                  </Typography>

                  <Stack spacing={1.5}>
                    {notes.map(note => (
                      <Paper
                        key={note.id}
                        elevation={0}
                        sx={{
                          p: 2,
                          border: "1px solid",
                          borderColor:
                            "divider",
                          borderRadius: 2,
                        }}
                      >
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="flex-start"
                          spacing={2}
                        >
                          <Box
                            sx={{
                              flex: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                whiteSpace:
                                  "pre-line",
                                lineHeight: 1.7,
                              }}
                            >
                              • {note.text}
                            </Typography>
                          </Box>

                          <Stack
                            direction="row"
                            spacing={0.5}
                          >
                            <IconButton
                              size="small"
                              color="primary"
                              onClick={() =>
                                handleEditNote(
                                  note
                                )
                              }
                            >
                              <Edit fontSize="small" />
                            </IconButton>

                            <IconButton
                              size="small"
                              color="error"
                              onClick={() =>
                                handleDeleteNote(
                                  note.id
                                )
                              }
                            >
                              <Delete fontSize="small" />
                            </IconButton>
                          </Stack>
                        </Stack>
                      </Paper>
                    ))}
                  </Stack>
                </Box>
              )}

              {notes.length === 0 &&
                !showNoteEditor && (
                  <Box
                    sx={{
                      py: 4,
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      color="text.secondary"
                    >
                      No personal notes added yet.
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5 }}
                    >
                      Click "Add Note" to add
                      your own notes.
                    </Typography>
                  </Box>
                )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReactBasics;