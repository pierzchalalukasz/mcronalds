import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CurrencyFormat from 'react-currency-format';
import { Typography, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { ingredientsList } from '../../store';
import CustomizeIngredient from '../CustomizeIngredient/CustomizeIngredient';

const styles = theme => ({
  CardHeader: {
    paddingBottom: '8px'
  },
  card: {
    border: '1px solid #ddd',
    background: 'transparent',
    // background: '#eee',
    // borderRadius: '20px',
    transition: '.2s',
    '&:hover':  {
      transform: 'scale(1.05)'
    },
  },
  Typography: {
    cursor: 'pointer'
  },
  Link: {
    textDecoration: 'none !important',
    color: 'inherit'
  },
  mediaWrapper: {
    overflow: 'hidden'
  },
  media: {
    paddingTop: '40%',
    paddingBottom: '40%',
    height: '25px',
    cursor: 'pointer'
  },
  add: {
    color: '#0275d8',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  Button: {
    background: '#428bca',
    color: '#fff',
    marginTop: '15px',
    '&:hover':  {
      background: '#317ab9'
    },
  }
});


class ProductCard extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      modal: false,
      ingredientsList
    }    
  }

  toggle = () =>  {
    this.setState(prevState =>  ({
        modal: !prevState.modal
    }));
}

  render()  {
    const { id, title, ingredients } = this.props.product;
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardHeader
            className={classes.CardHeader}
            action={
              <IconButton aria-label="settings">
                <AddCircleIcon className={classes.add} fontSize="large"/>
              </IconButton>
            }
            align="left"
            title={<Link className={classes.Link} to="/product-details"><Typography className={classes.Typography} variant="h6">{title}</Typography></Link>}
            subheader={<CurrencyFormat value={4.99} displayType={'text'} prefix={'$'}/>}
          />
          <ProductConsumer>
            {value => (
            <div 
              className={classes.mediaWrapper}
              onClick={() =>  {
                value.handleDetail(id);
              }}
            >
              <Link to="/product-details">
                <CardMedia
                  className={classes.media}
                  image={require(`../../assets/${id}.jpg`)}
                  title={title}
                />
              </Link>
            </div>
            )}
          </ProductConsumer>
          <CardContent>
            <Button 
              variant="outlined" 
              color="primary" 
              align="left"
              onClick={this.toggle}  
            >
              CUSTOMIZE
            </Button>
          </CardContent>
        </Card>
        <Modal
            className="modal-lg"
            isOpen={this.state.modal}
            toggle={this.toggle}
        >
        <ModalHeader toggle={this.toggle}>
          <Typography variant="h5" align="center">Customize your {title}</Typography>
        </ModalHeader>
        <ModalBody>
          {ingredients.map(ingredient =>  (
            <CustomizeIngredient ingredient={ingredient} />
          ))}
          <div className={classes.buttonWrapper}>
            <Button className={classes.Button} variant="contained" onClick={this.toggle}>Accept and add to cart</Button>
          </div>
        </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
  
}

export default withStyles(styles)(ProductCard);