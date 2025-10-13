import {Szamitogep} from "./szamitogep.js";
let alapsSzamitogep = new Szamitogep(1024, false);
let szamitogep2 = new Szamitogep(2048, false);

console.log(alapsSzamitogep.kapcsol());
console.log(alapsSzamitogep.programMasol(800));
console.log(alapsSzamitogep.programMasol(400));
console.log(alapsSzamitogep.memoria);
console.log(alapsSzamitogep.allapot);

console.log(szamitogep2.kapcsol());
console.log(szamitogep2.programMasol(1));
console.log(szamitogep2.memoria);
console.log(szamitogep2.allapot);