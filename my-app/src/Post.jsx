import React from 'react'
import AnyaForger from "./resources/AnyaForger2.png";
import AnyaForgerEoCachorro from "./resources/AnyaForgerEoCachorro.png";




const Post = (props) => {
  return (
    <div className='feedPosts'>
        <div className='feedPostsSingle'>

                <div className='feedPosts__profile'>
                    <img src={AnyaForger}/>
                    <h3>{props.nome}<br /><span>{props.horario}
                    </span></h3>
                </div>

                <div className='feedPosts__content'>                    
                    <p> {props.conteudo}</p>
                    <img src={AnyaForgerEoCachorro}/>
                </div>

        </div>
    </div>
  )
}

export default Post