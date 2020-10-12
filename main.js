    new Vue({
        el: '#app',
        data: {
         niveau : 'CE1',
         selected: '',
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
          //    optimisation du txt avec le niveau sélectionné pour 
      //    concaténer le texte dans txt en +
      //   
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
                //    optimisation du txt avec le niveau sélectionné pour 
      //    concaténer le texte dans txt en +
      textmoyenne: function(){
         return "moyenne de la classe :" + this.selected;  
          },
      //      mdpOk: function(){
      //      return this.moyenne ;
      //   }
          
         }     
            })
 