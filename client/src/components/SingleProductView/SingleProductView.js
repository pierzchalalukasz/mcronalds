import React, { Component } from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import CurrencyFormat from 'react-currency-format';
import IngredientsList from '../IngredientsList/IngredientsList';

class SingleProductView extends Component {
    constructor(props)   {
        super(props);
    }
    render() {
        const { id, title, description, calories, ingredients } = this.props;
        return (
            <div>
                <React.Fragment>
                    <Container style={{width: '80%'}}>
                        <Grid container style={{padding: '100px 0'}}>
                            <Grid item md={5}>
                                <Typography variant="h3" align="left" style={{marginTop: '50px', fontWeight: 'bold'}}>{title}</Typography>
                                <Typography variant="h4" align="left" style={{margin: '20px 0'}}>
                                    <CurrencyFormat value={calories} displayType={'text'} sufix={'kcal'}></CurrencyFormat>
                                    kcal
                                </Typography>
                                <Typography align="left" style={{marginTop: '25px'}}>{description}</Typography>
                            </Grid>
                            <Grid item md={7}align="left">
                                <img src={require(`../../assets/${id}-details.jpg`)} alt="details-product-img" style={{maxWidth: '100%', marginTop: '25px'}}/>
                            </Grid>
                        </Grid>
                    </Container>
                    <IngredientsList title={title} ingredients={ingredients}/>
                </React.Fragment>
            </div>
        );
    }
}

export default SingleProductView;