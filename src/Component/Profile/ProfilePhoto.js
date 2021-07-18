import React from 'react';
import imgSrc from '../../image.jpg';

function profilephoto(){
  return  (
      <div>
          <img src={imgSrc} width={400}height={400} alt="profilephoto"/>

      </div>
  );
}
export default profilephoto;