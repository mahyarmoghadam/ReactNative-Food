import { FontAwesome } from '@expo/vector-icons';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Asset.loadAsync([
          require("../assets/images/Breakfast/breakfast1.png"),
          require("../assets/images/Breakfast/breakfast2.png"),
          require("../assets/images/Breakfast/breakfast3.png"),
          require("../assets/images/Breakfast/breakfast4.png"),
          require("../assets/images/Breakfast/breakfast5.png"),
          require("../assets/images/Breakfast/breakfast6.png"),

          require("../assets/images/Dinner/dinner1.png"),
          require("../assets/images/Dinner/dinner2.png"),
          require("../assets/images/Dinner/dinner3.png"),
          require("../assets/images/Dinner/dinner4.png"),
          require("../assets/images/Dinner/dinner5.png"),
          require("../assets/images/Dinner/dinner6.png"),

          require("../assets/images/lunch/lunch1.png"),
          require("../assets/images/lunch/lunch2.png"),
          require("../assets/images/lunch/lunch3.png"),
          require("../assets/images/lunch/lunch4.png"),
          require("../assets/images/lunch/lunch5.png"),
          require("../assets/images/lunch/lunch6.png"),
        
        ]);

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
