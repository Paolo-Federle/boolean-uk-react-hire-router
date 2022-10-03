import { useState } from "react"
import HireForm from "./components/HireForm"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"


function PersonProfile(props) {
  const { hiredPeople, setHiredPeople } = props;

  const location = useLocation()

  const [person, setPerson] = useState(null)

  useEffect(() => {
    if (location.state) {
      const selectedPerson = location.state;
      setPerson(selectedPerson)
    }
  }, [location])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm
        person={person}
        hiredPeople={hiredPeople}
        setHiredPeople={setHiredPeople}
      />
    </article>
  )
}

export default PersonProfile
