import React from 'react'

import ProppertSearchForm from './propertSearch'
// import $ from 'jquery'
import PropertItem from './propertyItems'

import API_URL from '../../../app-config';

export default class Property extends React.Component{
  constructor(props) {
    super(props);

    this.state={
      properties:[],
      owners:[]
    }
    this.updatePropertyGrid=this.updatePropertyGrid.bind(this)    
  }
  updatePropertyGrid(property){
    var owners=[];
    for(var i=0;i<property.length;i++)
    for(var j=0;j<property[i].owner_details.length;j++)
    owners.push(property[i].owner_details[j])
    this.setState({owners:owners,properties:property})
  }
  componentDidMount(){
    fetch(`${API_URL}assetsapi/property/`)
    .then((response)=> {        
      response.json().then((data)=>{
        var owners=[];
        for(var i=0;i<data.property.length;i++) {
          for(var j=0;j<data.property[i].owner_details.length;j++) {
            owners.push(data.property[i].owner_details[j])
          }
        }
        this.setState({ owners: owners, properties:data.property })

        // var $=window.$;
        // setTimeout(function(){
        //   console.log('yayay')
        //   var jQuery=window.$; 
        //   var tz_realestate_ResizeImage=function(obj) {
        //     'use strict';
        //     var widthStage;
        //     var heightStage;
        //     var widthImage;
        //     var heightImage;
        //     var resizeImage=function(widthImage,heightImage,widthStage,heightStage){
        //       var escImageX=widthStage/widthImage;
        //       var escImageY=heightStage/heightImage;
        //       var escalaImage=(escImageX>escImageY)?escImageX:escImageY;
        //       var widthV=widthImage*escalaImage;
        //       var heightV=heightImage*escalaImage;
        //       var posImageY=0;
        //       var posImageX=0;
        //       if(heightV>heightStage){
        //         posImageY=(heightStage-heightV)/2;
        //       }
        //       if(widthV>widthStage){
        //         posImageX=(widthStage-widthV)/2;
        //       }
        //       return{top:posImageY,left:posImageX,width:widthV,height:heightV};
        //     };
        //     obj.each(function(i,el) {
        //       heightStage=jQuery(this).height();
        //       widthStage=jQuery(this).width();
        //       var img_url=jQuery(this).find('img').attr('src');
        //       var image=new Image();
        //       image.src=img_url;
        //       widthImage=image.naturalWidth;
        //       heightImage=image.naturalHeight;
        //       var tzimg=new resizeImage(widthImage,heightImage,widthStage,heightStage);
        //       jQuery(this).find('img').css({top:tzimg.top,left:tzimg.left,width:tzimg.width,height:tzimg.height});
        //     });
        //   } 

        //   $('#tzloadding').remove();
        //   var gapHorizontal,gapVertical;
        //   if(jQuery(window).width() > 993 ) {
        //     gapHorizontal = 0;
        //     gapVertical = 26;
        //   } else {
        //     gapHorizontal = 0;
        //     gapVertical = 20;
        //   }
        //   if(document.getElementById('js-grid-meet-the-team').getAttribute('class').indexOf('cbp')==-1) {
        //     jQuery('#js-grid-meet-the-team').cubeportfolio('destroy');
        //   }
        //   if( jQuery('#js-grid-meet-the-team').length) {
        //     jQuery('#js-grid-meet-the-team').cubeportfolio({
        //       defaultFilter: '*',
        //       filters: '#js-filters-meet-the-team',
        //       layoutMode: 'grid',
        //       animationType: 'rotateRoom',
        //       gapHorizontal: gapHorizontal,
        //       gapVertical: gapVertical,
        //       gridAdjustment: 'responsive',
        //       mediaQueries: [{
        //         width: 1500,
        //         cols: 5
        //       }, {
        //         width: 993,
        //         cols: 3
        //       }, {
        //         width: 768,
        //         cols: 3
        //       }, {
        //         width: 460,
        //         cols: 2
        //       }, {
        //         width: 0,
        //         cols: 1
        //       }],
        //         caption: 'fadeIn',
        //         displayType: 'lazyLoading',
        //         displayTypeSpeed: 100
        //     });
        //     tz_realestate_ResizeImage(jQuery('.tz-property-thum'));
        //   }
        // }, 600);
      })
    });

    this.handleSript
  }


  handleSript(){
    var $=window.$;
    $('html, body').animate({scrollTop: 0}, 500); 
  }
  render(){ 
    return(
      <div>
        <div className="tz-Breadcrumb">
    <div className="tzOverlayBreadcrumb">
      <div className="container">
        <h1> Archives </h1>
        <div className="tz-breadcrumb-navxt"> 
          {/*<!--Breadcrumbs--> */}
        </div>
      </div>
      {/*<!-- end class container --> */}
    </div>
  </div>
  {/*<!-- end class tzbreadcrumb -->*/}
  <div className="tz-post tz-property-all">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-md-8 col-sm-8 col-xs-12 tz-has-sidebar">
          <div className="tz-list-grid">
            <div className="tz-content-ajax">
             
              <div className="tz-property-head clearfix">
                  <div id="js-filters-meet-the-team" className="cbp-l-filters-button cbp-l-filters-left" >
                    <div data-filter="*" className="cbp-filter-item"> Show All </div>
                    <div data-filter=".for-rent" className="cbp-filter-item"> For Rent
                      <div className="cbp-filter-counter"></div>
                    </div>
                    <div data-filter=".for-sale" className="cbp-filter-item"> For Sale
                      <div className="cbp-filter-counter"></div>
                    </div>
                  </div>
              </div>

              <div id="" className="cbp cbp-l-grid-team grid" >
              {
                this.state.properties.map(property=>(
                  <PropertItem ownerDetails={this.state.owners} property={property} total_amount={property.total_amount}  Title={property.title} description={property.description} square_feet={property.square_feet} src={`${API_URL}assetsadmin/`+property.img_path[0].img_path} PropertyStatus={property.property_status} />
                ))
              }              </div>
              <div class='wp-pagenavi'> <span class='pages'>Page 1 of 4</span><span className='current'>1</span><a className="page larger" title="Page 2" href="#">2</a><a className="page larger" title="Page 3" href="#">3</a><a className="page larger" title="Page 4" href="#">4</a><a className="nextpostslink" rel="next" href="#"><i className="icon-arrow-right"></i></a> </div>
            </div>
            <div className="auto-loading"> <img src="images/loading_blue_32x32.gif" width="32" height="32" /> </div>
          </div>
          {/*<!--END .navigation-links-->*/} 
        </div>
        <ProppertSearchForm updatePropertyGrid={this.updatePropertyGrid}  ownerDetails={this.state.owners}/>





      </div>
    </div>
  </div>
      </div>);
  }
}