var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;

React.render(
    <Router>
        <Route path="/" component={Box}>
        </Route>
        <Route path="/DownloadJson" component={DownloadJson}>
        </Route>
    </Router>,
    document.getElementById('content')
);

