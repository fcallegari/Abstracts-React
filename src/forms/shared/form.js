import React from 'react';
import {Header, LanguageSwitcher, Footer, EventoScaduto} from './assets.js';
import * as i18n from '../../i18n/i18n.js';

export default function Form( props ) {
	const evento=props.evento;
	const scadenza = new Date(evento["Desk::dataScadenzaRegistrazioni"]);
	const oggi = new Date();
	oggi.setHours(0,0,0,0);
	return (
		<i18n.ProviderLingua evento={evento}>
			<i18n.ContestoLingua.Consumer>
					{contesto =>
						(<div className="container">
							<Header contesto={ contesto }>
								<LanguageSwitcher contesto={contesto}/>
							</Header>
							{oggi > scadenza ? <EventoScaduto contesto={contesto}/> : <FormBody contesto={contesto}/>}
							<Footer contesto={ contesto }/>
						</div>
					)}
				</i18n.ContestoLingua.Consumer>
		</i18n.ProviderLingua>
	);
}

function FormBody(props) {
	const {t} = props.contesto;
	return (<h3> {t("privacy_link")} </h3>);
}
