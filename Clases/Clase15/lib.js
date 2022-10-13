const edCalculadora =  (function () {
    const version = '1.0.0';

    function sumar (a, b) {
        return a + b;
    }

    function restar (a, b) {
        return a - b;
    }

    function dividir (a, b) {
        return a / b;
    }

    function multiplicar (a, b) {
        return a * b;
    }

    return {
        sumar: sumar,
        restar,
        dividir,
        multiplicar
    };
})();