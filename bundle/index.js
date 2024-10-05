"use strict";
// // VARIABLE
// let myName: string = "typescript";
// let myPhone: number = +6281293034489;
// let myAge: number = 23;
// let isMarried: boolean = true;
function createIntel(processor) {
    console.log(`
    ---------------------------------------------------
    Terimakasih ${processor.brand} 🖤
    ---------------------------------------------------
    Anda Telah Membuat Processor Dengan Detail Berikut :
    Nama Base Model : ${processor.baseModel}
    Nama Model : ${processor.modelName}
    UKuran Clock : ${processor.clockSpeed}
    Total Core : ${processor.coreTotal}
    Tahun Rilis : ${processor.yearOfRelease}
    Turbo Boost Enable ? ${processor.turboBoost}
    `);
}
function createAmd(processor) {
    console.log(`
    ---------------------------------------------------
    Terimakasih ${processor.brand} 🖤
    ---------------------------------------------------
    Anda Telah Membuat Processor Dengan Detail Berikut :
    Nama Base Model : ${processor.baseModel}
    Nama Model : ${processor.modelName}
    UKuran Clock : ${processor.clockSpeed}
    Total Core : ${processor.coreTotal}
    Tahun Rilis : ${processor.yearOfRelease}
    Precision Boost Enable ? ${processor.precisionBoost}
    `);
}
const corei5 = {
    brand: "Intel",
    baseModel: "Core i5",
    modelName: "i5-10400F",
    clockSpeed: 3.6,
    coreTotal: 4,
    yearOfRelease: 2021,
    turboBoost: true,
};
const corei3 = {
    brand: "Intel",
    baseModel: "Core i3",
    modelName: "i3-12400F",
    clockSpeed: 3.2,
    coreTotal: "Quad Core",
    yearOfRelease: 2023,
    turboBoost: false,
};
const amdRyzen5 = {
    brand: "Amd",
    baseModel: "Ryzen 5",
    modelName: "R5-5600G",
    clockSpeed: 4.2,
    coreTotal: 2,
    yearOfRelease: 2022,
    precisionBoost: true,
};
const amdRyzen7 = {
    brand: "Amd",
    baseModel: "Ryzen 7",
    modelName: "R7-5800HX",
    clockSpeed: 4.2,
    coreTotal: "Octa Core",
    yearOfRelease: 2024,
    precisionBoost: true,
};
createIntel(corei5);
createIntel(corei3);
createAmd(amdRyzen5);
createAmd(amdRyzen7);
