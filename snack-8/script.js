const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

const classML = students.find((studentEl) => { //quello che conosco é il nome dello studente "marco lanci", quindi uso il metodo find per trovare quell'elemento
  const studML = studentEl.name === 'Marco Lanci'
  return studML
})

console.log(classML.class); //stampo in consol solo la classe dell'elemento trovato
//console.log(classML);
