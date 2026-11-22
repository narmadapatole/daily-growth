import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Divider,
} from "@mui/material";

const STORAGE_KEY = "daily-growth-javascript-programs";

const defaultPrograms = [
  {
    id: 1,
    title: "Addition of Two Numbers",
    code: `function add(a, b) {
  return a + b;
}

console.log(add(10, 20));`,
    input: "",
    output: "",
  },
  {
    id: 2,
    title: "Square Root",
    code: `const num = 25;
console.log(Math.sqrt(num));`,
    input: "",
    output: "",
  },
];

const JavaScriptPlayground = () => {
  const [programs, setPrograms] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : defaultPrograms;
    } catch {
      return defaultPrograms;
    }
  });

  const [selectedId, setSelectedId] = useState(1);
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const selectedProgram = programs.find((program) => program.id === selectedId);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(programs));
  }, [programs]);

  useEffect(() => {
    if (selectedProgram) {
      setTitle(selectedProgram.title);
      setCode(selectedProgram.code);
      setInput(selectedProgram.input || "");
      setOutput("");
    }
  }, [selectedId]); // Load selected program

  const handleNewProgram = () => {
    setSelectedId(null);
    setTitle("");
    // setCode("// Write your JavaScript code here\n");
    setInput("");
    setOutput("");
  };

  const handleSave = () => {
    if (!title.trim() || !code.trim()) {
      setOutput("Please enter a program title and JavaScript code.");
      return;
    }

    if (selectedId && programs.some((p) => p.id === selectedId)) {
      setPrograms((prev) =>
        prev.map((p) =>
          p.id === selectedId ? { ...p, title, code, input } : p,
        ),
      );
    } else {
      const newProgram = {
        id: Date.now(),
        title,
        code,
        input,
        output: "",
      };

      setPrograms((prev) => [...prev, newProgram]);
      setSelectedId(newProgram.id);
    }

    setOutput("Program saved successfully!");
  };

  const handleDelete = () => {
    if (!selectedId) return;

    setPrograms((prev) => prev.filter((p) => p.id !== selectedId));
    setSelectedId(null);
    setTitle("");
    setCode("");
    setInput("");
    setOutput("");
  };

  const handleRun = () => {
    try {
      const logs = [];
      const customConsole = {
        log: (...args) =>
          logs.push(
            args
              .map((value) => {
                if (typeof value === "object" && value !== null) {
                  return JSON.stringify(value);
                }
                return String(value);
              })
              .join(" "),
          ),
      };

      // For learning locally only. Do not run untrusted code.
      const execute = new Function(
        "console",
        "input",
        `"use strict";\n${code}`,
      );

      execute(customConsole, input);

      setOutput(logs.length ? logs.join("\n") : "Code executed. No output.");
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <Box sx={{ p: { xs: 1, md: 3 } }}>
      <Typography variant="h4" fontWeight={700} color="#17233C">
        JavaScript Playground 🚀
      </Typography>

      <Typography sx={{ color: "#7B879A", mt: 1, mb: 3 }}>
        Write, run, save and practise your JavaScript programs.
      </Typography>

      <Grid container spacing={3}>
        {/* Saved programs Left Side*/}
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700}>
                My Programs
              </Typography>

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
                onClick={handleNewProgram}
              >
                + Add New Program
              </Button>

              {programs.map((program) => (
                <Card
                  key={program.id}
                  variant="outlined"
                  onClick={() => setSelectedId(program.id)}
                  sx={{
                    mb: 1.5,
                    cursor: "pointer",
                    borderColor:
                      selectedId === program.id ? "#4263EB" : "#E5EAF1",
                    backgroundColor:
                      selectedId === program.id ? "#F0F4FF" : "#FFFFFF",
                  }}
                >
                  <CardContent sx={{ py: "12px !important" }}>
                    <Typography fontWeight={600}>{program.title}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      JavaScript
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Code editor Right Side*/}
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <TextField
                fullWidth
                label="Program Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                multiline
                minRows={12}
                label="JavaScript Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                sx={{
                  mb: 2,
                  "& textarea": {
                    fontFamily: "Consolas, monospace",
                    fontSize: 14,
                    lineHeight: 1.7,
                  },
                }}
              />

              <TextField
                fullWidth
                label="Input Value (optional)"
                placeholder="Example: 10,20"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                helperText="Use the input variable in your code when needed."
                sx={{ mb: 2 }}
              />

              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Button variant="contained" onClick={handleRun}>
                  ▶ Run Code
                </Button>

                <Button
                  variant="contained"
                  color="success"
                  onClick={handleSave}
                >
                  Save Program
                </Button>

                <Button
                  variant="outlined"
                  color="error"
                  disabled={!selectedId}
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                Output
              </Typography>

              <Box
                sx={{
                  minHeight: 70,
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: "#17233C",
                  color: "#B9F6CA",
                  fontFamily: "Consolas, monospace",
                  whiteSpace: "pre-wrap",
                  overflowWrap: "anywhere",
                }}
              >
                {output || "Your program output will appear here..."}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JavaScriptPlayground;
