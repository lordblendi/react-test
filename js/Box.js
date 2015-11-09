var Box = React.createClass({
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
            <div>
                <h3>Hello React!</h3>
                <br />
                <button onClick={this.handleClick}>{this.state.buttonLabel + this.state.number}</button>
                <br />
                <DownloadJson />
            </div>
        );
    }
});

