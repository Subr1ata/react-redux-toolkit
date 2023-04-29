import { Outlet } from "react-router-dom"
import NavBar from "./NavBarPanel"

export default function RootLayout() {
  return (
    <>
        <NavBar/>
        <main>
            <Outlet/>
        </main>
    </>
  )
}
