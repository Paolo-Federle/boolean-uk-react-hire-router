import { useState } from "react"
import { useNavigate } from "react-router-dom"

function HireForm(props) {
  const [wage, setWage] = useState(0)
  const { person, hiredPeople, setHiredPeople } = props
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
  }

  function handleSubmit(event) {
    event.preventDefault()
    person.wage = wage
    navigate("/")
    setHiredPeople([...hiredPeople, person])
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
        placeholder={person.wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
