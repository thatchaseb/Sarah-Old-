import React from 'react';
import headshot from '../media/Headshot.jpg';

const Contact = () => {
	return (
		<div>
			<div className="ui image large spaced">
				<img src={headshot} alt="headshot Image"/>
			</div>	
		</div>
	);
};

export default Contact;