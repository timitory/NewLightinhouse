<template>
    <div class="carousel">
        <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/Images/landingpage.png" class="d-block w-100" alt="Slide 1">
    </div>
    
    <div class="carousel-item">
      <img src="../assets/Images/landingpage.png" class="d-block w-100" alt="Slide 2">
    </div>
    <div class="carousel-item">
      <img src="../assets/Images/landingpage.png" class="d-block w-100" alt="Slide 3">
    </div>
    <div class="carousel-box carousel-sty">
        <h3>Explore Our ShowRoom</h3>
        <p>Not Sure of what you are looking for? No worries,use Lighting Xplorer to see what you can get.</p>
        <button>
        <span>Proceed To Lightning Explorer</span>
        <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.1039 9.16487H18.6436L14.5551 13.6789C14.1054 14.1805 14.1054 14.9556 14.5551 15.4572C15.0049 15.9587 15.6999 15.9587 16.1496 15.4572L22.9366 7.88817L22.1598 7.02184L16.1496 0.36477C15.9452 0.136789 15.659 0 15.3728 0C15.0866 0 14.8004 0.136789 14.596 0.36477C14.1463 0.86633 14.1463 1.64147 14.596 2.14303L18.6436 6.65707H1.1039C0.490622 6.65707 0 7.20422 0 7.93377C0 8.61771 0.490622 9.16487 1.1039 9.16487Z" fill="#F4811F"></path></svg>
        </button>
        
    </div>
    
  </div>
 
</div>
    </div>



</template>

<script>

</script>

<style scoped>
@media(max-width:600px){
.carousel{
    display: none;
}
}
.carousel-item img {
      width: 100%;
      height: 700px; 
      object-fit: cover;
    }
    .carousel-indicators{
        position: absolute;
        left: -75% !important;
        bottom: 5% !important;    
        
    }
    .carousel{
        position: relative
    }
    .carousel-sty{
        position: absolute;
        padding-bottom: 1.25rem;
        padding-top: 1.25rem;
    }
    .carousel-box{
        background-color: white;
        bottom: 25% !important;
        color: black;
        font-size: 8px;
        left: 9% !important;
        padding: 1.25rem 10.25rem 1.25rem 1.25rem;
        width: 460px;
        text-align: left;
        right: auto;


    }
    .carousel-box>h3{
        font-size: 24px;
        font-weight: 600;
        margin-top: 15px;
    }
    .carousel-box>p{
        padding-bottom: .1.5rem 0;
        margin-top: 20px;
        margin-bottom: 20px;
       
    }
    p{
        margin-top: 0;
        margin-bottom: 1rem;
        font-size: 16px;
    }
    .carousel-box>button{
        background-color: black;
        border-radius: 5px;
        border: 1px solid black;
        color: white;
        padding: 1rem;
        font-size: 14px;
        text-decoration: none;
        cursor: pointer;
        margin-top: 13px;

    }
    .carousel-box>button>span{
        margin-right: 9px;
    }

</style>