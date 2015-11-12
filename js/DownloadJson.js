var DownloadJson = React.createClass({

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
            <div>
                <label>
                    {this.state.text}
                </label>
                <br />
                <button onClick={this.handleClick}>
                    {this.state.buttontext}
                </button>
                <br />
                <Link to="/">
                    <button >
                        "Back to home"
                    </button>
                </Link>
            </div>
        );
    }
});