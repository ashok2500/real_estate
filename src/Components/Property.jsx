import { useState } from "react"
import Button from "@mui/material/Button"
import { Card } from "@mui/material"
import { CardActions } from "@mui/material"
import {CardContent} from "@mui/material"
import Grid from "@mui/material/Grid"
import './New.css'

export const Property=()=>{
    const[properties,setProperties]=useState([]);
    const[form,setForm]=useState({
    id: null,
    name: "",
    price: "",
    location: ""
    })
    const [edit,setEdit]=useState(false);
    const handleChange=(e)=>{
    setForm({ 
        ...form,
        [e.target.name]:e.target.value 
        })
    }
    const addProperty=()=>{
        if (!form.name || !form.price || !form.location) 
        return
        setProperties([
            ...properties,
            {...form, id: Date.now()}
        ])
        setForm({ name: "", price: "", location: "" })
    }
    const deleteProperty=(id)=>{
      setProperties(properties.filter(p => p.id !== id))
    }
    const editProperty=(p)=>{
      setForm(p)
      setEdit(true)
    }
    const updateProperty=()=>{
      setProperties(
      properties.map(p=>
      p.id===form.id?form:p
      )
      )
      setEdit(false);
      setForm({ id: null, name: "", price: "", location: "" });
    }
    return(
    <div>
      <center>
          <form>
            <div className="input">
              <input type="text" label="Property Name"name="name"value={form.name} placeholder="Property Name" onChange={handleChange}/>{" "}
              <input type="text" label="Location"name="location"value={form.location} placeholder="Location" onChange={handleChange}/>{" "}
              <input type="text" label="Price"name="price"value={form.price} placeholder="Price" onChange={handleChange}/>
            </div>
          </form><br/>
          {edit?(
          <Button variant="contained" onClick={updateProperty}>Update Property</Button>):(<Button variant="contained" onClick={addProperty}>Add Property</Button>
        )}
      </center>
      <div>
        <Grid container spacing={2}>
        {properties.map(p=>(
          <Grid size={3}>
            <Card key={p.id} sx={{width:250,margin:2,border:"2px solid black"}} elevation={4}>
              <CardContent>
                <img src="https://th.bing.com/th/id/OIP.davKFI3QY1gYo22_PEFaJQHaEs?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" width={220}/><hr/>           
                <h2 style={{textAlign:"center"}}>{p.name}</h2><hr/>
                <h4>Location: {p.location}</h4>
                <h4>Price: {p.price}</h4>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" onClick={()=>editProperty(p)}>Edit</Button>
                <Button size="small" variant="contained" color="error" onClick={()=>deleteProperty(p.id)}>Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      </div>  
    </div>
    )
}