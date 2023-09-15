
let grant_type="client_credentials&client_id=pjvH5pFXDLqWJl0XtA1v&client_secret=GGnqlY5p2VIUsK1fiV7unoGuIztDdQ99m6T2Rtfh&scope=cep%20cnpj%20nfse"
    

fetch('https//auth.nuvemfiscal.com.br/nuvemfiscal/oauth/token HTTP/1.1', {
    method: 'POST',
    
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': '91',
        


    },
    body: JSON.stringify({ "id": 78912 })
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))