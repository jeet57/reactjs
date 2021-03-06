import React from 'react'
// import img3 from '../../../images/properties-9-2-1024x373.jpg'
import img4 from '../../../images/properties-9-2-1024x373.jpg'

export default class Homeproperty extends React.Component{

	render(){
		return(
            <div className="tz-property-content cbp-item  slider ">
                <div className="tz-property-thum cbp-caption">
                    <div className="cbp-caption-defaultWrap">
	                    <figure> 
		                     <img src={this.props.src} alt="Assets Watch" width="900" height="328" />
		                     <figcaption className="for-sale for-rent"> {this.props.Status} </figcaption>
	                    </figure>
                    </div>
                    <div className="cbp-caption-activeWrap">
                    	<div className="cbp-l-caption-alignCenter">
                            <div className="cbp-l-caption-body"> 
	                            <a href="" className="cbp-l-caption-buttonLeft" rel="nofollow"><i className="icon-link"></i> </a> 
	                            <a href={img4} className="cbp-lightbox cbp-l-caption-buttonRight" data-title="Stylish Apartment"> <i className="icon-plus-circle"></i> </a> 
                        	</div>
                    	</div>
                	</div>
            	</div>
	            <div className="tz-property-des">
	                <h5><a href="">{this.props.Title}</a></h5>
	                <div className="tz-property-price"> ${this.props.total_amount}&nbsp;<span>/ Month</span> </div>
	                <div className="tz-property-excerpt"> {this.props.description} </div>
	            </div>
            </div>
			);
	}
}