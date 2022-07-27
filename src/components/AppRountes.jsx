import {Routes, Route} from "react-router-dom";
import SignUp from "../pages/SignUp";
import SingIn from "../pages/SingIn";
import TodoApp from "../pages/TodoApp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SingIn/>}/>
      <Route path="/signin" element={<SingIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/todos" element={<TodoApp/>}/>
    </Routes>
  )
}

export default AppRoutes;