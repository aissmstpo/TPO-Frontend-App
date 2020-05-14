import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainContent from './containers/MainContent';
import Header from './containers/Header';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
// import Temp from './temp'
/**
 * Template File
 */
function App() {
	const drawerWidth = 240;
	const useStyles = makeStyles((theme) => ({
		root: {
			display: 'flex',
		},
	}));

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline /> {/*This is to normailze the CSS (Builtin component)*/}
			<Router>
				<Header />
				<MainContent />
			</Router>
		</div>
	);
}

export default App;
