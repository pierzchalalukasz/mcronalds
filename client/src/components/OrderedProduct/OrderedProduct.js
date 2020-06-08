import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    orderedProductWrapper: {
        display: 'flex', 
        padding: '.5em 0',
        width: '100%'
    },
    productGridContainer: {
        padding: '.25em 2.5em'
    },
    productGridItem: {
        fontFamily: 'Permanent Marker',
        // fontSize: '.75rem',
        color: '#777'
    },
    productName:    {
        textTransform: 'capitalize',
    }
});

const OrderedProduct = ({ title, removed, added, quantity }) => {

    const classes = useStyles();

    return (
        <div className={classes.orderedProductWrapper}>
            <Grid className={classes.productGridContainer} container>
                <Grid item md={3}>
                    <Typography className={`${classes.productName} ${classes.productGridItem}`}>{title}</Typography>
                </Grid>
                <Grid item md={6}>
                    {!!removed.length && <Typography className={classes.productGridItem}>Removed: {removed.join(", ")}</Typography>}
                    {!!added.length && <Typography className={classes.productGridItem}>Added: {added.join(", ")}</Typography>}
                </Grid>
                <Grid item md={3}>
                    <Typography className={classes.productGridItem}>{quantity}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderedProduct;