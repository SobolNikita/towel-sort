module.exports = function towelSort(matrix) {
  if(matrix===undefined){
    return [];
  }
    let ans = [];
    for (let i = 0; i < matrix.length; ++i) {
        if (i % 2 === 0) {
            matrix[i].forEach((e) => {
                ans.push(e);
            });
        } else {
            for (let j = matrix[i].length - 1; j >= 0; --j) {
                ans.push(matrix[i][j]);
            }
        }
    }
    return ans;
};
