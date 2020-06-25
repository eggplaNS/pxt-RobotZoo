namespace ロボット動物園 {
    /**
     * 動きサンプル1：
     * 左右交互に少しずつ進む
     */
    //% block
    export function _ちょこちょこ() {
        pins.servoWritePin(AnalogPin.P15, 48);
        pins.servoWritePin(AnalogPin.P16, 90);
        basic.pause(200);
        pins.servoWritePin(AnalogPin.P15, 90);
        pins.servoWritePin(AnalogPin.P16, 122);
        basic.pause(200);
        pins.servoWritePin(AnalogPin.P15, 90);
        pins.servoWritePin(AnalogPin.P16, 90);
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P16, 0);
    }

    /**
     * 動きサンプル2：
     * 緩やかにカーブしながら前に進む
     */
    //% block
    export function _すいすい() {
        
    }

    /**
     * 動きサンプル3：
     * ちょっと進んでちょっと止まる
     */
    //% block
    export function _つんつん() {
        pins.servoWritePin(AnalogPin.P15, 48);
        pins.servoWritePin(AnalogPin.P16, 122);
        basic.pause(350);
        pins.servoWritePin(AnalogPin.P15, 90);
        pins.servoWritePin(AnalogPin.P16, 90);
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P16, 0);
        basic.pause(150);
    }

    /**
     * 動きサンプル4
     * 前に進んでどこかを向き、また前に進む
     */
    //% block
    export function _ふらふら() {
        
    }

    /**
     * 動きサンプル5：
     * 少し進んであたりを見る
     */
    //% block
    export function _きょろきょろ() {
        pins.servoWritePin(AnalogPin.P15, 48);
        pins.servoWritePin(AnalogPin.P16, 122);
        basic.pause(500);

        pins.servoWritePin(AnalogPin.P15, 48);
        pins.servoWritePin(AnalogPin.P16, 48);
        basic.pause(150);
        pins.servoWritePin(AnalogPin.P15, 90);
        pins.servoWritePin(AnalogPin.P16, 90);
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P16, 0);
        basic.pause(200);

        pins.servoWritePin(AnalogPin.P15, 122);
        pins.servoWritePin(AnalogPin.P16, 122);
        basic.pause(300);
        pins.servoWritePin(AnalogPin.P15, 90);
        pins.servoWritePin(AnalogPin.P16, 90);
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P16, 0);
        basic.pause(200);

        pins.servoWritePin(AnalogPin.P15, 48);
        pins.servoWritePin(AnalogPin.P16, 48);
        basic.pause(150);
        pins.servoWritePin(AnalogPin.P15, 90);
        pins.servoWritePin(AnalogPin.P16, 90);
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P16, 0);
        basic.pause(100);
    }

    /**
     * 動きサンプル6:
     * 勢いよく前に進む
     */
    //% block
    export function _ぐんぐん() {
        pins.servoWritePin(AnalogPin.P15, 0);
        pins.servoWritePin(AnalogPin.P16, 180);
    }
}