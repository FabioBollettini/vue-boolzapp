/**
 * 
 * VUE BOOLZAPP
 */

const app = new Vue(
    {
        el: "#app",
        // Elenco contatti
        data: {
            user: {
                name: 'Fabio',
                avatar: '_io',
            },
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },
                    ],
                },
            ],
            indexContacts: 0,
            newMex: "",
            search: "",
        },
        methods: {
            
            // Cambiamento indice profilo al click
            setFriendContact(index) {
                this.indexContacts = index;
            },

            // Aggiunta messaggio
            addMex() {
                
                if(this.newMex !== "") {
                    this.contacts[this.indexContacts].messages.push({
                        date: "999",
                        message: this.newMex,
                        status: 'sent',
                    });

                    this.newMex = "";
                    this.$refs.mexInput.focus(); 

                    // Risposta automatica
                    setTimeout(() => {
                       this.contacts[this.indexContacts].messages.push({
                           date: "999",
                           message: "ok",
                           status: "received",
                       }) 
                    }, 1000);
                };

            },

            // // Search
            // searchContact() {
            //     this.contacts.forEach(contact => {
                    
            //         if( contact.name.includes(this.search)) {
            //             contact.visible == true;
            //         } else {
            //             contact.visible == false;
            //             console.log(contact.visible)
            //         }

            //         this.search = "";
            //     })
            // }
            // filteredList () {
            //     return this.contacts.filter(contact => {
            //         return contact.name.toLowerCase().includes(this.search.toLowerCase())
            //     })
            // }
        }
        
    }
    
    );