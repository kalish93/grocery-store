import React from 'react'
import "./About.css"
import FrontImage from './FrontImage'
import storeShelf from './images/store-shelf.jfif'

function About() {
  return (
    <div className='about'>
        <FrontImage src={storeShelf} headline='Our Store' moto='We are the place where you find organic foods.'/>
        <div className='about-us' >
        <h1>About Us</h1>
        <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus corporis commodi officiis explicabo saepe. Repellendus, similique aliquam error omnis nihil tenetur officia nisi nostrum voluptate sequi corporis nulla ullam debitis?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus corporis commodi officiis explicabo saepe. Repellendus, similique aliquam error omnis nihil tenetur officia nisi nostrum voluptate sequi corporis nulla ullam debitis?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus corporis commodi officiis explicabo saepe. Repellendus, similique aliquam error omnis nihil tenetur officia nisi nostrum voluptate sequi corporis nulla ullam debitis?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus corporis commodi officiis explicabo saepe. Repellendus, similique aliquam error omnis nihil tenetur officia nisi nostrum voluptate sequi corporis nulla ullam debitis?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus corporis commodi officiis explicabo saepe. Repellendus, similique aliquam error omnis nihil tenetur officia nisi nostrum voluptate sequi corporis nulla ullam debitis?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus corporis commodi officiis explicabo saepe. Repellendus, similique aliquam error omnis nihil tenetur officia nisi nostrum voluptate sequi corporis nulla ullam debitis?</p>

        </div>
      </div>
        
  )
}

export default About