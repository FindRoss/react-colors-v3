import React, { useState } from 'react'
import { connect } from 'react-redux'
import { UPDATE_PANE, UPDATE_TITLE, DELETE_PANE, ADD_PANE } from '../../actions/types'
import { getRandomColor } from '../../actions/randomColor'
import Pane from '../Pane'


import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles({
  titleLayout: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1em'
  },
  title: {
    marginRight: 6
  },
  input: {
    marginRight: 6
  },
  addNewBox: {
    padding: '1.5rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  addNewBtn: {
    color: '#3f51b5',
    background: '#d3dbe2'
  }
})


function Palette({ palette, dispatch }) {
  const [inputTitle, updateInputTitle] = useState(palette.title)
  const [showTitle, setShowTitle] = useState(true)
  const classes = useStyles();

  const { title, id, colors } = palette;

  function handleTitleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: UPDATE_TITLE,
      payload: {
        id,
        title: inputTitle
      }
    })

    setShowTitle(true)
  }

  function handlePaneColorChange(index) {
    let randomColor = getRandomColor();

    dispatch({
      type: UPDATE_PANE,
      payload: {
        id,
        index,
        randomColor
      }
    })
  };

  function handleDeletePane(index) {
    dispatch({
      type: DELETE_PANE,
      payload: {
        id,
        index
      }
    })
  };

  function handleAddPane() {
    const newColor = getRandomColor();

    dispatch({
      type: ADD_PANE,
      payload: {
        id,
        newColor
      }
    })
  }

  if (palette && palette !== {}) {
    return (
      <>
        <div className="color--palette">
          {showTitle ? (
            <div className={classes.titleLayout}>
              <Typography className={classes.title} component="h1" variant="h5">{title}</Typography>
              <IconButton onClick={() => setShowTitle(false)} aria-label="delete">
                <EditIcon />
              </IconButton>
            </div>
          ) : (
              <div className={classes.titleLayout}>
                <form onSubmit={handleTitleSubmit}>
                  <TextField
                    variant="outlined"
                    type="text"
                    className={classes.input}
                    value={inputTitle}
                    label="title"
                    size="small"
                    onChange={(e) => updateInputTitle(e.target.value)} />
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    type="submit"
                  >Update</Button>
                </form>
              </div>
            )}
          {colors.map((color, index) => (
            <Pane
              key={index}
              index={index}
              color={color.hex}
              colorChange={handlePaneColorChange}
              deletePane={handleDeletePane}
            />
          )
          )}
        </div>
        <div className={classes.addNewBox}>
          <IconButton onClick={() => handleAddPane()} className={classes.addNewBtn}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
      </>
    )
  } else {
    return (
      <div>No palette found, sorry.</div>
    )
  }
}




const mapStateToProps = (state, ownProps) => {

  // change from string to number. 
  // let paramsID = parseInt(ownProps.match.params.id);

  // get paramsID string
  let paramsID = ownProps.match.params.id;

  // find the correct palette that relates to the 
  let filteredState = state.palettes.filter(pal => (pal.id === paramsID))
  return {
    palette: filteredState[0]
  }
}

export default connect(mapStateToProps)(Palette);
