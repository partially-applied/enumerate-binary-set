var decToBin, main;
decToBin = require('@partially-applied/decimal-to-binary');
main = function(height, width){
  var list, i$, I, bin, j$, to$;
  width == null && (width = 1);
  list = [];
  for (i$ = 0; i$ < height; ++i$) {
    I = i$;
    bin = decToBin(I);
    if (bin.length < width) {
      for (j$ = 0, to$ = width - bin.length; j$ < to$; ++j$) {
        I = j$;
        bin.unshift(0);
      }
    }
    list.push(bin);
  }
  return list;
};
module.exports = main;