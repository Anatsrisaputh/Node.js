fetch('homework1.json').then(response => {
    return response.json();
 })
 .then(myJson => {
    console.log(myJson);
 })
 .catch(error => {
    console.error('Error:', error);
 })
 