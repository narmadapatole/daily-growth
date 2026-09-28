import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import NotesEditor from "../components/notes/NotesEditor";

const ReactBasics = () => {
  const [openNotes, setOpenNotes] = useState(false);
  const [notes, setNotes] = useState([]);

  // Open editor
  const handleOpenNotes = () => {
    setOpenNotes(true);
  };

  // Close editor
  const handleCloseNotes = () => {
    setOpenNotes(false);
  };

  // Save note
  const handleSaveNotes = (content) => {
    if (!content || content.trim() === "") {
      return;
    }

    const newNote = {
      id: Date.now(),
      content: content,
    };

    setNotes((previousNotes) => [...previousNotes, newNote]);

    // Close editor after save
    setOpenNotes(false);
  };

  return (
    <>
      <Box sx={{ p: 3 }}>
        {/* ================= HEADER ================= */}

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
          mb={3}
        >
          <Box>
            <Typography variant="h4" fontWeight={700}>
              React Basics ⚛️
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              mt={1}
            >
              Learn React concepts with theory, examples and your
              personal notes.
            </Typography>
          </Box>

          <Button
            variant="contained"
            onClick={handleOpenNotes}
          >
            + Add Note
          </Button>
        </Stack>

        {/* ================= THEORY ================= */}

        <Card>
          <CardContent>
            <Typography variant="h5" fontWeight={600} mb={2}>
              What is React?
            </Typography>

            <Typography variant="body1" lineHeight={1.8}>
              React is a JavaScript library used to build user
              interfaces. It allows developers to create reusable UI
              components.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" fontWeight={600} mb={1}>
              Important React Concepts
            </Typography>

            <Box component="ul">
              <li>
                <Typography>Components</Typography>
              </li>

              <li>
                <Typography>Props</Typography>
              </li>

              <li>
                <Typography>State</Typography>
              </li>

              <li>
                <Typography>Hooks</Typography>
              </li>

              <li>
                <Typography>Context API</Typography>
              </li>

              <li>
                <Typography>Redux</Typography>
              </li>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" fontWeight={600} mb={1}>
              Example
            </Typography>

            <Box
              sx={{
                backgroundColor: "#f5f5f5",
                p: 2,
                borderRadius: 2,
                overflowX: "auto",
              }}
            >
              <pre style={{ margin: 0 }}>
                {`function Welcome() {
  return <h1>Hello React!</h1>;
}`}
              </pre>
            </Box>
          </CardContent>
        </Card>

        {/* ================= MY NOTES ================= */}

        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Box>
                <Typography variant="h5" fontWeight={700}>
                  📝 My React Notes
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  mt={0.5}
                >
                  Write and save your own React study notes.
                </Typography>
              </Box>

              <Button
                variant="contained"
                onClick={handleOpenNotes}
              >
                + Add Note
              </Button>
            </Stack>

            <Divider />

            {/* ================= NOTES EDITOR ================= */}

            {openNotes && (
              <Box mt={3}>
                <NotesEditor
                  onSave={handleSaveNotes}
                  onClose={handleCloseNotes}
                />
              </Box>
            )}

            {/* ================= SAVED NOTES ================= */}

            <Box mt={3}>
              <Typography variant="h6" fontWeight={600} mb={2}>
                Saved Notes
              </Typography>

              {notes.length === 0 ? (
                <Box
                  sx={{
                    p: 4,
                    textAlign: "center",
                    border: "1px dashed #ccc",
                    borderRadius: 2,
                  }}
                >
                  <Typography color="text.secondary">
                    No notes saved yet.
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    mt={1}
                  >
                    Click "Add Note" to create your first React note.
                  </Typography>
                </Box>
              ) : (
                <Stack spacing={2}>
                  {notes.map((note, index) => (
                    <Box
                      key={note.id}
                      sx={{
                        border: "1px solid #ddd",
                        borderRadius: 2,
                        p: 2,
                        backgroundColor: "#fafafa",
                      }}
                    >
                      {/* Note Number */}

                      <Typography
                        variant="subtitle2"
                        fontWeight={700}
                        color="primary"
                        mb={1}
                      >
                        Note {index + 1}
                      </Typography>

                      {/* Note Content */}

                      <Box
                        sx={{
                          "& p": {
                            margin: "6px 0",
                          },

                          "& ul": {
                            paddingLeft: "25px",
                          },

                          "& ol": {
                            paddingLeft: "25px",
                          },

                          "& li": {
                            marginBottom: "4px",
                          },

                          "& strong": {
                            fontWeight: 700,
                          },

                          "& em": {
                            fontStyle: "italic",
                          },
                        }}
                        dangerouslySetInnerHTML={{
                          __html: note.content,
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default ReactBasics;