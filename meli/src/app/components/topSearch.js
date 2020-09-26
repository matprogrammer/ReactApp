import React, { useState } from 'react'
import {
    Link
  } from "react-router-dom";
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import history from '../utils/history';

import '../styles/search.scss';

function TopSearch() {

    const params = new URLSearchParams(window.location.search)
    const searched = params.get('search') ? params.get('search') : '';
    const [value, setValue] = useState(searched);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            if (e.target.value) {
                history.push(`/items?search=${e.target.value}`);
            }
        }
    }

    const handleSearch = (e) => {
        if (value) history.push(`/items?search=${value}`);
    }

    return (
        <div className="container">
            <div className="search-container">
                <Link to="/">
                    <img className="logo" src={logo} alt="logo-meli"/>
                </Link>
                <div className="logo-container">
                    <input
                        className="input-search"
                        type="text"
                        placeholder="Nunca dejes de buscar"
                        value={value}
                        onKeyDown={(e) => handleKeyPress(e)}
                        onChange={(e) => handleChange(e)}
                    />
                    <img
                        src={search}
                        className="search-icon"
                        onClick={(e) => handleSearch(e)}
                        alt="logo-search"
                    />
                </div>
            </div>
        </div>
    )
}

export default TopSearch;
