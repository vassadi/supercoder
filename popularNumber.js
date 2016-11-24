/**
 * Find out the most popular number in an array.
 * 3 is popular in [1,2,2,3,3,3,4]
 */

/**
 * Gives the most popular number in an array
 * @method ms_popularnumber
 * {@link http://stackoverflow.com/questions/921789/how-to-loop-through-plain-javascript-object-with-objects-as-members}
 * @return {number/null} Returns the most popular number in an array or null for an invalid array
*/
function ms_popularnumber (numberArray) {
  var popularNumber = null,
    popularNumberCount = null,
    counts = {};
  if (numberArray && Array.isArray(numberArray)) {
    forEach(numberArray, function (currentValue){
      counts[value] = ((counts[value]|| 0) + 1);
    });
    for (var key in counts) {
      if (counts.hasOwnProperty(key)) {
        if (!counts[popularNumber] || ([counts[key] > counts[popularNumber])) {
          popularNumber = key;
        }
      }
    }
    return popularNumber;
  } else {
    console.log('Please provide a valid array to duplicate');
    return popularNumber;
  }
}
