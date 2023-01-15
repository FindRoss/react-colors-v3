import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import uuid from 'react-uuid'
import { getRandomColor } from '../actions/randomColor'
import { ADD_NEW } from '../actions/types'

import { makeStyles } from '@material-ui/core/styles'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  addNewCont: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '1rem'
  },
});

function AddNew({ dispatch }) {
  const classes = useStyles();

  function handleAddNew() {
    const newId = uuid()

    const newPalette = {
      id: newId,
      title: 'Untitled',
      colors: [
        {
          hex: getRandomColor()
        },
        {
          hex: getRandomColor()
        },
        {
          hex: getRandomColor()
        }
      ]
    }

    dispatch({
      type: ADD_NEW,
      payload: newPalette
    });

    return <Redirect push to={`/palette/${newId}/`} />;
  }

  return (
    <div className={classes.addNewCont}>
      <Button variant="contained" color="primary" startIcon={<AddCircleIcon />} onClick={handleAddNew}>Add New</Button>
    </div>
  )
}

export default connect()(AddNew);
