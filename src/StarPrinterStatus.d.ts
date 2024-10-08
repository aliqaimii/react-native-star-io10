import { StarPrinterStatusDetail } from "./StarPrinterStatusDetail";
export declare class StarPrinterStatus {
    _hasError: boolean;
    _coverOpen: boolean;
    _drawerOpenCloseSignal: boolean;
    _paperEmpty: boolean;
    _paperNearEmpty: boolean;
    _detail: StarPrinterStatusDetail;
    _reserved: Map<string, any | undefined>;
    get hasError(): boolean;
    get coverOpen(): boolean;
    get drawerOpenCloseSignal(): boolean;
    get paperEmpty(): boolean;
    get paperNearEmpty(): boolean;
    get detail(): StarPrinterStatusDetail;
    get reserved(): ReadonlyMap<string, any | undefined>;
}
