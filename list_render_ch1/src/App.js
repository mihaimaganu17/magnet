import { people } from './data.js';
import { getImageUrl } from './utils.js';

function ListProfession({people, profession}) {
    const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>{profession}</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

export default function List() {
  const chemists = people.filter(person => (person.profession === 'chemist'));
  const other = people.filter(person => (person.profession != 'chemist'));
  return (
    <>
      <ListProfession people={chemists} profession='Chemists'/>
      <ListProfession people={other} profession='Scientists'/>
    </>
  );
}
