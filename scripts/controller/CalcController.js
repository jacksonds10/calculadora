class CalController {
    constructor() {
        this._locate = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dataEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this.initialize();
    }

    initialize() {
        setInterval(() => {
            this.displayDate = this.currentDate.toLocaleDateString(this._locate);
            this.displayTime = this.currentDate.toLocaleTimeString(this._locate);
        }, 1000); // Atualiza a cada segundo
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }
    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get displayDate() {
        return this._dataEl.innerHTML;
    }
    set displayDate(value) {
        this._dataEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }
}
