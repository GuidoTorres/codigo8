let url = "https://api.openweathermap.org/data/2.5/forecast?q=Arequipa,pe&appid=a0f485a49eb1127e8769e955eb753c75";

// consumiendo una api con fetch
// y el verbo get
fetch(url).then((response) =>{

    return response.json();
}).then((objJson)=>{

    console.log(objJson);
    
}) 


fetch("https://reqres.in/api/users", {

    method: 'POST',
    headers:{

        "Content-type" : "application/json"
    },

    body: JSON.stringify({name: 'Guido', job: 'Programmer'})

}).then((response) =>{

    return response.json();
}).then(data => {

    console.log(data);
    
})