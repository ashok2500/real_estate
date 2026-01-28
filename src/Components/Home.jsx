import { Card } from "@mui/material";
import {CardContent} from "@mui/material";
import './New.css'
export const Home=()=>{
  return(
    <div>
      <center>
        <h1>------------------------------------------WELCOME TO REAL ESTATE WEBSITE------------------------------------------</h1>
        <h2>Exclusive Property for Sale | Find Your Perfect Home Today</h2>
      </center>
      <div className="card">
          <Card sx={{width:250,margin:2,border:"2px solid black"}}>
            <CardContent>
              <img src="https://th.bing.com/th/id/OIP.davKFI3QY1gYo22_PEFaJQHaEs?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" width={220}/><hr/>
              <h3 style={{textAlign:"center"}}>PSR Garden</h3><hr/>
              <h4>Location: Sivakasi</h4>
              <h4>Price: 800,000 </h4>
            </CardContent>     
          </Card>
          <Card sx={{width:250,margin:2,border:"2px solid black"}}>
            <CardContent>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/White_House_Washington.JPG" width={220}/><hr/>
              <h3 style={{textAlign:"center"}}>White House</h3><hr/>
              <h4>Location: Chennai</h4>
              <h4>Price: 700,000 </h4>
            </CardContent>     
          </Card>
          <Card sx={{width:250,margin:2,border:"2px solid black"}}>
            <CardContent>
              <img src="https://tse1.mm.bing.net/th/id/OIP._2IJpTPbi5mgMQ6rIj35_QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" width={220}/><hr/>
              <h3 style={{textAlign:"center"}}>Modern Villas</h3><hr/>
              <h4>Location: Madurai</h4>
              <h4>Price: 900,000 </h4>
            </CardContent>     
          </Card>
          <Card sx={{width:250,margin:2,border:"2px solid black"}}>
            <CardContent>
              <img src="https://static.vecteezy.com/system/resources/previews/029/477/979/non_2x/sunset-over-tranquil-coastline-a-wooden-hut-in-idyllic-landscape-generated-by-ai-free-photo.jpg" width={220}/><hr/>
              <h3 style={{textAlign:"center"}}>Beach House</h3><hr/>
              <h4>Location: Thoothukudi</h4>
              <h4>Price: 10,00,000 </h4>
            </CardContent>     
          </Card>
        </div> 
      </div>
  )
}