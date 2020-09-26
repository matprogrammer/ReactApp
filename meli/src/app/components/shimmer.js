import React from 'react'
import '../styles/shimmer.scss';

function shimmer() {

    const numbers = [1, 2, 3, 4];
    const listItems = numbers.map((number) => (
        <div key={number}>
            <div className="shine box"></div>
            <div className="shimmer-container">
                <div className="shine lines"></div>
                <div className="shine lines"></div>
                <div className="shine lines"></div>
            </div>
        </div>
    )

    );

    return (
        <>
            {listItems}
        </>
    )
}

export default shimmer;
