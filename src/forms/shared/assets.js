import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


export function Header( props ) {
	const {evento} = props.contesto;
	return (
	<React.Fragment>
	<Navbar style={{backgroundColor: "#5fbcb4"}} className="justify-content-between">
		<Navbar.Brand>
			<img
				src={process.env.PUBLIC_URL + '/img/logo.png' }
				alt="logo">
				</img>
		</Navbar.Brand>
			{props.children}
	</Navbar>
	<br/>
	<Card className="shadow text-center">
	<Card.Body>
		<Card.Title>
			<h5>
				{evento.titoloEvento}
			</h5>
		</Card.Title>
		<Card.Subtitle>
			<h6 className="mb-2 text-muted">
				{evento.sottotitolo}
			</h6>
		</Card.Subtitle>
		<Card.Text className="m-0">
				{Array.of(evento.sede_nome, evento.c_tagDurata).filter((e) => e.length > 0).join(', ')}
				<br/>
				{Array.of(evento.sede_indirizzo, evento.sede_Comune + (evento.sede_Prov && ` (${evento.sede_Prov})`)).filter((e) => e.length > 0).join(' - ')}
		</Card.Text>
		</Card.Body>
	</Card>
	</React.Fragment>
	);
}

export function LanguageSwitcher(props) {
	const {lingua, cambiaLingua} = props.contesto;

	return (
		<ToggleButtonGroup type="radio" name="language" defaultValue={"it"} onChange={(value)=>cambiaLingua(value)} className="float-right">
			<ToggleButton value={"it"} variant="outline-light" className="btn-sm">IT</ToggleButton>
			<ToggleButton value={"en"} variant="outline-light" className="btn-sm">EN</ToggleButton>
		</ToggleButtonGroup>
	)
}

export function Footer( props ) {
	const {evento, t} = props.contesto;
	return (
		<React.Fragment>
			<hr/>
			<footer style={{fontSize: 12}}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-auto">
							{t("segreteria")} </div>
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

export function EventoScaduto(props){
	const {t,evento} = props.contesto;
	const scadenza = new Date(evento["Desk::dataScadenzaRegistrazioni"]).toLocaleDateString();
	return (
		<div className="alert alert-warning m-2">
			{t("desk_expire",scadenza)}
		</div>
	);
}
