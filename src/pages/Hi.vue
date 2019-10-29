<template>
    <div>
        <p>{{greeting}} world!</p>
        <img class="img_1" src="../../images/cat.png">
        <img class="img_1" :src="cat_2">
        <!-- <div @click="greet">{{add}}</div> -->
    </div>
</template>
<script>
    import cat_2 from "../../images/cat.png";
    import country from "../../lib/country";
    
    console.error('i m a error');
    console.log(process.env.NODE_ENV);
    console.log('country: ', country);
    export default {
        data:function(){
            return{
                greeting:"hello",
                cat_2:cat_2,
                // add:Math.numAdd(1,1)
            }
        },
        methods:{
            greet(){

            }
        }
    }
</script>

<style lang="less" scoped> 

p { 
  color: red;
  font-size: 2em;
  text-align: center;
}

.img_1{
    transition:width 2s;
    width: 8em;
    height: 8em;
}
.img_1:hover{
    width: 10em;
   
}

</style>
