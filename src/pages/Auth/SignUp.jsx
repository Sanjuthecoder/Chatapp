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
// import { useState } from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const defaultTheme = createTheme();

// export const SignUp = () => {
//   const [EnterFirstName, setEnterFirstName] = useState("");
//   const [EnterEmail, setEnterEmail] = useState("");
//   const [EnterPassword, setEnterPassword] = useState("");
//   const [EnterLastName, setEnterLastName] = useState("");
//   const [formIsValid, setformIsValid] = useState(false);
//   const FirstNameIsValid = EnterFirstName.trim() !== "";
//   const PasswordIsValid = EnterPassword.trim() !== "";
//   const LastNameIsValid = EnterLastName.trim() !== "";
//   const EmailIsValid = EnterEmail.includes("@");
//   const Navigate = useNavigate();

//   useEffect(() => {
//     if (
//       EmailIsValid &&
//       FirstNameIsValid &&
//       PasswordIsValid &&
//       LastNameIsValid 
//     ) {
//       setformIsValid(true);
//     } else {
//       setformIsValid(false);
//     }
//   }, [
//     FirstNameIsValid,
//     EmailIsValid,
//     PasswordIsValid,
//     LastNameIsValid,
//   ]);
//   const enterFirstNameChangeHandler = (event) => {
//     setEnterFirstName(event.target.value);
//   };
//   const enterPasswordChangeHandler = (event) => {
//     setEnterPassword(event.target.value);
//   };
//   const enterMailChangeHandler = (event) => {
//     setEnterEmail(event.target.value);
//   };
//   const enterLastNameChangeHandler = (event) => {
//     setEnterLastName(event.target.value);
//   };
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (
//       !FirstNameIsValid ||
//       !EmailIsValid ||
//       !PasswordIsValid ||
//       !LastNameIsValid
//     ) {
//       return;
//     }
//     const data = new FormData(event.currentTarget);
//     const ans = {
//       firstname: data.get("firstname"),
//       lastname : data.get("lastname"),
//       email: data.get("email"),
//       password: data.get("password"),
//     };
//     try {
//       const response = await fetch("http://localhost:5000/auth/signup", {
//         method: "POST",
//         body: JSON.stringify(ans),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data1 = await response.json();
//       if (data1.success) {
//         Navigate("/login");
//       } else {
//         alert(data1.message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     setEnterFirstName("");
//     setEnterLastName("");
//     setEnterEmail("");
//     setEnterPassword("");
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
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
//             Sign up
//           </Typography>
//           <Box
//             component="form"
//             onSubmit={handleSubmit}
//             noValidate
//             sx={{ mt: 1, mb: 3 }}
//           >
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="firstname"
//               onChange={enterFirstNameChangeHandler}
//               value={EnterFirstName}
//               label="firstName"
//               name="firstname"
//               autoComplete="firstname"
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
//               id="lastname"
//               value={EnterLastName}
//               onChange={enterLastNameChangeHandler}
//               label="lastname"
//               name="lastname"
//               autoComplete="lastname"
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
//               id="email"
//               value={EnterEmail}
//               onChange={enterMailChangeHandler}
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
//               value={EnterPassword}
//               onChange={enterPasswordChangeHandler}
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
//               disabled={!formIsValid}
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="/login" variant="body2">
//                   {"Have an account? Login In"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };
