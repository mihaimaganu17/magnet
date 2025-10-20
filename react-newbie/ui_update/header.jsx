{/* Select the div element with "some-div" id */}
const app = document.getElementById("some-div")
{/* 
    A component is a function that returns UI elements. 
    React components should be capitalized to distinguish them from plain HTML and JS.    
*/}
{/* Props are custom arguments you can pass as properties to React compoents */}
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

function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    {/* You can nest React components inside each other like HTML components */}
    return <div>
        <Header title="Develop.Preview.Ship"/>
        <ul>
            {/* Convert the String array into an array of list items to be rendered */}
            {
                names.map((item) => (<li>{item}</li>))
            }
        </ul>
    </div>
}

{/* Create a react root node that will allow react to take over the DOM */}
const root = ReactDOM.createRoot(app);
{/* 
    Call render to display the React components inside the above node
    React components need to be used similar to HTML tags, with angle brackets </>
    */}
root.render(<HomePage/>);