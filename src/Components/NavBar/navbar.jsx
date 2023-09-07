import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


function NavBar ()  {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);

  /*  const [hpFilter, setHpFilter] = useState('');
    const handleFilterChange = (event) => {
      setHpFilter(event.target.value);
    };
  
    const handleSearch = () => {
      navigate(`/hp/${hpFilter}`);
    };*/
  };

  return (
    <div className="navbar-wrapper">
      <nav>
        <ul className="nav-list">
       
        <li className="list-item">
          <button onClick={() => handleNavigate('/home')}>
          <a href="/"> Home </a>

          </button>
          </li>
        
          <li className="list-item">
            <button onClick={() => handleNavigate('/AllCards')}>
            <Link to="/AllCards">AllCards</Link>
            </button>
            
          </li>
        
          <li className="list-item">
            <button onClick={() => handleNavigate('/AllSets')}>
            <Link to="/AllSets">AllSets</Link>

            </button>
          </li>
        
          <li className="list-item">
            <button onClick={() => handleNavigate('/AllSeries')}>
            <Link to="/AllSeries">AllSeries</Link>

            </button>
          </li>

        {/*  <li>
          <div className="hp-filter">
          <input
            type="text"
            placeholder="Search by HP"
            value={hpFilter}
            onChange={handleFilterChange}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
  </li>*/}

        </ul>
      </nav>
      
    </div>
  );
};
export default NavBar;