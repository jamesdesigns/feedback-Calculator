let sel = document.getElementById('selectCalc');
// let newCalcType = sel.options[sel.selectedIndex];

let rangeSlider = document.getElementById('sliderRange');
let output = document.getElementById("demo");
output.innerHTML = rangeSlider.value;

rangeSlider.oninput = function() {
    output.innerHTML = this.value;
}


function getSelectedOption(sel) {
    let opt;
    for(let i = 0, len = sel.options.length; i < len; i++) {
        opt = sel.options[i];
        if (opt.selected === true) {
            break;
        }
    }
    return opt;
}

let opt = getSelectedOption(sel);
console.log(opt.value);
console.log(opt.text);


function calculateNumbers() {
    // const 
}


 
