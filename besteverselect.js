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


        // function addOptions() {
        //     let info = [...d];
        //     // console.log(info);

        //     let selectDropdown = document.getElementById('test');
        //     var selectDropdownIndex = selectDropdown.options[selectDropdown.selectedIndex].value;
        //     if (selectDropdownIndex != '') {
        //         info = info.filter(each => {
        //             // console.log(each);
        //             if (each.value === selectDropdownIndex) {
        //                 console.log();
        //             }
        //         });
        //     }
        // }
        // addOptions();





    
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
            data += `<li class="li" data-value="${entry.value}" onclick="selectedDropDown(this)">${entry.text}</li>`;
        }
        let input = `
                <span>
                    <input style="display: none;" type="text" id="shittySelectInput"/>
                </span>
                <div class="list-block">
                    <div class="search-block">
                        <input type="text" name="search" id="search" class="search">
                    </div>
                    <ul class="list-ul">
                        ${data}
                    </ul>
                </div>
        `;
        element.insertAdjacentHTML('beforebegin', input);

    }    
}
function selectedDropDown (element) {
    document.getElementById("selector").innerHTML = element.innerHTML;
    document.getElementById("dropDownContent").classList.toggle("active");
    let dropDown = document.getElementById("selectbox").value;

    document.getElementById("selectbox").value = element.dataset.value;
}
document.getElementById ("selector").addEventListener("click", () =>  {
    document.getElementById("dropDownContent").classList.toggle("active")
});