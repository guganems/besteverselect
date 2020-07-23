class BestEverSelect {
    constructor(id) {
        this.id = id;
        this.init();
    }
    init() {
        this.getData();
        let element = document.getElementById(this.id);
        this.drawSelectbox(element);
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
    getData() {
        let data = [];
        let obj = {};
        let element = document.getElementById(this.id);
        for (let option of element.options) {
            obj = {
                text: option.text,
                value: option.value
            };
            data.push(obj);
        }
        this.data = data;
    }
    drawSelectbox(element) {
        let data = "";
        for (let entry of this.data) {
            data += `<li data-value="${entry.value}">${entry.text}</li>`;
        }
        let input = `
            <div>
                <span><input style="display: none;" type="text" id="shittySelectInput"/></span>
                <span>
                    <ul>
                        ${data}
                    </ul>
                </span>
            </div>
        `;
    }
    addInput(element) {
        let input = `<input style="display: none; border-radius: 10px;" type="text" id="shittySelectInput"/>`;
        element.insertAdjacentHTML('beforebegin', input);
    }
}