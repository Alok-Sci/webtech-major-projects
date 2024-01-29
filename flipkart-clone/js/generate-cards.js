import data from "./data.js";

function getProductCard(imgUrl, title, price) {
    return `
    <!-- product card wrapper start -->
    <div class="prod-card-wrapper min-w-[216px] h-full justify-center p-2">
        <!-- product card  -->
        <div class="prod-card w-full h-full border rounded-sm p-2 grid gap-2 text-center">
            <!-- product image container -->
            <div class="img-container grid aspect-square items-center rounded-sm overflow-hidden">
                <!-- product image  -->
                <img src="${imgUrl}"
                        alt=""
                        class="mx-auto hover:scale-[1.1]">
            </div>
            <!-- product description  -->
            <p class="grid justify-center text-center text-[14px] py-2">
                <!-- product title  -->
                <span >${title}</span>
                <span class="font-bold">${price}</span>
            </p>
        </div>
    </div>
    <!-- End product card  -->
    `
}

function getProductCategoryHeader(title) {
    return `
    <!-- product category header  -->
        <div class="prod-cat-header bg-white h-20 ps-[16px] grid items-center text-[20px]">
            <p class="font-semibold">${title}</p>
        </div>
    <!-- End product category header  -->
    `
}

function 