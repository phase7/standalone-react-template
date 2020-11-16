'use strict'

const e = React.createElement;

class HelloWorld extends React.Component {

    handleClick = () => {
        alert("Hello world")
    }

    render () {
        const {userid} = this.props;
        return <h1>Hello World <span onClick={this.handleClick}>{userid}</span></h1>
    }
}

// Find all DOM containers, and render our component into them.
var containers = document.querySelectorAll('.ratul-app')
containers.forEach(domContainer => {
    // Read the user ID from a data-* attribute.
    const userid = domContainer.dataset.userid
    // render the component into the DOM
    ReactDOM.render(
      e(HelloWorld, { userid: userid}),
      domContainer 
    )
});