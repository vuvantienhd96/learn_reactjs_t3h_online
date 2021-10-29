import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardHeader,
  Avatar, IconButton,
  CardContent, Typography,
  CardActions,
  Collapse,

} from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

class Contact extends Component {

  constructor() {
    super();
    this.state = {
      expanded: false
    }
  }

  // onShowClick(email, e) {
  //   console.log('email', email);
  //   console.log('e', e);
    
  //   this.setState({
  //     expanded: !this.state.expanded
  //   })
  // }

  onShowClick = (email, e) => {
    console.log('email', email);
    console.log('e', e);
    
    this.setState({
      expanded: !this.state.expanded
    }, 
    () => console.log(1234));

    console.log(567)
    
  }

  onDeleteClick = (id) => {
    // to do ...
    // excute 
    this.props.deleteClickHandle(id);
    
  }

  render() {
    const { name, email, phone, id } = this.props.contact;
    const { expanded } = this.state;

    return (
      <React.Fragment>
        <Card style={{ marginBottom: '20px' }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="share" onClick={this.onDeleteClick.bind(this, id)}>
                <DeleteIcon  />
              </IconButton>
            }
            title={name}
            subheader={email}
          />
          {/* show info */}

          {
            expanded && <CardContent>
              <Typography variant="body2" color="text.secondary">
                {phone}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {email}
              </Typography>
            </CardContent>
          }

          <CardActions disableSpacing>
            <IconButton sx={{ color: expanded ? "red" : '' }} aria-label="add to favorites" 
              onClick={this.onShowClick.bind(this, email)}>
              <FavoriteIcon  />
            </IconButton>
            <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
          </CardActions>
        </Card>
      </React.Fragment>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandle: PropTypes.func.isRequired
};
export default Contact;
