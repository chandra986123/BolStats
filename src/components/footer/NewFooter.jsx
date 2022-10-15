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
            <Link to="/home" style={{ borderStyle: "none" }}>
              <img src={logo} className="logo" alt="logo" />
            </Link>
            <Link to="/home" style={{ borderStyle: "none" }}>
              <Typography
                ml={-3}
                variant="h4"
                align="center"
                sx={{
                  fontSize: "35px",
                  fontFamily: "ubuntu",
                  fontWeight: "bold",
                  color: "#45464a",
                  marginTop: "40px",
                }}
              >
                BolStats
              </Typography>
            </Link>
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
              <Link
                to="/Home"
                style={{
                  borderStyle: "none",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "large",
                    fontFamily: "ubuntu",
                    fontWeight: "300",
                  }}
                >
                  Resources
                </Typography>
              </Link>
              <Link
                to="/Home"
                style={{
                  borderStyle: "none",
                }}
              >
                <Typography
                  style={{ marginTop: "-15px" }}
                  sx={{
                    fontSize: "large",
                    fontFamily: "ubuntu",
                    fontWeight: "300",
                  }}
                >
                  About us
                </Typography>
              </Link>
              <Link
                to="/Contactus"
                style={{
                  borderStyle: "none",
                }}
              >
                <Typography
                  style={{ marginTop: "-15px" }}
                  sx={{
                    fontSize: "large",
                    fontFamily: "ubuntu",
                    fontWeight: "300",
                  }}
                >
                  Contact
                </Typography>
              </Link>
              <Link
                to="/Privacypolicy"
                style={{
                  borderStyle: "none",
                }}
              >
                <Typography
                  style={{ marginTop: "-15px" }}
                  sx={{
                    fontSize: "large",
                    fontFamily: "ubuntu",
                    fontWeight: "300",
                  }}
                >
                  Privacy Policy
                </Typography>
              </Link>
            </Grid>
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

              <Link
                to="/Home"
                style={{
                  borderStyle: "none",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "large",
                    fontFamily: "ubuntu",
                    fontWeight: "300",
                  }}
                >
                  Support
                </Typography>
              </Link>
              <Link
                to="/Login"
                style={{
                  borderStyle: "none",
                }}
              >
                <Typography
                  style={{ marginTop: "-15px" }}
                  sx={{
                    fontSize: "large",
                    fontFamily: "ubuntu",
                    fontWeight: "300",
                  }}
                >
                  Sign In
                </Typography>
              </Link>
              <Link
                to="/Home"
                style={{
                  borderStyle: "none",
                }}
              >
                <Typography
                  style={{ marginTop: "-15px" }}
                  sx={{
                    fontSize: "large",
                    fontFamily: "ubuntu",
                    fontWeight: "300",
                  }}
                >
                  blog
                </Typography>
              </Link>
            </Grid>
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
              <Link
                to="/Home"
                style={{
                  borderStyle: "none",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "large",
                    fontFamily: "ubuntu",
                    fontWeight: "300",
                  }}
                >
                  Windframe
                </Typography>
              </Link>
              <Link
                to="/Home"
                style={{
                  borderStyle: "none",
                }}
              >
                <Typography
                  style={{ marginTop: "-15px" }}
                  sx={{
                    fontSize: "large",
                    fontFamily: "ubuntu",
                    fontWeight: "300",
                  }}
                >
                  Loop
                </Typography>
              </Link>
              <Link
                to="/Home"
                style={{
                  borderStyle: "none",
                }}
              >
                <Typography
                  style={{ marginTop: "-15px" }}
                  sx={{
                    fontSize: "large",
                    fontFamily: "ubuntu",
                    fontWeight: "300",
                  }}
                >
                  Contracts
                </Typography>
              </Link>
            </Grid>
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
