import {Routes, Route} from "react-router-dom"
import Home from "../../pages/Home"
import SignIn from "../../pages/SignIn"
import User from "../../pages/User"
import NotFound from "../../pages/NotFound"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/profile" element={<User />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}