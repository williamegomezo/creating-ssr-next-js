import "styles/index.scss";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import makeStore from "store/index";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps, store }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.getInitialProps = async appContext => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default withRedux(makeStore)(MyApp);
