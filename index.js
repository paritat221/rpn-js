const isNm = e => {return !isNaN(Number(e))};
const isOp = e => {return '+-*/'.includes(e)};
const input = process.argv.slice(2);
let stream = [];
for(let i=0;i<input.length;i++){
    const buffer = input[i];
    if(!isOp(buffer) && !isNm(buffer))
        throw `Invalid input at ${buffer}`;
    if(isNm(buffer))
        stream.push(Number(buffer));
    if(isOp(buffer)){
        let result = eval(stream[stream.length-2] + buffer + stream[stream.length-1]);
        stream.pop();
        stream[stream.length-1]=result;
    }
}
console.log(stream[0]);
