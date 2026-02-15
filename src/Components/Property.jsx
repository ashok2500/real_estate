import { useState } from "react"
import Button from "@mui/material/Button"
import { Card, CardActions, CardContent, Grid } from "@mui/material"
import "./New.css"

export const Property = ({ role }) => {

  const defaultProperties = [
    { id: 1, name: "Luxury Villa", price: "85,00,000", location: "Chennai" },
    { id: 2, name: "Beach House", price: "45,00,000", location: "Thoothukudi" },
    { id: 3, name: "White House", price: "1,20,00,000", location: "Chennai" },
    { id: 4, name: "Modern Villas", price: "55,00,000", location: "Madurai" },
    { id: 5, name: "PSR Garden", price: "30,00,000", location: "Sivakasi" }
  ]

  const [properties, setProperties] = useState(defaultProperties)
  const [form, setForm] = useState({ id: null, name: "", price: "", location: "" })
  const [edit, setEdit] = useState(false)
  const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // ✅ ADMIN ONLY
  const addProperty = () => {
    if (role !== "admin") return
    if (!form.name || !form.price || !form.location) return

    setProperties([...properties, { ...form, id: Date.now() }])
    setForm({ id: null, name: "", price: "", location: "" })
  }

  const deleteProperty = (id) => {
    if (role !== "admin") return
    setProperties(properties.filter(p => p.id !== id))
  }

  const editProperty = (p) => {
    if (role !== "admin") return
    setForm(p)
    setEdit(true)
  }

  const updateProperty = () => {
    if (role !== "admin") return

    setProperties(properties.map(p => p.id === form.id ? form : p))
    setEdit(false)
    setForm({ id: null, name: "", price: "", location: "" })
  }

  const filteredProperties = properties.filter(
    p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase()) ||
      p.price.includes(search)
  )

  return (
    <div className="home">
      <center>
      <br/>
        

        {/* ✅ FORM ONLY FOR ADMIN */}
        {role === "admin" && (
          <>
            <div className="input">
              <input name="name" placeholder="Name" value={form.name} onChange={handleChange} style={{ width: "200px", height: "15px", fontSize: "15px", padding: "8px" }}/>{" "}
              <input name="location" placeholder="Location" value={form.location} onChange={handleChange} style={{ width: "200px", height: "15px", fontSize: "15px", padding: "8px" }}/>{" "}
              <input name="price" placeholder="Price" value={form.price} onChange={handleChange} style={{ width: "200px", height: "15px", fontSize: "15px", padding: "8px" }}/>
            <br />
            </div>

            <br />
            {edit ? (
              <Button variant="contained" onClick={updateProperty}>
                Update Property
              </Button>
            ) : (
              <Button variant="contained" onClick={addProperty}>
                Add Property
              </Button>
            )}
            <hr />
          </>
        )}
        {/* Search → BOTH */}
        <input
          type="text"
          placeholder="Search by Name, Location or Price"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginBottom: "10px", padding: "5px", width: "300px" }}
        />
        <hr />
      </center>

      {/* PROPERTY LIST */}
      <center>
        <Grid container spacing={2}>
          {filteredProperties.map(p => (
            <Grid item key={p.id} xs={12} sm={6} md={4}>
              <Card sx={{ width: 250, margin: 2, border: "2px solid black" }}>
                <CardContent>
                  <img
                    src="https://th.bing.com/th/id/OIP.davKFI3QY1gYo22_PEFaJQHaEs"
                    width={220}
                  />
                  <hr />
                  <h3 style={{ textAlign: "center" }}>{p.name}</h3>
                  <hr />
                  <p>Location: {p.location}</p>
                  <p>Price: ₹{p.price}</p>
                </CardContent>

                {/* ✅ ACTIONS ONLY FOR ADMIN */}
                {role === "admin" && (
                  <CardActions>
                    <Button size="small" variant="contained" onClick={() => editProperty(p)}>
                      Edit
                    </Button>
                    <Button size="small" variant="contained" color="error" onClick={() => deleteProperty(p.id)}>
                      Delete
                    </Button>
                  </CardActions>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </center>
    </div>
  )
}
