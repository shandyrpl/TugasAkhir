let P = null;
let Q = null;
let operation = null;

function setP(value) {
    P = value;
    document.getElementById("valP").innerText = P;
    calculateResult();
}

function setQ(value) {
    Q = value;
    document.getElementById("valQ").innerText = Q;
    calculateResult();
}

function setOperation(op) {
    operation = op;
    calculateResult();
}

function calculateResult() {
    if (P === null || (Q === null && operation !== 'NOT') || !operation) return;

    let result;
    switch (operation) {
        case 'AND':
            result = P && Q;
            break;
        case 'OR':
            result = P || Q;
            break;
        case 'IMPLIES':
            result = !P || Q;
            break;
        case 'BICONDITIONAL':
            result = P === Q;
            break;
        case 'NOT':
            result = !P;
            break;
        default:
            result = null;
    }
    document.getElementById("valResult").innerText = result;
}
