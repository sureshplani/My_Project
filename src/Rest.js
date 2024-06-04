import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import fit from './fit'
import './rest.css';

function Rest() {
     const fitdata = fit
     const {id,indexid} = useParams()
     const workouts = fitdata.find(data => data.id.toString() === id )

        const navigate = useNavigate();
        let timer = 0;
        const [timeLeft, setTimeLeft] = useState(10);
        
        const startTime = () => {
          setTimeout(() => {
            if (timeLeft <= 0) {
                 navigate(`/workoutpage/${workouts.id}?indexid=${Number(indexid) +1}`)
                 clearTimeout(timer);
            }
            setTimeLeft(timeLeft - 1);
          }, 1000);
        }

        useEffect(() => {
          startTime();
          return () => clearTimeout(timer);
        })
        
        return (
          <div className='rest-container'>

            <img
              className='rest-img'
             src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png"
              alt='img'
            />
      
            <h2
              style={{
                fontSize: 30,
                fontWeight: "900",
                marginTop: 50,
                textAlign: "center",
              }}
            >
              TAKE A BREAK!
            </h2>
      
            <h1
              style={{
                fontSize: 40,
                fontWeight: "800",
                marginTop: 50,
                textAlign: "center",
              }}
            >
              {timeLeft}
            </h1>
          </div>
        );
      };
  


export default Rest