import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AlbumPage from '../pages/AlbumPage'
import ArtistPage from '../pages/ArtistPage'

const routes = [
	{
		path: '/',
		exact: true,
		main: HomePage
	},
	{
		path: '/album/:id',
		exact: true,
		main: AlbumPage
	},
	{
		path: '/artist/:id',
		exact: true,
		main: ArtistPage
	}
]

function App() {
	return (
		<Router>
			<div className="App">
				<div className="container">
					<Switch>
						{routes.map((route,index) => <Route path={route.path} exact={route.exact} component={route.main} key={"MyKey" + index}></Route>)}
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
