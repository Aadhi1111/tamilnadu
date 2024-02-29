async function get_data(){
    var res = await fetch("https://data.covid19india.org/v4/min/data.min.json");
    var res_data = await res.json();
    var div = document.createElement("div");
    div.className = "cards";
    div.innerHTML = `<div class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header"><b>TamilNadu</b></div>
    <div class="card-body text-primary">
      <h5 class="card-title">Chennai</h5>
      <p class="card-text">Confirmed:${chennai_data.confirmed}</p>
      <p class="card-text">Deceased:${chennai_data.deceased}</p>
      <p class="card-text">Recovered:${chennai_data.recovered}</p>
      <p class="card-text">Tested:${chennai_data.tested}</p>
      <p class="card-text">Vaccinated1:${chennai_data.vaccinated1}</p>
      <p class="card-text">Vaccinated2:${chennai_data.vaccinated2}</p>

      </div>
  </div>`
  document.body.append(div);
}

get_data();





















// function getlist(){
//     return new Promise((resolve,reject)=>reject("THis is rejected"));
// }

// function getdata(){
//     return new Promise((resolve,reject)=>resolve("This is resolved"));
// }

// async function foo(){
//     try {
//         let res = await getlist();
//         console.log(`this is statement after the error block ${res}`);
//         let data = await getdata();
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// foo();






















// async function bar(lat,lon){
//     var final = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=92ffb8d2aed8a55730c918a92984fa75`);
//     var final1 = await final.json();
//     console.log(final1.main.temp);
// }


// async function foo(){
//     let res = await fetch("https://restcountries.com/v3.1/all");
//     let res1 = await res.json();
//     for(var i=0;i<res1.length;i++){
//         var position = res1[i].latlng;
//         bar(...position);
//     }
    
// }

// foo()