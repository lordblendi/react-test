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
                React.createElement("br", null), 
                React.createElement("button", {onClick: this.handleClick}, this.state.buttonLabel + this.state.number), 
                React.createElement("br", null), 
                React.createElement(DownloadJson, null)
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
            )
        )
        );
    }
});
React.render(
    React.createElement(Box, null),
    document.getElementById('content')
);



