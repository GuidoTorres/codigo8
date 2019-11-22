let getclimaByCiudad = async (ciudad) =>{

    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=a0f485a49eb1127e8769e955eb753c75`;

    let response = await fetch(url);
    let miJson = await response.json();
    return miJson;
}




getclimaByCiudad("Arequipa,pe").then( json =>{

    console.log(json);
    
})