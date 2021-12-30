const formatDate = today => {
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth()).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  const month = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
  };

  return `${month[+mm]} ${dd}, ${yyyy}`;
};

export default formatDate;