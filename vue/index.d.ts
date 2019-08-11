import Vue from "vue";
export interface Data {
    timer: number | null;
}
declare const _default: import("vue").VueConstructor<Data & {
    _scroll2Left(): void;
    start(): void;
    pause(): void;
    _onmouseEnter(): void;
    _onmouseLeave(): void;
} & {
    pauseOnHover: boolean;
} & Vue>;
export default _default;
