const express = require('express')
const app = express()
const port = 3000

function isNatural(num){
    if (num > 0 && num%1==0 && isNaN(num) == false) {
        return true;
    }
    return false;
}
function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);   
}

function lcmBig(a, b) {
    const bigA = BigInt(a);
    const bigB = BigInt(b);
    
    function gcdBig(x, y) {
        return !y ? x : gcdBig(y, x % y);
    }
    
    return (bigA * bigB) / gcdBig(bigA, bigB);
}

app.get('/nikita_navrotski_gmail_com', (req, res) => {
    let x = req.query.x;
    let y = req.query.y;

    if (x === undefined || y === undefined || x=='' || y=='') {
        return res.send('NaN');
    }
    
    if (isNatural(x) == false || isNatural(y) == false) return res.send('NaN');
    
    const l = lcmBig(x,y).toString()

    return res.send(l)
})

app.listen(port, () => {
  console.log(`Server running on port http://localhost:3000/`)
})