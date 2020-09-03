import React , {Suspense} from 'react';
import {
	BrowserRouter as Router, 
	Route, 
	Switch,
	Redirect
} from "react-router-dom";
import $ from "jquery";

export default function App() {
	
	return(
		<ErrorBoundary>		
		<Router basename='/abs_r'>
			<Switch>
				<Route exact path="/:id" 
				render={
					(props) => { 
						return (<Dispatch id={props.match.params.id}/>);
					}
				} />
				<Route path="/">no data here</Route>
			</Switch>
		</Router>
	</ErrorBoundary>
			)
}

class Dispatch extends React.Component {

	constructor(props) {
		super(props);
		this.getEvent = this.getEvent.bind(this);
		this.showForm = this.showForm.bind(this);
		this.state = {
			id: this.props.id,
			evento: null,
			path: null
		};
	}

	componentDidMount() {
		this.getEvent(this.state.id);
	}

	showForm() {
		if (this.state.path) {
			const Form = React.lazy(() => import (`${this.state.path}`));
			return ( 
				<div>
				<Suspense fallback = { < div > Loading... < /div>}>
				<Form evento = {this.state.evento}/>
				</Suspense>
				</div>
			)
		}
		return <div > Loading... < /div>;
	}

	getEvent(id) {
		$.ajax({
			url: "https://adarte.fmhosting.it/Abstracts/getEvent.php",
			data: {
				id: id
			},
			type: "GET",
			dataType: "json"
		})
		.done((res) => {
			if (res) {
				const path = "./modules/" + (res.is_custom ? id : "shared") + "/form.js";
				this.setState({
					path: path,
					evento: res
				});
			} else {
				this.setState(() => {
					throw new Error("Evento non trovato")
				});
			}
		})
		.fail((xhr, status, errorThrown) => {
			console.log("errore fm", xhr);
			this.setState(() => {
				throw new Error("missing connection with database")
			})
		});
	}

	render() {
		if (!this.state.id.match(/^[0-9]+$/)) {
			return <Redirect to = "/" / > ;
		}

		return (
			<React.Fragment>
			{this.showForm()}
			</React.Fragment>
		);
	}
}

class ErrorBoundary extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { hasError: false, errormsg: null };
	  }

	static getDerivedStateFromError(error) {
	    // Update state so the next render will show the fallback UI.
	    return { 
				hasError: true, 
				errormsg: error.message
			};
	  }
		
	render() {
		if (this.state.hasError) {
			return (
				<div className="alert alert-danger" role="alert">
  				<p>Errore applicativo</p>
					<code>{this.state.errormsg}</code>
				</div>
			);
	  }
		return this.props.children;
	 }
}