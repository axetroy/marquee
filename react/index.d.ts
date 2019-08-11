import * as React from "react";
export interface MarqueePropsInfo {
    className?: string;
    style?: React.CSSProperties;
    /**
     * stop scroll when hover on it. Defaults to `false`
     */
    pauseOnHover?: boolean;
}
export interface MarqueeStateInfo {
}
declare class Marquee extends React.Component<MarqueePropsInfo, MarqueeStateInfo> {
    private timer;
    constructor(props: MarqueePropsInfo);
    componentDidMount(): void;
    start(): void;
    pause(): void;
    private _scroll2Left;
    private _onmouseEnter;
    private _onmouseLeave;
    render(): JSX.Element;
}
export default Marquee;
export { Marquee };
