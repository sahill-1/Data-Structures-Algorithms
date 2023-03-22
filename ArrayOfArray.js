// Input = [1,2,[3,4,[5,6,7]]];
// Output = [1,2,3,4,5,6,7];

function flattenArray(input) {
    var result = [];
    for (var i = 0; i < input.length; i++) {
      if (Array.isArray(input[i])) {
        var flattened = flattenArray(input[i]);
        for (var j = 0; j < flattened.length; j++) {
          result.push(flattened[j]);
        }
      } else {
        result.push(input[i]);
      }
    }
    return result;
  }
  
  var input = [1,2,[3,4,[5,6,7]]];
  var output = flattenArray(input);
  console.log(output); // Output: [1,2,3,4,5,6,7]