import React, {Fragment} from 'react'

const WhyUs = () => {
    const brokenSienna = './images/basienna.jpg'
    const saleSign = './images/Group_1.jpg'

    


    return (
        <Fragment>
        <div style={{textAlign:"center", marginBottom:"10vh", marginTop:"5vh"}}>

            <h1>Who we are and why are consider inspection by CARCHECKERS</h1>
        </div>
       <div className="container-fluid">
            <div className="row">

        <div className=" col-xs-6">
           
             <div className="salesSign" style={{textAlign:"center", marginBottom:"10vh"}}>
             <h4>Advertisement</h4>
                 <img  src={saleSign} alt="salesSign"/>
             </div>
            <div>
                 <img id="siennaPic" src={brokenSienna} alt="brokensienna"/>
            </div>
             
        </div>
        <div className=" col-md-5  mt-5 ml-5 ">
            <dl>
                <li>
                     Many accidents are not reported to Carfax or AutoCheck.
                 <p className="hide-paragraph"> We check for paint work, and any visual signs of   previous body work using modern technology technology</p>

                </li>
                <li >
                      Wear and tear can suggest real mileage and how vehicle was used 
                 <p className="hide-paragraph">According to Carfax there are about 200000 cars have their odometers rolled back each year. It is an eaiest and least expensive way for a seller to charge more for the vehicle than what it is worth. It is hard to detect mileage roll-back. Though, thourough inspection of interior and compnents of the vehicle can give a better idea of real mileage of the vehicle along with third parties reports.</p> 
                </li>
                <li >
                      In some cases sellers mislead their buyers by downplaying a problem. ( ex. seller: "A/C does not blow cold because it just needs to charged.")
                 <p className="hide-paragraph"> We will check A/C by measuring temprature, and vsually inpsct for signs of leakage or fadlts.</p> 
                </li>
                <li >
                     Because we are not purchaser, we provide unbiased and independent report. 
                 <p className="hide-paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, molestiae! Voluptatem ea odio nulla repellat earum modi quod blanditiis temporibus, iste doloremque suscipit quis consectetur voluptates magnam maxime corrupti quas.</p> 
                </li>
                <li >
                     Inspection is done by professional with over 10 years of experience in purchasing and selling vehicles

                 <p className="hide-paragraph"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae consequuntur inventore rem temporibus alias dolorem debitis? Ipsam doloribus voluptatibus eligendi tempore aspernatur minus a. Perspiciatis minima distinctio facilis assumenda iusto?</p> 
                </li>
                <li>
                     We use proven technologies and techniques to check vehicle of your choice.


                 <p className="hide-paragraph"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae consequuntur inventore rem temporibus alias dolorem debitis? Ipsam doloribus voluptatibus eligendi tempore aspernatur minus a. Perspiciatis minima distinctio facilis assumenda iusto?</p> 
                </li>
                <li >
                     We provide you with report of the condition of the vehicle, so you can make informative decision

                 <p className="hide-paragraph"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae consequuntur inventore rem temporibus alias dolorem debitis? Ipsam doloribus voluptatibus eligendi tempore aspernatur minus a. Perspiciatis minima distinctio facilis assumenda iusto?</p> 
                </li>
            </dl>
        </div>
           


    </div>
    </div>
    </Fragment>
    )
}

export default WhyUs
