<template>
    <div class="popular-cat">
        <div class="popular-text">
       
                <h6>Popular Categories</h6>
            <a href="#">View All</a>
            
            
        </div>
        <div class="popular-container">
            <div class="popular-inner">
                <img src="../assets/Images/pcategories.png" alt="">
                <div class="popular-box">
                    <p>CEILING LAMPS</p>
                </div>
            </div>
            <div class="popular-inner-1">
                <img src="../assets/Images/chanderlier.png" alt="" >
                <div class="popular-box">
                    <p>CHANDERLIER</p>
                </div>
            </div>
            <div>
            </div>
        </div>

    </div>


</template>

<script>
export default {
   

}
</script>

<style scoped>
.popular-cat{
    margin: 3rem 0rem;
    margin-left: 8rem;
    
    
}
.popular-text{
    display: flex;
    text-align: left;
    gap: 15px;
}
.popular-text>h6{
    font-size: 25px;
}
.popular-text>a{
    color: #f4811f;
}
.popular-container{
    display: flex;
    gap: 8rem;
    overflow: hidden;
    
    
}
.popular-inner{
    position: relative;
    width: 60%;
    text-align: left;
    margin-top: 18px;

}
.popular-inner-1{
    position: relative;
   width: 50%;
    text-align: left;
    margin-top: 18px;
   
    
}
.popular-box{
    position: absolute;
    left: 9%;
    bottom: 9%;
    width: 150px;
    background-color: white;
    border-radius: 5px;
    text-align: center;
    color: #f4811f;
    padding-top: 10px;
}






@media (min-width: 913px) and (max-width: 1024px) {
    .popular-cat{
        margin: 5rem 2rem;
    }
    .popular-inner>img{
        width: 550px;
    }
    .popular-inner-1>img{
        width: 450px;
    }
    .popular-text{
        justify-content: space-between;
    }
    .popular-text>a{
        text-decoration: underline;
    }
}
@media (min-width:821px) and (max-width: 912px) {
    .popular-cat{
        margin: 5rem 2rem;
    }
    .popular-inner>img{
        width: 620px;
    }
    .popular-inner{
    position: relative;
    text-align: left;
    margin-top: 18px;

}
.popular-inner-1 {
    position: relative;
    width: 50%;
    text-align: left;
    margin-top: 18px;
    margin-left: 6rem;
}

    .popular-inner-1>img{
        width: 510px;
    }
    .popular-text{
        justify-content: space-between;
    }
    .popular-text>a{
        text-decoration: underline;
    }
    .popular-container{
    display: flex;
    gap: 3rem;
    overflow: hidden;
    
    
}
}
@media (min-width: 769px) and (max-width: 820px) {
    .popular-cat{
        margin: 5rem 2rem;
    }
    .popular-inner-1{
        display: none;
    }
    .popular-inner>img{
        width: 720px;
    }
}
@media (min-width: 541px) and (max-width: 768px) {
    .popular-cat{
        margin: 3rem 2rem;
    }
    .popular-inner-1{
        display: none;
    }
}
@media (min-width: 431px) and (max-width: 540px) {
    .popular-cat{
        margin: 1rem 2rem;
    }
    .popular-inner-1{
        display: none;
    }
    .popular-inner>img{
        width: 540px;
}
}
@media (min-width:415px) and (max-width: 430px) {
    .popular-cat{
        margin: 1rem 2rem;
        width: 370px;
        
    }
    .popular-text{
        display: flex;
        padding: 0;
        justify-content: space-between;
        
        
    }
    .popular-text>a{
        margin-right: 3rem;
    }
    .popular-inner>img{
        width: 150px;
        
    }
    .popular-container{
        display: flex;
        gap: 35px;
        padding-bottom: 20px;
        
        
    }
    .popular-box{
        background: transparent;
        bottom: -30%;
        color: black;
    }
    .popular-box>p{
        text-align: left;
        font-size: 13px;
    }
    .popular-inner-1>img{
        width: 130px;
    }
}
@media (min-width:376px) and (max-width: 414px) {
    .popular-cat{
        margin: 1rem 2rem;
        width: 350px;
    }
    .popular-text{
        display: flex;
        padding: 0;
        justify-content: space-between;
        
        
    }
    .popular-text>a{
        margin-left: 3px;
    }
    .popular-inner>img{
        width: 150px;
        
    }
    .popular-container{
        display: flex;
        gap: 35px;
        padding-bottom: 20px;
        
        
    }
    .popular-box{
        background: transparent;
        bottom: -30%;
        color: black;
    }
    .popular-box>p{
        text-align: left;
        font-size: 13px;
    }
    .popular-inner-1>img{
        width: 130px;
    }
}
@media only screen and (max-width: 375px) {
    .popular-cat{
        margin: 1rem 2rem;
        
    }
    .popular-text{
        display: flex;
        padding: 0;
        justify-content: space-between;
        
        
    }
    .popular-text>h6{
    font-size: 18px;
}
    .popular-text>a{
        margin-left: 3px;
    }
    .popular-inner>img{
        width: 160px;
        
    }
    .popular-container{
        display: flex;
        gap: 35px;
        padding-bottom: 20px;
        
        
    }
    .popular-box{
        background: transparent;
        bottom: -20px;
        color: black;
    }
    .popular-box>p{
        text-align: left;
        font-size: 13px;
    }
    .popular-inner-1>img{
        width: 130px;
    }
}

</style>