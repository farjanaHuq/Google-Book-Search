import React, { Component } from 'react';

class ImageCard extends Component {

   render() {
      console.log(this.props.thumbnail);
      return (
         <div>
            <img          
               src={this.props.thumbnail}
               alt=""
               class="image-card"
               width="220" height="200"
            />
         </div>
      );
   }
}

export default ImageCard;