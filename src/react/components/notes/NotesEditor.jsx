import { useState } from "react";

import {
  Box,
  Button,
  Divider,
  IconButton,
  MenuItem,
  Select,
//   Stack,
  Tooltip,
} from "@mui/material";

import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatListBulleted,
  FormatListNumbered,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  Undo,
  Redo,
} from "@mui/icons-material";

import { useEditor, EditorContent } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Color from "@tiptap/extension-color";
// import TextStyle from "@tiptap/extension-text-style";
import { TextStyle } from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";

const NotesEditor = ({ onSave }) => {
  const [fontSize, setFontSize] = useState("16px");

  const editor = useEditor({
    extensions: [
      StarterKit,

      Underline,

      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),

      TextStyle,

      Color,
    ],

    content: `
      <h2>My React Notes</h2>
      <p>Start writing your notes here...</p>
    `,
  });

  if (!editor) {
    return null;
  }

  // -------------------------
  // Font Size
  // -------------------------
  const handleFontSizeChange = (event) => {
    const size = event.target.value;

    setFontSize(size);

    editor
      .chain()
      .focus()
      .setMark("textStyle", {
        fontSize: size,
      })
      .run();
  };

  // -------------------------
  // Save
  // -------------------------
  const handleSave = () => {
    const html = editor.getHTML();

    console.log("Saved Notes:", html);

    if (onSave) {
      onSave(html);
    }
  };

  return (
    <Box
      sx={{
        border: "1px solid #DDE3EC",
        borderRadius: 3,
        backgroundColor: "#fff",
        overflow: "hidden",
      }}
    >
      {/* =========================
          TOOLBAR
      ========================== */}

      <Box
        sx={{
          p: 1,
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 0.5,
          backgroundColor: "#F8F9FC",
          borderBottom: "1px solid #DDE3EC",
        }}
      >
        {/* Font Size */}

        <Tooltip title="Font Size">
          <Select
            value={fontSize}
            onChange={handleFontSizeChange}
            size="small"
            sx={{
              minWidth: 80,
              height: 36,
              fontSize: 13,
            }}
          >
            <MenuItem value="12px">12</MenuItem>
            <MenuItem value="14px">14</MenuItem>
            <MenuItem value="16px">16</MenuItem>
            <MenuItem value="18px">18</MenuItem>
            <MenuItem value="20px">20</MenuItem>
            <MenuItem value="24px">24</MenuItem>
            <MenuItem value="28px">28</MenuItem>
            <MenuItem value="32px">32</MenuItem>
          </Select>
        </Tooltip>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: 0.5 }}
        />

        {/* Bold */}

        <Tooltip title="Bold">
          <IconButton
            size="small"
            onClick={() =>
              editor.chain().focus().toggleBold().run()
            }
            sx={{
              backgroundColor: editor.isActive("bold")
                ? "#E3EEFF"
                : "transparent",
            }}
          >
            <FormatBold fontSize="small" />
          </IconButton>
        </Tooltip>

        {/* Italic */}

        <Tooltip title="Italic">
          <IconButton
            size="small"
            onClick={() =>
              editor.chain().focus().toggleItalic().run()
            }
            sx={{
              backgroundColor: editor.isActive("italic")
                ? "#E3EEFF"
                : "transparent",
            }}
          >
            <FormatItalic fontSize="small" />
          </IconButton>
        </Tooltip>

        {/* Underline */}

        <Tooltip title="Underline">
          <IconButton
            size="small"
            onClick={() =>
              editor.chain().focus().toggleUnderline().run()
            }
            sx={{
              backgroundColor: editor.isActive("underline")
                ? "#E3EEFF"
                : "transparent",
            }}
          >
            <FormatUnderlined fontSize="small" />
          </IconButton>
        </Tooltip>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: 0.5 }}
        />

        {/* Bullet */}

        <Tooltip title="Bullet List">
          <IconButton
            size="small"
            onClick={() =>
              editor.chain().focus().toggleBulletList().run()
            }
          >
            <FormatListBulleted fontSize="small" />
          </IconButton>
        </Tooltip>

        {/* Number */}

        <Tooltip title="Numbered List">
          <IconButton
            size="small"
            onClick={() =>
              editor.chain().focus().toggleOrderedList().run()
            }
          >
            <FormatListNumbered fontSize="small" />
          </IconButton>
        </Tooltip>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: 0.5 }}
        />

        {/* Align Left */}

        <Tooltip title="Align Left">
          <IconButton
            size="small"
            onClick={() =>
              editor
                .chain()
                .focus()
                .setTextAlign("left")
                .run()
            }
          >
            <FormatAlignLeft fontSize="small" />
          </IconButton>
        </Tooltip>

        {/* Align Center */}

        <Tooltip title="Align Center">
          <IconButton
            size="small"
            onClick={() =>
              editor
                .chain()
                .focus()
                .setTextAlign("center")
                .run()
            }
          >
            <FormatAlignCenter fontSize="small" />
          </IconButton>
        </Tooltip>

        {/* Align Right */}

        <Tooltip title="Align Right">
          <IconButton
            size="small"
            onClick={() =>
              editor
                .chain()
                .focus()
                .setTextAlign("right")
                .run()
            }
          >
            <FormatAlignRight fontSize="small" />
          </IconButton>
        </Tooltip>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: 0.5 }}
        />

        {/* Undo */}

        <Tooltip title="Undo">
          <IconButton
            size="small"
            onClick={() =>
              editor.chain().focus().undo().run()
            }
          >
            <Undo fontSize="small" />
          </IconButton>
        </Tooltip>

        {/* Redo */}

        <Tooltip title="Redo">
          <IconButton
            size="small"
            onClick={() =>
              editor.chain().focus().redo().run()
            }
          >
            <Redo fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>

      {/* =========================
          EDITOR
      ========================== */}

      <Box
        sx={{
          minHeight: 400,
          p: 3,

          "& .ProseMirror": {
            minHeight: 350,
            outline: "none",
            fontSize: fontSize,
            lineHeight: 1.7,
            color: "#26354D",
          },

          "& .ProseMirror h1": {
            fontSize: "32px",
            fontWeight: 700,
            marginBottom: "16px",
          },

          "& .ProseMirror h2": {
            fontSize: "26px",
            fontWeight: 700,
            marginBottom: "14px",
          },

          "& .ProseMirror h3": {
            fontSize: "22px",
            fontWeight: 700,
            marginBottom: "12px",
          },

          "& .ProseMirror ul": {
            paddingLeft: "28px",
          },

          "& .ProseMirror ol": {
            paddingLeft: "28px",
          },

          "& .ProseMirror p": {
            margin: "8px 0",
          },
        }}
      >
        <EditorContent editor={editor} />
      </Box>

      {/* =========================
          FOOTER
      ========================== */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 1.5,
          borderTop: "1px solid #DDE3EC",
          backgroundColor: "#F8F9FC",
        }}
      >
        <Button
          variant="contained"
          onClick={handleSave}
          sx={{
            textTransform: "none",
            borderRadius: 2,
            px: 3,
          }}
        >
          Save Notes
        </Button>
      </Box>
    </Box>
  );
};

export default NotesEditor;