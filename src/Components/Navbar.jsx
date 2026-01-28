import { Link } from "react-router-dom"
import './New.css'
import { Grid } from "@mui/material"

export const Navbar=()=>{
  return (
    <div className="navmain">
      <Grid container direction="row"sx={{justifyContent: "space-around",gap:"150px"}}>
        <Grid>
            <img src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-house-with-no-background-png-image_9197435.png" width={175} height={175}/>
        </Grid>
        <Grid>
        <center>
        <div className="navbar">
          <br/>
            <h1 style={{color:"yellow"}}>Real Estate Management</h1>
          <nav>
            <div className="nav">
              <h3><Link to="/" style={{textDecoration:"none",color:"white"}}>Home</Link></h3>
              <h3><Link to="/property" style={{textDecoration:"none",color:"white"}}>Property</Link></h3>
              <h3><Link to="/about" style={{textDecoration:"none",color:"white"}}>About</Link></h3>
              <h3><Link to="/contact" style={{textDecoration:"none",color:"white"}}>Contact</Link></h3>
            </div>
          </nav><br/>
        </div>
        </center>
        </Grid>
        <Grid>
          <img src="https://static.vecteezy.com/system/resources/previews/048/884/970/non_2x/house-isolated-on-transparent-background-png.png" width={175} height={175}/>
        </Grid>
        </Grid>
    </div>
  )
}
