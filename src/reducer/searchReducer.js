
export default (state = '', { type, payload }) => {
  switch (type) {

  case 'searchdata':
    return  state,payload

  default:
    return state
  }
}
