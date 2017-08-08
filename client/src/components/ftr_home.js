import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import { Button, Grid, Segment, Divider, Icon } from 'semantic-ui-react'
import { } from 'react-bootstrap'
import Logo from './photodump/FTR-logo-hd-no-footer.png'
import Mountain from './photodump/mountainCROP.jpeg'
import donate from './photodump/July_2014_Bootcamp_trans.png'
 

class Home extends Component {
	
	render() {
		
		return(
		<div>
			<div style={styles.mountain}>

 				<div className="heading">
					<img src={ Logo } alt="FTR Logo" />
				</div>
				
			</div>
			<div className="xsHidden" style={styles.slcOnly}> 
					<h4 style={styles.slcMAP}>Salt Lake City's only Gym and Community Center for those in Recovery&nbsp;::&nbsp;
						<a 	target="_blank"  
								className="map" 
								color="red" 
								href="https://www.google.com/maps/place/Fit+to+Recover/@40.7399488,-111.9142314,17z/data=!4m13!1m7!3m6!1s0x8752f4da86d2a85f:0x98c2d4e4a171bc13!2s789+W+1390+S,+Salt+Lake+City,+UT+84104!3b1!8m2!3d40.7392009!4d-111.9137379!3m4!1s0x8752f4da86ddc03f:0x24d4219acbd712ad!8m2!3d40.739265!4d-111.913712">
								MAP
						</a>
					</h4>
			</div>

				<div style={styles.pEA}>
					<Grid columns={3} divided>
						<Grid.Row>
							<Grid.Column className="firstPad">
								<div className="triad xs={12}">
									<h3 style={styles.pTitles}>Our Philosophy</h3>
										<p style={styles.pDesc}>We're in this together, and together each of us improves and supports each others' recovery.</p>
										<a href="/philosophy" color="red" className="basic" style={styles.learnMore}>Explore Our Philosophy</a>
								</div>
							</Grid.Column>
							<Grid.Column>
								<div className="triad xs={12}">
									<h3 style={styles.pTitles}>Our Experience</h3>
										<p style={styles.pDesc}>A community space to experience support in our individual efforts to feel better, do better, and maintain recovery and acheive our goals.</p>
										<a href="/aboutus" color="red" className="basic" style={styles.learnMore}>Read Our Experiences</a>
								</div>
							</Grid.Column>
							<Grid.Column>
								<div className="triad xs={12}">
									<h3 style={styles.pTitles}>Our Activites</h3>
										<p style={styles.pDesc}>Daily Activities, Monday through Sunday. Check our calendar to find those best for you!</p>
										<a 
											target="_blank" 
											className="basic"
											color="red" 
											href="https://calendar.google.com/calendar/b/0/embed?mode=AGENDA&wkst=1&src=glcvge821o0rhi938tr32c9e5g@group.calendar.google.com&ctz=America/Denver" className="basic " style={styles.learnMore}>View FTR's Calendar</a>
								</div>
							</Grid.Column>
						</Grid.Row>
					</Grid>				
				</div>

			<Segment padded raised style={styles.pillarsHeadline}>
				<h2 style={styles.fourTitle}>FTR's Foundation: The 4 Pillars</h2>
			</Segment>

			<Grid container columns={2} stackable relaxed>
				<Grid.Row style={styles.quadCard}>
					<Grid.Column>
						<div style={styles.quadPillarsFitness}>
							<img 	class="icon icons8-Weightlifting" 
										src="data:image/png;base64,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" 
										width="75" 
										height="75" />
							<h3 style={styles.qTitle}>Fitness</h3>
							<p style={styles.qDesc}>Passionate about fitness and an even more passionate for recovery, group exercise
							classes create energy in the room and vitality in the body.</p>
							<a href="fitness" style={styles.fitnessButton} className="fitnessButton">Explore Fitness</a>
						</div>
					</Grid.Column>

					<Grid.Column>
						<div style={styles.quadPillarsFitness}>
							<img class="icon icons8-Theatre-Mask" src="data:image/png;base64,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" width="75" height="75" />
								<h3 style={styles.qTitle}>Creative Arts</h3>
								<p style={styles.qDesc}>Every person has a story. Recovery is strengthened when a person takes ownership of that story and expresses it through different media.</p>
								<a href="/Programs/creativearts.html" style={styles.creativeButton} className="creativeButton">Explore Creative Arts</a>
						</div>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row style={styles.quadCard}>
					<Grid.Column>
						<div style={styles.quadPillarsFitness}>
							<img class="icon icons8-Conference" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAFIElEQVR4nO1a0XXqMAzNCIzACGzQHGz+uwFs0LdBGaC22QD+a9XdgGxQNoAN6AbvfcRpA5ZiJ3FIy/M9x18ER5Fl6eraWZaQkJCQkJCQkJCQUELlZiqZXioOz9WQTC9VbiZj2/ZjoHIzFUwbyeEvNQTTRuVmOrato0LMYdXkJMdpc1iNbfMoaOuo/9Zhir/mXRxVDcVf87G/4WaQXO+diOH6U3BYq4WZZVmWqYWZCQ5rwfWn6zC9H/sbboIXph8xR1VOukbpNNdh/0V0SaY3bfMQmt+Y3tzI5PEgORTXHx74v+vcVQxs6jBQuZnKxduDXLw9+J5FnFWEvEMwOLT9X2XT6BxNLcxMMNhKBmckAX9IppfY/xxnMTiGvA95T4E/p5eS6w9328JZMNhSuXEwCA4qqMwzOF4bJ7l+d5K1Z+VVbqbIgrxfPMNfc8ngGMTVOKgB3OIYPUFXrQWRFBz+OL8zbZrei7VDF3N2Irj6Y9C+09fDNY0v/pSbCUYFBIPttfEqNxPBYItSDfusWphZV5t8i9TdUcTqCa4/JdO7kkDCGknEXyv5NReHNbFtz5LrveLwLLne4/kQ/goO62ouKtIFg0NlU2kfRm4Hap+IfFBgoSzmsMKMe2H68esZ0qm+aIBDNQdFcDEHlCnEpS2hBSYYWKgLBqemPY/lpiopvzD9GJqMsY+rnI4VC8HhD/kd5bY+USkiCrBtExK+jmG2fHfNMVeL5dAWweDktQlJJ/Vt3RuYs0KInmR6F8Mx4VGndz6bMBoS1VlYPxdSdrH/EVFykkxvXph+VPw1r0a5XfUG2zqEs7z9os1dt42serKm4ONkgsEhVD2wGpiboC/Gd8WlgBeFiM7CXuDTlHwCX1cD8cJRi3iP8zEtLWThWxqJEEmibVALM2uqdn25TSNjR1qs729w2zTB9WcfW3ADKSLJ9V4yvaw6fMFBUWTSOpgs7a3saXbYWXBQlU22uXYiKvoWrGA5SiciWXPsu/9N4cB4VptRJ7jR0fugIbKuhKsRLewZSpou+7UeURXAgbqgF5djcJZMP0U1KAbrjl5xLPBK3Xo7bqMY43OUYHCQTG9sd7+RHAqscoa8yybjJ3vP4SlEps4yV5+37y9qdu18+ba3w+gKWFYRKgep3EzEHFY15l1Q7yj1rYYKaitbU8cgv8lq0RTBKjdT3ze1cM/lxMQKnNp06WIOK4pXWSmYpBnXTqMSctUmBX9beX6ARlonBQI9NWZwiCXFjn3XgaZCLU+7qaiKpftYhh8WUViERbQDPe1uMz96ahyR6VJsWjK9q7aUVRwIWhDvrgOaw9qcdmN9XaztRx0wUImZogbRoguRbFpJzchKRmtTukRt79X32YSfZfqDA9Xbo25BV5PyGYaufsS7DqgSHFJdsf4vllKQZa4gGNrMdrnrEIrOzhoaTmSF33W4zqPFwKaOD2IbTpv+Q1CZ4jYWj4hodx0ipoYfC7KNIiRq6sbO6HeubgWSbDI4Cg5KcXi2zbXD92LThh+PPhJ1zP7016CroBhNqPsNKElv+wtxl0N/3Py6463RS21w81s09eHHweeo6vJZXXVovhx3pw5TuZk0nFAXgaQUv+fA4HhXCZ+6TdOWWJL3HO6FSjSQ0E4MnHLYXZBUPKr66WPosf09RBehuk77zIlGa+yLtLcGLiHHUV1RdfM3V0b0smuko6wh5x4FQyqQhKK7jjH3KLCrX9RHrKplt/jF3L86shISEhISEhISEhJC8A8bbqrhYqgGygAAAABJRU5ErkJggg==" width="75" height="75" />
								<h3 style={styles.qTitle}>Community Service</h3>
								<p style={styles.qDesc}>Being selfless is be a big part of the recovery journey. Being of service allows us to step out of ourselves and our issues, and give back.</p>
								<a href="/communityservice" style={styles.serviceButton} className="serviceButton">Explore Community Service</a>
						</div>
					</Grid.Column>

					<Grid.Column>
						<div style={styles.quadPillarsFitness}>
							<img class="icon icons8-Vegetarian-Food" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAEcUlEQVR4nO1czXHyMBD1JbB7owRK8LAqgA6+dEA6CB2EDsI5WsZ0QDqADkIH0AF0wHeQJcsEgv8k/PdmdMmMZOlFWu2+XREEPXr06NGjR4+GQMjBP7GCj6yNePgeRjB+9ry9IoyCkZD4IxgvRdpkBW/PXoM3TORwLhgvJPFbSFjkaSTxTIynZ6/BG4SEnWC8CAlTn30bCWJYC8YL8eA1b199fDtju4gHr4osPBEPXoXETyFhEQTKnhHjRhMZfr2EgmEbRjAWDNu43/6pC/ANfZzCr5eQGPeagDCCcWyXlkFgEzt4JYnfnTqCQRDfhowXYjjm6TdZwVu8s5aOplY/JIuGdZ5+6ijihRgOjqZWP+jjVMTAE+NeH18Xc6sdiPFEEs9F+mofbSKH86rnVTsYgy3xu0h/dTviRUj8qXputYP2scqELMRw7ISvRQwHtdBgVHwMXLY+RkyOEOzKjCMkTMsc5UZA7wjBsM0jzdxssQJRZofWGmVkmXutiPtRe1gO5TGvLHNTqjHBeD7HthEwGlZFoUoSMrVQ27ID56rGbGVgXTRwfoRWBtZFA+dHaGVgXUYZfTx2HFi3xZuvwmu/P3aLvHnr1nIiBVsSdfPtlg5NyoY4zxrfK6zFLJx9owlkCQnTR3bIH1k117eI4UCMp78I80YW48XV+KVhfKcHMklPVpA96dB5sow7kCHp0DmywgjGYgUf2ktOfBsVvqiUO8zECj6u+3aOLLNgRVBkFE8JC1Vkhqd7jmdnyCKGmb7pSOL5t0qpwhjTYqnEjtNaTxYxzIjhQBLPeuH69rsp7Uo824ZeBc6wDb9ewtaSlSrrsYgKIxir43e1k8yOwh9iiIQc/NNjJUoDblpHVlz6Y2yPVjT/2lG3G2zDKBjFRv9oHdGFq7l7JStNVCLQ2YZd7zaVLFAakjHyunTxihg1riYMtq7m742suNLudP3fj/++FxJ2xLi0bVKKHFOxB2MhYXodL5pxHMoo3sjSNiWP5GsSBZytmkVX87lKLnghy6TBGY55VMyUHcu4+KRP9cfRC1llKlqIcZ+3xio5jtVq8X52Vsb47hbCKBjlJdlVlsc5WdYRXDv7yBWs/GGlqSsfZC2yGugqoV2JKsf0Rpbv1LeLNH7ryaryu/6OoefkZCN3li4Bchmz3YIuaKt0TG+3oce6TFfVNH6c0jgE8VWX6apEqPYefBEkT+Ca6MEnjunB9e6y49DKx/amOiSlhgun34lVVhe72KOelcgnro4jMUQuLxOvSqlleE9VP00zROWUgfLAuwZva1TEw/ey4+m3zr40+KLqSWGkCcNN0TpNnUozur1DdaOq90CFP25nZa5TXHf7qXTZzE6XEeMyjIKR8eccvD71kWp7iMkK3n5noWErJH6mfx8GN7/e5EjY2YFyesdCVPqRk/l2vHsd2sPM0GooMaxvpe9TaTKGIzEu76kJEzmcPxqjUJOwq2VZt051qR+ugEWS+so2WfWDPTCt4qHTRA7nnXlU3qNHjx49ejjFfx4qkvkiT6K5AAAAAElFTkSuQmCC" width="75" height="75" />
								<h3 style={styles.qTitle}>Nutrition</h3>
								<p style={styles.qDesc}>We believe food has to be tasty, nutritious, and easy to prepare. We believe food is a center for both our community and for families.</p>
								<a href="nutrition.html" style={styles.nutritionButton} className="nutritionButton">Explore Nutrition</a>
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
 
			<div style={styles.donate}>
				<div className="support">
					Donate
				</div>
				<div style={styles.donateWords} className=" col-md-12 col-xs-12">
						<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" class="bottom-donate">
						<input type="hidden" name="cmd" value="_s-xclick" />
						<input type="hidden" name="hosted_button_id" value="D2PFU4W5XAR2Y" />
						<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
						<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
					<p>As a non-profit, community-center, and supportive environment, We're grateful to those willing and able to support us.</p>
						</form>
				</div>
			</div>			
		</div>
		)
	}
}

let styles = {
			mountain: {
				height: "470px",
				backgroundImage: "url(" + Mountain + ")",
				backgroundPosition: "bottom center",
				backgroundRepeat: "no-repeat",
				width: "100%",
				display: "flex",
				flexFlow: "column",
				paddingTop: "70px",
			},
			slcOnly:{
				display: "flex",
				alignItems: "center",
				color: "black",
				height: "9em",
				textAlign: "center",
				justifyContent: "center",
				borderBottom: "1px solid #E7E7E8",
			},
			slcMAP:{
				fontWeight: "300",
				fontSize: "2.5em",
			},
			map: {
				border: "1px solid red",
				color: "white",
				backgroundColor: "red",
				justifyContent: "center",
				padding: "8px 20px",
				borderRadius: "5px",
				fontSize: "16px"
			},
			pTitles:{
				fontSize: "28px"
			},
			pDesc: {
				textAlign: "center",
				padding: "0 10px",
				fontSize: "18px",
				fontWeight: "400",
		},
			learnMore: {
				border: "1px solid red",
				color: "red",
				justifyContent: "center",
				padding: "10px 5px",
				cursor: "pointer",
				borderRadius: "5px",
				fontSize: "16px"
			},
			pEA:{
				height: "250px",
				display: "flex",
				alignItems: "center",
			},
			pillarsHeadline:{
				display: "flex",
				justifyContent: "center",
			},
			fourTitle:{
				fontSize: "28px",
			},
			quadPillarsFitness: {
				height: "300px",
				display: "flex",
				flexFlow: "column nowrap",
				justifyContent: "center",
				alignItems: "center",
			},
			qTitle:{
				fontSize: "30px",
			},
			qDesc:{
				fontSize: "18px",
				textAlign: "center"
			},
			fitnessButton: {
				border: "1px solid #f90101",
				color: "#f90101",
				padding: "15px 5px",
				borderRadius: "5px",
			},
			serviceButton: {
				border: "1px solid #8e44ad",
				color: "#8e44ad",
				padding: "15px 5px",
				borderRadius: "5px",
			},
			creativeButton: {
				border: "1px solid #332df7",
				color: "#332df7",
				padding: "15px 5px",
				borderRadius: "5px",
			},
			nutritionButton: {
				border: "1px solid #349c09",
				color: "#349c09",
				padding: "15px 5px",
				borderRadius: "5px",
			},
			quadCard: {
				padding: "40px 0",
			},
			donate: {
				display: "flex",
				height: "320px",
				background: "linear-gradient(rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 1.0)), url(" + donate + ")",
				backgroundPosition: "bottom",
				backgroundRepeat: "no-repeat",	
				borderRadius: "10px 10px 0 0",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "space-between",
				textAlign: "center",
			},
			donateWords: {
				fontSize: "20px",
				background: ""
			},
			support: {
				fontSize: "180px",
				color: "black",
				fontWeight: '300',
				paddingTop: "120px",

			},
			footer: {
				height: "200px",
				backgroundColor: "Red",
			}
		}


export default Home;



















