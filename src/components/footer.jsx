import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

const Footer = () => {
  return (
    <footer style={{  color: '#fff', padding: '20px 0',"width":"100%" }}>
      <div className="containerF">
        <div className="row-wise">
          {/* Logo and Navigation Links */}
          <div className="clg-logo" style={{"display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center"}}>
          <img id='acm-logo' src="./images/AITR-ACM-Student-Chapter-White-08-1.png" />
            <div className='footer-img' style={{"height":"90px","display":"flex","flexDirection":"row","justifyContent":"space-evenly","alignItems":"center","gap":"15px"}}>
                <img id='img1' src="./images/acm-w-white-logo-1-150x150.png"/>
                <img id='img2' src="./images/white-logo-acropolis.png" />
                <img id='img3' src="./images/Group_86-removebg-preview.png"/>
            </div>
            <p style={{color: '#bbb'}}>All rights reserved © 2025</p>
          </div>
          {/* Contact Info */}
          <div className="clg-logo" >
            <p  style={{"textAlign":"center"}}>
              <span style={{ display: 'inline-block', marginRight: '10px' }}>📍</span>Acropolis Institute of Technology & Research
              <br />
              Mangliya Bypass road,Indore,452001
            </p>
            <p  style={{"textAlign":"center"}}>
              <span style={{ display: 'inline-block', marginRight: '10px' }}>📞</span> +91 8827240204<br/>
              <span style={{ display: 'inline-block', marginRight: '10px' }}>📞</span> +91 8085553416<br/>
            </p>
            <p  style={{"textAlign":"center"}}>
              <span style={{ display: 'inline-block', marginRight: '10px' }}>✉️</span>
              <a href="mailto:acm.prayatna@gmail.com" style={{ color: '#00bcd4', textDecoration: 'none' }}>
              acm.prayatna@gmail.com
              </a><br/>
              <span style={{ display: 'inline-block', marginRight: '10px' }}>✉️</span>
              <a href="mailto:acmaitr@acropolis.in" style={{ color: '#00bcd4', textDecoration: 'none' }}>
              acmaitr@acropolis.in
              </a>
            </p>
          </div>

          {/* About the Company and Social Links */}
          <div className="clg-logo">
            <h3 style={{ fontSize: '18px', color: '#fff' }}>About AITR ACM Team</h3>
            <p style={{ color: '#bbb', textAlign: 'center' }}>
            Where Tech Boundaries Are Redefined!<br/>Led by a blend of experienced leaders and fresh talent, we lead the way in organizing impactful events and sharing knowledge.<br/>
            </p>
            <a href='./pdfs/SponsorshipBrochurePrayatna2.pdf' target='_blank' rel="noopener noreferrer" download>Brochure</a>
            <a href='./pdfs/BusRoute_Aug24.pdf' target='_blank' rel="noopener noreferrer" download>Bus Route</a>
            <div style={{ marginTop: '10px',textAlign: 'center' }}>
            {[
    { platform: 'facebook', url: 'https://www.facebook.com/aitracm.chapter/' },
    { platform: 'twitter', url: 'https://x.com/AITR_ACM' },
    { platform: 'linkedin', url: 'https://www.linkedin.com/in/acm-aitr-291645223/' },
    { platform: 'instagram', url: 'https://www.instagram.com/aitr_acm/' }
  ].map(({ platform, url }) => (
  <a
                  key={platform}
                  href={url}
                  style={{ marginRight: '10px', textDecoration: 'none', color: '#00bcd4' }}
                >
                  <i className={`fab fa-${platform}`} style={{"color":"white"}}></i> {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
