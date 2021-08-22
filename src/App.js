import Login from "./components/Login";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import AuthProvider from "./Context/AuthProvider";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Context/AuthProvider";
import { useContext } from "react";
// let isAuthenticated = false;


function App() {
  return (
    <>
      {/* <h1>Hello Reels</h1> */}
      {/* <Login></Login> */}
      {/* <Todo></Todo> */}
      {/* 3. */}
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <ProtectedRoute path="/feed" abc={Feed}></ProtectedRoute>
          <ProtectedRoute path="/profile" abc={Profile}></ProtectedRoute>
          <Redirect path="/" to="/feed"></Redirect>
        </Switch>
      </AuthProvider>
    </>
  );
}


function ProtectedRoute(props) {
  let { currentUser } = useContext(AuthContext);
  let Component = props.abc;

  return (<Route {...props} render={(props) => {
    // console.log(isAuthenticated);
    return (currentUser ? <Component {...props} ></Component> : <Redirect to="/login"></Redirect>
    )
  }}></Route>

  )
}
export default App;