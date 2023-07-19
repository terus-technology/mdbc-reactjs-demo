import './App.css';
import { useState } from 'react';

function App() {

  const [code, setCode] = useState('');
  const [token, setToken] = useState('');
  const [iframe, setIframe] = useState('');
  
  const url = {
    authorize : "https://enterprisedev.mdbriefcasetest.com/auth/passwordless/openid/index.php/authorize",
    access_token: "https://enterprisedev.mdbriefcasetest.com/auth/passwordless/openid/index.php/access_token",
    resource: "https://enterprisedev.mdbriefcasetest.com/auth/passwordless/openid/index.php/resource"
  };

  const config = {
    clientId : "u5xyWerx4E6yr8Nq",
    clientSecret: "4c89da4d2eeeb3b38def008e3db3ff96",
    email: "usertest1@teruselearningcouk.onmicrosoft.com",
    resource: "https://enterprisedev.mdbriefcasetest.com/course/view.php?id=10"
  }

  /**
   * This part should be done in backend side
   */
  const GetAuthorizationCode = (e) => {
      let requestOptions = {
        method : 'GET',
        redirect: 'follow'
      };

      const parameter = {
        response_type : 'code',
        client_id: config.clientId,
        scope: 'basic email',
        response_mode: 'json'
      };

      const request_url = url.authorize + '?' + new URLSearchParams(parameter).toString();

      fetch(request_url, requestOptions)
        .then(response => response.json())
        .then(result => setCode(result.code))
        .catch(error => console.error(error));
  }

  /**
   * This part should be done in backend side
   */
  const GetAccessToken = (e) => {
    let headers = new Headers();
    headers.append("Content-type", "application/x-www-form-urlencoded");

    const parameter = {
      code: code,
      grant_type: 'authorization_code',
      client_id: config.clientId,
      client_secret: config.clientSecret
    };

    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: new URLSearchParams(parameter),
      redirect: 'follow'
    };

    fetch(url.access_token, requestOptions)
      .then(response => response.json())
      .then(result => setToken(result.access_token))
      .catch(error => console.error(error));
  }

  const EmbedResource = (e) => {
    let headers = new Headers();
    headers.append("Authorization", `Bearer ${token}`);

    const parameter = {
      email : config.email, // can use email or user as parameter
      response_mode: 'json', // optional but recommended to avoid the cors and cross domain cookies problem
      wantsurl: config.resource // can use wantsurl or courseid as parameter
    };

    var requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow'
    };

    const request_url = url.resource + '?' + new URLSearchParams(parameter).toString();

    fetch(request_url, requestOptions)
      .then(response => response.json())
      .then(result => setIframe(result.loginurl))
      .catch(error => console.error(error));
  }

  const ReloadPage = (e) => {
    window.location.reload();
  }

  return (
    <div className="App">
      <div className="container">
        <button onClick={GetAuthorizationCode}>
            Get Authorization Code
          </button>
          <button onClick={GetAccessToken} disabled={!code}>
            Get Access Token
          </button>
          <button onClick={EmbedResource} disabled={!token}>
            Embed Resource
          </button>
          <button onClick={ReloadPage} disabled={!token}>
            Reload
          </button>
      </div>
      <div className='container'>
        <iframe src={iframe} className='container-iframe'></iframe>
      </div>
    </div>
  );
}

export default App;
