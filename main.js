let clients = ['Mary', 'Jack', 'Daniela', 'Olga'];
function joinWithFor(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        if (i < arr.length - 1) {
            result += ", ";
        }
    }
    return result;
}
console.log(joinWithFor(clients));

function joinWithJoin(arr){
    return arr.join(", ");
}
console.log(joinWithJoin(clients));

const cards = [
    'card-1',
    'card-2',
    'card-3',
    'card-4',
    'card-5',
];

const cardToRemove = cards.splice(2, 1);
const cardToInsert = cards.splice(4, 0, 'card-6');
const cardToUpdate = cards.splice(3, 1, 'card-update-4');
console.log(cards);
