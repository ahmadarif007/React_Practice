import React from 'react';

function Laps(props) {
    return (
        <div>
            <ul className="list-group list-group-flush">
                { props.laps.map((lap, index)=>{
                    return(
                        <li key={index} className="list-group-item">
                            <h4>
                                <span className="text-dark ml-3">Minute:</span>
                                <span className="text-danger ml-1">{ lap.min }</span>
                                <span className="text-dark ml-3">Second:</span>
                                <span className="text-danger ml-1">{ lap.sec }</span>
                                <span className="text-dark ml-3">Mili:</span>
                                <span className="text-danger ml-1">{ lap.mili }</span>
                            </h4>
                        </li>
                    )
                }) }
            </ul>
        </div>
    );
}

export default Laps;