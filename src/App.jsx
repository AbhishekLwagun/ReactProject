import React from 'react';
import Mdata from './Mdata.jsx';
import Card from './Card';

const App  = () => (
   < >
   <h1  >LIST OF TOP FIVE LOVESTORY MOVIES</h1>
   {Mdata.map((val) =>{
         return(
           <Card
           key={val.id}
           mname={val.mname}
          imgfrm={val.imgfrm}
           title={val.title}
           link={val.link}/>
            );
                     })}
   </>
);

export default App ;
