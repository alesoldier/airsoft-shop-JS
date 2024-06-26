const catalogProducts = [
    {
        altText: " it's an ak101 assault rifle",
        description: "the ak101 it's a very curious rifle because it combines the look of the ak with the fire power of his historical enemy, chambered in 5.56x45 the ak101 provides one of the most armor piercing experience",
        id: "product-1",
        imageURL: "images/product/ak101-img.jpeg",
        name: "ak101",
        price: 299.99
    },
    {
        altText: " it's an ak12 assault rifle",
        description: "chose in 2019 for becoming the issued rifle of the russian army the ak12 is a very reliable weapon, thankfully to his adjustable stock and the added rails that can allow the user to utilize ordinary aiming systems has become one of the greatest ak ever invented",
        id: "product-2",
        imageURL: "images/product/ak12-img.jpeg",
        name: "ak12",
        price: 399.99
    },
    {
        altText: " it's an ak74 assault rifle",
        description: "one of the most famous rifle in the entire world. the ak74 chambered in 5.45x39 combine the strength and the reliability of the 7.62x39 but with his lower diameter provides a better penetration and less stopping power",
        id: "product-3",
        imageURL: "images/product/ak74-img.jpeg",
        name: "ak74",
        price: 149.99
    },
    {
        altText: " it's an sr25 DMR",
        description: "precise and accurate the sr25 will never cease to impress, even the most experienced marksman would choose an sr25 over every other rifle. this rifle it's a DMR(designated marksman rifle), cambered in 308 (7.62x51) has an generous stopping power linked with a good penetration against the most advanced body protection",
        id: "product-4",
        imageURL: "images/product/sr25-img.jpeg",
        name: "sr25",
        price: 379.99
    },
    {
        altText: " it's an mk17 DMR",
        description: "Long-range rifle with high accuracy and durable construction, chambered in 308 (7.62x51) allow to take down even the most armored target. Thanks to the fire switch we can use the mk17 even in full auto, be careful the recoil kick ass",
        id: "product-5",
        imageURL: "images/product/mk17-img.jpeg",
        name: "mk17",
        price: 449.99
    },
    {
        altText: " it's an akm assault rifle",
        description: "the one and only, the most famous rifle, the akm. chambered in 7.62x39 has served in numerous war becoming well known among the people.",
        id: "product-6",
        imageURL: "images/product/akm-img.jpeg",
        name: "akm",
        price: 139.99
    },
];

function getCatalogProductTemplate(productInfo){
    const templateProduct = document.createElement("template");

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
                    <img class="product-image" src="${productInfo.imageURL}" alt="${productInfo.altText}">
                </div>

                <h5 class="product-title">
                    ${productInfo.name}
                </h5>

                <div class="description-container">
                    ${productInfo.description}
                </div>

                <h5 class="product-price">
                    ${productInfo.price}€
                </h5>
                    
                <div class="product-actions">
                    <span class="product-quantity-container">
                        <button class="decrement-quantity-button">-</button>
                        <span class="product-quantity">1</span>
                        <button class="increment-quantity-button">+</button>
                    </span>

                    <button disabled>ADD</button>
                </div>
            </div>
        </div>`            

        return templateProduct;
}

class CatalogProduct extends HTMLElement {
    constructor (catalogProductInfo){
        super()
        const shadow = this.attachShadow({ mode: "open"});

        const productTemplateElement = getCatalogProductTemplate(catalogProductInfo);

        shadow.appendChild(productTemplateElement.content.cloneNode(true));
        
        const buttonMinus = shadow.querySelector(".decrement-quantity-button");
        const buttonPlus = shadow.querySelector(".increment-quantity-button");
        const productQuantity = shadow.querySelector(".product-quantity");

        
        let itemCount = 1;

        function increment(){
            itemCount++;

            if(itemCount>1){
                buttonMinus.removeAttribute('disabled')
            }
            
            productQuantity.innerHTML = itemCount;
        }

        function decrement(){
            itemCount--;

            if(itemCount<=1){
                buttonMinus.setAttribute('disabled', true)
            }
            
            productQuantity.innerHTML = itemCount;
        }

        if(itemCount>=1){
            buttonMinus.setAttribute('disabled',true)    
        }
        buttonMinus.addEventListener("click", decrement);
        buttonPlus.addEventListener("click", increment);
    }
}


customElements.define("product-div", CatalogProduct);
const productsContainer= document.querySelector('.products-container');

catalogProducts.forEach((catalogProduct)=>{
    const catalogProductElement = new CatalogProduct(catalogProduct);
    productsContainer.appendChild(catalogProductElement);
});