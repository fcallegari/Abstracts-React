import React from 'react';
import Dictionary from './dictionary.js'

export const ContestoLingua = React.createContext( 'it' );

export class ProviderLingua extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			lingua: 'it'
		};

		this.cambiaLingua = this.cambiaLingua.bind(this);
		this.traduci = this.traduci.bind(this);

	}

	cambiaLingua(l) {
		this.setState({lingua: l});
	}

	traduci(id) {
		return <span dangerouslySetInnerHTML={{ __html: Dictionary[id][this.state.lingua] }}/>;
	}

	render() {
		return (
			<ContestoLingua.Provider
				value = {{
					value: this.state.lingua,
					toggle: this.cambiaLingua,
					t: this.traduci
				}}
				>
				{this.props.children}
			</ContestoLingua.Provider>
		);
	}
}

export function ConsumerLingua(props){
	return(
		<ContestoLingua.Consumer>
			{props.children}
		</ContestoLingua.Consumer>
	);
}
