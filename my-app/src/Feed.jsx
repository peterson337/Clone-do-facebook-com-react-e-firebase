import React from 'react';
import AnyaForger from "./resources/AnyaForger2.png";
import { AiFillVideoCamera, AiFillFileImage, AiOutlineMeh } from "react-icons/ai";

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feedForm'>
        <img src={AnyaForger}/>
        <input type="text" placeholder='No que você está pensando?'/>
      </div>

      <div className='feedIcons'>
        <div className='iconsSingle'>
          <AiFillVideoCamera/>
          <span>Vídeo ao vivo</span>
        </div>

        <div className='iconsSingle'>
          <AiFillFileImage style={{color: '#45bd62'}}/> 
          <span>Foto/Vídeo</span>
        </div>

        <div className='iconsSingle'>
          <AiOutlineMeh style={{color: '#e1e102'}}/>
          <span>Como você está se sentindo?</span>
        </div>
      </div>
    </div>
  );
};

export default Feed;
