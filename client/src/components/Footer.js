import React, { Component } from 'react'
import { Image, Button, Icon, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
import mindBody from './photodump/mindBodyWhite.png'


class Footer extends Component {
  render() {
    return(
<div className="footerWide">
			<div className="socialLinks">
			    <div className="facebook actualSocial">
			    	<Icon name="facebook square" className="fbLink"/>
			      <a className="smallMB mindBodyA" target="_blank" link href="https://www.facebook.com/TeamFTR1/"> Facebook</a>
			    </div>
					<div className="youtube actualSocial">
					<Icon name="youtube play" className="youtubeLink"/>
			      <a className="smallMB mindBodyA" target="_blank" link href="https://www.youtube.com/channel/UCkH-bLte_M7x8nIXVkCaMaQ"> YouTube </a>
			    </div>
			    <div className="mindBody actualSocial">
			    	<Image src={mindBody} className="smallMB mbWhite"/>
			      <a className="smallMB mindBodyA" target="_blank" href="https://clients.mindbodyonline.com/classic/home?studioid=280495">MindBody</a>
			    </div>
			</div>


			<div className="actualFooter">
				<div className="whoWeAre">
					<h6 className="whoWords"> 
						Established in 2013, Fit To Recover is built on the promise to make a difference 
						in the recovery and physical fitness communities by bringing them together into 
						one group with shared goals. At Fit To Recover, we support one another in physical activity, 
						community gatherings, nutritional insights, and creative endeavors.
					</h6>
				</div>

				<div className="feedback">
					<a className="bottomMailTo" target="_blank" href="https://www.google.com/maps/place/Fit+to+Recover/@40.7399488,-111.9142314,17z/data=!4m13!1m7!3m6!1s0x8752f4da86d2a85f:0x98c2d4e4a171bc13!2s789+W+1390+S,+Salt+Lake+City,+UT+84104!3b1!8m2!3d40.7392009!4d-111.9137379!3m4!1s0x8752f4da86ddc03f:0x24d4219acbd712ad!8m2!3d40.739265!4d-111.913712" target="_top">
						789 West 1390 South, Salt Lake City, Utah 84104	
					</a>
				</div>

			  <div className="navCopy">
			  	<div className="footerLinks" as="h3"><a target="_blank" className="footerALinks" href="/">Home</a></div>
			  		<span>|</span>
			  	<div className="footerLinks" as="h3"><a target="_blank" className="footerALinks" href="/fitness">Fitness</a></div>
			  		<span>|</span>
			  	<div className="footerLinks" as="h3"><a target="_blank" className="footerALinks" href="/nutrition">Nutrition</a></div>
			  		<span>|</span>
			  	<div className="footerLinks" as="h3"><a target="_blank" className="footerALinks" href="/creativearts">Creative Arts</a></div>
			  		<span>|</span>
			  	<div className="footerLinks" as="h3"><a target="_blank" className="footerALinks" href="/communityservice">Community Service</a></div>
			  		<span>|</span>
			  	<div className="footerLinks" as="h3"><a target="_blank" className="footerALinks" href="/contact">Contact Us</a></div>
			  </div>

				<div className="feedback">
					<a className="bottomMailTo" href="mailto:ftr@fit2recover.org" target="_top">
						<Icon name="mail" color="white" />
							&nbsp;We'd love to hear from You - Feedback, Comments, Testimonials&nbsp;
						<Icon name="mail" color="white" />
					</a>
				</div>

			  <div >
			
			</div>

			</div>
</div>
    );
  }
}

export default Footer;
