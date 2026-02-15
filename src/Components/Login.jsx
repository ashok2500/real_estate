import { useState } from "react"
import { Button, Card, CardContent, TextField } from "@mui/material"
import './New.css'
const Login = ({ setRole, setLoggedIn }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    if (!email || !password) {
      setError("All fields are required")
      return
    }

    if (email === "admin@gmail.com" && password === "admin123") {
      setRole("admin")
      setLoggedIn(true)
    } else {
      setRole("user")
      setLoggedIn(true)
    }
  }

  return (
    <div className="login">
      <br/>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
      <Card sx={{ width: 350, margin: 2, border: "4px solid white"  }}>
        <div className="card">
        <CardContent>
          <center>
        <img src="https://image2url.com/r2/default/images/1770220690302-863ac629-3093-4652-90a5-7e8d321de7da.png"width={214}height={121}/>
          <h2 style={{color:"white"}}>Login</h2>

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}sx={{input: { color: "white" },label: { color: "white" },"& label.Mui-focused": { color: "white" },"& .MuiOutlinedInput-root": {"& fieldset": { borderColor: "white" },"&:hover fieldset": { borderColor: "white" },"&.Mui-focused fieldset": { borderColor: "white" }}}}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}sx={{input: { color: "white" },label: { color: "white" },"& label.Mui-focused": { color: "white" },"& .MuiOutlinedInput-root": {"& fieldset": { borderColor: "white" },"&:hover fieldset": { borderColor: "white" },"&.Mui-focused fieldset": { borderColor: "white" }}}}
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>
          </center>
        </CardContent>
        </div>
      </Card>
    </div>
    </div>
  )
}

export default Login
