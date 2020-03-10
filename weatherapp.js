
   fetch(`https://api.darksky.net/forecast/6ae88f5694af9bb2c90727cfaa0acab6/37.8267,-122.4233`)
       .then(response => response.json())
       .then(data => {
           console.log(data)
       })

       fetch('homework1.json').then(response => {
        return response.json();
     })
     .then(myJson => {
        console.log(myJson);
     })
     .catch(error => {
        console.error('Error:', error);
     })
     

     navigator.geolocation.getCurrentPosition(function(position) {  
        console.log(position.coords.latitude, position.coords.longitude); 
    });
    


   