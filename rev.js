//convert number to reversed array of digits
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//Example(Input => Output):
//35231 => [1,3,2,5,3]
//0 => [0]



function digitize(n) {
  let num = String(n);
    let arr = [];
    for(let i=0;i<num.length;i++){
        let snum = Number(num.charAt(i));
        arr.push(snum)
    }
    arr.reverse();
    return arr
}