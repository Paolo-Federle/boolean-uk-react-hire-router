import { useState } from "react"
// import { useEffect } from "react"
import "./styles.css"
import Dashboard from "./pages/Dashboard/index"
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router"
import PersonProfile from "./pages/PersonProfile"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  // useEffect(() => {
  //   fetch('https://randomuser.me/api/?results=10')
  //     .then(resp => resp.json())
  //     .then(data => {
  //       console.log("my data is", data)
  //       setPeopleToHire(data.results)
  //       setHiredPeople(data.results)
  //     }
  //     )
  // }, [])



  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Link to="/">Dashboard</Link>
          </ul>
          <>
          </>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={<Dashboard hiredPeople={hiredPeople} />}
        />
        <Route
          path="/view/:id"
          element={
            <PersonProfile
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
            />
          }
        />
      </Routes>
    </>
  )
}
