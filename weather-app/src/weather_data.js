import React, {useState} from 'react';
const api={
    key:"724c7c8448fa8cab73c4c8ec689bd3ca",
    base:"https://api.openweathermap.org/data/2.5/"
  }
  


  const datebuilder=(d)=>{
      let months=["January","february","March","April","May","June","July","August","September","October","November","December"];
      console.log(d);
      let days=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
      let day=days[d.getDay()];
      let date=d.getDate();
      let month=months[d.getMonth()];
      let year=d.getFullYear();

      return <>{day} {date} {month} {year}</>;
  }
export const Weather_data = () => {
    const [querysearch,setQuery]=useState('');
    const [weather,setweather]=useState({});
    
    const search=e=>{
        if(e.key==="Enter"){
            fetch((api.base)+"weather?q="+querysearch+"&units=metric&APPID="+api.key)
            .then(res=>res.json())
            .then(result=>
                {setweather(result);
                setQuery('');
                console.log(result);
            })
        }
    }
  return <div className={typeof weather.main !="undefined"?((weather.main.temp>16)? 'app warm' :'app'):'app'}>
     <main>
    <div className='search-box'>
        <input type="text"
        className='search-bar'
        placeholder='search....'
        onKeyPress={search}
        onChange={e=>setQuery(e.target.value)}
        value={querysearch}/>
        </div>
      {(typeof weather.main !="undefined")?(<div>  <div className='location-box'>
            <div className='location'>{weather.name} ,{weather.sys.country}</div>
            <div className='date'>{datebuilder(new Date())}</div>
        </div>
        <div className='weather-box'>
            <div className='temp'>{Math.round(weather.main.temp)}°C</div>
            <div className='weather'>{weather.weather[0].description}</div>
        </div>
        </div>):('')}
</main>
  </div>;
};
