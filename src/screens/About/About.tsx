import React, {useState, useRef, useCallback, useEffect} from 'react';
import {
  SafeAreaView,
  RefreshControl,
  ScrollView,
  BackHandler,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {auth} from '../../../config/firebase';
import {signOut} from 'firebase/auth';
import Header from '../../components/Header';

const App = () => {
  const [refresherEnabled, setEnableRefresher] = useState(true);
  const webViewRef: any = useRef();
  const [canGoBack, setCanGoBack] = useState(false);

  const handleBack = useCallback(() => {
    if (canGoBack && webViewRef.current) {
      webViewRef.current.goBack();
      return true;
    }
    return false;
  }, [canGoBack]);

  const handleScroll = (res: any) => {
    const yOffset = Number(res.nativeEvent.contentOffset.y);
    if (yOffset === 0) {
      setEnableRefresher(true);
    } else {
      setEnableRefresher(false);
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBack);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBack);
    };
  }, [handleBack]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flex: 1}}
        refreshControl={
          <RefreshControl
            refreshing={false}
            enabled={refresherEnabled}
            onRefresh={() => {
              webViewRef.current.reload();
            }}
          />
        }>
        <Header />
        <WebView
          source={{uri: 'https://www.acikrotaturizmrehberleri.com/tr3'}}
          onLoadProgress={event => setCanGoBack(event.nativeEvent.canGoBack)}
          ref={webViewRef}
          originWhitelist={['*']}
          onScroll={handleScroll}
          allowsInlineMediaPlayback
          javaScriptEnabled
          scalesPageToFit
          mediaPlaybackRequiresUserAction={false}
          javaScriptEnabledAndroid
          useWebkit
          startInLoadingState
          cacheEnabled
          allowsFullscreenVideo
          setBuiltInZoomControls
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
