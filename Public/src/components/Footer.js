import React from 'react';
import YoutubeEmbed from "./YoutubeEmbed";

const Footer = () => {
	return(
	<div className="ui inverted vertical masthead center aligned segment">
		<div className="ui inverted segment">
		  <div className="ui two column very relaxed grid">

		    <div className="column">
		      <YoutubeEmbed embedId="h7F2-IguYfM" />
		      <p style={{color: "#000"}}>.</p>
		      <p style={{color: "#000"}}>.</p>
		      <p>Site design: Brackett Design</p>
		    </div>

		    <div className="column">
		      <a  href={"https://www.facebook.com/sarah.williams.144734"} target="_blank">
		      	<i class="big facebook icon" style={{color:"#4267B2"}}>
		      	</i>
		      </a>
		      <a  href={"https://www.instagram.com/sarahbrackett1993/"} target="_blank">
		      <i class="big instagram icon" style={{color:"#458eff"}}></i>
		      </a>
		      <a  href={"https://www.youtube.com/channel/UCfX41QuDUsOqcQ-8n6d1XPw/videos"} target="_blank">
		      <i class="big youtube icon" style={{color:"#FF0000"}}></i>
		      </a>

		      <div className="ui inverted segment">
		    		<div className="ui fluid inverted input">
						  <input type="text" placeholder="Email Adress"/>
						  
						</div>
		    		<div className="ui stackable divider"></div>
						<div 
							className="ui inverted input" 
							style={{
						}} >
		    			<textarea type="text" cols="40" rows="5" style={{ resize:"none", 
    						borderRadius: '5px', border:'none', outline:'none', padding: '10px', fontFamily: 'Lato'}} placeholder="*Enter Message*"></textarea>
		    		</div>

		    		<button className="ui small inverted blue button" style={{paddingTop: "10px", marginTop: "10px" }}>
		    			Submit
		    		</button>
		    	</div>
		    </div> 
		  </div>
		</div>
	</div>
	);
};
export default Footer;