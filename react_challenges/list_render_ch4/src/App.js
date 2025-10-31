const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  let finalPoemRender = [];
  poem.lines.forEach((line, index) => {
    finalPoemRender.push(
      <p key={`${index}-content`}>
        {line}
      </p>
    );
    if (index < poem['lines'].length) {
      finalPoemRender.push(<hr key={`${index}-hr`}/>);
    }
  });
  return (
    <article>
      {finalPoemRender}
    </article>
  );
}
