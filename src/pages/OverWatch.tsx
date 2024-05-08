import React from 'react'
import Diva from '../components/ow2/Diva'
import Winston from '../components/ow2/Winston'
import Doomfist from '../components/ow2/Doomfist'
import JunkerQueen from '../components/ow2/JunkerQueen'
import Orisa from '../components/ow2/Orisa'
import Ramattra from '../components/ow2/Ramattra'
import Reinhardt from '../components/ow2/Reinhardt'
import Roadhog from '../components/ow2/Roadhog'
import Sigma from '../components/ow2/Sigma'
import WreckingBall from '../components/ow2/WreckingBall'
import Zarya from '../components/ow2/Zarya'
import Ashe from '../components/ow2/Ashe'
import Bastion from '../components/ow2/Bastion'
import Cassidy from '../components/ow2/Cassidy'
import Echo from '../components/ow2/Echo'
import Genji from '../components/ow2/Genji'
import Hanzo from '../components/ow2/Hanzo'
import Junkrat from '../components/ow2/Junkrat'
import Mei from '../components/ow2/Mei'
import Pharah from '../components/ow2/Pharah'
import Reaper from '../components/ow2/Reaper'
import Sojourn from '../components/ow2/Sojourn'
import Soldier76 from '../components/ow2/Soldier76'
import Sombra from '../components/ow2/Sombra'
import Symmetra from '../components/ow2/Symmetra'
import Torbjorn from '../components/ow2/Torbjorn'
import Tracer from '../components/ow2/Tracer'
import Widowmaker from '../components/ow2/Widowmaker'
import Ana from '../components/ow2/Ana'
import Baptiste from '../components/ow2/Baptiste'
import Brigitte from '../components/ow2/Brigitte'
import Kiriko from '../components/ow2/Kiriko'
import Lucio from '../components/ow2/Lucio'
import Mercy from '../components/ow2/Mercy'
import Moira from '../components/ow2/Moira'
import Zenyatta from '../components/ow2/Zenyatta'
import Mauga from '../components/ow2/Mauga'
import Illari from '../components/ow2/Illari'
import Lifeweaver from '../components/ow2/Lifeweaver'
import OW2Modal from '../components/ow2/ow2Modal/OW2Modal'
import { Modal, Button } from 'react-bootstrap'
import { DIVA_WEAK, WINSTON_WEAK, ORISA_WEAK, ZARYA_WEAK, SIGMA_WEAK, JUNKERQUEEN_WEAK, DOOMFIST_WEAK, REINHARDT_WEAK, RAMATTRA_WEAK, WRECKINGBALL_WEAK, ROADHOG_WEAK, MAUGA_WEAK } from '../components/constants/OW2Const'
import { ASHE_WEAK, WIDOWMAKER_WEAK, ECHO_WEAK, CASSIDY_WEAK, GENJI_WEAK, SYMMETRA_WEAK, JUNKRAT_WEAK, SOJOURN_WEAK, SOLDIER76_WEAK, SOMBRA_WEAK, TORBJORN_WEAK, TRACER_WEAK, HANZO_WEAK, BASTION_WEAK, PHARAH_WEAK, MEI_WEAK, REAPER_WEAK } from '../components/constants/OW2Const'
import { ANA_WEAK, KIRIKO_WEAK, ZENYATTA_WEAK, BAPTISTE_WEAK, BRIGITTE_WEAK, MERCY_WEAK, MOIRA_WEAK, LIFEWEAVER_WEAK, LUCIO_WEAK, ILLARI_WEAK } from '../components/constants/OW2Const'
import { WeakType } from '../components/ow2/ow2Type/ow2Type'


const OverWatch: React.FC = () => {

	const [isTankOpen, setTankOpen] = React.useState<boolean>(false);
	const [isDpsOpen, setDpsOpen] = React.useState<boolean>(false);
	const [isHealOpen, setHealOpen] = React.useState<boolean>(false);
	const [isShow, setShow] = React.useState<boolean>(false);
	const [weak, setWeak] = React.useState<WeakType>(DIVA_WEAK);

	const handleClose = (): void => setShow(false);
	const handleShow = (): void => setShow(true);

	return (
		<>
			<div>
				<div className='pick-table'>
					<div className='table-title'>アンチピック表</div>
					<button className={'role-name tank-button' + (isTankOpen ? ' open' : '')} onClick={() => setTankOpen(!isTankOpen)} >タンク</button>
					<div className={'tank-container' + (isTankOpen ? ' open' : '')}>
						<div className="container text-center">
							<div className="row">
								<div className="col" onClick={() => {
									setWeak(DIVA_WEAK);
									handleShow();
								}}>
									<Diva />
								</div>
								<div className="col" onClick={() => {
									setWeak(WINSTON_WEAK)
									handleShow();
								}}>
									<Winston />
								</div>
								<div className="col" onClick={() => {
									setWeak(ORISA_WEAK)
									handleShow();
								}}>
									<Orisa />
								</div>
							</div>
							<div className="row">
								<div className="col" onClick={() => {
									setWeak(ZARYA_WEAK)
									handleShow();
								}}>
									<Zarya />
								</div>
								<div className="col" onClick={() => {
									setWeak(SIGMA_WEAK)
									handleShow();
								}}>
									<Sigma />
								</div>
								<div className="col" onClick={() => {
									setWeak(JUNKERQUEEN_WEAK)
									handleShow();
								}}>
									<JunkerQueen />
								</div>
							</div>
							<div className="row">
								<div className="col" onClick={() => {
									setWeak(DOOMFIST_WEAK)
									handleShow();
								}}>
									<Doomfist />
								</div>
								<div className="col" onClick={() => {
									setWeak(MAUGA_WEAK)
									handleShow();
								}}>
									<Mauga />
								</div>
								<div className="col" onClick={() => {
									setWeak(REINHARDT_WEAK)
									handleShow();
								}}>
									<Reinhardt />
								</div>
							</div>
							<div className='row'>
								<div className="col" onClick={() => {
									setWeak(RAMATTRA_WEAK)
									handleShow();
								}}>
									<Ramattra />
								</div>
								<div className="col" onClick={() => {
									setWeak(WRECKINGBALL_WEAK)
									handleShow();
								}}>
									<WreckingBall />
								</div>
								<div className="col" onClick={() => {
									setWeak(ROADHOG_WEAK)
									handleShow();
								}}>
									<Roadhog />
								</div>
							</div>
						</div>
					</div>
					<button className={'role-name dps-button' + (isDpsOpen ? ' open' : '')} onClick={() => setDpsOpen(!isDpsOpen)}>ダメージ</button>
					<div className={'dps-container' + (isDpsOpen ? ' open' : '')}>
						<div className="container text-center">
							<div className="row">
								<div className="col" onClick={() => {
									setWeak(ASHE_WEAK);
									handleShow();
								}}>
									<Ashe />
								</div>
								<div className="col" onClick={() => {
									setWeak(WIDOWMAKER_WEAK)
									handleShow();
								}}>
									<Widowmaker />
								</div>
								<div className="col" onClick={() => {
									setWeak(ECHO_WEAK)
									handleShow();
								}}>
									<Echo />
								</div>
							</div>
							<div className="row">
								<div className="col" onClick={() => {
									setWeak(CASSIDY_WEAK)
									handleShow();
								}}>
									<Cassidy />
								</div>
								<div className="col" onClick={() => {
									setWeak(GENJI_WEAK)
									handleShow();
								}}>
									<Genji />
								</div>
								<div className="col" onClick={() => {
									setWeak(SYMMETRA_WEAK)
									handleShow();
								}}>
									<Symmetra />
								</div>
							</div>
							<div className="row">
								<div className="col" onClick={() => {
									setWeak(JUNKRAT_WEAK)
									handleShow();
								}}>
									<Junkrat />
								</div>
								<div className="col" onClick={() => {
									setWeak(SOJOURN_WEAK)
									handleShow();
								}}>
									<Sojourn />
								</div>
								<div className="col" onClick={() => {
									setWeak(SOLDIER76_WEAK)
									handleShow();
								}}>
									<Soldier76 />
								</div>
							</div>
							<div className="row">
								<div className="col" onClick={() => {
									setWeak(SOMBRA_WEAK)
									handleShow();
								}}>
									<Sombra />
								</div>
								<div className="col" onClick={() => {
									setWeak(TRACER_WEAK)
									handleShow();
								}}>
									<Tracer />
								</div>
								<div className="col" onClick={() => {
									setWeak(TORBJORN_WEAK)
									handleShow();
								}}>
									<Torbjorn />
								</div>
							</div>
							<div className="row">
								<div className="col" onClick={() => {
									setWeak(HANZO_WEAK)
									handleShow();
								}}>
									<Hanzo />
								</div>
								<div className="col" onClick={() => {
									setWeak(BASTION_WEAK)
									handleShow();
								}}>
									<Bastion />
								</div>
								<div className="col" onClick={() => {
									setWeak(PHARAH_WEAK)
									handleShow();
								}}>
									<Pharah />
								</div>
							</div>
							<div className="row">
								<div className="col" onClick={() => {
									setWeak(MEI_WEAK)
									handleShow();
								}}>
									<Mei />
								</div>
								<div className="col" onClick={() => {
									setWeak(REAPER_WEAK)
									handleShow();
								}}>
									<Reaper />
								</div>
								<div className="col">
								</div>
							</div>
						</div>
					</div>
					<button className={'role-name heal-button' + (isHealOpen ? ' open' : '')} onClick={() => setHealOpen(!isHealOpen)}>ヒール</button>
					<div className={'heal-container' + (isHealOpen ? ' open' : '')}>
						<div className="container text-center">
							<div className="row">
								<div className="col" onClick={() => {
									setWeak(ANA_WEAK)
									handleShow();
								}}>
									<Ana />
								</div>
								<div className="col" onClick={() => {
									setWeak(ILLARI_WEAK)
									handleShow();
								}}>
									<Illari />
								</div>
								<div className="col" onClick={() => {
									setWeak(KIRIKO_WEAK);
									handleShow();
								}}>
									<Kiriko />
								</div>
							</div>
							<div className="row">
								<div className="col" onClick={() => {
									setWeak(ZENYATTA_WEAK)
									handleShow();
								}}>
									<Zenyatta />
								</div>
								<div className="col" onClick={() => {
									setWeak(BAPTISTE_WEAK)
									handleShow();
								}}>
									<Baptiste />
								</div>
								<div className="col" onClick={() => {
									setWeak(BRIGITTE_WEAK)
									handleShow();
								}}>
									<Brigitte />
								</div>
							</div>
							<div className="row">
								<div className="col" onClick={() => {
									setWeak(MERCY_WEAK)
									handleShow();
								}}>
									<Mercy />
								</div>
								<div className="col" onClick={() => {
									setWeak(MOIRA_WEAK)
									handleShow();
								}}>
									<Moira />
								</div>
								<div className="col" onClick={() => {
									setWeak(LIFEWEAVER_WEAK)
									handleShow();
								}}>
									<Lifeweaver />
								</div>
							</div>
							<div className="row">
								<div className="col" onClick={() => {
									setWeak(LUCIO_WEAK)
									handleShow();
								}}>
									<Lucio />
								</div>
								<div className="col">
								</div>
								<div className="col">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<OW2Modal isShow={isShow} handleClose={handleClose} weak={weak} />
			</div>
		</>
	)
}

export default OverWatch
