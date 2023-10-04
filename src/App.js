import { Routes, Route } from "react-router-dom";
import ChatProvider from "./store/ChatProvider";
import { DashboardRoute } from "./Layout/Dashboard/DashboardRoute";
import { General } from "./Layout/Auth/General";
import { PublicRoute } from "./Component/Protected/PublicRoute";
// import { ProtectedRoute } from "./Component/Protected/ProtectedRoute";
// import { Login } from "./pages/Auth/Login";
// import { SignUp } from "./pages/Auth/SignUp";
import { Paper } from "@mui/material";
import { Group } from "./Layout/Dashboard/Group";
// import io from 'socket.io-client'
// import { useSelector } from "react-redux";
function App() {
  // const {user} = useSelector((state) => state.user)
  // const socket = io.connect('http://localhost:5000' , {
  //   query: {user_id  : user?._id}
  // })
  return (
    <ChatProvider>
      <Paper>
        <Routes>
          {/* <Route
            path="/login"
            element={
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            }
          ></Route> */}
          {/* <Route path="/signup" element={<SignUp />}></Route> */}
          <Route
            path="/"
            element={
              <PublicRoute>
                <DashboardRoute />
              </PublicRoute>
            }>
            <Route
              path=""
              element={
                <PublicRoute>
                  <General />
                </PublicRoute>
              }
            />
            <Route
              path="group"
              element={
                <PublicRoute>
                  <Group />
                </PublicRoute>
              }
            />
          </Route>
        </Routes>
      </Paper>
    </ChatProvider>
  );
}

export default App;
