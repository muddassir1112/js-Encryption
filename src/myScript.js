var a = document.getElementById('id1').value;
var b = document.getElementById('id2').value;
// var str = a.length;
// var arr = a.split("");
var arr = Array.from(a);
console.log(arr)
function myFun(){
// console.log(str);
//  var par = JSON.stringify(a);
// var par1 = JSON.parse(par);
// console.log(arr);
 for(var i=0; i <= arr.length; i++){
     b = arr[i+1];
    
   console.log(b);
//   }
}
}