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
            document.getElementById("num-carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;

            //codice CP
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min) + min);
              }
            document.getElementById("cp_code").innerHTML = getRandomInt(90000, 99999);

            //Imposto gli eventi per il click su tasto annulla

            const cancel = document.getElementById("cancel-button");

            cancel.addEventListener("click",
                function() {

                    //nascondo il biglietto
                    let your_Ticket = document.getElementById("your-ticket");
                    your_Ticket.classList.add("d-none");

                    //setto i valori iniziali a zero
                    document.getElementById("name").value = "";
                    document.getElementById("distance").value = "";
                    document.getElementById("age").value = "Clicca per selezionare età";
                }
            )















        }
    );