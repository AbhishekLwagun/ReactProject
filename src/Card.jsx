import  React from 'react';


function Card(props) {
    return (
       < >
        <div className="cards"  >
               <div className="card">
                      <img src={props.imgfrm}  alt="movie image"className="imgc"/>
                          <div className="card-info">
                                   <span className="card-catogory"> {props.title}</span>
                                                   <h3 className="card-title">{props.mname}</h3>
                                                   <a href={props.link}  target="_blank">
                                    <button > WATCH NOW</button>
                                    </a>
                       </div>
               </div>
        </div>
        </>
    );
}

export default Card;