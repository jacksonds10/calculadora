class CalController {
    constructor() {
        this._displayCalc = "0";
        this.currentDate;
        this.initialize();
       
    }
    initialize(){
        console.log('passou');
    
        let displayCalcEl=document.querySelector("#display");
        let dateEl=document.querySelector("#data");
        let timeCalcEl=document.querySelector("#hora");

        displayCalcEl.innerHTML='4567';       
        dateEl.innerHTML='01/01/2025';
        timeCalcEl.innerHTML='00:00';





    }

    get displayCalc(){
        return this._displayCalc;
    }
 
    set displayCalc(valor){
        this._displayCalc=valor;
    }  

    get dataAtual(){
        return this.currentDate;
    }
 
    set dataAtual(valor){
        this.currentDate=valor;
    }

}