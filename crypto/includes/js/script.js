var getJSON = function(url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    
    xhr.onload = function() {
    
        var status = xhr.status;
        
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    
    xhr.send();
};

getJSON('https://koinex.in/api/ticker',  function(err, data) {
    
    if (err != null) {
        console.error(err);
    } 
    else {
        
        var bitcoinprice = `${data.prices.BTC}`
        $("#bitcoin-price").html(bitcoinprice);

        var bitcoinmax = `${data.stats.BTC.max_24hrs}`
        $("#bitcoin-max").html(bitcoinmax);

        var bitcoinmin = `${data.stats.BTC.min_24hrs}`
        $("#bitcoin-min").html(bitcoinmin);




        var etheriumprice = `${data.prices.ETH}`
        $("#etherium-price").html(etheriumprice);

        var etheriummax = `${data.stats.ETH.max_24hrs}`
        $("#etherium-max").html(etheriummax);

        var etheriummin = `${data.stats.ETH.min_24hrs}`
        $("#etherium-min").html(etheriummin);




        var rippleprice = `${data.prices.XRP}`
        $("#ripple-price").html(rippleprice);

        var ripplemax = `${data.stats.XRP.max_24hrs}`
        $("#ripple-max").html(ripplemax);

        var ripplemin = `${data.stats.XRP.min_24hrs}`
        $("#ripple-min").html(ripplemin);




        var litecoinprice = `${data.prices.LTC}`
        $("#litecoin-price").html(litecoinprice);

        var litecoinmax = `${data.stats.LTC.max_24hrs}`
        $("#litecoin-max").html(litecoinmax);

        var litecoinmin = `${data.stats.LTC.min_24hrs}`
        $("#litecoin-min").html(litecoinmin);




        var bitcoincashprice = `${data.prices.BCH}`
        $("#bitcoincash-price").html(bitcoincashprice);

        var bitcoincashmax = `${data.stats.BCH.max_24hrs}`
        $("#bitcoincash-max").html(bitcoincashmax);

        var bitcoincashmin = `${data.stats.BCH.min_24hrs}`
        $("#bitcoincash-min").html(bitcoincashmin);



    }
});



        
