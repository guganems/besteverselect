class BestEverSelect {
    constructor(id, lang = "EN") {
        switch (lang) {
            case "EN": this.choose = "Choose"; break;
            case "KA": this.choose = "აირჩიეთ"; break;
        }
        this.id = id;
        this.init();
    }
    init() {
        this.getData();
        let element = document.getElementById(this.id);
        this.drawSelectbox(element);
        document.getElementById ("selector").addEventListener("click", () =>  {
            document.getElementById("dropDownContent").classList.toggle("shitty_active")
        });
        document.getElementById('search').addEventListener('keyup', function () {
            let searchValue = this.value;
            let lis = document.getElementsByClassName('shitty_li');
            for (let option of lis) {
                if (!option.innerText.includes(searchValue)) {
                    option.style.display = "none";
                }
                else {
                    option.style.display = "";
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
        // element.style.display = "none";
        let data = "";
        let id = this.id;
        for (let entry of this.data) {
            data += `<li class="shitty_li" data-selectid="${this.id}" data-value="${entry.value}" onclick="ShittyUtils.selectedDropDown(this)">${entry.text}</li>`;
        }
        let input = `
                <div class="shitty_selector-container">
                    <div class="shitty_selector" id="selector">${this.choose}</div>
                    <div class="shitty_dropdown-content" id="dropDownContent">
                        <div class="shitty_list-block">
                            <div class="shitty_search-block">
                                <input type="text" name="search" id="search" class="shitty_search">
                            </div>
                            <ul class="shitty_list-ul">
                                ${data}
                            </ul>
                        </div>
                    </div>
                </div>
        `;
        element.insertAdjacentHTML('beforebegin', input);
    }
}
class ShittyUtils {
    static selectedDropDown(element) {
        let id = element.dataset.selectid;
        document.getElementById("selector").innerHTML = element.innerHTML;
        document.getElementById("dropDownContent").classList.toggle("shitty_active");
        document.getElementById(id).value = element.dataset.value;
    }
}
