import React from 'react';


const style = {
  about:`text-white m-2 max-w-md absolute left-24 top-44`,
  h1:`text-white absolute m-2 left-24 top-32`,
  h2:`text-white absolute m-2 left-24 top-[500px]`
}


export const AboutMe = () => {
  return (
  <>
  <h1 className={style.h1}>Who I am</h1>

      <div className={style.about}>Hi there, Welcome to my website. My passion for photography started to grow in my late teens as a hobby.
      I actually saved up for my first dslr camera from Canon; the Rebel t5 and have taken so many wonderful pictures with that camera.
      Now in my late 20s my photography has evolved over the years into a collection of photos I am very proud of.
      I decided to turn a passion into a career. I specialized in landscape and nature photography, but now I do weddings, portraits, 
      baby pics, family pics, product, and more. Browse around my gallery and if you like what you see, book an appointment with me
      to start making memories today.
      </div>
    <div className={style.h2}>
    <h2 >My Equipment</h2>
    <ul>
      <li>
        Camera -
        Sony A7RIII
      </li>
      <li>
        Lens - 
        Sigma 28-70mm<br></br>
        Sigma 85mm
      </li>
      <li>
        
      </li>
      <li>
        
      </li>
    </ul>
    </div>
  </>
   
  )
}
