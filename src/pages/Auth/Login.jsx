// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { User } from "phosphor-react";
// import { Stack } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const defaultTheme = createTheme();

// export const Login = () => {
//   const [EnterEmail, setEnterEmail] = useState("");
//   const [EnterPassword, setEnterPassword] = useState("");
//   const PasswordIsValid = EnterPassword.trim() !== "";
//   const EmailIsValid = EnterEmail.includes("@");

//   const navigate=useNavigate()

//   const emailChangeHandler = (event) => {
//     setEnterEmail(event.target.value);
//   };

//   const passwordChangeHandler = (event) => {
//     setEnterPassword(event.target.value);
//   };
//   const handleSubmit = async(event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     if (!EmailIsValid || !PasswordIsValid) {
//       return alert("wrong password and Email");
//     }

//     const ans ={
//       email: data.get("email"),
//       password: data.get("password"),
//   };

//     try {
//       const response = await fetch("http://localhost:5000/auth/signin", {
//         method: "POST",
//         body: JSON.stringify(ans),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data1 = await response.json();
//       localStorage.setItem("token",data1.token)
//       if (data1.success) {
//         navigate('/')
//         alert('sign up successfully')
//       } else {
//         alert(data1.error);
//       }
//     } catch (error) {
//       alert('something went wrong')
//       console.log(error);
//     }
//     setEnterEmail("");
//     setEnterPassword("");
//   };

//   return (
//     <ThemeProvider theme={defaultTheme} >
//       <Container
//         component="main"
//         maxWidth="xs"
//       >
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box
//             component="form"
//             onSubmit={handleSubmit}
//             noValidate
//             sx={{ mt: 1 }}
//           >
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               onChange={emailChangeHandler}
//               value = {EnterEmail}
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             >
//               <Stack direction="row" alignItems="center" justifyContent="end">
//                 <User />
//               </Stack>
//             </TextField>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               onChange={passwordChangeHandler}
//               value = {EnterPassword}
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="/forget-password" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="/signup" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };
