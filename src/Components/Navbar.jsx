import { Link } from "react-router-dom"
import { Grid, Button } from "@mui/material"
import "./New.css"

export const Navbar = ({ role, onLogout }) => {
  return (
    <div className="navmain">
      <br/>
      <Grid container justifyContent="space-around" gap={20} alignItems="center">
        <Grid>
          <img src="https://image2url.com/r2/default/images/1770220690302-863ac629-3093-4652-90a5-7e8d321de7da.png"width={214}height={121}/>
        </Grid>
        <Grid style={{paddingRight:"100px"}}>
          <center>
          <h1 style={{fontSize:"50px",fontFamily:"Georgia, serif"}}><span style={{ color: "white" }}>home</span><span style={{ color: "limegreen" }}>spot</span></h1>
          <div className="nav">
            <h3><Link to="/home"  style={{ textDecoration: "none", color: "white" ,fontSize:"25px"}}>Home</Link></h3>
            <h3><Link to="/properties"  style={{ textDecoration: "none", color: "white" ,fontSize:"25px"}}>Property</Link></h3>
            <h3><Link to="/about"  style={{ textDecoration: "none", color: "white" ,fontSize:"25px"}}>About</Link></h3>
            <h3><Link to="/contact"  style={{ textDecoration: "none", color: "white" ,fontSize:"25px"}}>Contact</Link></h3>
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
      <br/>
    </div>
  )
}
