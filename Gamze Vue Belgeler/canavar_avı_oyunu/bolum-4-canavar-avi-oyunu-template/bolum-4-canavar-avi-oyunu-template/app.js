new Vue({
    el:"#app",
    data:{

        player_heal:100,
        monster_heal:100,
        game_is_on:false

    },
    methods:{

        start_game: function(){
            this.game_is_on=true;

        },

        attack: function(){

            var point= Math.ceil(Math.random()*10); 
            /*Math.ceil fonksiyonu ondalık değil integer değer alabilmek için kullanılıyor; normalde math.random fonksiyonu ondalıklı sayı döndürür.*/

            //"this.monster_heal= this.monster_heal-point" alttaki kısaltılmış kodun uzun hali.
            this.monster_heal-=point;
            this.monster_attack();

            
            
        },

        special_attack: function(){
            var point= Math.ceil(Math.random()*25);
            this.monster_heal-=point;
            this.monster_attack();
            

        },

        heal_up: function(){
            var point= Math.ceil(Math.random()*20);
            this.player_heal+=point; //İlk yardım olduğu için can arttıracak.
            this.monster_attack();
            

        },

        give_up: function(){

            this.player_heal=0; //vazgeçti.
            

        },
        monster_attack: function(){
            var point= Math.ceil(Math.random()*15);  //*10 - *15 yazmamızın nedeni kimin daha çok değer kaybedeceğini belirlemek. Üretilen random sayıyı büyütüp küçültebiliyoruz.
            this.player_heal-=point;
        }


    },
    watch:{
     player_heal: function(value){
         if(value<=0){
             this.player_heal=0;
         }
         else if (value>=100) {
             this.player_heal=100;
             
         }

     },
     monster_heal: function(value){
         if(value<=0){
             this.monster_heal=0;
         }
         else if(value>=100){ //aslında bu son iki satıra gerek yok çünkü zaten  oyunun başı hariç canavarın canının 100 ün üzerine çıkmasına olanak yok.
             this.monster_heal=100;
         } 

     }   
    }
})