import { Suspense } from 'react';
import { Spinner } from 'react-bootstrap';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import { routes } from './utils/helpers/app-routes';
// import CryptoJS from 'crypto-js';
// import * as utf8 from 'utf8';
// import Cryptr from 'cryptr';

function App() {

  // var encrypted_data = "M0dLQlpYeUhDenZ1RGdLd3hIdnljOC9DVDI2S3VCdjhtbEdVNmxYRjJCWlc4UmJRMVd1YzEzWWpnMUt5ZTVQRy0taThKNGZGSXFtNWdONWtEQi8xbUVkUT09--7a3a6bc5b06b1600811e3c6606be50387213ca2d"

  // const cryptr = new Cryptr('\x9B\xF5\xAB\xDC\xBE\xDE\xA1}\x19\n\x1D\x01\xA7\xB7Y\xE3#\xB4Tu\xFC\x16i~\xCC\x1F\xAE\xF6GV(U');
  // const plaintext = cryptr.decrypt(encrypted_data);
  // console.log(plaintext);

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((it, index) => {
          const Component = it.component;
          if (it.public) {
            console.log(it.component,'yes')
            return (
              <Route
                key={`publicRouteOf${index}`}
                path={it.route}
                element={
                  <Suspense fallback={<Spinner animation={'border'} />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          } else {
            console.log('NextComponent')
            return (
              <Route
                key={`privateRouteOf${index}`}
                path={it.route}
                element={
                  <Suspense fallback={<Spinner animation={'border'} />}>
                    <Component />
                  </Suspense>
                }
              >
                {it.children?.map((nit, jIndex) => {
                  const NestedComponent = nit.component;
                  return (
                    <Route
                      key={`nestedPrivateRoute${index}${jIndex}`}
                      path={nit.route}
                      element={
                        <Suspense fallback={<Spinner animation={'border'} />}>
                          <NestedComponent />
                        </Suspense>
                      }
                    />
                  );
                })}
              </Route>
            );
          }
        })}
      </Routes>

      {/* <Routes>
        {routes.map((it, index) => {
          const Component = it.component;
          return (
            <Route
              key={`publicRouteOf${index}`}
              path={it.route}
              element={
                <Suspense fallback={<Spinner animation={'border'} />}>
                  <Component />
                </Suspense>
              }
            />
          );
        })}

      </Routes> */}
      {/* <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<SignUpwithProfile />}>
          {<Route path="/signup" element={<SignUp />} />}
          {<Route path="/login" element={<Login />} />}
        </Route>

      </Routes> */}
    </BrowserRouter>

    // let algorithm = 'aes-256-gcm';
    // let enc_password = 'k15XSjo1f6GKBfu0WbZkyC5DJgbsJyd9';
    // var encrypted_data = "b97w12PqzKbDTERdcQioexJ5f7Ehp68=--roKunPTIYhRp1U+e--on3Oq9irN2szOpSoVMnFvg=="


    // function digest_and_decrypt(digest: string) {
    //     let [encryptedValue, iv] = digest.split('--');
    //     let decipher = crypto.createDecipheriv(algorithm, enc_password, Buffer.from(iv, 'base64'));
    //     let dec = decipher.update(encryptedValue, 'base64', 'utf8');
    //     console.log(dec)
    // }

    // digest_and_decrypt(encrypted_data)

  );
}

export default App;
