import React from 'react';
import { Route } from 'react-router-dom';
import 'uikit/dist/css/uikit.min.css';
import Home from '../home/home'
import Recommendation from '../recommendation/recommendation'

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			page: 0
		}
		this.updatePage = this.updatePage.bind(this)
	}

	updatePage (page) {
		this.setState({page: 1})
	}

    render() {
        return (<div>
        {
        	this.state.page === 0 ? <Home updatePage={this.updatePage}/> :
        	<Recommendation />
        }
        	</div>)
}
}
export default App;