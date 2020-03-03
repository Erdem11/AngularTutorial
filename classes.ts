class Ev {
    private _odaSayisi: number;
    _pencereSayisi: number;
    _kat: number;

    constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
        this._odaSayisi = odaSayisi;
        this._kat=kat;
        this._pencereSayisi = pencereSayisi;
    }

    yemekYe() {
        console.log(this._kat + " katlı evde yemek yiyildi")
    }

}

let ev = new Ev(3, 4, 5)
ev.yemekYe()

console.log(ev._kat)

class Kisi{
    private _isim:string;

    
    public get isim() : string {
        return "Sayın " + this._isim;
    }
    
    
    public set isim(ad: string) {
        this._isim = ad;
    }
    

    kaydet(){
        console.log("Kişi kaydedildi")
    }
}

class Musteri extends Kisi{
    satisYap(){
        console.log("Satış yapıldı")
    }
}

class Personel extends Kisi{
    maasOde(){
        console.log("Maaş ödendi")
    }
}

let musteri = new Musteri();
musteri.isim = "Erdem";
console.log(musteri.isim)
musteri.kaydet();
musteri.satisYap();

let personel = new Personel();
personel.kaydet();
personel.maasOde();