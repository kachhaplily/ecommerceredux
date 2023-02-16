import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Stack } from '@mui/material';
import { addtocartaction, removeitmcart } from '../action/productaction'
import Carddata from './Carddata';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';


const Addtocartcom = () => {
  const addtocartdata = useSelector(state => state.cart)
  const dispatch = useDispatch()


  const removecard = (index) => {
    dispatch(removeitmcart(index))
  }

  console.log(addtocartdata);
  return (
    <Stack
      direction='row'
      justifyContent='center'
      flexWrap='wrap'
    >
      {
        (addtocartdata?.map((element, index) => {
          return (
            <Card sx={{ maxWidth: 345, m: 1 }} key={index}>
              <Carddata carddata={element} index={index} key={index} />
              <CardActions>
                <Button variant="contained" sx={{width:'100%'}} size="small" onClick={() => removecard(index)}>Remove</Button>
              </CardActions>
            </Card>
          )
        }))
      }
    </Stack>
  )
}

export default Addtocartcom