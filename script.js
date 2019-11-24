let sel = document.getElementById('selectCalc');
// let newCalcType = sel.options[sel.selectedIndex];


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


 
