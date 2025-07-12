"use client";
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuComponent from './MenuComponent';
// import Link from 'next/link';

export default function Home({Component, pageProps}) {
  return (
    <Provider store={store}>   
       <MenuComponent/>
    </Provider>
  );
}
