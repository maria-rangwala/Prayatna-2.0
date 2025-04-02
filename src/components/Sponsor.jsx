import React from 'react';
import Sponsor2 from './Sponsor2';
import Head from './Sponsorheader';

const Sponsor = () => {
    return (
      <div style={{"justifyContent":"center","alignItems":"center","textAlign":"center"}} id='sponsors'>
          <Head/>
          <div className=' bg-black bg-opacity-75' style={{'padding':'20px','marginBottom':'30px'}} >
          <h2 className=" text-center text-2xl sm:text-3xl lg:text-4xl font-bold section-heading mb-16" style={{'color': '#f59e0b'}}>Our Sponsors</h2> 
          <Sponsor2/>          
          </div>
      </div>
    );
};

export default Sponsor;
