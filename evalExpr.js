function E(s){let i=0
const w=_=>{while(s[i]<=" ")i++}
const n=_=>{let a=i;while(/[\d.]/.test(s[i]))i++;return+s.slice(a,i)}
const a=_=>{w();if(s[i]=="("){i++;const v=x();w();i++;return v}if(s[i]=="-"){i++;return-a()}if(s[i]=="+"){i++;return a()}return n()}
const t=_=>{let v=a();w();for(;s[i]=="*"||s[i]=="/";){const o=s[i++],r=a();v=o=="*"?v*r:v/r;w()}return v}
const x=_=>{let v=t();w();for(;s[i]=="+"||s[i]=="-";){const o=s[i++],r=t();v=o=="+"?v+r:v-r;w()}return v}
return x()}
exports.evalExpr=E
