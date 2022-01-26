const button = document.getElementById("generate-button");

button.addEventListener("click",
        function() {


            //Prendo i dati di input e ne estraggo il valore
            let name = document.getElementById("name").value;
            console.log(name);

            let distance = document.getElementById("distance").value;
            console.log(distance);

            let age = document.getElementById("age").value;
            console.log(age);

            //definisco i prezzi dei biglietti e il costo al km

            const priceKm = 0.21;
            let fullTicket = distance * priceKm;

            //calcolo del prezzo del biglietto nei vari casi

            if(age == "minorenne") {
                let ticket20 = fullTicket - (fullTicket * 20 / 100);
            } else if (age == "over65") {
                let ticket40 = fullTicket - (fullTicket * 40 / 100);
            } else {
                fullTicket = fullTicket;
            }

            //faccio comparire la sezione "il tuo ticket"
            
            















        }
    );