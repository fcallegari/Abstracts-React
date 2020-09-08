import React from 'react';
import {Header, LanguageSwitcher, Footer} from './assets.js';
import * as i18n from '../../i18n/i18n.js';

export default function Form( props ) {
const evento=props.evento;
	return (
		<i18n.ProviderLingua evento={evento}>
			<i18n.ConsumerLingua>
					{contesto =>
						(<React.Fragment>
							<Header contesto={ contesto }>
								<LanguageSwitcher contesto={contesto}/>
							</Header>
							<FormBody contesto={contesto}/>
							<Footer contesto={ contesto }/>
						</React.Fragment>
					)}
				</i18n.ConsumerLingua>
		</i18n.ProviderLingua>
	);
}

function FormBody(props) {
	const t = props.t;

return null;
}
