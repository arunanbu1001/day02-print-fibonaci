let a,b,c,n;
a = 0;
b = 1;
i = 0;
n = 20;
console.log(a);
console.log(b);
for(i = 0;i < n; i ++)

{
    c = a + b;
    a = b;
    b = c;
    if(c<n){
        console.log(c);
    }
    
}