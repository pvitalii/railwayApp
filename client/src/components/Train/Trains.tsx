import React from 'react'
import Train from "./Train"

const Trains = (props:any) => {
    return (
        <div>
            <div className="trains">
                {props.trains.length !== 0  ?
                    props.trains.map((t:any) => (
                        <Train train={t} seatType={props.type} date={props.date}/>
                    ))
                    :
                    <div className="no-train">Немає потягів на вибраний маршрут</div>
                }
            </div>
        </div>
    );
};

export default Trains;