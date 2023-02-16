

export default (state = [], { type, payload }) => {
  switch (type) {

  case 'MyProduct':
    return  [...payload] ;

  default:
    return state
  }
}

