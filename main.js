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
            let ticket_price = distance * priceKm;

            //calcolo del prezzo del biglietto nei vari casi

            let tariffa = "Tariffa standard";

            if(age == "minorenne") {
                ticket_price -= (ticket_price * 20 / 100);
                tariffa = "Tariffa Minorenni";
            } else if (age == "over65") {
                ticket_price -= (ticket_price * 40 / 100);
                tariffa = "Tariffa Over 65";
            }
            

            //faccio comparire la sezione "il tuo ticket"

            let your_Ticket = document.getElementById("your-ticket");
            your_Ticket.classList.remove("d-none"); 
            
            //adesso inserisco tutti i dati nel biglietto

            //nome
            document.getElementById("passenger-name").innerHTML = name;

            //tipo di tariffa
            document.getElementById("tariffa").innerHTML = tariffa;

            //costo biglietto
            document.getElementById("ticket-price").innerHTML = ticket_price.toFixed(2);

            //numero carrozza
            document.getElementById("num-carrozza").innerHTML = 

            















        }
    );