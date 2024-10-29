const search =async ()=>{
    console.log(cnname.value);
    const response=await fetch(`https://restcountries.com/v3.1/name/${cnname.value}?fullText=true`)
    response.json()
    .then((data)=>{
        let common = data[0].name.common
        console.log(common);

        let official = data[0].name.official
        console.log(official);

        let capital = data[0].capital[0]
        console.log(capital);

        let borders = data[0].borders
        console.log(borders);

        let area = data[0].area
        console.log(area);

        let map = data[0].maps.googleMaps
        console.log(map);

        let time = data[0].timezones
        console.log(time);

        let continent = data[0].continents
        console.log(continent);

        let flag = data[0].flags.png
        console.log(flag);

        for(var cur in data[0].currencies){
            var cName = data[0].currencies[cur].name
            var cSymbol = data[0].currencies[cur].symbol
        }
        console.log(cName);
        console.log(cSymbol);
        

        let nationalLang = []
        for(var lang in data[0].languages){
            nationalLang.push(data[0].languages[lang])
        }
        console.log(nationalLang);

        details.innerHTML=`
        <img src="${flag}"> 
        
            <table class="country-table table table-bordered">
                <tr>
                    <th>Country</th>
                    <td>${common}</td> 
                </tr>
                <tr>
                    <th>Official Name</th>
                    <td>${official}</td> 
                </tr>
                <tr>
                    <th>Capital</th>
                    <td>${capital}</td> 
                </tr>
                <tr>
                    <th>Borders</th>
                    <td>${borders}</td> 
                </tr>
                <tr>
                    <th>Area</th>
                    <td>${area}</td> 
                </tr>
                <tr>
                    <th>Time</th>
                    <td>${time}</td> 
                </tr>
                <tr>
                    <th>Continent</th>
                    <td>${continent}</td> 
                </tr>
                <tr>
                    <th>Currency</th>
                    <td>${cName}, ${cSymbol}</td> 
                </tr>
                <tr>
                    <th>Languages</th>
                    <td>${nationalLang}</td> 
                </tr>
                <tr>
                    <th>Map</th>
                    <td><a href="${map}" target="_blank">${map}</a></td> 
                </tr>
            </table>
        `
    })
      
    
}