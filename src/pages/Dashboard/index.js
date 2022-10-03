import { useState } from "react"
import { useEffect } from "react"
import PeopleList from "./components/PeopleList"

function Dashboard(props) {
  const { hiredPeople } = props

  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(resp => resp.json())
      .then(data => {
        console.log("my data is", data)
        setPeople(data.results)
        // setHiredPeople(data.results)
      }
      )
  }, [])

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard
