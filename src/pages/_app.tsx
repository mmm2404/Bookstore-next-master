import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { PersistGate } from 'redux-persist/integration/react';
import setupStore,{ persistor } from "../store/store";
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Provider store={setupStore()}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  ) 
}
