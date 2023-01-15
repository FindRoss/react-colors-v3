import { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import AutorenewIcon from '@material-ui/icons/Autorenew'
import DeleteIcon from '@material-ui/icons/Delete'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles({
  roundButton: {
    background: '#FFFFFF',
    color: '#000000',
    border: '1px solid #000',
    marginLeft: 3,
    '&:hover': {
      background: '#F4F4F4'
    },
  },
  hexBox: {
    display: 'flex'
  },
  hex: {
    background: '#FFFFFF',
    border: '1px solid #000',
    borderRadius: 6,
    marginRight: 6,
    padding: '6px 10px',
    minWidth: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  copyHex: {
    background: '#FFFFFF',
    border: '1px solid #000',
    borderRadius: 6,
    padding: '6px 10px',
    '&:hover': {
      background: '#F4F4F4'
    },
  },
  tools: {
    fontSize: 16,
    fontWeight: 300,
  },
  inputRoot: {
    backgroundColor: '#ffffff',
    borderRadius: 6,
    border: '1px solid #000',
    marginRight: 6,
    maxWidth: 110,
    color: '#000000'
  }
})

function Pane({ color, index, colorChange, deletePane }) {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const bg = { backgroundColor: `${color}` }

  function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text).then(function () {
      console.log('Async: Copying to clipboard was successful!');
      setTimeout(() => setOpen(false), 1500)
    }, function (err) {
      console.error('Async: Could not copy text: ', err);
    });
  };

  function handleCopy() {
    copyTextToClipboard(color);
    setOpen(true);
  }

  return (
    <>
      <div
        style={bg}
        className="color--pane">
        <div className="color--pane__content">
          <div className={classes.hexBox}>
            <TextField
              multiline
              variant="outlined"
              value={color}
              classes={{
                root: classes.inputRoot
              }}
            />
            <Tooltip
              classes={{
                tooltip: classes.tools,
              }}
              title="Copied!"
              placement="top"
              open={open}
            >
              <IconButton onClick={handleCopy} className={classes.copyHex}>
                <FileCopyIcon style={{ color: '#000' }} />
              </IconButton>
            </Tooltip>
          </div>
          <div className="color--pane__icon-set">
            <IconButton
              className={classes.roundButton}
              onClick={() => deletePane(index)}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              className={classes.roundButton}
              onClick={() => colorChange(index)}
            >
              <AutorenewIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pane; 
