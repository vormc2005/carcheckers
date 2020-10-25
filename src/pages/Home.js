import React from 'react'
import Layout from '../core/Layout'
import Parallax from '../core/Parallax'

function Home() {

    return (
       <Layout title ='Home' description='This is your home page' className='container-fluid'>
           <div>Home content goes here</div>
        <Parallax image1 = './images/camaro.jpg' image2='./images/mustang.jpg'></Parallax>
       </Layout>
    )
}

export default Home
