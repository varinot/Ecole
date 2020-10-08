    new Vue({
        el: '#app',
        data: {
         niveau : ' ',
          eleve : ['Daniel', 'Eric', 'Carole'],
          notation1 : 0,
          notation2 : 0,
          notation3 : 0,
          mdpOk: false,
         mdp : "totordirecteur", 
         txt: 'moyenne générale de la classe :',
         moyenne: 0, 
         somme: 0,
         },
        methods: {
          presentation1: function(){
             return this.eleve[0] 
          },
          augmente1: function(){
             this.notation1++;
             this.somme++;             }, 
          diminue1: function(){
             this.notation1--;
             this.somme--;},
          presentation2: function(){
             return this.eleve[1]
             },
          augmente2: function(){
          this.notation2++;
          this.somme++;},
          diminue2: function(){
             this.notation2--;
             this.somme--; },
          presentation3: function(){
             return this.eleve[2]
             },
          augmente3: function(){
          this.notation3++;
          this.somme++;},
          diminue3: function(){
             this.notation3--;
             this.somme--; },
      //   },
      //   // il faut récupérer les contenus de notations en tableau
      //    // pour effectuer le calcul de la moyenne
      //   cpmoyenne: function(somme){
      //      moyenne === somme/3;
      //      return this.moyenne;
      //   }
          
         }     
            })
 