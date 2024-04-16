"use strict";

function testScope() {
    {
        var x1 = "var";
        let x2 = "let";
        const x3 = "const";
    }

    console.log(x1); // Выводит "var"
    console.log(x2); // Ошибка
    console.log(x3); // Ошибка
}

testScope();
