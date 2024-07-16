<template>
    <div class="shome">
    <div class="showroom  mobile-show">
        <h3>
            Explore Our Showroom
        </h3>
        <p>
            Not sure of what you’re looking for? No worries, use Lighting Xplorer to see what you can get.
        </p>
        <button>
           <span>   Proceed To Lightning Xplorer</span>
           <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.1039 9.16487H18.6436L14.5551 13.6789C14.1054 14.1805 14.1054 14.9556 14.5551 15.4572C15.0049 15.9587 15.6999 15.9587 16.1496 15.4572L22.9366 7.88817L22.1598 7.02184L16.1496 0.36477C15.9452 0.136789 15.659 0 15.3728 0C15.0866 0 14.8004 0.136789 14.596 0.36477C14.1463 0.86633 14.1463 1.64147 14.596 2.14303L18.6436 6.65707H1.1039C0.490622 6.65707 0 7.20422 0 7.93377C0 8.61771 0.490622 9.16487 1.1039 9.16487Z" fill="#F4811F"></path></svg>
        </button>
        
    </div>
    
</div>
</template>

<style scoped>

@media (max-width:600px) {
    .showroom{
        width: 100%;
        
    }
    .mobile-show{
        widows: 100%;
        padding: 2rem 1.5rem;
    }
    .showroom>h3{
        font-weight: 600;
        color:black;
        padding-bottom: 1rem;
    }
    .showroom>p{
        font-weight: 600;
        color: black;
        font-size: 15px;
    }
    .showroom>button{
        width: 300px;
       background-color: black;
       border: 0;
       color: white;
       height: 50px;
       border-radius: 5px;
    }
    
}
@media (min-width: 600px) {
    .shome{
        display: none;
    }
}



</style>