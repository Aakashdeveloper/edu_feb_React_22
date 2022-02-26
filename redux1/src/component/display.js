import React from 'react';

const Display = (props) => {

    const renderMovies = ({datalist}) => {
        if(datalist){
            return datalist.map((item) => {
                return(
                    <div>
                        {item.name}
                    </div>
                )
            })
        }
    }

    return(
        <div>
            <h2>Movies Display</h2>
            {renderMovies(props)}
        </div>
    )

}

export default Display;