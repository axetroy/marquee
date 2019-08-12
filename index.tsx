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

        <div>
          <div>
            <div className="help">Default options.</div>
            <Marquee ref="marquee" style={{ width: 300 }}>
              Parcel can take any type of file as an entry point, but a HTML or
              JavaScript file is a good place to start. If you link your main
              JavaScript file in the HTML using a relative path, Parcel will
              also process it for you, and replace the reference with a URL to
              the output file.
            </Marquee>
            <button onClick={() => (this.refs.marquee as Marquee).pause()}>
              Pause
            </button>
            <button onClick={() => (this.refs.marquee as Marquee).start()}>
              Start
            </button>
          </div>

          <div>
            <div className="help">
              with <code>pauseOnHover = true</code> options
            </div>
            <Marquee style={{ width: 300 }} pauseOnHover={true}>
              Parcel can take any type of file as an entry point, but a HTML or
              JavaScript file is a good place to start. If you link your main
              JavaScript file in the HTML using a relative path, Parcel will
              also process it for you, and replace the reference with a URL to
              the output file.
            </Marquee>
          </div>
        </div>

        <hr />
      </div>
    );
  }
}
