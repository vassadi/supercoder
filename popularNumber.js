/**
 * Find out the most popular number in an array.
 * 3 is popular in [1,2,2,3,3,3,4]
 */
function popularNumber(arr) {
  var max = 0;
  var x =arr.reduce((a, v) => {
    a[v] = a[v] ? ++a[v] : 1
    max = a[v] > max ? v : max;
    return a;
  }, {})
  console.log('most repeated number ', max, ' (', x[max], ' times)');
}

var arr = [1, 2, 4, 2, 1, 4, 6, 8, 1, 4, 4, 2, 3, 2, 2, 4, 2, 2, 5];
popularNumber(arr)
