// Cálculo utilizando eval
// Função fábrica
function createCalculator(){
    return {

        display: document.querySelector('.display'),

        start(){
            this.clickButtons();
            this.pressEnter();
        },

        pressEnter(){
            this.display.addEventListener("keyup", (event) => {
                if (event.keyCode === 13) {
                    this.equals();
                }
            });
        },

        clearDisplay(){
            this.display.value = ' ';
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1);
        },

        equals(){
            let calculation = this.display.value;

            try {
                calculation = eval(calculation);

                if(!calculation) {
                    alert('Conta inválida!');
                    return;
                }

                this.display.value = String(calculation);

            } catch(err) {
                alert('Conta inválida!');
                return;
            }
        },

        clickButtons(){
            document.addEventListener("click", (event) => {
                const element = event.target;

                if(element.classList.contains('btn-num') || element.classList.contains('btn-operator')) {
                    this.btnForDisplay(element.innerText);
                }

                if(element.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(element.classList.contains('btn-del')) {
                    this.deleteOne();
                }

                if(element.classList.contains('btn-eq')) {
                    this.equals();
                }
            });  
        },

        btnForDisplay(value){
            this.display.value += value;
        }, 

    };
}

const calculator = createCalculator();
calculator.start();