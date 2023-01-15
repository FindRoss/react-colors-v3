import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles({
  nav: {
    marginBottom: '1rem'
  },
  link: {
    color: '#FFFFFF',
    textDecoration: 'none'
  },
  layout: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

function Index() {
  const classes = useStyles();

  return (
    <AppBar className={classes.nav} position="static">
      <Toolbar className={classes.layout}>
        <Typography variant="h6"><Link className={classes.link} to="/">React Colors</Link></Typography>
      </Toolbar>
    </AppBar>

  )
}

export default Index;
