<template>
    <div class="shop-byspace">
        <div class="shop-byspace-container"> 
            <div>
            <h6>Shop By Space</h6>
            <a href="#">View All</a>
            </div>

        </div>
        
        <div>
            <p>Select the type of apartment you want to light up</p>
        </div>
        <div class="shopbyspacecontainer">

            <div class="sbs-contain">
                <img src="../assets/Images/Homeimage.png" alt="">
                <div class="sbs-inner">
                    <p>HOME</p>
                    
                </div>
            </div>
            <div class="sbs-contain">
                <img src="../assets/Images/Officeimage.png" alt="">
                <div class="sbs-inner">
                    <p>OFFICE</p>
                </div>
            </div>
            <div class="sbs-contain">
                <img src="../assets/Images/hotelimage.png" alt="">
                <div class="sbs-inner">
                    <p>HOTEL</p>
                </div>
            </div>
        </div>

    </div>

</template>

<script>

</script>

<style scoped>
.shop-byspace{
    width: 100%;
}
.shop-byspace-container{
    width: inherit;
    padding: 2rem 8rem;
    margin: 0;

}
.shop-byspace-container>div{
    display: flex;
    gap: 1rem;
    text-align: center;
}
.shop-byspace-container>div>h6{
    font-size: 25px;
    font-weight: 500;
}
.shop-byspace-container>div>a{
    color: orange;
}
.shop-byspace>div>p{
    padding: 0 8rem;
    font-weight: 400;
    font-size: 18px;
    color: black;
}
.shopbyspacecontainer{
    display: flex;
    margin: 1rem 8rem 1rem 8rem;
    gap: 2rem;
}
.sbs-contain>img{
    width: 340px;
    
}
.sbs-contain{
    position: relative;
}
.sbs-inner{
    border-radius: 5px;
    background-color: white;
    color: orangered;
    padding: 1rem;
    position: absolute;
    bottom: 9%;
    left: 9%;
    height: 50px;
}
.sbs-inner>p{
    text-align: center;
    
}
@media(max-width:1024px) {
    .shop-byspace{
    width: 100%;
}
.shop-byspace-container{
    width: inherit;
    padding: 2rem 2rem;
    margin: 0;

}
.shop-byspace-container>div{
    display: flex;
    gap: 1.5rem;
    text-align: center;
    align-items: center;
}
.shop-byspace-container>div>h6{
    font-size: 45px;
    font-weight: 500;
}
.shop-byspace-container>div>a{
    color: orange;
}
.shop-byspace>div>p{
    padding: 0 2rem;
    font-weight: 400;
    font-size: 35px;
    color: black;
}
.shopbyspacecontainer{
    display: flex;
    margin: 1rem 2rem 1rem 2rem;
    gap: 1rem;
}
.sbs-contain>img{
    width: 305px;
    
}
.sbs-contain{
    position: relative;
}
.sbs-inner{
    border-radius: 5px;
    background-color: white;
    color: orangered;
    padding: 1rem;
    position: absolute;
    bottom: 9%;
    left: 9%;
    height: 50px;
}
.sbs-inner>p{
    text-align: center;
    
}
}
@media(max-width:912px) {
    .shop-byspace{
    width: 100%;
}
.shop-byspace-container{
    width: inherit;
    padding: 2rem 2rem;
    margin: 0;

}
.shop-byspace-container>div{
    display: flex;
    gap: 1.5rem;
    text-align: center;
    align-items: center;
}
.shop-byspace-container>div>h6{
    font-size: 45px;
    font-weight: 500;
}
.shop-byspace-container>div>a{
    color: orange;
}
.shop-byspace>div>p{
    padding: 0 2rem;
    font-weight: 400;
    font-size: 35px;
    color: black;
}
.shopbyspacecontainer{
    display: flex;
    margin: 1rem 2rem 1rem 2rem;
    gap: 1rem;
}
.sbs-contain>img{
    width: 272px;
    
}
.sbs-contain{
    position: relative;
}
.sbs-inner{
    border-radius: 5px;
    background-color: white;
    color: orangered;
    padding: 1rem;
    position: absolute;
    bottom: 9%;
    left: 9%;
    height: 50px;
}
.sbs-inner>p{
    text-align: center;
    
}
}
@media(max-width:853px) {
    .shop-byspace{
    width: 100%;
}
.shop-byspace-container{
    width: inherit;
    padding: 2rem 2rem;
    margin: 0;

}
.shop-byspace-container>div{
    display: flex;
    gap: 1.5rem;
    text-align: center;
    align-items: center;
}
.shop-byspace-container>div>h6{
    font-size: 35px;
    font-weight: 500;
}
.shop-byspace-container>div>a{
    color: orange;
}
.shop-byspace>div>p{
    padding: 0 2rem;
    font-weight: 400;
    font-size: 28px;
    color: black;
}
.shopbyspacecontainer{
    display: flex;
    margin: 1rem 2rem 1rem 2rem;
    gap: 1rem;
}
.sbs-contain>img{
    width: 235px;
    
}
.sbs-contain{
    position: relative;
}
.sbs-inner{
    border-radius: 5px;
    background-color: white;
    color: orangered;
    padding: 1rem;
    position: absolute;
    bottom: 9%;
    left: 9%;
    height: 50px;
}
.sbs-inner>p{
    text-align: center;
    
}
}
@media(max-width:768px) {
    .shop-byspace{
    width: 100%;
}
.shop-byspace-container{
    width: inherit;
    padding: 2rem 2rem;
    margin: 0;

}
.shop-byspace-container>div{
    display: flex;
    gap: 1.5rem;
    text-align: center;
    align-items: center;
}
.shop-byspace-container>div>h6{
    font-size: 30px;
    font-weight: 500;
}
.shop-byspace-container>div>a{
    color: orange;
}
.shop-byspace>div>p{
    padding: 0 2rem;
    font-weight: 400;
    font-size: 23px;
    color: black;
}
.shopbyspacecontainer{
    display: flex;
    margin: 1rem 2rem 1rem 2rem;
    gap: 1rem;
}
.sbs-contain>img{
    width: 225px;
    
}
.sbs-contain{
    position: relative;
}
.sbs-inner{
    border-radius: 5px;
    background-color: white;
    color: orangered;
    padding: 1rem;
    position: absolute;
    bottom: 9%;
    left: 9%;
    height: 50px;
}
.sbs-inner>p{
    text-align: center;
    
}
}
@media (max-width:600px) {
    .shop-byspace{
    width: 100%;
}
.shop-byspace-container{
    width: inherit;
    padding: 1rem 2rem;
    margin: 0;

}
.shop-byspace-container>div{
    display: flex;
    gap: 1rem;
    text-align: center;
}
.shop-byspace-container>div>h6{
    font-size: 25px;
    font-weight: 500;
}
.shop-byspace-container>div>a{
    color: orange;
}
.shop-byspace>div>p{
    padding: 0 2rem;
    font-weight: 400;
    font-size: 18px;
    color: black;
}
.shopbyspacecontainer{
    display: flex;
    margin: 1rem 2rem 1rem 2rem;
    gap: 0.5rem;
}
.sbs-contain>img{
    width: 100px;
    
}
.sbs-contain{
    position: relative;
}
.sbs-inner{
    border-radius: 5px;
    background-color: white;
    color: orangered;
    padding: 0.5;
    position: absolute;
    bottom: 16%;
    left: 9%;
    height: 10px;
}
.sbs-inner>p{
    text-align: center;
    bottom: 16%;
    font-size: 10px;
    
}
}
@media (min-width:500px) and (max-width:541px) {
    .shop-byspace{
    width: 100%;
}
.shop-byspace-container{
    width: inherit;
    padding: 2rem 2rem;
    margin: 0;

}
.shop-byspace-container>div{
    display: flex;
    gap: 1rem;
    text-align: center;
}
.shop-byspace-container>div>h6{
    font-size: 25px;
    font-weight: 500;
}
.shop-byspace-container>div>a{
    color: orange;
}
.shop-byspace>div>p{
    padding: 0 2rem;
    font-weight: 400;
    font-size: 18px;
    color: black;
}
.shopbyspacecontainer{
    display: flex;
    margin: 1rem 2rem 1rem 2rem;
    gap: 1rem;
}
.sbs-contain>img{
    width: 150px;
    
}
.sbs-contain{
    position: relative;
}
.sbs-inner{
    border-radius: 5px;
    background-color: white;
    color: orangered;
    padding: 1rem;
    position: absolute;
    bottom: 9%;
    left: 9%;
    height: 50px;
}
.sbs-inner>p{
    text-align: center;
    
}
}
@media (max-width:375px) {
    .shop-byspace{
    width: 100%;
}
.shop-byspace-container{
    width: inherit;
    padding: 1rem 2rem;
    margin: 0;

}
.shop-byspace-container>div{
    display: flex;
    gap: 1rem;
    text-align: center;
}
.shop-byspace-container>div>h6{
    font-size: 25px;
    font-weight: 500;
}
.shop-byspace-container>div>a{
    color: orange;
}
.shop-byspace>div>p{
    padding: 0 2rem;
    font-weight: 400;
    font-size: 18px;
    color: black;
}
.shopbyspacecontainer{
    display: flex;
    margin: 1rem 2rem 1rem 2rem;
    gap: 0.5rem;
}
.sbs-contain>img{
    width: 112px;
    
}
.sbs-contain{
    position: relative;
}
.sbs-inner{
    border-radius: 5px;
    background-color: white;
    color: orangered;
    padding: 0.5;
    position: absolute;
    bottom: 16%;
    left: 9%;
    height: 10px;
}
.sbs-inner>p{
    text-align: center;
    bottom: 16%;
    font-size: 10px;
    
}
}

@media (max-width:344px) {
    .shop-byspace{
    width: 100%;
}
.shop-byspace-container{
    width: inherit;
    padding: 1rem 2rem;
    margin: 0;

}
.shop-byspace-container>div{
    display: flex;
    gap: 1rem;
    text-align: center;
}
.shop-byspace-container>div>h6{
    font-size: 25px;
    font-weight: 500;
}
.shop-byspace-container>div>a{
    color: orange;
}
.shop-byspace>div>p{
    padding: 0 2rem;
    font-weight: 400;
    font-size: 18px;
    color: black;
}
.shopbyspacecontainer{
    display: flex;
    margin: 1rem 2rem 1rem 2rem;
    gap: 0.5rem;
}
.sbs-contain>img{
    width: 112px;
    
}
.sbs-contain{
    position: relative;
}
.sbs-inner{
    border-radius: 5px;
    background-color: white;
    color: orangered;
    padding: 0.5;
    position: absolute;
    bottom: 16%;
    left: 9%;
    height: 10px;
}
.sbs-inner>p{
    text-align: center;
    bottom: 16%;
    font-size: 10px;
    
}
}

</style>