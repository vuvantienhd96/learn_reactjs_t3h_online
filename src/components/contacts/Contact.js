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
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import axios from 'axios'



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
    console.log('this is contructor');
  }

  onShowClick = (email, e) => {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  componentDidMount() {
    //console.log(' this is componentDidMount');
  }

  componentDidUpdate(revProps, prevState) {
    if (prevState.expanded !== this.state.expanded) {
      //console.log('ban da thay doi some thing ...');
    }
  }

  componentWillUnmount() {
    //console.log(' this is componentWillUnmount');
  }


  onDeleteClick = async (id) => {
    try {
      const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    } catch (error) {
      console.log('errrr', error);
    }

  }

  render() {
    const { name, email, phone, id } = this.props.contact;
    const { expanded } = this.state;
    //console.log(' this is rendering....');
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
              <React.Fragment>
                <IconButton
                  aria-label="share"
                  onClick={this.onDeleteClick.bind(this, id)}
                >
                  <DeleteIcon />
                </IconButton>
              </React.Fragment>
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
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
            <Link to={`/edit/${id}`}>
              <IconButton
                aria-label="share"
                onClick={() => console.log('edit clicked !')}
              >
                <EditIcon />
              </IconButton>
            </Link>
          </CardActions>
        </Card>
      </React.Fragment>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default Contact;
