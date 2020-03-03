abstract class KrediBase {
    constructor() {
        
    }

    kaydet():void{
        console.log("Kaydedildi")
    }

    abstract hesapla():void;
}

class TuketiciKredisi extends KrediBase {
    constructor() {
        super();
    }

    hesapla(): void {
        console.log("Tüketici kredisine göre hesap yapıldı")
    }
}

class MortgageKredisi extends KrediBase {
    constructor() {
        super();
    }

    hesapla(): void {
        console.log("Konut kredisine göre hesap yapıldı")
    }

    baskaBirOperasyon():void{

    }
}

let tuketiciKredisi = new TuketiciKredisi();
tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();

let mortgageKredisi = new MortgageKredisi();
mortgageKredisi.hesapla();
mortgageKredisi.kaydet();

let kredi : KrediBase
kredi = new TuketiciKredisi();

kredi = new MortgageKredisi();

console.log("1")
