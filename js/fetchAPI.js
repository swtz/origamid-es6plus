const data = fetch('https://www.outlook.com');
// const dataAllowed = fetch('https://viacep.com.br/ws/01001000/json/');

data.then(response => {
  console.log(response.type);
  /* 
  [on console]:
    Access to fetch at 'https://www.outlook.com/' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

    Isso significa que o endereço não permite que seja acessado seu conteúdo.
    É diferente no caso do endereço da variável 'dataAllowed' que é uma
    API que permite o acesso de um servidor externo ao dele.
  */
})