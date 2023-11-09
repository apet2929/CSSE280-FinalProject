const express = require('express');
const app = express();
app.use(express.json())

function titleCase(str){
   str = str.toLowerCase().split(' ');
   let final = [ ];
    for(let  word of str){
      final.push(word.charAt(0).toUpperCase()+ word.slice(1));
    }
  return final.join(' ')
}

app.get('/:county/', async (req, res) => {
    const { county } = req.params;
    const countyListRes = await fetch('https://in211.scanurag.com/countyList.json');
    const countyList = await countyListRes.json();
    const desiredCounty = countyList[titleCase(county) + " County"];
    const countyServicesRes = await fetch(`https://in211.scanurag.com${desiredCounty}`);
    const countyServices = await countyServicesRes.json(); 
    // const filteredServices = countyServices.filter(service => service.taxonomy_catagory.includes(catagory));
    // console.log(filteredServices);
    res.json(countyServices);
});

app.listen(3000);
