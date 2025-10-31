import { getImageUrl } from './utils.js';

function Profile({name, imgId, attributes}) {
  return (
    <section className="profile">
      <h1>{name}</h1>
      <img
        className="avatar"
        src={getImageUrl(imgId)}
        alt={name}
        width={70}
        height = {70}
      />
      <ul>
        {
          attributes.map((item) => (
            <li>
              <b>{item.name}</b> 
              {item.description}
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile name="Maria Skłodowska-Curie"
        imgId='szV5sdG'
        attributes={[
          {
            name: "Profession: ",
            description: "physicist and chemist",
          },
          {
            name: "Awards: 4 ",
            description: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
          },
          {
            name: "Discovered: ",
            description: "polonium (chemical element)",
          },
        ]}
      />
      <Profile name="Katsuko Saruhashi"
        imgId='YfeOqp2'
        attributes={[
          {
            name: "Profession: ",
            description: "geochemist",
          },
          {
            name: "Awards: 2",
            description: "(Miyake Prize for geochemistry, Tanaka Prize)",
          },
          {
            name: "Discovered: ",
            description: "a method for measuring carbon dioxide in seawater)",
          },
        ]}
      />
      </div>
  );
}
