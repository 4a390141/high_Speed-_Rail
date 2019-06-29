    
    // 查詢CheckOut按鈕
    const checkOut = document.querySelector('.cart_check_out_container');

    // 顯示畫面的容器
    const cartDOM = document.querySelector('.cart_container');
    
    // 查詢顯示結帳處
    const tatalBtn = document.querySelector('.cart_total_price');

    // 取得localstorage 被點擊的商品
    const cartContents = JSON.parse(localStorage.getItem('mainItems'));

    // 取得商品介紹頁被點擊的商品
    const productItems = JSON.parse(localStorage.getItem('productItems'));
    console.log(typeof(productItems));
    const productItemsArr = [];

    // 購物車數字
    const cartCount = document.querySelector('.cart_count');
     // 總金額預設為零
     totalPrice = 0;
   
    // 如果商品介紹有值 加入主要localstorage裡
    if(productItems !== null && cartContents !== null){
            cartContents.push(productItems);
        }else{
            productItemsArr.push(productItems);
            console.log(productItemsArr)
            cartCount.textContent = productItemsArr.length;
                productItemsArr.forEach(productItem => {
                    // 去掉錢符號取出價錢
                    const subCartPrice = productItem.price.substring(1);
                    // 把字串數字化並加回總金額
                    totalPrice += parseInt(subCartPrice);
                    // 替換總價格
                    tatalBtn.textContent = `$${totalPrice}`;
                    // 插入商品內容
                    cartDOM.insertAdjacentHTML('beforeend',
                    ` <div class="cart_item">
                        <div class="cart-pic">
                        <img src="${productItem.image}" alt="" class="cart_item_image">
                    </div>
                    <h3 class="cart_item_name">${productItem.name}</h3>
                    <h3 class="cart_item_price">${productItem.price}</h3>
                    <h3 class="cart_item_amount">1</h3>
                    <h3 class="cart_item_subtotal">${productItem.price}</h3>
                    </div>`
                );
            });
        }
    
        
    

   


    
    if(cartContents !== null ){
        cartCount.textContent = cartContents.length;
        cartContents.forEach(cartContent => {
            // 去掉錢符號取出價錢
            const subCartPrice = cartContent.price.substring(1);
            // 把字串數字化並加回總金額
            totalPrice += parseInt(subCartPrice);
            // 替換總價格
            tatalBtn.textContent = `$${totalPrice}`;
            // 插入商品內容
            cartDOM.insertAdjacentHTML('beforeend',
            ` <div class="cart_item">
                <div class="cart-pic">
                <img src="${cartContent.image}" alt="" class="cart_item_image">
            </div>
            <h3 class="cart_item_name">${cartContent.name}</h3>
            <h3 class="cart_item_price">${cartContent.price}</h3>
            <h3 class="cart_item_amount">1</h3>
            <h3 class="cart_item_subtotal">${cartContent.price}</h3>
            </div>`
            );
        });
    }
    checkOut.addEventListener('click',()=>{
        localStorage.clear();
    })
    
  


 


 
 