import React from 'react'
import AnyaForger from "./resources/AnyaForger2.png";
import AnyaForgerEoCachorro from "./resources/AnyaForgerEoCachorro.png";



const Post = () => {
  return (
    <div className='feedPosts'>
        <div className='feedPostsSingle'>

                <div className='feedPosts__profile'>
                    <img src={AnyaForger}/>
                    <h3>Anya Forger <br /><span>2:00</span></h3>
                </div>

                <div className='feedPosts__content'>                    
                    <p> Anya Forger uma das protagosnista de spy x family, além disso,
                    possui o poder de ler mentes e o seu cachorro que pode prever o futuro.</p>
                    <img src={AnyaForgerEoCachorro}/>
                </div>

        </div>
    </div>
  )
}

export default Post