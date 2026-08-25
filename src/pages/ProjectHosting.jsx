import React, { useState } from "react";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  LinearProgress,
  Stack,
  Grid,
} from "@mui/material";

import {
  Code as CodeIcon,
  GitHub as GitHubIcon,
  CloudUpload as CloudUploadIcon,
  Build as BuildIcon,
  AccountTree as AccountTreeIcon,
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  Language as LanguageIcon,
  ContentCopy as ContentCopyIcon,
  Check as CheckIcon,
} from "@mui/icons-material";

/* =========================================================
   COMMAND DATA
========================================================= */

const commandCategories = [
  {
    category: "Git Basics",
    commands: [
      {
        command: "git init",
        meaning: "Creates a new Git repository in your project.",
        when: "Use this when starting Git tracking for a new project.",
      },
      {
        command: "git status",
        meaning: "Shows the current status of your files.",
        when: "Use this to check changed, staged and untracked files.",
      },
      {
        command: "git add .",
        meaning: "Adds all changed files to the staging area.",
        when: "Use this before creating a commit.",
      },
      {
        command: 'git commit -m "message"',
        meaning: "Saves the staged changes into Git history.",
        when: "Use this after git add.",
      },
      {
        command: "git log",
        meaning: "Shows your previous commits.",
        when: "Use this when you want to see your Git history.",
      },
    ],
  },

  {
    category: "GitHub",
    commands: [
      {
        command: "git remote -v",
        meaning: "Shows the GitHub repository connected to your project.",
        when: "Use this to check your remote repository URL.",
      },
      {
        command: "git remote add origin <repository-url>",
        meaning: "Connects your local project to a GitHub repository.",
        when: "Usually used when connecting a project to GitHub for the first time.",
      },
      {
        command: "git branch",
        meaning: "Shows the branches available in your local repository.",
        when: "Use this when working with multiple Git branches.",
      },
      {
        command: "git push -u origin main",
        meaning: "Uploads your local commits to the main branch on GitHub.",
        when: "Use this for the first push to the main branch.",
      },
      {
        command: "git push",
        meaning: "Uploads your new commits to GitHub.",
        when: "Use this after committing new changes.",
      },
      {
        command: "git pull",
        meaning: "Downloads the latest changes from GitHub.",
        when: "Use this when the remote repository has newer changes.",
      },
    ],
  },

  {
    category: "Build & NPM",
    commands: [
      {
        command: "npm install",
        meaning: "Installs the dependencies listed in package.json.",
        when: "Use this after cloning a project or when dependencies change.",
      },
      {
        command: "npm run dev",
        meaning: "Starts the Vite development server.",
        when: "Use this while developing your project locally.",
      },
      {
        command: "npm run build",
        meaning: "Creates an optimized production build.",
        when: "Use this to check whether your project can build for production.",
      },
      {
        command: "npm run preview",
        meaning: "Runs the production build locally for preview.",
        when: "Use this after npm run build to test the production version.",
      },
    ],
  },

  {
    category: "Deployment",
    commands: [
      {
        command: "git add .",
        meaning: "Stages your latest project changes.",
        when: "Use this before committing your changes.",
      },
      {
        command: 'git commit -m "Update project"',
        meaning: "Creates a Git commit containing your latest changes.",
        when: "Use this after staging your changes.",
      },
      {
        command: "git push",
        meaning: "Pushes your latest commit to GitHub.",
        when: "Use this whenever you want to send local updates to GitHub.",
      },
    ],
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const ProjectHosting = () => {
  const [copiedCommand, setCopiedCommand] = useState("");

  /* =====================================================
     COPY COMMAND
  ===================================================== */

  const handleCopy = async (command) => {
    try {
      await navigator.clipboard.writeText(command);

      setCopiedCommand(command);

      setTimeout(() => {
        setCopiedCommand("");
      }, 2000);
    } catch (error) {
      console.error("Failed to copy command:", error);
    }
  };

  /* =====================================================
     PROJECT DATA
  ===================================================== */

  const projects = [
    {
      name: "Daily Growth",
      description: "Personal learning and productivity dashboard",
      technology: "React + Vite",
      status: "Live",
      progress: 100,

      // Replace these with your actual URLs
      githubUrl: "https://github.com/narmadapatole/daily-growth",
      liveUrl: "#",
    },
  ];

  return (
    <Box>
      {/* =================================================
          HEADER
      ================================================= */}

      <Box
        sx={{
          mb: 3,

          display: "flex",

          justifyContent: "space-between",

          alignItems: {
            xs: "flex-start",
            sm: "center",
          },

          flexDirection: {
            xs: "column",
            sm: "row",
          },

          gap: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: {
                xs: 24,
                sm: 28,
              },

              fontWeight: 700,

              color: "#17233C",
            }}
          >
            Project Hosting 🚀
          </Typography>

          <Typography
            sx={{
              mt: 0.5,

              color: "#718096",

              fontSize: 14,
            }}
          >
            Learn how to host, deploy and manage your projects.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<CloudUploadIcon />}
          sx={{
            borderRadius: 2.5,

            textTransform: "none",

            fontWeight: 600,

            backgroundColor: "#1769E8",

            px: 2.5,

            "&:hover": {
              backgroundColor: "#1258C7",
            },
          }}
        >
          Deploy Project
        </Button>
      </Box>

      {/* =================================================
          OVERVIEW CARDS
      ================================================= */}

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",

            sm: "1fr 1fr",

            md: "repeat(4, 1fr)",
          },

          gap: 2,

          mb: 3,
        }}
      >
        <OverviewCard
          icon={<CodeIcon />}
          title="Local Project"
          value="Ready"
          color="#1769E8"
          background="#EEF5FF"
        />

        <OverviewCard
          icon={<GitHubIcon />}
          title="GitHub"
          value="Connected"
          color="#24292F"
          background="#F3F4F6"
        />

        <OverviewCard
          icon={<BuildIcon />}
          title="Production Build"
          value="Ready"
          color="#D97706"
          background="#FFF7E6"
        />

        <OverviewCard
          icon={<CloudUploadIcon />}
          title="Deployment"
          value="Live"
          color="#16803C"
          background="#ECFDF3"
        />
      </Box>

      {/* =================================================
          DEPLOYMENT FLOW
      ================================================= */}

      <Card
        elevation={0}
        sx={{
          borderRadius: 3,

          border: "1px solid #E5EAF1",

          mb: 3,
        }}
      >
        <CardContent
          sx={{
            p: {
              xs: 2,
              sm: 3,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 18,

              fontWeight: 700,

              color: "#17233C",

              mb: 0.5,
            }}
          >
            Deployment Flow
          </Typography>

          <Typography
            sx={{
              fontSize: 13,

              color: "#718096",

              mb: 3,
            }}
          >
            Understand how your code moves from local development to a live
            website.
          </Typography>

          <Box
            sx={{
              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              gap: {
                xs: 1,
                sm: 2,
              },

              flexWrap: "wrap",
            }}
          >
            <FlowItem
              icon={<CodeIcon />}
              title="Code"
              subtitle="Local"
              color="#1769E8"
            />

            <ArrowForwardIcon
              sx={{
                color: "#A0AABB",
              }}
            />

            <FlowItem
              icon={<AccountTreeIcon />}
              title="Git"
              subtitle="Commit"
              color="#F97316"
            />

            <ArrowForwardIcon
              sx={{
                color: "#A0AABB",
              }}
            />

            <FlowItem
              icon={<GitHubIcon />}
              title="GitHub"
              subtitle="Push"
              color="#24292F"
            />

            <ArrowForwardIcon
              sx={{
                color: "#A0AABB",
              }}
            />

            <FlowItem
              icon={<BuildIcon />}
              title="Build"
              subtitle="Production"
              color="#D97706"
            />

            <ArrowForwardIcon
              sx={{
                color: "#A0AABB",
              }}
            />

            <FlowItem
              icon={<CloudUploadIcon />}
              title="Deploy"
              subtitle="Live"
              color="#16803C"
            />
          </Box>
        </CardContent>
      </Card>

      {/* =================================================
          COMMANDS & MEANING
      ================================================= */}

      <Card
        elevation={0}
        sx={{
          borderRadius: 3,

          border: "1px solid #E5EAF1",

          mb: 3,
        }}
      >
        <CardContent
          sx={{
            p: {
              xs: 2,
              sm: 3,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 18,

              fontWeight: 700,

              color: "#17233C",
            }}
          >
            Git & Deployment Commands 💻
          </Typography>

          <Typography
            sx={{
              fontSize: 13,

              color: "#718096",

              mt: 0.5,

              mb: 3,
            }}
          >
            Common commands used while developing, pushing and deploying your
            projects.
          </Typography>

          {commandCategories.map((category) => (
            <Box
              key={category.category}
              sx={{
                mb: 3,

                "&:last-child": {
                  mb: 0,
                },
              }}
            >
              {/* Category */}
              <Typography
                sx={{
                  fontSize: 15,

                  fontWeight: 700,

                  color: "#1769E8",

                  mb: 1.5,
                }}
              >
                {category.category}
              </Typography>

              {/* Commands */}
              <Box
                sx={{
                  display: "flex",

                  flexDirection: "column",

                  gap: 1.5,
                }}
              >
                {category.commands.map((item) => (
                  <Box
                    key={item.command}
                    sx={{
                      p: 2,

                      borderRadius: 2.5,

                      border: "1px solid #E5EAF1",

                      backgroundColor: "#FAFBFC",
                    }}
                  >
                    {/* Command */}
                    <Box
                      sx={{
                        display: "flex",

                        alignItems: "center",

                        justifyContent: "space-between",

                        gap: 2,
                      }}
                    >
                      <Box
                        component="code"
                        sx={{
                          fontFamily: "monospace",

                          fontSize: {
                            xs: 12,
                            sm: 14,
                          },

                          fontWeight: 600,

                          color: "#17233C",

                          overflowX: "auto",

                          wordBreak: "break-word",
                        }}
                      >
                        {item.command}
                      </Box>

                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={
                          copiedCommand === item.command ? (
                            <CheckIcon />
                          ) : (
                            <ContentCopyIcon />
                          )
                        }
                        onClick={() => handleCopy(item.command)}
                        sx={{
                          minWidth: 80,

                          textTransform: "none",

                          borderRadius: 2,

                          flexShrink: 0,
                        }}
                      >
                        {copiedCommand === item.command ? "Copied" : "Copy"}
                      </Button>
                    </Box>

                    {/* Meaning */}
                    <Typography
                      sx={{
                        mt: 1.5,

                        fontSize: 13,

                        fontWeight: 600,

                        color: "#344054",
                      }}
                    >
                      Meaning
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.3,

                        fontSize: 12.5,

                        color: "#718096",
                      }}
                    >
                      {item.meaning}
                    </Typography>

                    {/* When to use */}
                    <Typography
                      sx={{
                        mt: 1,

                        fontSize: 12,

                        fontWeight: 600,

                        color: "#344054",
                      }}
                    >
                      When to use
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.3,

                        fontSize: 12,

                        color: "#8994A5",
                      }}
                    >
                      {item.when}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </CardContent>
      </Card>

      {/* about Vercel */}
      <Box>
        <Card>
          <Box>
            <Grid container>
              <Grid item>
                <Typography
                  sx={{
                    color: "#f5455c",
                    fontWeight: "bold",
                    fontSize: "25px",
                  }}
                >
                  About Vercel
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <Typography
                  sx={{
                    fontSize: "20px",
                  }}
                >
                  Vercel is a platform that takes your web project from GitHub
                  and puts it on the internet so other people can open it with a
                  URL.
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item W>
                <Typography>
                Your Computer │ │ git push ↓ GitHub │ │ automatic deployment ↓
                Vercel │ ↓ 🌍 Live Website https://your-project.vercel.app
              </Typography>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

/* =========================================================
   OVERVIEW CARD
========================================================= */

const OverviewCard = ({ icon, title, value, color, background }) => {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,

        border: "1px solid #E5EAF1",
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            gap: 1.5,
          }}
        >
          <Box
            sx={{
              width: 45,

              height: 45,

              borderRadius: 2,

              backgroundColor: background,

              color: color,

              display: "flex",

              alignItems: "center",

              justifyContent: "center",
            }}
          >
            {icon}
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: 11,

                color: "#718096",
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                fontSize: 15,

                fontWeight: 700,

                color: "#17233C",

                mt: 0.2,
              }}
            >
              {value}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

/* =========================================================
   FLOW ITEM
========================================================= */

const FlowItem = ({ icon, title, subtitle, color }) => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",

          minWidth: {
            xs: 65,
            sm: 80,
          },
        }}
      >
        <Box
          sx={{
            width: 48,

            height: 48,

            borderRadius: "50%",

            margin: "auto",

            backgroundColor: "#F5F7FA",

            color: color,

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            border: `1px solid ${color}`,
          }}
        >
          {icon}
        </Box>

        <Typography
          sx={{
            mt: 0.8,

            fontSize: 12,

            fontWeight: 700,

            color: "#17233C",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: 10,

            color: "#8994A5",
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </>
  );
};

export default ProjectHosting;
