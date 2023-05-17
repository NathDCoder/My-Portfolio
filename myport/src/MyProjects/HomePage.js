import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import { AboutMe } from "./AboutMe.js";
import { Gallery } from "./Gallery.js";
import { Book } from "./Book.js";




const style = {
  buttons:`text-center m-2 space-x-32`,
  h1:`text-white text-xl`
}

export const HomePage = () => {
  return (
    <div>
      <h1 className={style.h1}>Acuated Clarity</h1>
      <div className={style.buttons}>
      <button><Link to="/">Home</Link></button>
      <button><Link to="/about">About Me</Link></button>
      <button><Link to="/gallery">Gallery</Link></button>
      <button><Link to="/book">Book Today</Link></button>
      </div>
    </div>
  )
}
