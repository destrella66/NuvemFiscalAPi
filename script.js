

//    // URL da API
// const apiUrl = 'https://auth.nuvemfiscal.com.br/nuvemfiscal/oauth/token';

// // Dados a serem enviados no corpo da solicitação
// const requestBody = new URLSearchParams({
//   grant_type: 'client_credentials',
//   client_id: 'pjvH5pFXDLqWJl0XtA1v', // Substitua pelo seu Client ID
//   client_secret: 'GGnqlY5p2VIUsK1fiV7unoGuIztDdQ99m6T2Rtfh', // Substitua pelo seu Client Secret
//   scope: 'cep cnpj nfse'
// });

const tokenUrl = 'https://auth.nuvemfiscal.com.br/oauth/token';
const clientId = 'wV9NMf45k4XZmTvZjhbc';
const clientSecret = 'u3ss9mG17e8Z5xA3cHDnPS2paqQarkBq7vjhEmFb';
const scope = 'cep cnpj nfse';
const token = 'eyJ0eXAiOiJKV1QiLCJraWQiOiIwMWIwNDFkMWQ2MTU0NjA0NzNkMWI1NGFhOGRlNGQ1NyIsImFsZyI6IlJTMjU2In0.eyJzY29wZSI6ImNlcCBjbnBqIG5mc2UiLCJqdGkiOiJjYmM4MTVkYS1jM2VmLTRkM2EtYmU2Ni00YThmYTk3MzZkNmMiLCJodHRwczpcL1wvbnV2ZW1maXNjYWwuY29tLmJyXC90ZW5hbnRfaWQiOiIzYTBkYWE4Yi1kYjBhLTRkNzAtYTJjNy1kOTY2Y2QzZWE3YjYiLCJpc3MiOiJodHRwczpcL1wvYXV0aC5udXZlbWZpc2NhbC5jb20uYnIiLCJhdWQiOiJodHRwczpcL1wvYXBpLnNhbmRib3gubnV2ZW1maXNjYWwuY29tLmJyXC8iLCJleHAiOjE2OTczMzQ0OTAsImlhdCI6MTY5NDc0MjQ5MCwiY2xpZW50X2lkIjoid1Y5Tk1mNDVrNFhabVR2WmpoYmMifQ.CUhT4zVHKed4bHMoth81tn40OkqT2POryUI2UdA3tWLN7ORbB-2gWuYdGK_-3DAwcPm2qsrVSjS3AOzAdxO8XIXG8LNUnVym1uBRt-87fuQzK3Ne6pFHH64eKXN1yv35j6A-va0_IjCD6wzVPSCJTa685Dak659o49RPE9ZFgYBcIt8BtV4m3j5c_4splWZLYhHL5x1nflAyQTrIkWC5cGlPUSiLgNos33aWJvn4goQlJXMpImHsE640JwMQnym6SyIxPAao33jb6GfndoO5w-vP4j98TR8F4BP4zYOJbiiQLL43KoV_eM77MmuAyO9CKrr4-MeC_FY9osPWvGTIlg';

// Dados da solicitação
const requestData = {
  grant_type: 'client_credentials',
  client_id: clientId,
  client_secret: clientSecret,
  scope: scope
};

// Configuração da solicitação
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: Object.keys(requestData).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(requestData[key])).join('&')
};

// Faz a solicitação POST
fetch(tokenUrl, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na solicitação: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    const accessToken = data.access_token;
    console.log(`Token de Acesso: ${accessToken}`);
  })
  .catch(error => {
    console.error(`Erro: ${error.message}`);
  });

  const accessToken = 'eyJ0eXAiOiJKV1QiLCJraWQiOiIwMWIwNDFkMWQ2MTU0NjA0NzNkMWI1NGFhOGRlNGQ1NyIsImFsZyI6IlJTMjU2In0.eyJzY29wZSI6ImNlcCBjbnBqIG5mc2UiLCJqdGkiOiIyMDlkMDJjOC04NTYzLTQxOTUtOGJmZS05ZGRjMDFkMmNmMjkiLCJodHRwczpcL1wvbnV2ZW1maXNjYWwuY29tLmJyXC90ZW5hbnRfaWQiOiIzYTBkYWE4Yi1kYjBhLTRkNzAtYTJjNy1kOTY2Y2QzZWE3YjYiLCJpc3MiOiJodHRwczpcL1wvYXV0aC5udXZlbWZpc2NhbC5jb20uYnIiLCJhdWQiOiJodHRwczpcL1wvYXBpLnNhbmRib3gubnV2ZW1maXNjYWwuY29tLmJyXC8iLCJleHAiOjE2OTczMzIxNjUsImlhdCI6MTY5NDc0MDE2NSwiY2xpZW50X2lkIjoid1Y5Tk1mNDVrNFhabVR2WmpoYmMifQ.eom_2tFBRMiy2STjwG1Vf9GuYs0N2aY_jcYF4U4-txJclSqbC99XDLcI0sYr5taQjebknVXUIYwwvxag1n1AjKbsmwDrBesSf3dlOlsW-OqZI4Zu7R_T4RA-lTJXK7LM4ALCRk07VNGSdaHsNTxOJtNiGh0uwtkwM-ycGlTW59BXDZE0-qgxB_IVl2yvIT3WjoiOsADARdvt4RQ85_AGNOMc0MbiuXdbCrWBC-j_DclCg8EfSPK6VxjIo7PBO5eISjbA_MqvrChFQ0IJLFbnh-5BB5z1aKZypz2eVghHcsBDrI0mxVG97rzVwd0-t-6WkdG8Vf8NyLFxHMQPo-L1Sg';

const apiUrl = 'https://api.nuvemfiscal.com.br/v1/cep/{28940000}'; // Replace {cep} with the actual CEP


fetch(apiUrl, {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`API request failed with status: ${response.status}`);
    }
  })
  .then((data) => {
    // Handle the successful response data here (e.g., display the address)
    console.log(data);
  })
  .catch((error) => {
    console.error('Error making API request:', error);
  });
