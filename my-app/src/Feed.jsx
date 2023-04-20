import React from 'react'
import demonslayer from "./resources/demonslayer.png";
import { AiFillVideoCamera } from "react-icons/ai";


const Feed = () => {
  return (
    <div className='feed'>
        <div className='feedForm'>
        <img src={demonslayer}/>
        <input type="text" placeholder='No que você está pensando?'/>
        </div>
        <div className='feedIcons'>
            <div className='videoIcons'>
                <AiFillVideoCamera/>
                <span>Vídeo ao vivo</span>
            </div>
        </div>
    </div>
  )
}

export default Feed