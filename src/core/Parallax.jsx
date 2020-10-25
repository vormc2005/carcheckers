import React, {useEffect} from 'react'
import M from 'materialize-css'

function Parallax({image1, image2}) {

    useEffect(() => {
        let elements =  document.querySelectorAll('.parallax');
      M.Parallax.init(elements);
    }, [])

    return (
        <div className="container-fluid">

       <div className='parallax-container' style={{height: "80vh"}}>
           
           <div className="parallax">
               <img src={image1} alt="camaro"style={{width:"100%", height:"140vh"}}/>
           </div>
           <div className="section white">
               <h2>Crashed Car goes here</h2>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quasi aspernatur quod? Distinctio at fugiat facilis, fuga facere praesentium earum repudiandae maiores esse nam tempora qui quae ratione saepe porro.</p>
           </div>
        </div>
        <div className='parallax-container' style={{height: "80vh"}}>
            
           <div className="parallax">
               <img src={image2} alt="mustang" style={{width:"100%", height:"140vh"}}/>
           </div>
           <div className="section white">
               <h2>My amazin paralax 2</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error animi harum ad vero sit, eligendi, dicta suscipit, adipisci mollitia ratione quae! Officia consequuntur non, corporis consequatur molestiae sequi dolore?</p>
           </div>
        </div>
        <div className='parallax-container' style={{height: "80vh"}}>
           <div className="parallax">
               <img src="./images/camaro.jpg" alt="camaro1" style={{width:"100%", height:"140vh"}}/>
           </div>
           <div className="section white">
               <h2>My amazin paralax 2</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error animi harum ad vero sit, eligendi, dicta suscipit, adipisci mollitia ratione quae! Officia consequuntur non, corporis consequatur molestiae sequi dolore?</p>
           </div>
        </div>
        <div className="footeer" style={{height:"300vh"}}></div>
       </div>

    
    )
}

export default Parallax
