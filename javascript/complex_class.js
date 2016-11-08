"use strict";

const EPSILON = 0.0001;

class Complejo {
    constructor(real, imag) {
        this.r = real;
        this.i = imag;
    }
    
    modulo() {
        return Math.sqrt(this.r * this.r + this.i * this.i);
    }
    
    argumento() {
        return Math.atan2(this.i, this.r);
    }

    static desdePolar(mod, arg) {
        var real = mod * Math.cos(arg),
            imag = mod * Math.sin(arg);
        return new Complejo(real, imag);
    }
    
    static iguales(c1, c2) {
        return (Math.abs(c1.r - c2.r) < Complejo.EPSILON)
            && (Math.abs(c1.i - c2.i) < Complejo.EPSILON);
    }    
}


