const countryList = {
    EUR: "FR",
    USD: "US",
    JPY: "JP",
    BGN: "BG",
    CZK: "CZ",
    DKK: "DK",
    GBP: "GB",
    HUF: "HU",
    PLN: "PL",
    RON: "RO",
    SEK: "SE",
    CHF: "CH",
    ISK: "IS",
    NOK: "BV",
    HRK: "HR",
    RUB: "RU",
    TRY: "TR",
    AUD: "AU",
    BRL: "BR",
    CAD: "CA",
    CNY: "CN",
    HKD: "HK",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    KRW: "KR",
    MXN: "MX",
    MYR: "MY",
    NZD: "NZ",
    PHP: "PH",
    SGD: "SG",
    THB: "TH",
    ZAR: "ZA"
};
const url =
    "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_hOPUvxLkKPnjzMHBnJkmT53sS8eKJruIpApLUWUH"


let dropdowns = document.querySelectorAll('.dropdown select');
const btn = document.querySelector('form button');
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector('.message');

for (let selects of dropdowns) {
    for (country in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = country;
        newOption.value = country;
        //    to default selected INR
        if (selects.name === "to" && country === 'USD') {
            newOption.selected = 'selected';
        }
        // from default selected USD
        if (selects.name === "from" && country === 'INR') {
            newOption.selected = 'selected';
        }
        selects.append(newOption);
    }
    selects.addEventListener('change', (event) => {
        changeFlag(event.target);
    });
}

const changeFlag = (change) => {
    // change will give us selected options target change value
    const courencyCode = change.value;
    const countryCode = countryList[courencyCode];
    // accessing image through change
    const img = change.parentElement.querySelector('img');
    img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

// change on click btn
btn.addEventListener('click', (event) => {
    // donot refresh page on change
    event.preventDefault();
    // access amt
    let amount = document.querySelector('.amount input');
    let amountVal = amount.value;
    // handle negative
    if (amountVal <= 0 || amountVal === "") {
        // also display 1 if condition is true
        amountVal = 1;
        amount.value = "1";
    }
    // now modify url
    let Url = `${url}&base_currency=${fromCurr.value}&currencies=${toCurr.value}`;
    // function call
    fetching(Url, fromCurr.value, toCurr.value, amountVal);
});
// funcntion to cal and call
async function fetching(URL, fromCurrency, toCurrency, amt) {
    let response = await fetch(URL);
    let jsonData = await response.json();
    let data = jsonData.data;
    myCurrRate = data[toCurrency.toString()];
    let totalAmt = amt * myCurrRate;
    msg.innerText = `${amt} ${fromCurrency} = ${totalAmt} ${toCurrency}`
}


/*
demo url==> "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_hOPUvxLkKPnjzMHBnJkmT53sS8eKJruIpApLUWUH&base_currency=INR&currencies=USD"

output
{
    "data": {
        "INR": 83.7408666468
    }
}
*/