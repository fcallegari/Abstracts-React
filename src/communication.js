import React from 'react';
import $ from 'jquery';

export default class Com extends React.Component {
	
	constructor (props){
		super(props);
		this.state = {res : 'attendi'};
	}
	
	componentDidMount() {
		const url = 'https://apps.fmhosting.it/test3.php';
		const res = $.ajax(url)
		.done((data) => this.setState({res: data.responseText}))
	  .fail(( xhr, status, errorThrown ) => {
	    console.log( "Error: " + errorThrown );
	    console.log( "Status: " + status );
	    console.dir( xhr );
			this.setState({res: 'Error: ' + errorThrown});
	  });
		console.log(res);

	}
	
	render() {
			return (
			<em>
			{this.state.res}
			</em> 		
	);
}
}
