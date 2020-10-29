import React, {useEffect} from 'react'
import M from 'materialize-css'

function Parallax({image1, image2, header1, header2}) {

    useEffect(() => {
        let elements =  document.querySelectorAll('.parallax');
      M.Parallax.init(elements);
    }, [])

    return (
        <div className="container">

       <div className='parallax-container' style={{height: "80vh"}}>
       <div className="section white">
           <h2>{header1}</h2>
            <ul>
                <li>According to Forbes, about 16% of vehicle that are offered for sale were in accident and 35%-50% of cars are fleet vehicles.</li>
                <li>Vehicles that have been previously fixed often have long-lasting problems, and may not be as safe as the same veicle that never been in accident</li>
                <li>Have you ever thought about if the vehicle still has airbags after it was fixed? Probaly not! Due to high cost of airbag installation there are many cases when seller elected to not install airbags, and sold vehicle as-is without disclosure of missing airbags.</li>
                <li>Quality of the repair may not be as good as it seems to be, and vehicle may have future rust or paint problems.</li>
                <li>Frequently, bodyshops use less expensive lower quality aftermarket parts when they are fixing cars.</li>    
            </ul>
        </div>
           {/* <div className="parallax mt-5"> */}
               <img src={image1} alt="camaro"style={{width:"100%", height:"40vh"}}/>
           {/* </div> */}
           <div className="section white">
    <h2>{header1}</h2>
    <ul>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusamus ipsam voluptate fugiat odio rerum! Quibusdam accusantium totam deserunt aliquid sit laudantium in autem blanditiis distinctio, maiores esse tempora nemo.</li>
    </ul>
           </div>
        </div>
        <div className='parallax-container mt-5 mb-5' style={{height: "80vh"}}>
            
           <div className="parallax">
               <img src={image2} alt="mustang" style={{width:"100%", height:"140vh"}}/>
           </div>
           <div className="section white ">
               <h2>{header2}</h2>
               {/* <p>{text2}</p> */}
           </div>
        </div>
        <div className='parallax-container mt-5 mb-5' style={{height: "80vh"}}>
        <div className="section white">
               <h2>{header2}</h2>
               {/* <p>{text2}</p> */}
           </div>
        </div>
        {/* <div className="footeer" style={{height:"300vh"}}></div> */}
       </div>

    
    )
}

export default Parallax
