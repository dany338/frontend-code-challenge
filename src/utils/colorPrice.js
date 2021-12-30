const colorPrice = number => {
  if (+number > 50 ) {
    return 'terciary';
  }
  if (+number > 20 && +number < 50) {
    return 'secundary';
  }
  if (+number > 0 && +number < 20) {
    return 'primary';
  }
  return 'primary';
};

export default colorPrice;