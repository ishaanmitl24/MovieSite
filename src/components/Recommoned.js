import React, { useEffect } from 'react';
import classes from './Recomonded.module.css';
import MovieCard
 from './MovieCard';
import MoviePages from './MoviePages';
import {motion} from 'framer-motion';
const Recommoned = (props) => {
  const seeAll = props.seeAll;
  let specialClass = '';
  if(seeAll===true){
    specialClass = classes.visible;
  }else{
    specialClass = classes.hidden;
  }
  return (
    <motion.div  
    variants={{hidden:{opacity:0,y:75},visible:{opacity:1,y:0}}}
    initial='hidden'
    animate='visible'
    transition={{duration:0.5,delay:0.25}}   
    className={`${classes.recomon} ${specialClass} `}>
      {props.items.map((data)=>(
        <MovieCard key={data.id} id={data.id} data={data} name={data.title} />
      ))} 
      <div className={classes.moviePage}>
        <MoviePages getPage={props.getPage} page={props.page} maxPages={props.maxPages} />
      </div>
    </motion.div>
  )
}

export default Recommoned;

