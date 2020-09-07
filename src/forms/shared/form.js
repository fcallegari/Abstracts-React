import React from 'react';
import * as i18n from '../../i18n/i18n.js';

export default function Form( props ) {
	return (
		<i18n.ProviderLingua>
			<Header evento={ props.evento }>
				<i18n.ConsumerLingua>
					{value => <LanguageSwitcher lingua={value}/>}
				</i18n.ConsumerLingua>
			</Header>
			<i18n.ConsumerLingua>
				{value => <Footer evento={ props.evento } lingua={value}/>}
			</i18n.ConsumerLingua>

		</i18n.ProviderLingua>
	);
}

function LanguageSwitcher(props) {
const t = props.lingua.t;
	return (
		<div className="btn-group" role="group" aria-label="Choose language">
			<button onClick={()=>props.lingua.toggle("it")} type="submit" name="lang" value="IT" className="btn btnLink"> IT </button>
			<button onClick={()=>props.lingua.toggle("en")} type="submit" name="lang" value="EN" className="btn btnLink"> EN </button>
{t("privacy_consent_2_OK")}
		</div>
	)
}

function Header( props ) {
	const evento = props.evento;
	return (
		<React.Fragment>
	<nav className="navbar navbar-light" style={{
    backgroundColor: "#5fbcb4"
  }}>
		<img className="navbar-brand" src={process.env.PUBLIC_URL + '/img/logo.png' } alt="logo"></img>
		{props.children}
	</nav>
	<br/>
	<div className="container">
		<div className="card shadow text-center">
			<div className="card-body m-2">
				<h5 className="card-title">
					{evento.titoloEvento}</h5>
				<h6 className="card-subtitle mb-2 text-muted">
					{evento.sottotitolo}
				</h6>
				<p className="card-text m-0">
					{Array.of(evento.sede_nome, evento.c_tagDurata).filter((e) => e.length > 0).join(', ')}
				</p>
				<p className="card-text m-0">
					{Array.of(evento.sede_indirizzo, evento.sede_Comune + (evento.sede_Prov && ` (${evento.sede_Prov})`)).filter((e) => e.length > 0).join(' - ')}
				</p>
			</div>
		</div>
	</div>
</React.Fragment>
);
}

function Footer( props ) {
	const evento = props.evento;
	return (
		<React.Fragment>
			<hr/>
			<footer style={{fontSize: 12}}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-auto">
						Segreteria Organizzativa </div>
				</div>

				<div className="row justify-content-center">
					<div className="col-auto">
						<a href="https://adarteventi.com"> <img src={process.env.PUBLIC_URL + '/img/logo.png' } alt="AdArte Eventi" style={{width: 120}} /></a>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-auto"><a href={`http://maps.google.com/?q=${evento.segr_indirizzo} ${evento.segr_CAP} ${evento.segr_Comune}`} target="_blank" rel="noopener noreferrer" style={{display: "inline"}}>
						<i className="fas fa-map-marker-alt"> </i> </a> {' '} {evento.segr_nome} </div>
			</div>
			<div className="row justify-content-center">
				<div className="col-auto"> {evento.segr_indirizzo} </div>
			</div>
			<div className="row justify-content-center">
				<div className="col-auto"> {evento.segr_CAP} {evento.segr_Comune} ({evento.segr_Prov}) </div>
			</div>

			{ evento.segr_Tel &&
			<div className="row justify-content-center">
				<div className="col-auto"> <i className="fas fa-phone-alt"> </i>{' '}{evento.segr_Tel}</div>
			</div>
			}
			{ evento.segr_Fax &&
			<div className="row justify-content-center">
				<div className="col-auto"> <i className="fas fa-fax"> </i>{' '}{evento.segr_Fax}</div>
			</div>
			}
			{ evento.segr_Email &&
			<div className="row justify-content-center">
				<div className="col-auto"> <i className="fas fa-paper-plane"> </i>
					<a href={`mailto:${evento.segr_Email}`}> {' '} {evento.segr_Email} </a></div>
			</div>
			}
			{ evento.segr_Web &&
			<div className="row justify-content-center">
				<div className="col-auto"> <i className="fas fa-globe"> </i>
					<a href={`http://${evento.segr_Web}`} target="_blank" rel="noopener noreferrer"> {' '} {evento.segr_Web} </a></div>
			</div>
			}
			</footer>
		</React.Fragment>
);
}
