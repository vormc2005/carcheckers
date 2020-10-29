import React from 'react'
import Layout from '../core/Layout'
import Parallax from '../core/Parallax'


function Home() {
    const header1 = "Would you knowingly purchase vehicle that have been in accident? Would you want to know as much information about the car you are purchasing?";
    const image1 = './images/basienna.jpg'
    const image2 = './images/mustang.jpg'
    
    const header2 = "Our goal is to find out as much information about your next vehicle as posiible, so you can make right decision!"
    
    return (
       <Layout title ='Home' description='This is your home page' className='container-fluid'>
        
        <Parallax image1 = {image1} image2={image2} header1={header1} header2 = {header2} ></Parallax>
       </Layout>
    )
}

export default Home
