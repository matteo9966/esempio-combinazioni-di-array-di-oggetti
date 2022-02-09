import { k_combinations } from './index2.js';
const lista = [{ evento: 1 }, { evento: 2 }, { evento: 2 },{evento:1},{evento:1},{evento:1}];
const lista2 = [{ evento: 1 }, { evento: 1 }, { evento: 1 },{evento:1}];
const lista3 = []
// :)

const combs = k_combinations(lista3,4)

const result = combs.reduce((result,comb)=>{
  
  return result + comb.reduce((prev,curr)=>{
    return curr.evento * prev
  },1)
  
},0)


// const colonnetotali = lista.forEach(array=>{
//   const weight = array.reduce((prev,cur)=>{
//     return 
//   },0)
// })


console.log(combs)
console.log(result)