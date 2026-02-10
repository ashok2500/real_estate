import { Link } from "react-router-dom"
import { Grid, Button } from "@mui/material"
import "./New.css"

export const Navbar = ({ role, onLogout }) => {
  return (
    <div className="navmain">
      <Grid container direction="row" sx={{ justifyContent: "space-around", alignItems: "center" }}>
        <Grid>
          <img src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-house-with-no-background-png-image_9197435.png"width={175}height={175}/>
        </Grid>
        <Grid>
          <center>
            <div className="navbar">
              <br />
              <h1 style={{ color: "yellow" }}>Real Estate Management</h1>
              <nav>
                <div className="nav">
                  <h3>
                    <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
                      Home
                    </Link>
                  </h3>
                  <h3>
                    <Link to="/properties" style={{ textDecoration: "none", color: "white" }}>
                      Property
                    </Link>
                  </h3>
                  <h3>
                    <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
                      About
                    </Link>
                  </h3>
                  <h3>
                    <Link to="/contact" style={{ textDecoration: "none", color: "white" }}>
                      Contact
                    </Link>
                  </h3>
                </div>
              </nav>
              <br /><br />
            </div>
          </center>
        </Grid>
        <Grid>
          <center>
            <img src="https://static.vecteezy.com/system/resources/previews/036/280/651/original/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"width={60}height={60}style={{borderRadius: "50%",objectFit: "cover"}}/>
              <p style={{ color: "white" }}><b>{role.toUpperCase()}</b></p>
              <Button variant="contained"color="error"size="small"onClick={onLogout}>Logout</Button>
              </center>
        </Grid>
      </Grid>
    </div>
  )
}
