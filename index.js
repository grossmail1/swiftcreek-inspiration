import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import injectTapEventPlugin from 'react-tap-event-plugin';
import NewHome from './components/app2/NewHome';
import News from './components/app2/News';
import reducers from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, hashHistory } from 'react-router'
import { StyleRoot } from 'radium';

injectTapEventPlugin();

ReactDOM.render(
	<MuiThemeProvider>
		<StyleRoot style={{height: '100%'}}>
			<Provider store={createStore(reducers, applyMiddleware(ReduxThunk))}>
				<Router history={hashHistory}>
					<Route path="/" component={NewHome}/>
					<Route path="/news" component={News}/>
				</Router>
			</Provider>
		</StyleRoot>
	</MuiThemeProvider>
	, document.querySelector('.container'));
