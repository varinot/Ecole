    new Vue({
        el: '#app',
        data: {
         niveau : 'CE1',
         selected: '',
         eleve : //tableau d eleve
                     
                        [//a chaque index un objets contenant nom et note d eleves 
                                {
                                    nom : 'Daniel',
                                    note : [10,6,12]
                                },
                        
                                {
                                    nom : 'marc',
                                    note : [6,9,15]
                                },
                        
                                {
                                    nom : 'antoine',
                                    note : [14,14,17]
                                }
                        ]
                    ,
          notation1 : 0,
          notation2 : 0,
          notation3 : 0,
          mdpOk: false,
         mdp : "totordirecteur", 
         txt: 'moyenne générale de la classe :',
         moyenne: 0, 
         somme: 0,
         },
        methods: 
        {

         }     
            })
 