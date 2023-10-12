const tempField= document.querySelector(".weather1");
const cityField= document.querySelector(".weather2 p");
const dateFiled= document.querySelector(".weather2 span");
const emojiField= document.querySelector(".weather3 img");
const weatherField= document.querySelector(".weather3 span");
const form= document.querySelector("form");
const searchField=document.getElementById("search-bar");


let target="Chennai";
const fetchData = async(target) =>{
 try
 {
    const url = `https://api.weatherapi.com/v1/current.json?key=d30cfa526a614c0f9d482405230610 &q=${target}`;
    const response= await fetch(url);
    const data= await response.json();
    const {
        current:{temp_c,condition:{icon,text},last_updated},
        location:{name,country,region}
    } = data;
    const t= String(temp_c)+"°C";
    const l= String(name)+" , "+String(region)+" , "+String(country);
     updateDom(t,l,text,icon,last_updated);
 }
 catch(e)
 {
    alert("Please enter a correct Location !");
 }
};
function updateDom(temperature,city,w_field,icon,date_new)
{
    const exactTime=date_new.split(" ")[1];
    const exactDate= date_new.split(" ")[0];
    const exactDay= getDay(new Date(exactDate).getDay());
    const exactSamay= `${exactTime} - ${exactDay} ${exactDate}`;
    dateFiled.innerText=exactSamay;
    tempField.innerText=temperature;
    cityField.innerText=city;
    weatherField.innerText=w_field;
    emojiField.src=icon;

}
fetchData(target);
function getDay(num)
{
    switch (num) {
        case 0:   
        return "Sunday";
       case 1:
        return "Monday";  
      case 2:
        return "Tuesday";
      case 3:
         return "Wednesday";
      case 4:
         return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";        
        default:
          return  "oh! shit";
    }
};
form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    fetchData(searchField.value);
    
}

)