import React from 'react';
import { Link } from 'react-router-dom';
import background from './media/Background.jpg'

const Header = () => {
	return(
		<div>
			<div className="ui vertical masthead center aligned">
				<div style={{width: '100%', marginTop: '0', marginBottom: '0', marginLeft: 'auto', marginRight: 'auto', background: '#e7e7e7'}}>
  					<div style={{overflow: 'hidden'}}>
  						<img 
	  						style={{
	  							height: "375px",
	  							width: "100%",
	  							objectFit: "cover"
	  						}} 
  							src={background} 
  							alt="background image" 
  						/>
  						<div className="ui header huge" style={{position: 'absolute', fontSize: "52px", top: "250px", left: '100px', width: '100%', height: 'auto', color: '#fff'}}>
 			 		  		Sarah Brackett
  	  					</div>
  	  					<div style={{position: 'absolute', top: '20px', right: '20px', height: 'auto'}}>
							<div className="ui compact secondary right menu">
								
								<Link to="/" className="headerButton">
									News
								</Link>
								<Link to="/resume" className="headerButton">
									Resume
								</Link>
								<Link to="/about" className="headerButton" >
									About
								</Link>
								<Link to="/videos" className="headerButton">
									Videos
								</Link>
								<Link to="/gallery" className="headerButton">
									Gallery
								</Link>
							</div>
						</div>
  					</div>
  				</div>
  			</div>		
		</div>
	);
};

export default Header;