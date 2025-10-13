export class Szamitogep {

    constructor(memoria = 1024, allapot = false)   {
        this._memoria = memoria;
        this._allapot = allapot;
    }

    kapcsol(){
        this._allapot = !this._allapot;
        return this._allapot;
    }

    programMasol(szam){
        if (szam <= this._memoria){
            this._memoria = this._memoria - szam;
            return true;
        }
        else{
            return false;
        }
    }

    get memoria(){
        return this._memoria;
    }
    set memoria(_memoria){
        this._memoria = _memoria;
    }
    get allapot(){
        return this._allapot;
    }
    set allapot(_allapot){
        this._allapot = _allapot;
    }

}
