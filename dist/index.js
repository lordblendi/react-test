var App = App || {};

App.json = "json";
var Box = React.createClass({displayName: "Box",
    handleClick: function (event) {
        this.state.number++;
        this.setState(this.state);
    },
    getInitialState: function () {
        return {
            buttonLabel: "Increment the number: ",
            number: 0
        };
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("h3", null, "Hello React!"), 
                React.createElement("button", {onClick: this.handleClick}, this.state.buttonLabel + this.state.number), 
                React.createElement("div", null, React.createElement(Link, {to: "/DownloadJson"}, "Download Json"))
            )
        );
    }
});


var DownloadJson = React.createClass({displayName: "DownloadJson",

    handleClick: function () {
        var self = this;
        $.getJSON("http://localhost:3000/messages", function (data) {
            self.state.text = JSON.stringify(data);
            self.setState(this.state);
        });
    },

    getInitialState: function () {
        return {
            text: "The json will be here",
            buttontext: "Press me to download json."
        };
    },

    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("label", null, 
                    this.state.text
                ), 
                React.createElement("br", null), 
                React.createElement("button", {onClick: this.handleClick}, 
                    this.state.buttontext
                ), 
                React.createElement("br", null), 
                React.createElement(Link, {to: "/"}, 
                    React.createElement("button", null, 
                        "\"Back to home\""
                    )
                )
            )
        );
    }
});
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;

React.render(
    React.createElement(Router, null, 
        React.createElement(Route, {path: "/", component: Box}
        ), 
        React.createElement(Route, {path: "/DownloadJson", component: DownloadJson}
        )
    ),
    document.getElementById('content')
);

