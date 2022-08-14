import {Routes, Route} from "react-router-dom";
import SignUp from "../pages/SignUp";
import SingIn from "../pages/SingIn";
import TodoApp from "../pages/TodoApp";
import TestApp from "./TestApp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SingIn/>}/>
      <Route path="/teste" element={<TestApp/>}/>
      <Route path="/signin" element={<SingIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/todos" element={<TodoApp/>}/>
    </Routes>
  )
}

export default AppRoutes;