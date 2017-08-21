import React, { Component } from 'react'
import {  } from 'react-router-dom'
import { Grid, Image } from 'semantic-ui-react'
import '../../styles/fitness.css'
import bootcamp from '../photodump/BC-quarter-raiseCROP.jpeg'
import kettlebell from '../photodump/pushup-kettlebell.png'
import circuit from '../photodump/Circuit-Training.png'
import placeholder from '../photodump/placeholderImage.jpeg'
import sportsPic from '../photodump/gallery2a.jpeg'
import high from '../photodump/High-Fitness-Logo-1.jpg'
import recovery from '../photodump/recovery_yoga.jpg'

class Fitness extends Component {
	render() {
		return (
<div>
	<div className="topFitnessPadding" style={styles.topFitnessPadding}></div>
 
		<div className="introFitness" style={styles.introFitness}>
			<div>
				<h2 className="introHeader" style={styles.introHeader}>Fitness</h2>
				<p className="introEnergy" style={styles.introEnergy}>Energy in the Room &amp; Vitality in the Body</p>
			</div>
		</div>

		<div className="fitnessPhoto">
			<a className="middleLink topLink" alt="link to google calendar of fitness courses" style={styles.middleLink} target="_blank" rel="noopener noreferrer" href="https://calendar.google.com/calendar/b/0/embed?mode=AGENDA&wkst=1&src=glcvge821o0rhi938tr32c9e5g@group.calendar.google.com&ctz=America/Denver">
				<h4 className="middleLinkWords" style={styles.middleLinkWords}>Click Here for FTRs Class Calendar</h4>
			</a>
			<a href="#fitness-jump" className="glyphicon glyphicon-chevron-down" alt="downfacing chevron" style={styles.glyphiconChevronDown}> </a>
		</div>

		<div>
			<a name="fitness-jump" alt="this marks the start of fitness programs"> </a>
		</div>
		<Grid columns={2} stackable className="programs programsBlack" style={styles.programs}>
				<Grid.Column computer={6} tablet={8} mobile={16}>
					<div className="programPic" style={styles.programPic}>
						<Image className="bcPhoto img-responsive" style={styles.bcPhoto} src={bootcamp} alt="Saturday Morning Bootcamp" />
					</div>
				</Grid.Column>
				<Grid.Column computer={10} tablet={8} mobile={16}>
					<div className="programDesc" style={styles.programDesc}>
						<h2 className="classHeader" style={styles.classHeaderWhite}>Saturday Bootcamp</h2>
						<h4 class="classLed" style={styles.classLedWhite}>Led by Ian Acker</h4>
						<p className="classPara" style={styles.classParaWhite}>The Original Class.<br />Everyday Saturday morning at 10am. We do it all from body weight exercises to cardio, flexibility, and strength. In the warmer weather, we meet at Sugar House Park.  It doesn't matter whether you are in-shape or just getting started on your physical fitness. We're all there for each other and it is a great way to start the weekend. Come one, and come all!</p>
					</div>
				</Grid.Column>
		</Grid>

		<Grid columns={2} stackable className="programs" style={styles.programs}>
			<Grid.Column computer={6} tablet={8} mobile={16} className="oddClass" style={styles.oddClass}>
				<div className="programPic" style={styles.programPic}>
					<Image className="img-responsive" style={styles.bcPhoto} src={placeholder} alt="Placeholder" />
				</div>
			</Grid.Column>
			<Grid.Column computer={10} tablet={8} mobile={16} className="evenClass" style={styles.evenClass}>
				<div className="programDesc" style={styles.programDesc}>						
					<h2 className="classHeader" style={styles.classHeader}>FTR Fitness</h2>
					<p className="classPara" style={styles.classPara}>This class is for all levels, and the exercises change frequently. Exercises range from Kettlebells and Circuit Training, to strength &amp; conditioning. These classes are formatted to have a warm-up period of instruction, PRACTICE, then cool down and stretch. Come and learn with us.</p>
				</div>
			</Grid.Column>
		</Grid>


				<a className="middleLink" style={styles.middleLink} target="_blank" rel="noopener noreferrer" href="https://calendar.google.com/calendar/b/0/embed?mode=AGENDA&wkst=1&src=glcvge821o0rhi938tr32c9e5g@group.calendar.google.com&ctz=America/Denver">
					<h4 className="middleLinkWords" style={styles.middleLinkWords}>Click Here for FTR's Fitness Class Calendar</h4>
				</a>



		<Grid columns={2} stackable className="programs programsBlack" style={styles.programs}>
				<Grid.Column computer={6} tablet={8} mobile={16}>
					<div className="programPic" style={styles.programPic}>
						<Image className="bcPhoto img-responsive" style={styles.bcPhoto} src={placeholder} alt="Saturday Morning Bootcamp" />
					</div>
				</Grid.Column>
				<Grid.Column computer={10} tablet={8} mobile={16}>
					<div className="programDesc" style={styles.programDesc}>
						<h2 className="classHeader" style={styles.classHeaderWhite}>Capoeira (The Dance of War)</h2>
						<p className="classPara" style={styles.classParaWhite}>Capoeira is a Brazilian martial art that combines elements of dance, acrobatics and music. It is known for its quick and complex maneuvers, predominantly using power, speed, and leverage across a wide variety of kicks, spins and techniques. All are welcome to learn and participate.</p>
					</div>
				</Grid.Column>
		</Grid>

		<Grid columns={2} stackable className="programs" style={styles.programs}>
			<Grid.Column computer={6} tablet={8} mobile={16} className="oddClass" style={styles.oddClass}>
				<div className="programPic" style={styles.programPic}>
					<Image className="img-responsive" style={styles.bcPhoto} src={high} alt="Placeholder" />
				</div>
			</Grid.Column>
			<Grid.Column computer={10} tablet={8} mobile={16} className="evenClass" style={styles.evenClass}>
				<div className="programDesc" style={styles.programDesc}>						
					<h2 className="classHeader" style={styles.classHeader}>HIGH Fitness</h2>
					<p className="classPara" style={styles.classPara}>HIGH Fitness is a hardcore, fun fitness class that incorporates aerobic interval training with music you love and intense easy to follow fitness choreography. It combines FUN (pop songs of old and new that everyone knows and loves) with INTENSITY (interval, plyometrics and cardio) with CONSISTENCY (each song has specific simple moves taught the same by all instructors). Together they make a recipe for success, repeat participation and results! HIGH Fitness produces a high caloric burn and full-body toning through its carefully formulated choreography that alternates between intense cardio peaks and toning tracks. </p>
				</div>
			</Grid.Column>
		</Grid>


			<a className="middleLink" style={styles.middleLink} target="_blank" rel="noopener noreferrer" href="https://calendar.google.com/calendar/b/0/embed?mode=AGENDA&wkst=1&src=glcvge821o0rhi938tr32c9e5g@group.calendar.google.com&ctz=America/Denver">
				<h4 className="middleLinkWords" style={styles.middleLinkWords}>Click Here for FTR's Fitness Class Calendar</h4>
			</a>


		<Grid columns={2} stackable className="programs programsBlack" style={styles.programs}>
				<Grid.Column computer={6} tablet={8} mobile={16}>
					<div className="programPic" style={styles.programPic}>
						<Image className="bcPhoto img-responsive" style={styles.bcPhoto} src={recovery} alt="Saturday Morning Bootcamp" />
					</div>
				</Grid.Column>
				<Grid.Column computer={10} tablet={8} mobile={16}>
					<div className="programDesc" style={styles.programDesc}>
						<h2 className="classHeader" style={styles.classHeaderWhite}>Recovery Yoga</h2>
						<p className="classPara" style={styles.classParaWhite}>Described as the perfect balance between activity and meditation, Courtney's classes leave members energized and relaxed. This class focuses on an evolution of mind, body, and spirit and encourages their harmony.<br />Restorative yoga is a form of yoga that seeks to achieve physical, mental and emotional relaxation with the aid of props. The use of props makes it easier for you to maintain balance while you are stimulating and relaxing your body.</p>
					</div>
				</Grid.Column>
		</Grid>

		<Grid columns={2} stackable className="programs" style={styles.programs}>
			<Grid.Column computer={6} tablet={8} mobile={16} className="oddClass" style={styles.oddClass}>
				<div className="programPic" style={styles.programPic}>
					<Image className="img-responsive" style={styles.bcPhoto} src={sportsPic} alt="Placeholder" />
				</div>
			</Grid.Column>
			<Grid.Column computer={10} tablet={8} mobile={16} className="evenClass" style={styles.evenClass}>
				<div className="programDesc" style={styles.programDesc}>						
					<h2 className="classHeader" style={styles.classHeader}>Team Sports</h2>
					<p className="classPara" style={styles.classPara}>On the court or on the field, you'll find Fit To Recover teams focused on fun, camaraderie, and team spirit. Currently, we field teams in volleyball and softball, but the World Cup has us thinking that soccer might be next.<br />Open to players of all levels, our co-ed teams enjoy the challenges, and often enjoy a meal together after the game. Come join us!</p>
				</div>
			</Grid.Column>
		</Grid>


</div>
		)
	}
}

const styles = {
	topFitnessPadding: {
		paddingTop: '45px',
	},
	introFitness: {
		width: '100%',
		height: '150px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
	},
	introHeader:{
		lineHeight: 1,
		fontFamily: 'Helvetica',
		fontWeight: 300,
		padding: '0',
		margin: '0',
		fontSize: '5em',
		color: 'black',
	},
	introEnergy: {
		fontFamily: 'Helvetica',
		fontWeight: 300,
		fontStyle: 'oblique',
		padding: '0',
		margin: '0',
		fontSize: '2.5em',
		color: 'black',
	},
	glyphiconChevronDown: {
		fontSize: '30px',
		color: 'white',
	},
	programs: {
		width: '100%',
		height: '350px',
		display: 'flex',
		alignItems: 'center',
		margin: '0 auto',
	},
	oddClass: {
		order: 2
	},
	evenClass:{
		order: 1
	},
	programPic: {
		flex: '1 1 40%',
		textAlign: 'center',
		fontSize: '30px',
		color: 'darkGreen',
	},
	bcPhoto: {
		borderRadius: '2px',
		height: '325px',
		margin: '0 auto',
	},
	programDesc: {
		flex: '1 1 60%',
		padding: '0 30px',
	},
	classPara: {
		fontSize: '1.1em',
		fontWeight: 400,
	},
	classHeaderWhite: {
		color: 'white',
	},
	classLedWhite: {
		fontSize: '1.4em',
		color: 'white',
	},
	classParaWhite: {
		fontSize: '1.1em',
		fontWeight: 400,
		color: 'white'
	},
	middleLink:{
		padding: '10px 0',
		width: '100%',
		margin: '0 auto',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},

}

export default Fitness;






















