// bug.js
import * as Linking from 'expo-linking';

const getDeepLink = async () => {
  let initialUrl = await Linking.getInitialURL();
  if (initialUrl == null) {
    console.error('Initial URL is null!');
    return null; // Handle the null case
  }
  console.log('Initial URL:', initialUrl);
  return initialUrl;
};

export default getDeepLink;

// bugSolution.js
import * as Linking from 'expo-linking';
import { useEffect, useState } from 'react';

const useDeepLink = () => {
  const [deepLink, setDeepLink] = useState(null);

  useEffect(() => {
    const getInitialUrl = async () => {
      let initialUrl = await Linking.getInitialURL();
      setDeepLink(initialUrl);
    };
    getInitialUrl();

    const linkSubscription = Linking.addEventListener('url', (event) => {
      setDeepLink(event.url);
    });
    return () => { 
      linkSubscription.remove();
    };
  }, []);

  return deepLink;
};

export default useDeepLink;