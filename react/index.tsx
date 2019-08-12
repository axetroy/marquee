import * as React from "react";

const defaultCss: React.CSSProperties = {
  whiteSpace: "nowrap",
  overflow: "hidden"
};

export interface MarqueePropsInfo {
  className?: string;
  style?: React.CSSProperties;
  /**
   * stop scroll when hover on it. Defaults to `false`
   */
  pauseOnHover?: boolean;
}

export interface MarqueeStateInfo {}

class Marquee extends React.Component<MarqueePropsInfo, MarqueeStateInfo> {
  private timer: number | null | NodeJS.Timeout = null;

  constructor(props: MarqueePropsInfo) {
    super(props);

    this.state = {};
  }

  public componentDidMount(): void {
    const box = this.refs.box as HTMLElement;
    const text = this.refs.text as HTMLElement;

    const [textWidth, boxWidth] = [text.offsetWidth, box.offsetWidth];

    if (boxWidth > textWidth) {
      return;
    }

    this.start();
  }

  public start(): void {
    if (!this.timer) {
      this._scroll2Left();
    }
  }

  public pause(): void {
    clearTimeout(this.timer as number);
    this.timer = null;
  }

  private _scroll2Left() {
    const $box = this.refs.box as HTMLElement;
    const $text = this.refs.text as HTMLElement;

    const [textWidth] = [$text.offsetWidth, $box.offsetWidth];

    const m = ($text.style.transform || "").match(/-?\d+/);
    const offset: number = m ? +m[0] : 0;

    const style = $text.style;

    // if scroll all content. The reset position to the right
    if (offset < 0 && textWidth < -offset) {
      // @ts-ignore
      style.msTransform = `translateX(${$box.offsetWidth + 1}px)`; // for DAMN IE9
      style.transform = `translateX(${$box.offsetWidth + 1}px)`;
      this.timer = setTimeout(() => {
        clearTimeout(this.timer as number);
        this._scroll2Left();
      }, 1000);
    } else {
      // @ts-ignore
      style.msTransform = `translateX(${offset - 1}px)`; // for DAMN IE9
      style.transform = `translateX(${offset - 1}px)`;
      this.timer = setTimeout(() => {
        clearTimeout(this.timer as number);
        this._scroll2Left();
      }, 18);
    }
  }

  private _onmouseEnter() {
    const { pauseOnHover } = this.props;
    if (pauseOnHover) {
      this.pause();
    }
  }

  private _onmouseLeave() {
    const { pauseOnHover } = this.props;
    if (pauseOnHover) {
      this.start();
    }
  }

  render() {
    const { style, className, children } = this.props;

    return (
      <div
        style={{
          ...defaultCss,
          ...(style || {})
        }}
        className={className}
        ref="box"
        onMouseEnter={() => this._onmouseEnter()}
        onMouseLeave={() => this._onmouseLeave()}
      >
        <div ref="text" style={{ display: "inline-block" }}>
          {children}
        </div>
      </div>
    );
  }
}

export default Marquee;
export { Marquee };
