const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case 'addtocart':
      let mycart = [...state]
      let a = { ...payload }
      if (mycart.length == 0) {
        a['qty'] = 1
        mycart.push(a)
      }
      else {
        let findproduct = mycart.find((v) => {
          return v.id == a.id;
        })
        if (findproduct == undefined || findproduct == null) {
          a.qty = 1;
          mycart.push(a)
        }
        else {
          let neccesrycard = mycart.filter((ele) => {
            if (ele.id == a.id) {
              ele.qty = ele.qty + 1;
            }
            return ele
          })
          mycart = neccesrycard;
        }
      }

      return mycart
    case 'removecardcart':
      let d = [...state]
      d.splice(payload, 1)
      return d;


        
    default:
      return state
  }
}
