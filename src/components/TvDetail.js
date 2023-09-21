import React from 'react';
import classes from './TvDetail.module.css';
import { useSelector } from 'react-redux';
import StarIcon from '@mui/icons-material/Star';

const TvDetail = (props) => {
  const detail = useSelector(state=> state.detail);
  const data = useSelector(state => state.detail.item);
  const genre = useSelector(state=>state.detail.genre);
  const audioNew = useSelector(state=>state.detail.audio);
  const firstDateStr = data["first_air_date"];
  const runtime = useSelector(state => state.detail.runtime);
  const overview = useSelector(state => state.detail.overview);
  const lastAirDate = data['last_air_date']
  const firstDate = new Date(firstDateStr);
  const lastDate = new Date(lastAirDate);
  const rate =parseInt(data["vote_average"]);
  const getMonthName = (month)=>{
    const monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return monthArr[month-1];
  }


  return (
    <div className={classes.main} >
        <h1>Details about : {data.name}</h1>
        <div className={classes.singlePage} >
            <img src={`https://image.tmdb.org/t/p/w500/${data["poster_path"]}`} alt={`${data.title} image`} />
            <div className={classes.data}>
                <span className={classes.topHeading}>
                    <h1>{data.name}</h1> 
                    {<p>({firstDate.getFullYear()})</p>}
                </span>
                <span className={classes.genre}>
                    <p>|</p>
                    {genre.length!==0 && genre.map((item)=>(<p key={item.id}>{item.name},</p>))}
                    {genre.length===0 && <p>NaN</p>}
                    <p>|</p>
                    <p>{`${getMonthName(firstDate.getMonth())} ${firstDate.getDate()} , ${firstDate.getFullYear()}`}</p>
                </span>
                <span className={classes.rating}>
                  <StarIcon className={classes.star}/>
                  <div className={classes.rate}>
                      <span >
                          <strong>Rating: </strong>{rate}/10 from {data["vote_count"]}  users.
                      </span>
                      <div>
                         {overview && data["overview"]}
                         {!overview && <p>Overview Not Available</p> }
                      </div>
                  </div>
                </span>
                <span className={classes.audio}>
                  <div className={classes.status}>
                    <strong>Audio : </strong>
                    {audioNew.length!==0 && audioNew.map((item)=>(
                      <p key={item["iso_639_1"]}>{item.name},</p>
                      ))} 
                     {audioNew.length===0 && <p>NaN</p>} 
                  </div>
                    <div className={classes.status}><strong>Type : </strong><p>{detail.media}</p></div>
                    <div className={classes.status}><strong>Season's wise Episode : </strong>{detail.season.map((item)=><p key={item.id}>{item["episode_count"]},</p>)}</div>
                    <div className={classes.status}><strong> Status :   </strong><p>{data["status"]}</p></div>
                    {runtime.length!==0 && <div className={classes.status}><strong>Runtime : </strong><p>{runtime[0]}mins</p></div>}
                    {runtime.length ===0 && <div className={classes.status}><strong>Episode Runtime : </strong><p>NaN</p></div>}
                    <div className={classes.status}><strong>Seasons : </strong><p>{data["number_of_seasons"]}</p></div>
                    <div className={classes.status}><strong>Total Episode : </strong><p>{data["number_of_episodes"]}</p></div>
                    <div className={classes.status}><strong>Start Date : </strong><p>{`${getMonthName(firstDate.getMonth())} ${firstDate.getDate()} , ${firstDate.getFullYear()}`}</p></div>
                    <div className={classes.status}><strong>End date : </strong><p>{`${getMonthName(lastDate.getMonth())} ${lastDate.getDate()} , ${lastDate.getFullYear()}`}</p></div>
                    <div className={classes.status}><strong>id : </strong><p>{data["id"]}</p></div>
                </span>
                  
            </div>
        </div>
    </div>
  )
}

export default TvDetail;