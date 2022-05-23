import React from 'react'
import Link from 'next/link'

import styled from 'styled-components'

const Hero = () => {
  return (
    <Section>
        <div class="col banner">
            <div class="main-title-1">Sewa & Rental Mobil Terbaik di</div>
            <div class="main-title-2">Kawasan Semarang</div>
            <div class="main-description">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</div>
            <button className="btn button-sewa" type="submit">Mulai Sewa Mobil</button>
        </div>
        
        <div class="col-auto car-container pr-0 mb-0">
            <img src="/images/bcr_car.svg" className="car-container-inner" alt="" />
        </div>
</Section>
  )
}

const Section = styled.div`
    background-color: #F1F3FF;
    max-height: 419px;
    padding-top: 50px;
    display: flex;
    flex-direction: row;
    .banner{
        justify-content: center;
        align-items: center;
        padding-left: 80px;
    }
    .main-description{
        width: 80%;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .button-sewa{
        margin-top: 20px;
        width: auto;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #5CB85F;
        color: white;
    }
    .button-sewa:hover{
        background-color: #51a754;
    }
    .main-title-1 {
        font-size: 24pt;
        font-weight: 700;
        color: black;
    }
    .main-title-2 {
        font-size: 24pt;
        font-weight: 700;
        color: black;
    }
    .car-container{
        transform: translateY(-10%);
        @media screen and (max-width: 1200px) {
            display: flex;
            align-items: end;
        }
        @media screen and (max-width: 1024px) {
            .first-section-container{
            width: 87%;
            }
            .banner{
                margin-top: 20px;
            }
            .main-description{
                width: 85%;
                font-size: 10pt;
            }
            .main-title-1, .main-title-2 {
                font-size: 20pt;
            }
            .car-container-inner{
                width: 120%;
            }
        }
        @media screen and (max-width: 767px) {
            .car-container-inner{
            width: 180%;
            display: none;
            }
            .main-title-1 {
                font-size: 16pt;
                font-weight: 700;
                color: black;
            }
            .main-title-2 {
                font-size: 16pt;
                font-weight: 700;
                color: black;
            }
            .button-sewa{
                margin-bottom: 20px;
            }
        }
        @media screen and (max-width: 425px) {
            .first-section-container{
            width: 90%;
            flex-direction: column;
            padding-top: 20px;
            }
            .banner{
                display: flex;
                flex-direction: column;
            }
            .main-description{
                width: 100%;
                font-size: 11pt;
                margin-top: 10px;
                margin-bottom: 10px;
            }
            .car-container{
                margin-top: 40px;
            }
            .car-container-inner{
                width: 120%;
                display: block;
            }
        }
    }
`

export default Hero