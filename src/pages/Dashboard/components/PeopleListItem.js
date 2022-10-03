import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { index, person } = props

  return (
    <li>
      <Link to={`/view/${index}`} state={person}>
        <h3>
          {person.name.first} {person.name.last}
        </h3>
        {person.wage && <p>Wage: £{person.wage}</p>}
      </Link>
    </li>
  )
}

export default PeopleListItem
