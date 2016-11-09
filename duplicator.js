/**
 * TODO
 * Create a function to duplicate an array
 * Eg: duplicator([123] give us [123,123]
 *
 */
function ms_duplicator (arrToDuplicate) {
  if (arrToDuplicate && Array.isArray(arrToDuplicate)) {
    return arrToDuplicate.concat(arrToDuplicate);
  } else {
    console.log('Please provide a valid array to duplicate');
  }
}
