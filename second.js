function Multiply(a,b){
  return a*b;
}
function sum(a,b){
  return a+b;
}
function difference(a,b){
  return a-b;
}
function division(a,b){
  if(b>0)
   return a/b;
  return "wrong value for divisor"
}
module.exports={
  Multiply , sum , division , difference
}
