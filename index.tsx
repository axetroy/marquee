import * as React from "react";
import Marquee from "./react";

interface AppPropsInfo {}

interface AppStateInfo {}

export default class App extends React.Component<AppPropsInfo, AppStateInfo> {
  constructor(props: AppPropsInfo) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>React Version</h2>
        <Marquee style={{ width: 300 }}>
          Parcel can take any type of file as an entry point, but a HTML or
          JavaScript file is a good place to start. If you link your main
          JavaScript file in the HTML using a relative path, Parcel will also
          process it for you, and replace the reference with a URL to the output
          file.
        </Marquee>
      </div>
    );
  }
}
