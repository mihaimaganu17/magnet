import LikeButton from './like-button';
{/* 
    A component is a function that returns UI elements. 
    React components should be capitalized (Header with capital `H`) to distinguish them from plain
    HTML and JS.    
*/}
{/* Props are custom arguments you can pass as properties to React compoents (e.g. title) */}
function Header({title}) {
    console.log(title);
    {/* Using curly braces lets you write JS code in JSX markup */}
    return <h1>{title}</h1>;
}


function Header1(props) {
    {/* Accessing an object property with dot notation */}
    return <h1>{props.title}</h1>;
}

function Header2({title}) {
    {/* JS Template literal */}
    return <h1>{`Cool ${title}`}</h1>;
}

function createTitle(title) {
    if (title) {
        return title;
    } else {
        return 'Default title';
    }
}

function Header3({title}) {
    {/* JS calling a function */}
    return <h1>{createTitle(title)}</h1>;
}

/* export default tells Next.js this is the main component of the page */
export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    {/* Functions starting with `use` are called Hooks.
        You can only call Hooks at the top of your components (or other Hooks).
        If you want to use useState in a condition or a loop, extract a new component and put it there.

        useState is a built-in Hook provided by React.
        useState returns an array and you can access the contents inside your component using array
        destructuring:
        - The first item in the array is the state value, in our case, number of likes, which retains
        the data between renders.
        - The second item in the array is a function to update the variable value and trigger React
        to render the component again. It is common to prefix the name of the function with `set`.
        We will also add the initial value of likes state to 0.
        
        Unlike props which are passed to components as the first function parameter,
        the state is initiated and stored within a component.
        You can pass the state information to children components as props, but the logic for
        updating the state should be kept within the component where state was initially created.
        */}

    {/* You can nest React components inside each other like HTML components */}
    return <div>
        <Header title="Develop.Preview.Ship"/>
        <ul>
            {/* Enter JS land and Convert the String array into an array of list items to be rendered */}
            {
                names.map((item) => (<li key={item}>{item}</li>))
            }
        </ul>
        <LikeButton />
    </div>
}


