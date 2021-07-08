import React, { useState } from 'react';
import News0 from './media/News1.jpg';
import News1 from './media/News1.jpg';
import News2 from './media/News2.jpg';
import News3 from './media/News3.jpg';
import News4 from './media/News4.jpg';
import News5 from './media/News5.jpg';
import News6 from './media/News6.jpg';
import News7 from './media/News7.jpg';
import News8 from './media/News8.jpg';
import News9 from './media/News9.jpg';
import News10 from './media/News10.jpg';
import News11 from './media/News11.jpg';
import News12 from './media/News12.jpg';
import News13 from './media/News3.jpg';
import News14 from './media/News4.jpg';
import News15 from './media/News5.jpg';
import News16 from './media/News6.jpg';
import News17 from './media/News7.jpg';
import News18 from './media/News8.jpg';
import News19 from './media/News9.jpg';
import News20 from './media/News6.jpg';
import News21 from './media/News1.jpg';
import News22 from './media/News2.jpg';
import News23 from './media/News3.jpg';
import News24 from './media/News4.jpg';
import News25 from './media/News5.jpg';
import News26 from './media/News6.jpg';
import News27 from './media/News7.jpg';
import News28 from './media/News8.jpg';
import News29 from './media/News9.jpg';
import News30 from './media/News6.jpg';
import News31 from './media/News1.jpg';
import News32 from './media/News2.jpg';
import News33 from './media/News3.jpg';
import News34 from './media/News4.jpg';
import News35 from './media/News5.jpg';
import News36 from './media/News6.jpg';
import News37 from './media/News7.jpg';
import News38 from './media/News8.jpg';
import News39 from './media/News9.jpg';



const MediaItem = ({ items }) => {
	
	//start new
	const [activeIndex, setActiveIndex] = useState(null);
	const [Item, setItem] = useState({});

	const itemOpened = [];

	const onTitleClick = (index) => {
		setActiveIndex(index);
	};

	const onReadMoreClick = (index, itemOpened) => {
		setActiveIndex(index);

	};

	const allNewsPics = {
		0: `${News0}`,
		1: `${News1}`,
		2: `${News2}`,
		3: `${News3}`,
		4: `${News4}`,
		5: `${News5}`,
		6: `${News6}`,
		7: `${News7}`,
		8: `${News8}`,
		9: `${News9}`,
		10: `${News10}`,
		11: `${News11}`,
		12: `${News12}`,
		13: `${News13}`,
		14: `${News14}`,
		15: `${News15}`,
		16: `${News16}`,		
		17: `${News17}`,
		18: `${News18}`,
		19: `${News19}`,
		20: `${News20}`,
		21: `${News21}`,
		22: `${News22}`,
		23: `${News23}`,
		24: `${News24}`,
		25: `${News25}`,
		26: `${News26}`,		
		27: `${News27}`,
		28: `${News28}`,
		29: `${News29}`,
		30: `${News30}`,
		31: `${News31}`,
		32: `${News32}`,
		33: `${News33}`,
		34: `${News34}`,
		35: `${News35}`,
		36: `${News36}`,		
		37: `${News37}`,
		38: `${News38}`,
		39: `${News39}`

	}

	const renderedItems = items.map((item, index, itemOpened) => {



		return <React.Fragment key={item.title}> 
			<div className="item">
					<div className="ui small image">
						<img src={allNewsPics[item.id]} alt="News Image" />
					</div>			
				<div className="middle aligned content">
					<div className="header">
						{item.title} 
					</div>
					<div className="description">
						{item.date}
					</div>
					<div className="description">
						{item.content}
					</div>
					<div className="extra">
						<a className="ui right floated blue basic button" href={item.link} target="_blank">
							Read More
						</a>
					</div>
				</div>
			</div>
			<div className="ui divider"></div>
		</React.Fragment>
	});

	return <div className="ui items">
		{renderedItems}
	</div>
};

export default MediaItem;