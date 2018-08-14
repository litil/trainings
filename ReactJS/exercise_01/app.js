var HelloWorld = () => {
    return React.createElement("div", null, "Hello World !")
}

var Application = createReactClass({
  render() {
    return React.createElement(HelloWorld)
  }
});

ReactDOM.render(React.createElement(Application), document.getElementById("app"))
