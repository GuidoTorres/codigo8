let url = "http://127.0.0.1:5000/";

// consumiendo una api con fetch
// y el verbo get
fetch(url).then((response) =>{
    console.log(response);
    
    return response.text();
}).then((mensaje)=>{

    console.log(mensaje);
    
}) 