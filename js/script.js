console.log('JS OK')
/*
Milestone 1 (DAY 1)
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato
Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite 
(es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
Milestone 5 - BONUS
●      Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
●      Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti
Consigli Utili:
non dimentichiamo di fare analisi sia per la struttura dati che per la grafica
procediamo a blocchettoni per evitare di avere poi problemi col CSS in fase avanzata
Cerchiamo di rispettare tutti i principi e le best practices viste finora (nomi di variabili e classi, centralizzazione ecc)
`
 toggleVisibility(visible){
            this.
        }
*/
const data = new Vue({
    el: '#root',
    data: {
        isTextShow: false,
        searchText: '',
        currentIndex: 0,
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },
        newMex: '',
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
        ]
    },
    methods: {
        addText(text, status) {
            const newMessage = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'), text: text, status: status,
            }
            this.contacts[this.currentIndex].messages.push(newMessage);
        },
        addMex() {
            if (!this.newMex) return;
            this.addText(this.newMex, 'sent')
            this.newMex = '';

            this.replyDelay();
        },
        replyDelay() {
            setTimeout(() => this.addText('ok', 'received'), 3000);
        },
        searchContacts() {
            const search = this.searchText.toLowerCase();
            const visibleContacts = this.contacts.map((contact) => {
                if (contact.name.toLowerCase().includes(search)) {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
                return contact;
            });
            this.contacts = visibleContacts;
        },
        deleteMex(index) {
            this.contacts[this.currentIndex].messages.splice(index, 1);
        },
    }
});





