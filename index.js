exports.main = function(argv){
    g=argv.slice(2);
    s=[];
    for(i=0;i<g.length;i++){
        if(!('+-*/'.includes(g[i]))&&isNaN(Number(g[i])))
            throw `Invalid input at ${e}`;
        if(!isNaN(Number(g[i])))
            s.push(Number(g[i]));
        if('+-*/'.includes(g[i])){
            r = eval(s[s.length-2]+g[i]+s[s.length-1]);
            s.pop();
            s[s.length-1]=r;
        }
    }
    console.log(s[0]);    
}
