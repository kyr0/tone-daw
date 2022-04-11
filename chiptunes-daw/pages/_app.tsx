import React from 'react';
import { AppProps } from 'next/app';
import { motion } from 'framer-motion';
import '@styles/globals.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Component {...pageProps} />
    </motion.div>
  </div>
);

export default App;
