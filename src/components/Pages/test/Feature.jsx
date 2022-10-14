import Slide from "@mui/material/Slide";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import { ThemeProvider, Typography } from "@mui/material";
import Grow from "@mui/material/Grow";
import { createTheme } from "@mui/material/styles";

const Feature = () => {
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#FCC106",
      },
    },
  });

  const details = [
    { text: "free for all", time: 1000 },
    { text: "life time access", time: 2000 },
    { text: "business tools", time: 3000 },
    { text: "recomenta system", time: 3500 },
    { text: "just nothing", time: 4000 },
  ];
  return (
    <div className="second">
      <Typography
        className="typo"
        sx={{
          color: "white",
          fontSize: "30px",
          fontWeight: 700,
          marginBottom: "15px",
          fontFamily: "ubuntu",
        }}
      >
        Get Everthing in one Package
      </Typography>
      {details.map((data) => {
        return (
          <div className="wrap">
            <Grow
              in={"false"}
              style={{ transformOrigin: "0 0 0" }}
              timeout={data.time}
            >
              <CheckIcon
                sx={{
                  align: "center",
                  color: "white",
                  fontSize: "20px",
                  marginRight: "10px",
                  marginTop: "10px",
                }}
              />
            </Grow>
            <Slide
              key={data.time}
              className="feature"
              direction="left"
              in="false"
              mountOnEnter
              unmountOnExit
              timeout={data.time}
            >
              <Typography
                sx={{
                  fontSize: "25px",
                  marginLeft: "10px",
                  fontFamily: "ubuntu",
                }}
              >
                {data.text}
              </Typography>
            </Slide>
          </div>
        );
      })}
      <Typography
        size="large"
        sx={{
          color: "aliceblue",
          fontSize: "40px",
          marginTop: "40px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        $ 100/
        <Typography
          sx={{
            fontSize: "20px",
            marginTop: "20px",
            fontFamily: "ubuntu",
            color: "white",
          }}
        >
          month
        </Typography>
      </Typography>
      <ThemeProvider theme={theme}>
        <Button
          classname="buttonsub"
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            width: "170px",
            height: "45px",
            marginTop: "30px",
            backgroundColor: "white",
            borderRadius: "15px",
            fontSize: "20px",
          }}
        >
          <Typography
            className="buttex"
            variant="button"
            sx={{
              color: "#2463e9",
              fontFamily: "ubuntu",
              textTransform: "lowercase",
              fontSize: "21px",
            }}
          >
            Subscribe
          </Typography>
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default Feature;
