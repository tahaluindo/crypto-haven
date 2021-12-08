import './cryptoPrice.css';

const logo = document.querySelector('header img');
const result = document.querySelector('.result');
const cryptoName = document.querySelector('section#form .users-input .fields .crypto-name');
const currency = document.querySelector('section#form .users-input .fields .currency');
const getPrice = document.querySelector('section#form .users-input button');

logo.addEventListener('click', () => {
    window.location.href = './index.html';
});

function makeEmbed(args){
    console.log(args)
    let tempStr = args.toString();
    if(tempStr.includes('.')) return tempStr;

    let tempArr = tempStr.split('');

    if(tempArr.length == 9){
        tempArr.splice(3, 0, ',')
        tempArr.splice(7, 0, ',')
    } else if(tempArr.length == 8){
        tempArr.splice(2, 0, ',')
        tempArr.splice(6, 0, ',')
    } else if(tempArr.length == 7){
        tempArr.splice(1, 0, ',');
        tempArr.splice(5, 0, ',');
    } else if(tempArr.length == 6){
        tempArr.splice(3, 0, ',');
    } else if(tempArr.length == 5){
        tempArr.splice(2, 0, ',');
    } else if(tempArr.length == 4){
        tempArr.splice(1, 0, ',');
    }

    let result = tempArr.join('')
    return result;
}

const getImage = (coin) => {
    return fetch(`https://api.coingecko.com/api/v3/coins/${coin}`)
        .then(response => response.json())
        .then(response => response.image.small)
        .catch("failed to fetch data.")
};

const loading = () => {
    result.innerHTML = `<h2 class="crypto">Loading ...</h2>
                        <p class="price">Loading ...</p>`;
};

getPrice.addEventListener('click', async function() {
    loading();

    const crypto = cryptoName.value.toLowerCase();
    const curr = currency.value.toLowerCase();
    const img = await getImage(crypto);

    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${curr}`)
        .then(response => response.json())
        .then(response => {
            let cryps = Object.entries(response);
            let getPrice = Object.entries(cryps[0][1]);
            let price = getPrice[0][1];

            result.innerHTML = `<img src=${img}><h2 class="crypto">${crypto.toUpperCase()}</h2>
                                <p class="price">${curr.toUpperCase()} ${makeEmbed(price)}</p>`;
        })
        .catch("Failed to fetch data")

    
});
