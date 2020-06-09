import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import CollegeAdmin from './CollegeAdmin/CollegeAdmin';
import Company from './Company/Company';
import { BrowserRouter as Router } from 'react-router-dom';
import { Login, Register } from '../src/CollegeAdmin/containers/index';
import '../src/App.scss';
import logo from '../src/CollegeAdmin/containers/Login/logo.svg';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoginActive: true,
		};
	}
	App() {
		const [userRole, setUserRole] = useState('admin');

		return (
			<div>
				<CssBaseline /> {/*This is to normailze the CSS (Builtin component)*/}
				<Router>{userRole == 'admin' ? <CollegeAdmin /> : <Company />}</Router>
			</div>
		);
	}
	changeState() {
		const { isLoginActive } = this.state;
		if (isLoginActive) {
			this.rightSide.classList.remove('right');
			this.rightSide.classList.add('left');
		} else {
			this.rightSide.classList.remove('left');
			this.rightSide.classList.add('right');
		}

		this.setState((prevState) => ({ isLoginActive: !prevState.isLoginActive }));
	}

	render() {
		const { isLoginActive } = this.state;
		const current = isLoginActive ? 'Register' : 'Login';
		const currentActive = isLoginActive ? 'login' : 'register';
		return (
			<div className="App">
				<div className="login">
					<div className="container">
						{isLoginActive && <Login containerRef={(ref) => (this.current = ref)} />}
						{!isLoginActive && <Register containerRef={(ref) => (this.current = ref)} />}
					</div>
					<RightSide
						current={current}
						currentActive={currentActive}
						containerRef={(ref) => (this.rightSide = ref)}
						onClick={this.changeState.bind(this)}
					/>
				</div>
			</div>
		);
	}
}

const RightSide = (props) => {
	return (
		<div className="right-side" ref={props.containerRef} onClick={props.onClick}>
			<div className="inner-container">
				<div className="text">(props.current)</div>
			</div>
		</div>
	);
};

export default App;
