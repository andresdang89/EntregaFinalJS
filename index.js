const shopContent = document.getElementById("shopContent");
const cart = [];

productos.forEach((product)=>{
    const content = document.createElement("div");
    content.innerHTML =  `
    <img src= "${product.img}">
    <h3>${product.productName}</h3>
    <p>${product.price} $</p>
    `;
    shopContent.append(content);

    const buyButton = document.createElement("button");
    buyButton.innerText = "Compra";
    content.append(buyButton)

    buyButton.addEventListener("click", ()=>{
        const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);

        if(repeat){
            cart.map((product)=> {
                if(product.id === product.id){
                    product.quanty++;
                }
            });
        }else{
            cart.push({
                id: product.id,
        productName: product.productName,
        price: product.price,
        quanty: product.quanty,
        img: product.img,

        });
    }
   

    })
    });

