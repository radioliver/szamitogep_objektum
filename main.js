import {Szamitogep} from "./szamitogep.js";
let alapsSzamitogep = new Szamitogep(1024, false);
let szamitogep2 = new Szamitogep(2048, false);

console.log(`Számítógép be: ${alapsSzamitogep.kapcsol()}`);
console.log(`800 mb: ${alapsSzamitogep.programMasol(800)}`);
console.log(`Számítógép memória: ${alapsSzamitogep.memoria} mb`);
console.log(`500 mb: ${alapsSzamitogep.programMasol(500)}`);
console.log(`Számítógép allapot: ${alapsSzamitogep.allapot}`);

console.log(`\nSzámítógép be: ${szamitogep2.kapcsol()}`);
console.log(`1 mb: ${szamitogep2.programMasol(1)}`);
console.log(`Számítógép memória: ${szamitogep2.memoria} mb`);
console.log(`Számítógép allapot: ${szamitogep2.allapot}`);