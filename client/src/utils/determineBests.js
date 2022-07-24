// input options
//[{id: 1, content: 'aaa', totalVotes: 3},{id: 2, content: 'bbb', totalVotes: 3},{id: 3, content: 'ccc', totalVotes: 5}]
// export const calculateRatio =(options)=> {
//   let sum = 0;
//   for(let i = 0; i < options.length; i++){
//     sum += options[i].totalVotes
//   }
// }
export const determineBests = (options) => {
  const maxPointers = [];
  let currentMax = 0;
  for (let i = 0; i < options.length; i++) {
    if (options[i].totalVotes > currentMax) {
      currentMax = options[i].totalVotes;
      maxPointers.push(i);
    }
  }
  return maxPointers;
};
