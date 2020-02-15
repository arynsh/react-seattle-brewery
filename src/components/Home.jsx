import React from 'react';
import { Link } from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom';

var homeStyling = 
  {
    textAlign: 'center',
    fontFamily: 'didot'
  }

var imgStyling = 
  {
    height: '800px',
    width: '1250px'
  }

var boxStyling =
{
  backgroundColor: 'rgba(180,100,104, 0.35)',
  margin: '0',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '34px',
  color: 'ghostwhite'
}

function Home() {
    return (
      <div style={homeStyling}>
       <img style={imgStyling} src="https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.kansascitymag.com/content/uploads/2019/06/435-Beer-Cover_CCastor_05-1024x683.jpg"></img>
       {/* <p>You reached the homepage. Go you.
       Are you at least 21 years of age?</p> */}
       <div style={boxStyling}>
                <h1 class="title">
                    {/* Welcome */}
                    <p>You've reached the homepage. Go you.</p>
                    <p> Are you at least 21 years of age?</p>
                </h1>
                <p style={homeStyling}><Link to='/UnderAge'>No</Link> | <Link to='/BeerList'>Yes</Link></p>
            </div>
       {/* <p style={homeStyling}><Link to='/UnderAge'>No</Link> | <Link to='/BeerList'>Yes</Link></p> */}
      </div>
    );
  }
  
  export default Home;