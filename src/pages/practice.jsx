import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  LinearProgress,
  Stack,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CodeIcon from "@mui/icons-material/Code";
import BuildIcon from "@mui/icons-material/Build";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ProjectHosting = () => {
  const projects = [
    {
      name: "Daily Growth",
      description: "Personal learning and productivity dashboard",
      technology: "React + Vite",
      github: "GitHub",
      status: "Live",
      progress: 100,
    },
  ];

  return (
    <Box>
      {/* Header */}
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

      {/* Hosting Overview */}
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

      {/* Deployment Flow */}
      <Card
        elevation={0}
        sx={{
          borderRadius: 3,
          border: "1px solid #E5EAF1",
          mb: 3,
        }}
      >
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
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

            <ArrowForwardIcon sx={{ color: "#A0AABB" }} />

            <FlowItem
              icon={<AccountTreeIcon />}
              title="Git"
              subtitle="Commit"
              color="#F97316"
            />

            <ArrowForwardIcon sx={{ color: "#A0AABB" }} />

            <FlowItem
              icon={<GitHubIcon />}
              title="GitHub"
              subtitle="Push"
              color="#24292F"
            />

            <ArrowForwardIcon sx={{ color: "#A0AABB" }} />

            <FlowItem
              icon={<BuildIcon />}
              title="Build"
              subtitle="Production"
              color="#D97706"
            />

            <ArrowForwardIcon sx={{ color: "#A0AABB" }} />

            <FlowItem
              icon={<CloudUploadIcon />}
              title="Deploy"
              subtitle="Live"
              color="#16803C"
            />
          </Box>
        </CardContent>
      </Card>

      {/* My Projects */}
      <Card
        elevation={0}
        sx={{
          borderRadius: 3,
          border: "1px solid #E5EAF1",
        }}
      >
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2.5,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#17233C",
                }}
              >
                My Projects
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  color: "#718096",
                  mt: 0.3,
                }}
              >
                Your hosted projects and deployment status.
              </Typography>
            </Box>

            <Chip
              label={`${projects.length} Project`}
              size="small"
              sx={{
                backgroundColor: "#EEF5FF",
                color: "#1769E8",
                fontWeight: 600,
              }}
            />
          </Box>

          {projects.map((project) => (
            <Box
              key={project.name}
              sx={{
                p: 2,
                borderRadius: 2.5,
                border: "1px solid #E8ECF2",
                backgroundColor: "#FAFBFC",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ display: "flex", gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 45,
                      height: 45,
                      borderRadius: 2,
                      backgroundColor: "#EEF5FF",
                      color: "#1769E8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CodeIcon />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#17233C",
                      }}
                    >
                      {project.name}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 12,
                        color: "#718096",
                        mt: 0.3,
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ mt: 1 }}
                    >
                      <Chip
                        label={project.technology}
                        size="small"
                        sx={{
                          fontSize: 10,
                          height: 24,
                        }}
                      />

                      <Chip
                        icon={
                          <CheckCircleIcon
                            sx={{ fontSize: 15 }}
                          />
                        }
                        label={project.status}
                        size="small"
                        sx={{
                          fontSize: 10,
                          height: 24,
                          backgroundColor: "#ECFDF3",
                          color: "#16803C",
                        }}
                      />
                    </Stack>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                  }}
                >
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    sx={{
                      textTransform: "none",
                      borderRadius: 2,
                    }}
                  >
                    GitHub
                  </Button>

                  <Button
                    size="small"
                    variant="contained"
                    startIcon={<LanguageIcon />}
                    sx={{
                      textTransform: "none",
                      borderRadius: 2,
                      backgroundColor: "#1769E8",
                    }}
                  >
                    Live
                  </Button>
                </Box>
              </Box>

              <Box sx={{ mt: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 0.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "#718096",
                    }}
                  >
                    Deployment progress
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#1769E8",
                    }}
                  >
                    {project.progress}%
                  </Typography>
                </Box>

                <LinearProgress
                  variant="determinate"
                  value={project.progress}
                  sx={{
                    height: 6,
                    borderRadius: 5,
                    backgroundColor: "#E9EEF5",
                    "& .MuiLinearProgress-bar": {
                      borderRadius: 5,
                      backgroundColor: "#1769E8",
                    },
                  }}
                />
              </Box>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

const OverviewCard = ({
  icon,
  title,
  value,
  color,
  background,
}) => {
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

const FlowItem = ({
  icon,
  title,
  subtitle,
  color,
}) => {
  return (
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
  );
};

export default ProjectHosting;