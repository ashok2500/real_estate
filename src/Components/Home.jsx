import {Card} from '@mui/material'
import {CardContent} from '@mui/material'
import { Grid } from '@mui/material'
import './New.css'
export const Home=()=>{
  return(
    <div className='home'>
      <center>
        <br/>
        <h1 style={{color:"white"}}>Find Your Dream Home with Ease</h1>
        <h2 style={{color:"white"}}>Explore the best properties for sale and rent. Your perfect home is just a click away</h2>
      </center>
      <Grid container spacing={4} justifyContent="center">
            <Card sx={{ width: 300, margin: 2, border: "2px solid black" }}>
              <CardContent>
                  <center>
                  <h3 style={{ color: "#ff6b6b", marginBottom: "10px" }}>First-Time Buyer Discounts</h3>
                  <p>Get special financing options tailored just for you.</p>
                  </center>
              </CardContent>
            </Card>
            <Card sx={{ width: 300, margin: 2, border: "2px solid black" }}>
              <CardContent>
                  <center>
                  <h3 style={{ color: "#ff6b6b", marginBottom: "10px" }}>Limited-Time Deals</h3>
                  <p>Save on selected properties for a short period only.</p>
                  </center>
              </CardContent>
            </Card>
            <Card sx={{ width: 300, margin: 2, border: "2px solid black" }}>
              <CardContent>
                  <center>
                  <h3 style={{ color: "#ff6b6b", marginBottom: "10px" }}>Free Consultation</h3>
                  <p>Book a personalized session with our real estate experts.</p>
                  </center>
              </CardContent>
            </Card>
          </Grid>
    </div>
  )
}