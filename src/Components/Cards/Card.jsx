import React from 'react'
import { Link, Outlet } from "react-router-dom";
import "./Card.css"
function Card({ title, imageSource, descripcion, nombre_boton, enlace}) {

    return (
        <div className='card text-center'>
            <div className='Logo'>
                <img src={imageSource} alt="" />
            </div>

            <div className='card-body'>
                <h4 className='card-title'>{title}</h4>
                <p>{descripcion}</p>
                <Outlet/>
                <Link to={enlace} className='btn btn-outline-info'>{nombre_boton}</Link>
                
            </div>
        </div>
    )
}

export default Card