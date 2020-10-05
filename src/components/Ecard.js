import React from 'react';
import { Link } from "gatsby"
import { Grid, Card, Box, CardContent } from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core/styles';
//add in custom css here build out card styling here  
import ProductSale from '../content/plpOnSale.json'
import './styles/index.less'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    Card:{
      

    },

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));

const Ecard = props => {
  const { pageContext } = props

  const classes = useStyles();


  return (
    <div> 
      <Grid container spacing={3}  className="PLP__Ecard">

        {ProductSale.content.map((data, index) => {
          return <Grid key={`content_item_${index}`} item xs={12} sm={6} md={4}>
            <Card className={classes.Card} >
            <Link to={data.url} className="utlity__link--wrap">
              <div className="PLP__Ecard__image">


                <div className="PLP__Ecard__image__fav" >
                  <span data-fav={data.isFav}>{data.isFav}</span>
                </div>

                <img src={data.picture} alt="" />
              </div>
              </Link>
              <CardContent>
              <Link to={data.url} pagecontext={pageContext} className="utlity__link--wrap">
              <div className="PLP__Ecard__title " display="flex"><span>{data.name}</span></div>

                <div className="utlity__row flex--gap--10">
                  <div className="PLP__Ecard__size">
                      <span>{data.size}</span>
                    </div>
                    <div className="PLP__Ecard__rating">
                      <span data-rating={data.rating}>{data.rating}</span>
                    </div>

                 
                </div>

              
                <Box className="PLP__Ecard__pricecompairson utlity__row" display="flex">
                
                  <span data-currentprice>{data.price}</span>
                  <span data-oldprice>{data.oldPrice}</span>
                  <span data-savings>{data.savings}</span>
                </Box>

               </Link>
              </CardContent>
            </Card>
          </Grid>

        })}
      </Grid>

    </ div>
  )

}


export default Ecard