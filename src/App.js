import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import CollegeAdmin from './CollegeAdmin';
import Company from './Company';
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

	const [userRole, setUserRole] = useState('admin');

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline /> {/*This is to normailze the CSS (Builtin component)*/}
			<Router>{userRole == 'admin' ? <CollegeAdmin /> : <Company />}</Router>
		</div>
	);
}

export default App;
