class BestEverSelect {
    constructor(id) {
        this.id = id;
        this.init();
    }
    init() {
        let element = document.getElementById(this.id);
        this.addInput(element);
        element.addEventListener('click', function () {
            document.getElementById('shittySelectInput').style.display = "block";

        });
        document.getElementById('shittySelectInput').addEventListener('keyup', function () {
            let searchValue = document.getElementById('shittySelectInput').value;
            let options = element.options;
            for (let option of options) {
                if (!option.innerText.includes(searchValue)) {
                    option.style.display = "none";
                }
                else {
                    option.style.display = "";
                }
            }
            for (let option of options) {
                if (option.style.display !== "none") {
                    element.value = option.value;
                    return;
                }
            }
        });
    }
    addInput(element) {
        let input = `<input style="display: none;" type="text" id="shittySelectInput"/>`;
        element.insertAdjacentHTML('beforebegin', input);
    }
}