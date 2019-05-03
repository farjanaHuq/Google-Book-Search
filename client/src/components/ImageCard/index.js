import React, { Component } from 'react';

class ImageCard extends Component {

   render() {
      return (
         <div>
            <img          
               thumbnail={this.props.thumbnail}
               alt=""
               class="image-card"
               width="220" height="200"
            />
         </div>
      );
   }
}

export default ImageCard;