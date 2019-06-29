        // 建立一個空陣列存點擊過的商品
        let cart = [];
        //查詢按鈕：
        const addCartBtns = document.querySelectorAll('.addCart');
        console.log(addCartBtns);
        //查詢購物車數量
        const cartCount = document.querySelector('.cart_count');
        // 購物車數量預設為零
        var count = 0;

        const productItems = JSON.parse(localStorage.getItem('productItems'));
        const productNames = document.getElementsByClassName('item-title');
      
        if(productItems !== null){
            for(let i = 0; i<productNames.length;i++){
                if(productItems.name === productNames[i].innerText){
                    addCartBtns[i].value='In Cart';
                    addCartBtns[i].classList.add('inputInCart');
                    count = count+1;
                    cartCount.innerText = count;
                }
            }
        };

       
  
        //加到購物車按鈕建立監聽事件
        addCartBtns.forEach(addCartBtn =>{
            addCartBtn.addEventListener('click',()=>{
                // 每點擊一次購物車數量加ㄧ
                count = count+1;
                cartCount.innerText = count; 
                // 獲取a層：
                const productDOMContainer = addCartBtn.previousElementSibling;
                // 獲取a層下的圖片子層：
                const productDOMFisrt = productDOMContainer.children;
                //獲取圖片層：
                const productImage = productDOMFisrt.item(0).querySelector('.product-image');

                // 建立商品資訊物件
                const product = {
                    image:productImage.src,
                    name:productDOMContainer.querySelector('.item-title').innerText,
                    price:productDOMContainer.querySelector('.price').innerText
                }

                //  判定是否已存在購物車
                const isInCart = (cart.filter(cartItem=>(cartItem.name === product.name)).length > 0);
                if(!isInCart){
                    cart.push(product);
                    addCartBtn.value = 'In Cart';
                    localStorage.setItem('mainItems',JSON.stringify(cart)) 
                    addCartBtn.classList.add('inputInCart');  
                }
            });
        });


        

        document.addEventListener('DOMContentLoaded',function(){

            console.log('ddd');
            // 如果已被存進local storage 裡從他頁跳轉回來 商品樣式需顯示為已點擊

            // 獲取本地儲存資料
            const mainItems = JSON.parse(localStorage.getItem('mainItems'));
            // console.log(Object.values(mainItems)[0]);
            // 獲取本地儲存的商品名稱
            if(mainItems !== null){

                const mainItemsNames = mainItems.map(item => item.name);
                    // 將原始商品名稱儲存成陣列
                let productNamesArr = [];
                for(let s = 0;s<productNames.length;s++){
                    let productName = productNames[s].innerText;
                    productNamesArr.push(productName);
                }
                // console.log(productNamesArr);

                // 比對本地儲存資料是否與商品重複
                for(let i = 0;i<mainItemsNames.length;i++){
                    if(mainItemsNames[i] === 'Beverage'||'Donuts'||'Beer'||'Chips'){
                        const mainItemsName = mainItemsNames[i];
                        let position = productNamesArr.indexOf(mainItemsName);
                        
                        // 呼叫改變樣式的函式
                        inCartStyle(position);
                    }   
                }
                
                function inCartStyle(position){
                    addCartBtns[position].value='In Cart';
                    addCartBtns[position].classList.add('inputInCart');
                    count = count+1;
                    cartCount.innerText = count;
                }
            }
        
        })
       

       

       

 
