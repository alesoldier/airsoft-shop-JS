const templateProduct = document.createElement("template")
templateProduct.innerHTML = `
<style>

.catalog-product{
    background-color: white;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-width: 210px;
    padding: 24px;
}

.squared-image-container{
    aspect-ratio: 1;
    border: 1px solid black;
    width: 100%;
}

.product-image{
    aspect-ratio: 1;
    display: block;
    max-height: 100%;
    max-width: 100%;
}

.product-title{
    margin: 0 auto;
}

.description-container{
    border: 1px solid black;
    height: 80px;
    margin: 18px 0;
    overflow: auto;
    padding: 8px;
}

.product-price{
    margin: 0 auto;
    margin-bottom: 24px;
}

.product-actions{
    display: flex;
    justify-content: space-between;
}

.product-quantity-container{
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
}

.product-quantity{
    margin: 0 16px;
}

</style>
<div class="products-container">
                <div class="catalog-product">

                    <div class="squared-image-container">
                        <img class="product-image" src="images/product/ak101-img.jpeg" alt=" an ak101 ">
                    </div>

                    <h5 class="product-title">
                        AK-101 
                    </h5>

                    <div class="description-container">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit tellus massa, quis mollis justo eleifend in. Fusce vitae varius massa. Etiam nisl nisl, fringilla in dolor ut, sagittis sagittis sem. Pellentesque ultrices risus a justo vulputate, sed rhoncus risus ornare. Aliquam auctor nisi non tempor consequat. Nullam ut accumsan ex. Donec luctus justo risus, quis rutrum magna interdum eu. Pellentesque eget ante a sem gravida mollis a efficitur mauris. Fusce eu sem vel elit cursus porttitor. Donec luctus eleifend magna id ultricies.
                        Duis pellentesque ipsum leo, a ullamcorper elit vestibulum at. Sed ac interdum lectus. Donec rutrum sagittis neque, quis rhoncus ex egestas in. Aliquam venenatis, metus varius tincidunt fermentum, sem ex congue nulla, ut faucibus justo sem non metus. Sed velit nibh, fermentum in elit eu, egestas viverra quam. In quis lacus id dolor vulputate sodales. Nunc rhoncus massa sodales sem ultrices elementum. Sed vulputate vel risus non pulvinar. Donec cursus dui lorem, et consequat leo tincidunt a. Aliquam finibus, dui at volutpat ultricies, ligula mauris pretium justo, quis semper arcu enim at turpis. Maecenas dictum ante metus, sed porta sapien accumsan scelerisque. Donec bibendum, mi vitae lacinia imperdiet, ipsum erat rhoncus est, sit amet volutpat erat mi porttitor felis. Fusce nec odio ante. Nulla facilisi. Quisque nec consequat dolor, a sollicitudin velit.
                        Nullam ullamcorper metus et purus scelerisque feugiat. Nunc id purus non lorem rutrum tristique. In hac habitasse platea dictumst. Fusce euismod pharetra leo. Aenean et quam congue, accumsan est sit amet, dignissim nisi. Suspendisse potenti. Donec at quam maximus, dictum ligula sed, scelerisque velit. Nunc quis sagittis nunc. Morbi congue, purus sed varius congue, lorem diam tristique massa, faucibus placerat turpis eros at risus. Etiam lectus massa, condimentum id posuere imperdiet, sollicitudin at magna. Nam blandit placerat tellus, eget condimentum est tristique id. Maecenas eu metus in arcu posuere eleifend. Fusce in justo mollis, ultrices felis a, laoreet lacus. Duis ante orci, euismod eu placerat non, interdum eu tortor.
                    </div>

                    <h5 class="product-price">
                    399.99$
                    </h5>
                        
                    <div class="product-actions">
                        <span class="product-quantity-container">
                            <button class="decrement-quantity-button">-</button>
                            <span class="product-quantity">1</span>
                            <button class="increment-quantity-button">+</button>
                        </span>

                        <!-- TODO: Add button action -->
                        <button disabled>ADD</button>
                    </div>
                </div>
            </div>`

class product extends HTMLElement {
    constructor (){
        super()
        const shadow = this.attachShadow({ mode: "open"})
        shadow.append(templateProduct.content.cloneNode(true))
        this.title = shadow.querySelector(".container")

        const buttonMinus = shadow.querySelector(".decrement-quantity-button")
        const buttonPlus = shadow.querySelector(".increment-quantity-button")
        const incrementItemCount = shadow.querySelector(".product-quantity");
        let itemCount = 1;

        console.log(buttonMinus)
        console.log(buttonPlus)

        function increment(){
            itemCount++;

            if(itemCount>1){
                 buttonMinus.removeAttribute('disabled')
             }
            
             incrementItemCount.innerHTML = itemCount;
         }

         function decrement(){
             if(itemCount<=1){
                alert("cant buy less than 1");
                return
             }
             
             itemCount--;

             if(itemCount<=1){
                 buttonMinus.setAttribute('disabled', true)
             }
             
             incrementItemCount.innerHTML = itemCount;
         }

        buttonMinus.addEventListener("click", decrement);
        buttonPlus.addEventListener("click", increment);
    }
}

customElements.define("product-div", product);
    

    

