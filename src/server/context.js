import React from "react";

const FirebaseContext = React.createContext();

export default FirebaseContext;

export const cosumerFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);
