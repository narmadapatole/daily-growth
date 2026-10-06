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
            JavaScript coding programs, interview questions and practical
            examples.
          </Typography>
        </CardContent>
      </Card>

      {/* Topic 1 */}
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h5" fontWeight={700}>
            1. Function to Find Unique Values in JavaScript
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1, mb: 2 }}
          >
            Find unique values from an array by removing duplicate values.
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Method 1 */}
          <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
            Method 1: Using Set ⭐ Fastest & Recommended
          </Typography>

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
            <b>new Set(arr)</b> removes duplicate values because a Set only
            stores unique values.
            <br />
            <br />
            <b>[...new Set(arr)]</b> converts the Set back into an array.
          </Explanation>

          <Divider sx={{ my: 3 }} />

          {/* Method 2 */}
          <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
            Method 2: Using filter()
          </Typography>

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

          <Typography
            variant="body1"
            sx={{ mt: 2, mb: 1, fontWeight: 600 }}
          >
            Another way:
          </Typography>

          <CodeBlock>
{`const uniqueValues = arr.filter(
  (value, index, self) =>
    self.indexOf(value) === index
);`}
          </CodeBlock>

          <Typography
            variant="body1"
            sx={{ mt: 2, mb: 1, fontWeight: 600 }}
          >
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

          {/* Method 3 */}
          <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
            Method 3: Using reduce()
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            <b>includes()</b> is an array method used to check whether a
            specific value exists in an array.
          </Typography>

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

          <Typography
            variant="body1"
            sx={{ mt: 2, mb: 1, fontWeight: 600 }}
          >
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

          {/* Method 4 */}
          <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
            Method 4: Using an Array with includes()
          </Typography>

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

          {/* Final Output */}
          <Paper
            elevation={0}
            sx={{
              mt: 3,
              p: 2,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
            }}
          >
            <Typography variant="subtitle1" fontWeight={700}>
              ✅ Final Result
            </Typography>

            <Typography
              component="pre"
              sx={{
                mt: 1,
                mb: 0,
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
              }}
            >
              [1, 2, 3, 4, 5]
            </Typography>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
};

/* Reusable Code Block */
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

/* Reusable Explanation */
const Explanation = ({ children }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        backgroundColor: "action.hover",
        borderRadius: 2,
      }}
    >
      <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
        {children}
      </Typography>
    </Paper>
  );
};

export default JavaScriptCodes;