import React, { PropTypes } from 'react'
// import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
//ICON
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';

import ViewHeadline from 'material-ui/svg-icons/action/view-headline'
import GIF from 'material-ui/svg-icons/action/gif'
import AlarmAddIcon from 'material-ui/svg-icons/action/alarm-add'
import AllOut from 'material-ui/svg-icons/action/all-out'
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
const Header = () => {
	return (
		<div className="app">
			<AppBar
                iconClassNameLeft="muidocs-icon-navigation-expand-more"
				iconElementLeft={
                    <div>
                        <IconMenu
                            iconButtonElement={<IconButton><ViewHeadline /></IconButton>}
                            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                            targetOrigin={{horizontal: 'left', vertical: 'top'}}
                            >
                            <MenuItem primaryText="Refresh" />
                            <MenuItem primaryText="Send feedback" />
                            <MenuItem primaryText="Settings" />
                        </IconMenu>
                    </div>
                }
				title="Upper Bar"
                titleStyle={{color:'black'}}
                style={{backgroundColor:'red'}}
				iconClassNameRight="muidocs-icon-navigation-expand-more"
				iconElementRight={
                    <div>
                        <IconButton tooltip="我是時鐘">
                            <AlarmAddIcon />
                        </IconButton>
                        <IconButton>
                            <GIF />
                        </IconButton>
                        <IconButton>
                            <AllOut />
                        </IconButton>
                    </div>
				}
			/>
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
export default Header
