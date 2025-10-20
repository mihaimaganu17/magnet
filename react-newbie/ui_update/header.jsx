{/* Select the div element with "some-div" id */}
const app = document.getElementById("some-div")
{/* A component is a function that returns UI elements. */}
function header() {
    return <h1>Develop. Preview. Ship. - from Flask </h1>;
}
{/* Create a react root node that will allow react to take over the DOM */}
const root = ReactDOM.createRoot(app);
{/* Call render to display the React components inside the above node */}
root.render(<h1>Develop.Preview.ship3</h1>);