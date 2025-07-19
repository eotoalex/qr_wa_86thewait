"use client";

import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuComponent from './MenuComponent';
import  { Amplify }  from 'aws-amplify';
import amplifyConfig from './amplify-config';
import { generateClient } from 'aws-amplify/api';
import MyQRCode from './QRCodes/page';

Amplify.configure(amplifyConfig);
export const client = generateClient();

export default function Home({Component, pageProps}) {
  return (
    <Provider store={store}>   
       <MenuComponent/>
       {/* <MyQRCode/> */}
    </Provider>
  );
}
