// async & await

async function getCoinData(){
    try {
        const data = await fetch('http://api.coingecko.com/api/v3/exchange_rates?id3124234234&name=P');
        const json = await data.json();
        console.log(json)
    }catch (error){
        console.log(error)
    }
}

getCoinData();