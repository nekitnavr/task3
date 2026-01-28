const express = require('express')
const app = express()
const port = 3000

function isNatural(num){
    return typeof(num)=='number' && num>0 && num%1==0 
}
function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);   
}

app.get('/nikita_navrotski_gmail_com', (req, res) => {
    let x = req.query.x;
    let y = req.query.y;
    if (isNatural(x)&&isNatural(y) == false || x == '' || y == '') return res.send('NaN')
    l = lcm(x,y).toString()

    return res.send(l)
})

app.listen(port, () => {
  console.log(`Server running on port http://localhost:3000/`)
})