import {
  AutoAwesome,
  Code,
  DataObject,
  Extension,
  Public,
  RouteOutlined,
  Send,
  Widgets,
} from "@mui/icons-material";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { Route } from "react-router-dom";
const reactTopics = [
  {
    id: 1,
    title: "React Basics",
    description: "Learn the fundamentals of React and how it works.",
    icon: <Code />,
    iconColor: "#1769E8",
    background: "#EEF5FF",
  },
  {
    id: 2,
    title: "Components",
    description: "Learn functional components and component structure.",
    icon: <Widgets />,

    iconColor: "#8E44AD",
    background: "#F5EEFF",
  },
  {
    id: 3,
    title: "Props",
    description: "Learn how to pass data from parent to child components.",
    icon: <Send />,
    iconColor: "#16A085",
    background: "#ECFAF7",
  },
  {
    id: 4,
    title: "State",
    description: "Understand state and how it controls the UI.",
    icon: <DataObject />,
    iconColor: "#E67E22",
    background: "#FFF4E8",
  },
  {
    id: 5,
    title: "Hooks",
    description: "Learn useState, useEffect, useMemo and other hooks.",
    icon: <Extension />,
    iconColor: "#D35400",
    background: "#FFF1EA",
  },
  {
    id: 6,
    title: "Context API",
    description: "Learn how to share data without prop drilling.",
    icon: <Public />,
    iconColor: "#2980B9",
    background: "#EEF7FC",
  },
  {
    id: 7,
    title: "React Router",
    description: "Learn routing and navigation in React applications.",
     icon: <  RouteOutlined  
/>,
    iconColor: "#27AE60",
    background: "#EDFAF1",
  },
  {
    id: 8,
    title: "Performance",
    description: "Learn React optimization and performance techniques.",
    icon: <AutoAwesome />,
    iconColor: "#C0392B",
    background: "#FFF0EF",
  },
];
const ReactNotes = () => {

  const navigate=useNavigate()

  return (
    <>
      <Box>
        {/* Header */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#17233C",
              fontSize: { xs: 26, sm: 30, md: 34 },
            }}
          >
            React Learning
          </Typography>
          <Typography sx={{ mt: 0.7, color: "#7B879A", fontSize: 15 }}>
            Learn React step by step with theory, examples and practice.
          </Typography>
        </Box>
        {/* React Topics Card */}
        <Grid container spacing={3}>
          {reactTopics.map((topic) => (
            <Grid item xs={12} sm={6} md={4} key={topic.id}>
              <Card
              onClick={()=>{
                if (topic.title==="React Basics"){
                  navigate("/react-basics")
                }
              }}
              
              >

                <CardContent>
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
                        backgroundColor: topic.background,
                        color: topic.iconColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 2.5,
                      }}
                    >
                      {topic.icon}
                    </Box>

                    <Box>
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
                          fontSize: 13,
                          color: "#7B879A",
                          mt: 0.5,
                        }}
                      >
                        {topic.description}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ReactNotes;
