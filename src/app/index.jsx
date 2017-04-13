import React from 'react'
import { render } from 'react-dom'
// import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
// import { syncHistoryWithStore } from 'react-router-redux'

// import rootSaga from './sagas'
// import configureStore from './store'

import * as containers from './containers'
const {
	App
} = containers

// import { TITLE } from './actions'

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

/* For Material-UI which provides onTouchTap() to all React Components. */
injectTapEventPlugin()

// const store = configureStore()
// const history = syncHistoryWithStore(browserHistory, store)

/* remove comment mark below after you add sagas codes. */
// store.runSaga(rootSaga)

//history.listen(location => analyticsService.track(location.pathname))

const routes = (
	<Route path="/" component={App} />
)
// const routes = (
// 	<Route path="/" component={App}>
// 		<IndexRoute component={Body} />
// 		<Route path="/category" component={AllCategory} />
// 		<Route path="/category/:filter" component={Category} />
// 		<Route path="/channel/:filter" component={Channel}>
// 			<IndexRoute component={Featured} />
// 			<Route path="/:channel/:filter/videos" component={Videos} />
// 			<Route path="/:channel/:filter/about" component={About} />
// 		</Route>
// 	</Route>
// )
// document.title = TITLE

render(
	// <Provider store={store}>
	// 	{ /* Tell the Router to use our enhanced history */ }
	//  <MuiThemeProvider>
	// 		<Router history={history} routes={routes} />
	// 	</MuiThemeProvider>
	// </Provider>,
	<MuiThemeProvider>
		<Router history={browserHistory} routes={routes} />
	</MuiThemeProvider>,
	document.getElementById('root')
)

