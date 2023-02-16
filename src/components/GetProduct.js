import axios from 'axios'
import React, { useEffect } from 'react'
import { allproduct, addtocartaction, searchtext } from '../action/productaction'
import { useSelector, useDispatch } from 'react-redux'
import { Stack, Button } from '@mui/material';
import Carddata from './Carddata';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';


const GetProduct = () => {
    const productdata = useSelector(state => state.Products)
    const srcSelection = useSelector(state => state.search)
    console.log(srcSelection)

    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(y => dispatch(allproduct(y.data)))
    }, [])

    const addtocart = (index) => {
        let a = productdata[index]
        dispatch(addtocartaction(a))
    }

    return (
        <>
            <Stack
                direction='row'
                justifyContent='center'
                flexWrap='wrap'
            >
                {
                    productdata&& productdata.filter((ele) => {
                        return ele.title.toLowerCase().includes(srcSelection)
                    }).map((element, index) => {
                        return (
                            <Card sx={{ maxWidth: 345, m: 1 }} key={index}>

                                <Carddata carddata={element} index={index} addtocart={addtocart} key={index} />
                                <CardActions>


                                    <Button variant="contained" sx={{ width: '100%' }} size="small" onClick={() => addtocart(index)}>Add to cart</Button>
                                </CardActions>


                            </Card>
                        )
                    })
                }
            </Stack>
        </>
    )
}

export default GetProduct