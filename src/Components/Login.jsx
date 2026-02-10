import { useState } from "react"
import { Button, Card, CardContent, TextField } from "@mui/material"

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
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <Card sx={{ width: 350 }}>
        <CardContent>
          <h2 style={{ textAlign: "center" }}>Login</h2>

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        </CardContent>
      </Card>
    </div>
  )
}

export default Login
