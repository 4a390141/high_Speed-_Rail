    const alreadyInCart = JSON.parse(localStorage.getItem('productItems'));
    console.log(alreadyInCart);
    

    const productIntroArr = [];
    const productNameContent = document.querySelector('pro-title');
    if(alreadyInCart !== null ){
    // 且不等於這頁的商品
        productIntroArr.push(alreadyInCart);
    }
   
    //  讀取localStorage資料
    const mainCarts = JSON.parse(localStorage.getItem('mainItems'));
            
    // 抓全部的加到購物車按鈕
    const productAddtoCartBtn = document.querySelector('.addCart');

    // 查詢購物車數量
    const productCartCount = document.querySelector('.cart_count');
   
    // 查詢商品介紹dom
    const productContainer = document.querySelector('.pro-content');
    
    // 抓圖片層dom
    const productImage = document.querySelector('.pro-pic');
    
    // 存放本頁商品資訊
    const productIntro = {
            image: productImage.querySelector('img').src,
            name: productContainer.querySelector('.pro-title').textContent,
            price: productContainer.querySelector('.pro-price').textContent
        }

    // 比對已在購物車商品是否和本頁商品重複
    if(mainCarts !== null){
        productCartCount.textContent = mainCarts.length;
            mainCarts.forEach(mainCart => {
            if(mainCart.name === productIntro.name){
                productAddtoCartBtn.value = 'In Cart';
                productAddtoCartBtn.classList.add('inputInCart');
            }
        });   
    }else{
        productCartCount.textContent = 0;
    }

    function productAddtoCart(){
        if( productAddtoCartBtn.value !== 'In Cart'){
            productIntroArr.push(productIntro);
            productCartCount.textContent = '1';
            localStorage.setItem('productItems',JSON.stringify(productIntroArr));
            productAddtoCartBtn.value = 'In Cart';
            productAddtoCartBtn.classList.add('inputInCart');
            if(mainCarts!== null ){
                productCartCount.textContent = mainCarts.length+1;
            }
        }
    }