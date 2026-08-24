import {
  Close,
  AccessTime,
  ArrowForward,
  Code,
  Javascript,
  Web,
  AccountTree,
  Palette,
  // GitHubIcon
} from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const studyTopics = [
  {
    id: 1,
    title: "React",
    description: "Learn React concepts and hooks",
    time: "1h 20m",
    progress: 75,
    icon: <Code />,
    iconColor: "#1769E8",
    background: "#EEF5FF",
  },
  {
    id: 2,
    title: "JavaScript",
    description: "Practice JavaScript fundamentals",
    time: "45m",
    progress: 60,
    icon: <Javascript />,
    iconColor: "#D6A800",
    background: "#FFF9E6",
  },
  {
    id: 3,
    title: "Next.js",
    description: "Learn Next.js and routing",
    time: "35m",
    progress: 45,
    icon: <Web />,
    iconColor: "#111827",
    background: "#F3F4F6",
  },
  {
    id: 4,
    title: "Redux",
    description: "Learn Redux Toolkit",
    time: "40m",
    progress: 50,
    icon: <AccountTree />,
    iconColor: "#764ABC",
    background: "#F5F0FF",
  },
  {
    id: 5,
    title: "Material UI",
    description: "Build beautiful React interfaces",
    time: "25m",
    progress: 35,
    icon: <Palette />,
    iconColor: "#007FFF",
    background: "#EEF8FF",
  },
  // project  hosting
  {
    id: 6,
    title: "Project Hosting",
    description: "Git,GitHub & Deployment Basics",
    // time: "25m",
    // progress: 35,
    icon: <GitHubIcon />,
    iconColor: "#007FFF",
    background: "#EEF8FF",
  },
];

const StudyTimeModal = ({ open, onClose }) => {
  // for Navigation
    const navigate = useNavigate();

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="study-time-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",

          transform: "translate(-50%, -50%)",

          width: {
            xs: "94%",
            sm: "90%",
            md: 720,
          },

          maxHeight: "90vh",
          overflowY: "auto",

          backgroundColor: "#fff",

          borderRadius: 4,

          boxShadow: 24,

          outline: "none",

          p: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            mb: 3,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: 21,
                  sm: 25,
                },
                fontWeight: 700,
                color: "#17233C",
              }}
            >
              Study Time 📚
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                color: "#718096",
                fontSize: 13.5,
              }}
            >
              Choose a topic and continue your learning.
            </Typography>
          </Box>

          <IconButton
            onClick={onClose}
            sx={{
              backgroundColor: "#F4F6F9",

              "&:hover": {
                backgroundColor: "#E9EDF3",
              },
            }}
          >
            <Close />
          </IconButton>
        </Box>

        {/* Total Study Time */}
        {/* <Box
          sx={{
            mb: 3,
            p: 2,

            borderRadius: 3,

            background:
              "linear-gradient(100deg,#EAF2FF,#DCEAFF)",

            border: "1px solid #D5E4FF",

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

              backgroundColor: "#1769E8",

              color: "#fff",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AccessTime />
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: 12,
                color: "#5B6B84",
              }}
            >
              Today's Study Time
            </Typography>

            <Typography
              sx={{
                fontSize: 22,
                fontWeight: 700,
                color: "#10234A",
              }}
            >
              3h 45m
            </Typography>
          </Box>
        </Box> */}

        {/* Topic Cards */}
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },

            gap: 2,
          }}
        >
          {studyTopics.map((topic) => (
            <Card
              key={topic.id}
              elevation={0}
              // onClick={() => {
              //   console.log(
              //     "Selected topic:",
              //     topic.title
              //   );
              // }}
              onClick={() => {
                if (topic.title === "Project Hosting") {
                  onClose();
                  navigate("/project-hosting");
                }
              }}
              sx={{
                borderRadius: 3,
                border: "1px solid #E5EAF1",
                cursor: "pointer",
                transition: "all 0.2s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  borderColor: topic.iconColor,
                  boxShadow: "0 8px 25px rgba(23,35,60,0.08)",
                },
              }}
            >
              <CardContent sx={{ p: 2.2 }}>
                {/* Top */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,

                      borderRadius: 2.5,

                      backgroundColor: topic.background,

                      color: topic.iconColor,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {topic.icon}
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#17233C",
                      }}
                    >
                      {topic.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 11.5,
                        color: "#7A8699",
                        mt: 0.3,
                      }}
                    >
                      {topic.description}
                    </Typography>
                  </Box>

                  <ArrowForward
                    sx={{
                      fontSize: 20,
                      color: "#A0AABB",
                    }}
                  />
                </Box>

                {/* Time */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",

                    alignItems: "center",

                    mt: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#69768A",
                    }}
                  >
                    Study Time
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: topic.iconColor,
                    }}
                  >
                    {topic.time}
                  </Typography>
                </Box>

                {/* Progress */}
                <Box sx={{ mt: 1 }}>
                  <Box
                    sx={{
                      height: 6,

                      borderRadius: 5,

                      backgroundColor: "#EDF1F6",

                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        width: `${topic.progress}%`,

                        height: "100%",

                        borderRadius: 5,

                        backgroundColor: topic.iconColor,

                        transition: "width 0.3s ease",
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      mt: 0.6,
                      fontSize: 10.5,
                      color: "#8994A5",
                      textAlign: "right",
                    }}
                  >
                    {topic.progress}% complete
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default StudyTimeModal;
