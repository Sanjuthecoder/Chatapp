import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/user";
import { useEffect } from "react";
export const PublicRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const GetUser = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/test", {
        method: "GET",
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          redirect: "follow",
        },
      });
      const data1 = await response.json();
      if (data1.success) {
        dispatch(
          setUser({
            ...user,
            _id: data1.data._id,
            firstname: data1.data.firstname,
            lastname: data1.data.lastname,
            password: data1.data.password,
            email: data1.data.email,
            token: `${localStorage.getItem("token")}`,
          })
        );
      } else {
        <Navigate to="/login" />;
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  useEffect(() => {
    if (!user) {
      GetUser();
    }
  });
  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
