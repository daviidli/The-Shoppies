import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Paths from '../enums/RoutePaths';
import Home from './home/Home';
import Nominations from './Nominations';

const Routes = () => (
	<Switch>
		<Route exact path={Paths.HOME} component={Home} />
		<Route path={Paths.NOMINATIONS} component={Nominations} />
	</Switch>
);

export default Routes;
