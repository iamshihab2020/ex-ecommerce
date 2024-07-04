import { Outlet } from "react-router-dom"
import { Navigation } from "../Components/Shared/Navigation/Navigation"
import NaviTop from "../Components/Shared/NaviTop/NaviTop"

const Main = () => {
  return (
    <div>
      <NaviTop/>
      <Navigation/>
      <Outlet/>
    </div>
  )
}

export default Main