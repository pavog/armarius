import PakoDataProcessor from "./PakoDataProcessor.js";
import pako from "pako";

export default class InflateDataProcessor extends PakoDataProcessor {
    /**
     * @inheritDoc
     */
    initPako() {
        this.pako = new pako.Inflate({raw: true});
        this.pako.onData = this.onData.bind(this);
    }
}

