{/* Select the div element with "some-div" id */}
const app = document.getElementById("some-div")
{/* 
    A component is a function that returns UI elements. 
    React components should be capitalized to distinguish them from plain HTML and JS.    
*/}
function Header() {
    return <h1>Develop. Preview. Ship. - from Flask </h1>;
}
{/* Create a react root node that will allow react to take over the DOM */}
const root = ReactDOM.createRoot(app);
{/* 
    Call render to display the React components inside the above node
    React components need to be used similar to HTML tags, with angle brackets </>
    */}
root.render(<Header/>);