import React from 'react'
import './main.css'
import farm1 from '../../Assets/Image/farm1.jpg'
import farm2 from '../../Assets/Image/farm2.jpg'
import farm3 from '../../Assets/Image/farm3.jpg'
import farm4 from '../../Assets/Image/farm4.jpg'
import {BiCurrentLocation} from 'react-icons/bi'
const Data = [
  { 
    id:1,
    imgSrc:farm1,
    destTitle: 'Farm 1',
    location: 'Viet Nam - Bac Ninh',
    grade: 'CUL TURAL RELAX',
    quantity: '50',
    description: 'good farm'
  },
  { 
    id:2,
    imgSrc:farm2,
    destTitle: 'Farm 2',
    location: 'Viet Nam - Ninh Binh',
    grade: 'CUL TURAL RELAX',
    quantity: '51',
    description: 'good farm'
  },
  { 
    id:3,
    imgSrc:farm3,
    destTitle: 'Farm 3',
    location: 'Viet Nam - Ha Tinh',
    grade: 'CUL TURAL RELAX',
    quantity: '52',
    description: 'good farm'
  },
  { 
    id:4,
    imgSrc:farm4,
    destTitle: 'Farm 4',
    location: 'Viet Nam - Thanh Hoa',
    grade: 'CUL TURAL RELAX',
    quantity: '53',
    description: 'good farm'
  },
]

const Main = () => {
  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 className="title">
          List Farm
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id,imgSrc,destTitle,location,grade,
            quantity,description})=>{
              return(
                <div key={id} className="singleDestination">
                  {/*Here it will return single id from the map array*/}

                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                      <BiCurrentLocation className='icon'/>
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>

                      <div className="quantity">
                        <h5>{quantity}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className='btn flex'>
                      DETAILS 
                    </button>
                  </div>
                </div>
              )
          })
        }
      </div>
    </section>
  )
}

export default Main