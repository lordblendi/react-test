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
                <button onClick={this.handleClick}>{this.state.buttonLabel + this.state.number}</button>
                <div><Link to="/DownloadJson">Download Json</Link></div>
            </div>
        );
    }
});

