import React from 'react';
import MediaItem from '../MediaItem'


const items = [
	{
title: `Amish Acres' Beauty and the Beast emphasizes the magic of hope`,
date: 'November 15, 2019',
content: `An article written by Dessi Gomez (In the Bend, South Bend, Indiana) interviewing me as I was about to perform as Belle in Beauty and the Beast at Round Barn Theatre in Nappanee Indiana. “It’s been a dream role of mine since I was little,” she says. “It was one of my favorite movies. I had never seen a Disney princess look like me. She’s so cool how she loves to read, and she’s so independent and strong.”`,
link: `https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.southbendtribune.com%2Fentertainment%2Finthebend%2Farts%2Famish-acres-beauty-and-the-beast-emphasizes-the-magic-of%2Farticle_15aac1a1-0418-5902-af2e-6d2f945823ec.html%3Ffbclid%3DIwAR2Y9yHhB5XfFHlSx-mUNtuOEdnliBQ0-bhbb9ZV6xySLBjf4DzQTP1zhwk&h=AT01Fglj-BIvRkzXB0KXsv66UZSJxrH8T0LP_7B6kegqtfx0SF3QkDI2gE1pZzqJ3OGosuWrragI89Vm-DlyljiBm76vJFz0g1fJW0Io33Hr0JkJWqMV6t5ZcTjcGL33hIhYvA`,
id: `6`
},
{
title: 'Beauty and the Beast is Coming to The Round Barn Theatre',
date: 'November 5, 2019',
content: 'Broadway World (South Bend) announces Beauty and the Beast at Round Barn Theatre',
link: `https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.broadwayworld.com%2Fsouth-bend%2Farticle%2FBEAUTY-AND-THE-BEAST-is-Coming-to-The-Round-Barn-Theatre-20191104%3Ffbclid%3DIwAR2Y9yHhB5XfFHlSx-mUNtuOEdnliBQ0-bhbb9ZV6xySLBjf4DzQTP1zhwk&h=AT01Fglj-BIvRkzXB0KXsv66UZSJxrH8T0LP_7B6kegqtfx0SF3QkDI2gE1pZzqJ3OGosuWrragI89Vm-DlyljiBm76vJFz0g1fJW0Io33Hr0JkJWqMV6t5ZcTjcGL33hIhYvA`,
id: `5`
},
{
title: 'LIFE COULD BE A DREAM Showcases Acting From Actors',
date: 'April 25, 2019',
content: `Broadway World (South Bend) reviews Life Could be a Dream at Round Barn Theatre. “Sarah Williams is True North when she sings "Unchained Melody" at the end of the first act. It's the strongest composition in the show, with the most poetic lyrics, and Williams provides the best performance of the evening”`,
link: `https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.broadwayworld.com%2Fsouth-bend%2Farticle%2FLIFE-COULD-BE-A-DREAM-Showcases-Acting-From-Actors-20190416%3Ffbclid%3DIwAR2SnPNceTfdnl-RRJQHUnXZVdpZv55tXPESSkvycckHiJuTF1ncoessOAU&h=AT01Fglj-BIvRkzXB0KXsv66UZSJxrH8T0LP_7B6kegqtfx0SF3QkDI2gE1pZzqJ3OGosuWrragI89Vm-DlyljiBm76vJFz0g1fJW0Io33Hr0JkJWqMV6t5ZcTjcGL33hIhYvA`,
id: `4`
},
{
title: 'The Round Barn Theatre Opens The 2019 Season With LIFE COULD BE A DREAM',
date: 'March 28, 2019',
content: `Broadway World (South Bend) announces the opening show of the 2019 season at Round Barn Theatre: Life Could be a Dream`,
link: `https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.broadwayworld.com%2Fsouth-bend%2Farticle%2FThe-Round-Barn-Theatre-Opens-The-2019-Season-With-LIFE-COULD-BE-A-DREAM-20190326%3Ffbclid%3DIwAR1deeMy_-M5QfymZvExhDu1BqDeEbX1O7OOowNC9F-j62EQSRBJbvQl7oM&h=AT01Fglj-BIvRkzXB0KXsv66UZSJxrH8T0LP_7B6kegqtfx0SF3QkDI2gE1pZzqJ3OGosuWrragI89Vm-DlyljiBm76vJFz0g1fJW0Io33Hr0JkJWqMV6t5ZcTjcGL33hIhYvA`,
id: `3`
},
{
title: 'She Kills Monsters Opens at Out of Box Theatre',
date: 'July 10, 2017',
content: 'Broadway World Atlanta announces She Kills Monsters',
link: `https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.broadwayworld.com%2Fatlanta%2Fregional%2FShe-Kills-Monsters-199998%2Fcast%3Ffbclid%3DIwAR0jT7IOIMK-bJ0bu-Q-niInVsGAfXi-ehtXDtaDYBKoxRueE4aSDDKbInk&h=AT01Fglj-BIvRkzXB0KXsv66UZSJxrH8T0LP_7B6kegqtfx0SF3QkDI2gE1pZzqJ3OGosuWrragI89Vm-DlyljiBm76vJFz0g1fJW0Io33Hr0JkJWqMV6t5ZcTjcGL33hIhYvA`,
id: `2`
},
{
title: 'Nebraska Theatre Caravan to present ‘A Christmas Carol’ at Ruth Eckerd Hall',
date: 'December 18, 2018',
content: 'Tampa Bay Newspapers announces A Christmas Carol',
link: `https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.tbnweekly.com%2Fdiversions%2Farticle_2f1ac4ea-feb9-11e8-85c8-abc5084a7356.html%3Ffbclid%3DIwAR2O0rWZB3B4e3ONA6UxSuWDiM_TfQQB-jdXPExy-qn8Byr6iTM7uaDbSZU&h=AT01Fglj-BIvRkzXB0KXsv66UZSJxrH8T0LP_7B6kegqtfx0SF3QkDI2gE1pZzqJ3OGosuWrragI89Vm-DlyljiBm76vJFz0g1fJW0Io33Hr0JkJWqMV6t5ZcTjcGL33hIhYvA`,
id: `1`
}

];

const News = () => {
	return (
		<div className="ui container">
			<div className="ui segment">
				<MediaItem items={items} />
			</div>
		</div>
	);
};

export default News;