import React, { PropTypes } from 'react'
import Header from './Header.js'
import SideBar from './SideBar.jsx'
// import { connect } from 'react-redux'

import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import AlarmAddIcon from 'material-ui/svg-icons/action/alarm-add'
// import Header from './Header.jsx'
// import Sidebar from './Sidebar.jsx'
// import Search from './Search.jsx'
// import Snackbar from './Snackbar.jsx'

// import { selectCategory, selectStore, changeDrawer } from '../actions'
// const styles = {
// 	nav: {
// 		display: 'none'
// 	}
// }
// style={styles.nav}

// const App = ({ children }) => {
const App = () => {
	return (
		<div className="app">
			<Header></Header>
			<SideBar></SideBar>
		</div>
	)
}

// function mapStateToProps(state) {
// 	return {

// 	}
// }

// function mapDispatchToProps(dispatch) {
// 	dispatch(selectCategory({
// 		pcid: 0,
// 	}))
// 	dispatch(selectStore({
// 		cid: 'cid',
// 	}))
// 	function handleDrawer() {
// 		window.innerWidth > 1220
// 		? dispatch(changeDrawer({
// 				docked: true,
// 				open: true,
// 				resize: true,
// 			}))
// 		: dispatch(changeDrawer({
// 				docked: false,
// 				open: false,
// 				resize: false,
// 			}))
// 	}
// 	handleDrawer()
// 	window.addEventListener('resize', () => {
// 	  handleDrawer()
// 	}, false)
// 	return {

// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App
