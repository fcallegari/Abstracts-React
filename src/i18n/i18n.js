import React from 'react';
import Dictionary from './dictionary.js'

export const ContestoLingua = React.createContext( 'it' );

export class ProviderLingua extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			lingua: 'it',
			evento: this.props.evento
		};

		this.cambiaLingua = this.cambiaLingua.bind( this );
		this.traduci = this.traduci.bind( this );

	}

	cambiaLingua( l ) {
		this.setState( {
			lingua: l
		} );
	}

	traduci( id , ...p) {
		const string = eval("`" + Dictionary[ id ][ this.state.lingua ] + "`");
		return <span dangerouslySetInnerHTML = {{__html: string}}/>;
	}

	render() {
		return ( <ContestoLingua.Provider value = {
				{
					evento: this.state.evento,
					lingua: this.state.lingua,
					cambiaLingua: this.cambiaLingua,
					t: this.traduci
				}
			} > {
				this.props.children
			} </ContestoLingua.Provider>
		);
	}
}
