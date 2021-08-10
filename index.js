/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows == 1) return [[1]];
  if (numRows == 2) return [[1], [1, 1]];

  let answer = [[1], [1, 1]];
  let temp = [1, 1];
  for (let i = 3; i <= numRows; i++) {
    let temp2 = [];
    
    // get the numbers which comes between [1 ... 1]
    for (let j = 0; j < i - 2; j++) {
      temp2.push(temp[j] + temp[j + 1]);
    }
    
    let temp3 = [1, ...temp2, 1];
    temp = temp3;
    answer.push(temp);
  }
  
  //console.log('answer:', answer)
  return answer;
};
