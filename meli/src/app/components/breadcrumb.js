import React from 'react';
import {
    Link
  } from "react-router-dom";

import '../styles/breadcrumb.scss';

function Breadcrumb(categories) {
    return (
        <div className="breadcrumb-container">
            {
                categories && (
                    categories.categories.map(c => (
                        <Link key={c} to={{pathname: `/items?search=${c}`}}>
                            <span className="breadcrumb-item">{c}</span>
                            <span className="breadcrumb-arrow">/</span>
                        </Link>
                    ))
                )
            }
        </div>
    );
}

export default Breadcrumb;
