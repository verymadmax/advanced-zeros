module.exports = function getZerosCount(number, base) {
  var bases = [];
  var zerosMin = Infinity;
  for (j = 2; j < base;){
    if (base % j == 0){
      bases.push(j);
      base /= j;
    } else {
      j++;
    }
  }
  
  bases.push(base);
  do {
    var l = bases.length;
    newBase = bases[l - 1];
    var counter = 0;
    for(i = 0; i < l; i++){
     if(bases[i] == newBase){
       counter++;
       bases.splice(i,1);
       l--;
       i--;
     }  
    }
    var buffNumber = number;
    var zeros=0;
      while (Math.floor(buffNumber) > 0){
        buffNumber /= newBase;
        zeros += Math.floor(buffNumber);
      }
      zeros /= counter;
        if (zeros < zerosMin){
          zerosMin = Math.floor(zeros);
        }
  }
  while(l > 0);
  return zerosMin;
}