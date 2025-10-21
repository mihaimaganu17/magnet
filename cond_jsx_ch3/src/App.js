function Drink({ name }) {
  let part = null;
  let caffeine = null;
  let age = null;
  if (name === 'tea') {
    part = 'leaf';
    caffeine = 'some';
    age = 'very old';
  } else {
    part = 'bean';
    caffeine = 'a lot';
    age = 'not very old';
  }
  
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
