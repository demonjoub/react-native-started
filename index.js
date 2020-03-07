/**
 * @format
 */
import React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import configureStore from "./src/store";
import AppNavigator from './src/navigator'
import { project } from "./src/config";

const store = configureStore(project.name);

const RNMyStyle = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNMyStyle);
