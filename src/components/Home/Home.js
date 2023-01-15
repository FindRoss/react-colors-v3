import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AddNew from '../AddNew';
import './Home.css';

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardHeader from '@material-ui/core/CardHeader'

function Home({ palettes }) {

  return (
    <div>
      <div><AddNew /></div>
      <div className="color--grid">
        {palettes.map((palette) => (
          <Card className="color--box" variant="outlined" key={palette.id}>
            <CardActionArea>
              <Link to={`/palette/${palette.id}/`}>
                <CardHeader
                  title={palette.title}
                />
                <div className="color--pane__container">

                  {palette.colors.map((color, index) => (<div className="color--pane" key={index} style={{ background: `${color.hex}` }}></div>))}

                </div>
              </Link>
            </CardActionArea>
          </Card>
        ))}

      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    palettes: state.palettes
  }
}

export default connect(mapStateToProps)(Home);
