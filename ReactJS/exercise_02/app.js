var HelloWorld = (props) => {
    return React.createElement("div", null, `Hello ${props.name}!`)
}

var Application = createReactClass({
    render() {
        return React.createElement(HelloWorld, { name: "Guillaume" })
    }
});

ReactDOM.render(React.createElement(Application), document.getElementById("app"))
