import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import logo from "../../assets/logos.png";
import "./newfooter.css";
import { Link } from "react-router-dom";

const NewFooter = () => {
  return (
    <section id="footer">
      <Box className="box" sx={{ flexGrow: 1 }}>
        <div className="side">
          <div className="logodiv">
            <img src={logo} className="logo" alt="logo" />
            <Typography
              variant="h4"
              align="center"
              sx={{
                fontSize: "30px",
                fontFamily: "ubuntu",
                fontWeight: "bold",
                color: "#45464a",
                marginTop: "30px",
              }}
            >
              BolStats
            </Typography>
          </div>
          <div className="para">
            <Typography
              sx={{
                fontSize: "large",
                fontFamily: "ubuntu",
                fontWeight: "300",
              }}
            >
              We are creating High Quality Resources and tools to Aid developers
              during the developement of their projects
            </Typography>
          </div>
        </div>
        <div className="griddiv">
          <Grid
            container
            spacing={{ xs: 2, sm: 6, md: 8, lg: 20, xl: 34 }}
            className="grid"
          >
            {/* <div className="g1div"> */}
            <Grid xs={8} md={4} lg={5} className="g1">
              <Typography
                variant="h4"
                sx={{
                  fontSize: "25px",
                  fontFamily: "ubuntu",
                  fontWeight: "bold",
                  color: "#45464a",
                  marginBottom: "20px",
                }}
              >
                Devwares
              </Typography>
              <Typography
                sx={{
                  fontSize: "large",
                  fontFamily: "ubuntu",
                  fontWeight: "300",
                }}
              >
                Resources
              </Typography>
              <Typography
                sx={{
                  fontSize: "large",
                  fontFamily: "ubuntu",
                  fontWeight: "300",
                }}
              >
                About us
              </Typography>
              <Typography
                sx={{
                  fontSize: "large",
                  fontFamily: "ubuntu",
                  fontWeight: "300",
                }}
              >
                Contact
              </Typography>
              <Link to="/PrivacyPolicy">
                <Typography
                  sx={{
                    fontSize: "large",
                    fontFamily: "ubuntu",
                    fontWeight: "300",
                  }}
                >
                  privacy policy
                </Typography>
              </Link>
            </Grid>
            {/* </div> */}
            {/* <div className="g2div"> */}
            <Grid xs={8} md={4} lg={4} className="g2">
              <Typography
                variant="h4"
                sx={{
                  fontSize: "25px",
                  fontFamily: "ubuntu",
                  fontWeight: "bold",
                  color: "#45464a",
                  marginBottom: "20px",
                }}
              >
                Help
              </Typography>
              <Typography
                sx={{
                  fontSize: "large",
                  fontFamily: "ubuntu",
                  fontWeight: "300",
                }}
              >
                Support
              </Typography>
              <Typography
                sx={{
                  fontSize: "large",
                  fontFamily: "ubuntu",
                  fontWeight: "300",
                }}
              >
                Sign In
              </Typography>
              <Typography
                sx={{
                  fontSize: "large",
                  fontFamily: "ubuntu",
                  fontWeight: "300",
                }}
              >
                blog
              </Typography>
            </Grid>
            {/* </div> */}
            {/* <div className="g3div"> */}
            <Grid xs={8} md={4} lg={3} className="g3">
              <Typography
                variant="h4"
                sx={{
                  fontSize: "25px",
                  fontFamily: "ubuntu",
                  fontWeight: "bold",
                  color: "#45464a",
                  marginBottom: "20px",
                }}
              >
                Products
              </Typography>
              <Typography
                sx={{
                  fontSize: "large",
                  fontFamily: "ubuntu",
                  fontWeight: "300",
                }}
              >
                Windframe
              </Typography>
              <Typography
                sx={{
                  fontSize: "large",
                  fontFamily: "ubuntu",
                  fontWeight: "300",
                }}
              >
                Loop
              </Typography>
              <Typography
                sx={{
                  fontSize: "large",
                  fontFamily: "ubuntu",
                  fontWeight: "300",
                }}
              >
                Contracts
              </Typography>
            </Grid>
            {/* </div> */}
          </Grid>
        </div>
      </Box>
      <Typography align="center" mt={3}>
        @ BolStats, 2022. All right reserved.
      </Typography>
    </section>
  );
};

export default NewFooter;
