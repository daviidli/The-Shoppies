import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Paths from '../enums/RoutePaths';
import Home from './home/Home';

const Routes = () => (
	<Switch>
		<Route exact path={Paths.HOME} component={Home} />
	</Switch>
);

export default Routes;
