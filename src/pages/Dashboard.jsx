import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  LinearProgress,
  Checkbox,
  Chip,
  Stack,
} from "@mui/material";

import {
  MenuBook,
  TrackChanges,
  LocalFireDepartment,
  TrendingUp,
  CheckCircle,
  RadioButtonUnchecked,
  AccessTime,
  ArrowForward,
} from "@mui/icons-material";

import StudyTimeModal from "../components/study/studyTimeModal";
const Dashboard = () => {
  const [studyModalOpen, setStudyModalOpen] = useState(false);

  // Cards Content Data
  const stats = [
    {
      title: "Study Time",
      value: "3h 45m",
      subtitle: "Today",
      icon: <MenuBook />,
      color: "#1769E8",
      clickable: true,
    },
    {
      title: "Goals",
      value: "5 / 7",
      subtitle: "Completed",
      icon: <TrackChanges />,
      color: "#8E44AD",
    },
    {
      title: "Daily Streak",
      value: "12 Days",
      subtitle: "Keep going!",
      icon: <LocalFireDepartment />,
      color: "#F39C12",
    },
    {
      title: "Progress",
      value: "75%",
      subtitle: "This week",
      icon: <TrendingUp />,
      color: "#16A085",
    },
  ];

  const goals = [
    {
      title: "React Hooks",
      completed: true,
    },
    {
      title: "JavaScript Practice",
      completed: true,
    },
    {
      title: "Redux Toolkit",
      completed: false,
    },
    {
      title: "Next.js Routing",
      completed: false,
    },
  ];

  const notes = [
    "React.memo",
    "useTransition",
    "useDeferredValue",
    "Concurrent React",
  ];

  const upcoming = [
    {
      title: "Redux Toolkit Practice",
      time: "Today · 7:00 PM",
    },
    {
      title: "React Revision",
      time: "Tomorrow · 10:00 AM",
    },
    {
      title: "Next.js Practice",
      time: "Tomorrow · 6:00 PM",
    },
  ];

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#17233C",
            fontSize: {
              xs: 26,
              sm: 30,
              md: 34,
            },
          }}
        >
          Daily Growth Dashboard 🚀
        </Typography>

        <Typography
          sx={{
            mt: 0.7,
            color: "#7B879A",
            fontSize: 15,
          }}
        >
      Ready to grow today?
        </Typography>
      </Box>

      {/*Cards */}
      <Grid container spacing={2.5}>
        {stats.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            key={item.title}
          >
            <Card
              onClick={() => {
                if (item.clickable) {
                  setStudyModalOpen(true);
                }
              }}
              sx={{
                height: "100%",
                borderRadius: 3,
                border: "1px solid #E8ECF2",
                boxShadow: "0 3px 12px rgba(20, 40, 80, 0.05)",
                cursor: item.clickable ? "pointer" : "default",
                transition: "all 0.2s ease",

                "&:hover": item.clickable
                  ? {
                      transform: "translateY(-3px)",
                      boxShadow:
                        "0 8px 22px rgba(20, 40, 80, 0.10)",
                    }
                  : {},
              }}
            >
              <CardContent sx={{ p: 2.5 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 14,
                        color: "#7B879A",
                        fontWeight: 500,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.7,
                        fontSize: 25,
                        fontWeight: 700,
                        color: "#17233C",
                      }}
                    >
                      {item.value}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.4,
                        fontSize: 12,
                        color: "#9AA5B5",
                      }}
                    >
                      {item.subtitle}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: `${item.color}15`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </Box>
                </Box>

                {item.clickable && (
                  <Box
                    sx={{
                      mt: 1.5,
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      color: "#1769E8",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      View study topics
                    </Typography>

                    <ArrowForward sx={{ fontSize: 15 }} />
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Midd Section */}
      <Grid
        container
        spacing={2.5}
        sx={{ mt: 0.2 }}
      >
        {/* Today's Goals */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: "100%",
              borderRadius: 3,
              border: "1px solid #E8ECF2",
              boxShadow:
                "0 3px 12px rgba(20, 40, 80, 0.05)",
            }}
          >
            <CardContent sx={{ p: 2.5 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
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
                    Today's Goals
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "#8A95A5",
                      mt: 0.3,
                    }}
                  >
                    Keep moving forward
                  </Typography>
                </Box>

                <Chip
                  label="5 / 7"
                  size="small"
                  sx={{
                    backgroundColor: "#EAF2FF",
                    color: "#1769E8",
                    fontWeight: 600,
                  }}
                />
              </Box>

              <Stack spacing={1}>
                {goals.map((goal) => (
                  <Box
                    key={goal.title}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: 1,
                      borderRadius: 2,
                      backgroundColor: goal.completed
                        ? "#F5FBF8"
                        : "#F8F9FC",
                    }}
                  >
                    <Checkbox
                      checked={goal.completed}
                      disabled
                      icon={
                        <RadioButtonUnchecked
                          sx={{ fontSize: 21 }}
                        />
                      }
                      checkedIcon={
                        <CheckCircle
                          sx={{
                            fontSize: 21,
                            color: "#16A085",
                          }}
                        />
                      }
                    />

                    <Typography
                      sx={{
                        fontSize: 14,
                        color: goal.completed
                          ? "#607080"
                          : "#17233C",
                        textDecoration: goal.completed
                          ? "line-through"
                          : "none",
                        fontWeight: 500,
                      }}
                    >
                      {goal.title}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Weekly Progress */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: "100%",
              borderRadius: 3,
              border: "1px solid #E8ECF2",
              boxShadow:
                "0 3px 12px rgba(20, 40, 80, 0.05)",
            }}
          >
            <CardContent sx={{ p: 2.5 }}>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#17233C",
                }}
              >
                Weekly Progress
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  color: "#8A95A5",
                  mt: 0.3,
                }}
              >
                Your learning activity
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    height: 120,
                    gap: 1,
                  }}
                >
                  {[55, 72, 45, 85, 65, 90, 75].map(
                    (value, index) => (
                      <Box
                        key={index}
                        sx={{
                          flex: 1,
                          height: `${value}%`,
                          maxWidth: 42,
                          borderRadius:
                            "6px 6px 2px 2px",
                          background:
                            "linear-gradient(180deg, #1769E8, #67A1FF)",
                        }}
                      />
                    )
                  )}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 1,
                  }}
                >
                  {[
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                    "Sun",
                  ].map((day) => (
                    <Typography
                      key={day}
                      sx={{
                        fontSize: 11,
                        color: "#8A95A5",
                      }}
                    >
                      {day}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Grid
        container
        spacing={2.5}
        sx={{ mt: 0.2 }}
      >
        {/* Recent Notes */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 3,
              border: "1px solid #E8ECF2",
              boxShadow:
                "0 3px 12px rgba(20, 40, 80, 0.05)",
            }}
          >
            <CardContent sx={{ p: 2.5 }}>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#17233C",
                }}
              >
                Recent Notes 📝
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  color: "#8A95A5",
                  mt: 0.3,
                  mb: 2,
                }}
              >
                Recently studied topics
              </Typography>

              <Stack spacing={1}>
                {notes.map((note) => (
                  <Box
                    key={note}
                    sx={{
                      p: 1.3,
                      borderRadius: 2,
                      backgroundColor: "#F8F9FC",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#33415C",
                      }}
                    >
                      {note}
                    </Typography>

                    <ArrowForward
                      sx={{
                        fontSize: 17,
                        color: "#9AA5B5",
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 3,
              border: "1px solid #E8ECF2",
              boxShadow:
                "0 3px 12px rgba(20, 40, 80, 0.05)",
            }}
          >
            <CardContent sx={{ p: 2.5 }}>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#17233C",
                }}
              >
                Upcoming 📅
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  color: "#8A95A5",
                  mt: 0.3,
                  mb: 2,
                }}
              >
                Your upcoming study activities
              </Typography>

              <Stack spacing={1.2}>
                {upcoming.map((item) => (
                  <Box
                    key={item.title}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      p: 1.2,
                      borderRadius: 2,
                      backgroundColor: "#F8F9FC",
                    }}
                  >
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#EAF2FF",
                        color: "#1769E8",
                      }}
                    >
                      <AccessTime sx={{ fontSize: 20 }} />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: "#33415C",
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 12,
                          color: "#8A95A5",
                          mt: 0.2,
                        }}
                      >
                        {item.time}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/*Modal */}
      <StudyTimeModal
        open={studyModalOpen}
        onClose={() => setStudyModalOpen(false)}
      />
    </Box>
  );
};

export default Dashboard;