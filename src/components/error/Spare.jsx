import React from 'react';
import Navbar from '../navbar/Navbar';
import Error from './Error';


const Spare = () => {
    return (
        <div>
            <div className="right-spare">
        <Error />

        <div className="r-up" data-aos="fade-down" data-aos-delay="500">
          <Navbar />
        </div>
        <hr />
        <div
          className="r-down"
          data-aos="fade-down-right"
          data-aos-delay="1000"
        >
          <div className="inside">
            <h3 className="c-white">
              DIFFICUILT PATHS LEADS TO BEAUTIFULL DESTINATIONS
            </h3>
            <button className="btn-home">View Resume</button>
          </div>
        </div>
      </div>
        </div>
    );
}

export default Spare;
