
function removeDuplicates(array) {
    return Array.from(new Set(array));
}


document.getElementById('duplicateForm').addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    let input = document.getElementById('inputArray').value;

   
    let array = input.split(',').map(item => item.trim());


    let result = removeDuplicates(array);


    document.getElementById('output').innerHTML = `<p>Original array: [${array.join(', ')}]</p><p>Array without duplicates: [${result.join(', ')}]</p>`;
});
