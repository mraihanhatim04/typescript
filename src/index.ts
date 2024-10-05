// // VARIABLE
// let myName: string = "typescript";
// let myPhone: number = +6281293034489;
// let myAge: number = 23;
// let isMarried: boolean = true;

// console.log({ myName });
// console.log({ myPhone });
// console.log({ myAge });
// console.log({ isMarried });

// // ARRAY
// let myJob: string[];
// myJob = ["front-end", "back-end", "mobile", "devops", "designer"];

// console.log({ myJob });

// // TUPPLE ARRAY
// let biodata: [string, number, boolean];
// biodata = ["typescript", 2000, false];

// console.log({ biodata });

// // FUNCTION
// function create() {
//   return "typescript";
// }

// console.log(create());

// // ARROW FUNCTION
// const create2 = (): string => {
//   return "hallo world";
// };

// console.log(create2());

// ADDITION FUNCTION
// function add(x: number, y: number): string {
//   return `${x} ditambah ${y} hasilnya : ${x + y}`;
// }

// const result = add(20, 30);
// console.log(result);

// CASE STUDY
type CoreCount = 2 | 4 | 6 | 8 | 10 | 12;
type CoreName = "DualCore" | "QuadCore" | "OctaCore";
type Core = CoreCount | CoreName;
interface IProcessor {
  brand: string;
  baseModel: string;
  modelName: string;
  clockSpeed: number;
  coreTotal: Core;
  yearOfRelease: number;
}

interface Intel extends IProcessor {
  turboBoost: boolean;
}

interface AMD extends IProcessor {
  precisionBoost: boolean;
}

function createIntel(processor: Intel): void {
  console.log(
    `
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
    `
  );
}
function createAmd(processor: AMD): void {
  console.log(
    `
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
    `
  );
}

const corei5: Intel = {
  brand: "Intel",
  baseModel: "Core i5",
  modelName: "i5-10400F",
  clockSpeed: 3.6,
  coreTotal: 4,
  yearOfRelease: 2021,
  turboBoost: true,
};
const corei3: Intel = {
  brand: "Intel",
  baseModel: "Core i3",
  modelName: "i3-12400F",
  clockSpeed: 3.2,
  coreTotal: "QuadCore",
  yearOfRelease: 2023,
  turboBoost: false,
};

const amdRyzen5: AMD = {
  brand: "Amd",
  baseModel: "Ryzen 5",
  modelName: "R5-5600G",
  clockSpeed: 4.2,
  coreTotal: 2,
  yearOfRelease: 2022,
  precisionBoost: true,
};
const amdRyzen7: AMD = {
  brand: "Amd",
  baseModel: "Ryzen 7",
  modelName: "R7-5800HX",
  clockSpeed: 4.2,
  coreTotal: "OctaCore",
  yearOfRelease: 2024,
  precisionBoost: true,
};

createIntel(corei5);
createIntel(corei3);
createAmd(amdRyzen5);
createAmd(amdRyzen7);
