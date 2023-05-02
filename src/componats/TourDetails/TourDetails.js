import Header from "../header/Header";
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import './TourDetails.css'
export default function TourDetails(props) {
  const { id } = useParams()

  const city = props.data.find(city => city.id === id);
  console.log(props.data)

  const [showInfo, setShowInfo] = useState(false);

  const showMore1 = () => {
    setShowInfo(!showInfo);
  }
//
  return (
    <>
    
      <Header></Header>
      <section className='infoClass'>
        {city && (
          <p>{showInfo ? city.info : `${city.info.slice(0, 240)}...`}</p>
        )}        <button className='button1' onClick={showMore1}>{showInfo ? 'See less' : 'See more'}</button>

      </section>
    </>
  )
}