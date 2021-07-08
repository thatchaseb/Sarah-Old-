import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";

import News0 from '../media/News6.jpg';
import News1 from '../media/News1.jpg';
import News2 from '../media/News2.jpg';
import News3 from '../media/News3.jpg';
import News4 from '../media/News4.jpg';
import News5 from '../media/News5.jpg';
import News6 from '../media/News6.jpg';
import News7 from '../media/News7.jpg';
import News8 from '../media/News8.jpg';
import News9 from '../media/News9.jpg';
import News10 from '../media/News10.jpg';
import News11 from '../media/News1.jpg';
import News12 from '../media/News2.jpg';
import News13 from '../media/News3.jpg';
import News14 from '../media/News4.jpg';
import News15 from '../media/News5.jpg';
import News16 from '../media/News6.jpg';
import News17 from '../media/News7.jpg';
import News18 from '../media/News8.jpg';
import News19 from '../media/News9.jpg';
import News20 from '../media/News6.jpg';
import News21 from '../media/News1.jpg';
import News22 from '../media/News2.jpg';
import News23 from '../media/News3.jpg';
import News24 from '../media/News4.jpg';
import News25 from '../media/News5.jpg';
import News26 from '../media/News6.jpg';
import News27 from '../media/News7.jpg';
import News28 from '../media/News8.jpg';
import News29 from '../media/News9.jpg';
import News30 from '../media/News6.jpg';
import News31 from '../media/News1.jpg';
import News32 from '../media/News2.jpg';
import News33 from '../media/News3.jpg';
import News34 from '../media/News4.jpg';
import News35 from '../media/News5.jpg';
import News36 from '../media/News6.jpg';
import News37 from '../media/News7.jpg';
import News38 from '../media/News8.jpg';
import News39 from '../media/News9.jpg';

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
		39: `${News39}`,
			
	}
    
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	startingItems:0,
      items: 0,
      hasMoreItems: true,
      threshold: ((window.innerWidth / 4) - 5),
      zoomOpen: false,
      activeIndex: 0,
      imageLandscape: true,
      imageWidth: 10,
      imageHeight: 10,
      height: window.innerHeight,
      width: window.innerWidth,
    };
  }

  handleImageClick = (image) => {
    this.setState({ activeIndex: image.target.id });
    this.setState({ zoomOpen: true });
    this.setState({ imageWidth: image.target.naturalWidth});
    this.setState({ imageHeight: image.target.naturalHeight});
    window.addEventListener('scroll', this.noScroll);
    if (image.target.naturalHeight >= image.target.naturalWidth) {
      this.setState({ imageLandscape: false })
    } else {
      this.setState({ imageLandscape: true })
    }
    console.log(image.target.naturalHeight);
    console.log(this.state.activeIndex);
    console.log(this.state.imageLandscape);
    console.log(window)
    };

  handleXClick = () => {
    console.log("Hello")
    this.setState({ zoomOpen: false });
    window.removeEventListener('scroll', this.noScroll);
  };

  noScroll = () => {
    console.log(window)
    //window.scrollTo(0, 0);
  }

  handleLeftClick = () => {
    if (parseInt(this.state.activeIndex) > 0) {
      this.setState({ activeIndex: parseInt(this.state.activeIndex) - 1});
    } else { console.log(`I'm broken`)}
    return false;
  };

  handleRightClick = () => {
    this.setState({ activeIndex: parseInt(this.state.activeIndex) + 1});
  };

  showItems() {
    var items = [];
    var w = ((window.innerWidth / 4) - 25);
    
    

		for (var i = 0; i < this.state.items; i++) {

      if (i < 0) {
				items.push(
          <img 
            style={{
              width: `${w}px`, /* width of container */
              height: `${w}px` /* height of container */
              
            }}
            onClick={this.handleImageClick.bind()}
            //Add in Hover Text and image diming 
            className="galleryPic"
            src={allNewsPics[i]} 
            alt="News Image" 
            id={i}
          />
        );
			} else {
      items.push(
      	<img 
    			style={{
     				width: `${w}px`, /* width of container */
   					height: `${w}px`, /* height of container */
   					animation: "fadeIn ease 1s"
     			}} 
          onClick={this.handleImageClick.bind()}
          
          //Add in Hover Text and image diming 
          className="galleryPic"
     			src={allNewsPics[i]} 
     			alt="News Image"
          id={i} 
      	/>
      );
      }
    }
    return items;
  }
    
  loadMore() {
    if(this.state.items===40){
      this.setState({ hasMoreItems: false});
    }else{
      setTimeout(() => {
        this.setState({ items: this.state.items + 1});
      }, 300);
    }       
  }
    
  render() {


    return (
      <div>
        <div className="cover" style={{
            display: `${this.state.zoomOpen ? 'block' : 'none'}`
          }}>
            <img 
              className="ui massive centered image imageCenter"
              
              src={allNewsPics[this.state.activeIndex]} 
              alt="popup"
              />

            <i  
              className="big times circle outline icon closeButton navigationButton" 
              onClick={this.handleXClick.bind()}
            ></i>
           
            <i 
              className="big chevron circle left icon navLeft navigationButton" 
              onClick={this.handleLeftClick.bind()}
              style={{ display: `${this.state.activeIndex === 0 ? 'none' : 'block'}`}}
            ></i>

            <i 
              className="big chevron circle right icon navRight navigationButton"
              onClick={this.handleRightClick.bind()}
            ></i>            
          
        </div>
        <div>
          <InfiniteScroll
            loadMore={this.loadMore.bind(this)}
            hasMore={this.state.hasMoreItems}
            loader={<div></div>}
            useWindow={true}
            threshold={this.state.threshold}
          >

            {this.showItems()}{" "}
          </InfiniteScroll>{" "}
        </div>
      </div>
    );
  }
}
    
export default Gallery;


