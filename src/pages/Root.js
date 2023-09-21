import React from 'react';
import Navigation from '../components/Navigation';
import { Outlet } from 'react-router-dom';
import {motion} from 'framer-motion';


const Root = () => {
  return (
    <div>
        <Navigation/>
        <motion.main
         variants={{hidden:{opacity:0,y:75},visible:{opacity:1,y:0}}}
         initial='hidden'
         animate='visible'
         transition={{duration:0.5,delay:0.25}} 
        >
          <Outlet/>
        </motion.main>
    </div>
  )
}

export default Root;