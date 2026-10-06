import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const javascriptTopics = [
  {
    id: 1,
    title: "JavaScript Therory",
    description: "Learn JavaScript fundamentals and syntax",
    time: "1h 15m",
  },
  {
    id: 2,
    title: "JavaScript Examples",
    description: "See JavaScript in action with practical examples",
    time: "1h 30m",
  },
];
const JavascriptNotes = () => {
    const navigate = useNavigate();
  return (
    <>
      <Box>
        {/* Header */}
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#17233C",
              fontSize: { xs: 26, sm: 30, md: 34 },
            }}
          >
            JavaScript Notes
          </Typography>
          <Typography sx={{ mt: 0.7, color: "#7B879A", fontSize: 15 }}>
            Learn React step by step with theory, examples and practice.
          </Typography>
        </Box>

        {/* JavaScript Topics and Card */}
        <Grid container spacing={3}>
          {javascriptTopics.map((topic) => (
            <>
              <Grid item xs={12} sm={6} md={4} key={topic.id}>
                <Card
                  onClick={() => {
                    if (topic.title === "JavaScript Therory") {
                      navigate("/javascript-basics");
                    } else if (topic.title === "JavaScript Examples") {
                      navigate("/javascript-codes");
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
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
};
export default JavascriptNotes;
