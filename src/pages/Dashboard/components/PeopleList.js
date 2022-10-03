import PeopleListItem from "./PeopleListItem"

function PeopleList(props) {
  const { people } = props


  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} index={index} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList
