    new Vue({
        el: '#app',
        data: {
         niveau : 'CP',
          eleve : ['Daniel', 'Eric', 'Carole'],
          notation1 : 0,
          notation2 : 0,
          notation3 : 0
         },
        methods: {
          presentation1: function(){
             return this.eleve[0] 
          },
          augmente1: function(){
             this.notation1++;
                          }, 
          diminue1: function(){
             this.notation1--;
             },
          presentation2: function(){
             return this.eleve[1]
             },
          augmente2: function(){
          this.notation2++;
        },
          diminue2: function(){
             this.notation2--;
             },
          presentation3: function(){
             return this.eleve[2]
             },
          augmente3: function(){
          this.notation3++;
        },
          diminue3: function(){
             this.notation3--;
             },
        }
    })
  // il faut récupérer les contenus de notations en tableau
 
// 
  function cpmoyenne(tableau) {
   tableau = cp;

   let n = tableau.length;
   let somme = 0;
   for (i = 0; i < n; i++) {
     somme += tableau[i];
   }
   let resultatcp = somme / n;
   return resultatcp;
 }      cpmoyenne(tableau);
 // la moyenne de classe est calculée sur la valeur des postes du tableau