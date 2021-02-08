const products =     [
        {
            id:"1",
            label:"Iphone X",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            stock:11,
            imageId:"https://cdn.vox-cdn.com/thumbor/E8c5U6A_RrsyiwRANmcCLNE2dzc=/0x0:2040x1360/1400x933/filters:focal(860x560:1186x886):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/55855309/akrales_190913_3628_0277.19.jpg",
            price:100,
            categoryId:"tech"
        },
        {
            id:"2",
            label:"Samsung Alpha",
            description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            stock:4,
            imageId:"https://cdn.vox-cdn.com/thumbor/E8c5U6A_RrsyiwRANmcCLNE2dzc=/0x0:2040x1360/1400x933/filters:focal(860x560:1186x886):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/55855309/akrales_190913_3628_0277.19.jpg",
            price:231,
            categoryId:"tech"
        },
        {
            id:"3",
            label:"Xiaomi Note 9",
            description:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
            stock:22,
            imageId:"https://cdn.vox-cdn.com/thumbor/E8c5U6A_RrsyiwRANmcCLNE2dzc=/0x0:2040x1360/1400x933/filters:focal(860x560:1186x886):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/55855309/akrales_190913_3628_0277.19.jpg",
            price:20,
            categoryId:"tech"
        },
        {
            id:"4",
            label:"Perfume Kenzo",
            description:"Quis autem vel eum iure reprehenderit qui in ea voluptate",
            stock:5,
            imageId:"https://cdn2.dineroenimagen.com/media/dinero/styles/xlarge/public/images/2019/04/perfume-px.jpg",
            price:111,
            categoryId:"cosmetics"
        },
        {
            id:"5",
            label:"Perfume DC",
            description:"Quis autem vel eum iure reprehenderit qui in ea voluptate",
            stock:2,
            imageId:"https://cdn2.dineroenimagen.com/media/dinero/styles/xlarge/public/images/2019/04/perfume-px.jpg",
            price:222,
            categoryId:"cosmetics"
        },
        {
            id:"6",
            label:"Perfume de Mujer",
            description:"Quis autem vel eum iure reprehenderit qui in ea voluptate",
            stock:44,
            imageId:"https://cdn2.dineroenimagen.com/media/dinero/styles/xlarge/public/images/2019/04/perfume-px.jpg",
            price:333,
            categoryId:"cosmetics"
        }
    ]
const getProducts =  (cat) =>  new Promise((resolve,reject) => {
                                setTimeout(() =>{
                                    resolve(
                                        (cat === "random") ? 
                                        [getRandomProduct()] :                                        
                                        products.filter(x => x.categoryId === cat || cat === "all")
                                    );                                
                                },0)
                         });

const getRandomProduct = () => {   
    let size = products.length 
    let rand = Math.floor(Math.random() * size) + 1 ;   
    console.log(products.find(x => parseInt(x.id) === rand));  
    return products.find(x => parseInt(x.id) === rand);
};

const getProduct = (id) => new Promise((resolve,reject) => {
        setTimeout(() =>{
            console.log("Se invoco getProduct");
            resolve(products.find(x => x.id === id))        
        },0)
    });

export {getProducts, getProduct};