document.addEventListener("DOMContentLoaded", () => {
    const renderProducts = [
  {
    "productCode": "CA01",
    "image": "../image/Casio/CASIO AMW-880-1A.png",
    "category": "Casio",
    "name": "Casio AMW-880-1A",
    "price": "1.250.000 VNĐ",
    "description": "Thể thao mà vẫn tinh xảo – Casio AMW-880-1AVDF chắc chắn sẽ là bạn đồng hành lý tưởng bất kể bạn đi đâu trong ngày. Hy vọng bài viết này đã đem đến cho bạn cái nhìn trực quan hơn về sản phẩm. Để sở hữu một sản phẩm đồng hồ Casio AMW-880-1AVDF chính hãng các bạn có thể ghé ngay hệ thống đồng hồ chính hãng casio-hcm.vn để trải nghiệm trực tiếp mẫu đồng hồ Casio này. Chúng mình tin rằng đây sẽ là một lựa chọn phụ kiện tuyệt vời giúp bạn có thể làm mới bản thân với diện mạo mới! ",
    "availability": true
  },
  {
    "productCode": "CA02",
    "image": "../image/Casio/CASIO EDIFICE ECB-10AT-1A.png",
    "category": "Casio",
    "name": "Casio Edifice ECB-10AT-1A",
    "price": "950.000 VNĐ",
    "description": "ECB-10AT-1A không chỉ là một chiếc đồng hồ, mà còn là biểu tượng của phong cách và sự tiện ích. Với thiết kế đẳng cấp, tính năng thông minh và đa dạng chức năng, nó sẽ là một lựa chọn hoàn hảo cho những ai đang tìm kiếm sự sang trọng và tiện ích trong một chiếc đồng hồ.",
    "availability": true
  },
  {
    "productCode": "CA03",
    "image": "../image/Casio/CASIO EDIFICE EFV-C100D-1B.jpg",
    "category": "Casio",
    "name": "Casio Edifice EFV-C100D-1B",
    "price": "3.000.000 VNĐ",
    "description": "Đồng hồ Casio Edifice EFV-C100D-1BV mang phong cách mạnh mẽ, khoẻ khoắn với tông đen – vàng được kết hợp khéo léo và tinh tế. Là một trong những thiết kế đặc biệt dành cho các quý ông, khác với các kiểu dáng truyền thống, chiếc đồng hồ này với mặt hình tròn cách điệu kết hợp với xem giờ điện tử làm tôn lên sự sang trọng nam tính.",
    "availability": true
  },
  {
    "productCode": "CA04",
    "image": "../image/Casio/CASIO EDIFICE EQS-940BL-1A.jpg",
    "category": "Casio",
    "name": "Casio Edifice EQS-940BL-1A",
    "price": "4.200.000 VNĐ",
    "description": "Casio Edifice thiết kế hình thức táo bạo, lôi cuốn và các chi tiết tinh xảo, kết hợp với kiểu dáng đơn giản làm nổi bật bản chất của kim loại, đã cho ra đời những sản phẩm có thiết kế đặc trưng rõ ràng. Casio Edifice EQS-940BL-1A là một trong những mẫu đồng hồ thuộc dòng Edifice gây ấn tượng mạnh không chỉ bởi vẻ bề ngoài cuốn hút mà còn bởi đa dạng tính năng hữu ích.",
    "availability": true
  },
  {
    "productCode": "CA05",
    "image": "../image/Casio/CASIO GSHOCK DW-5600BBN-1E.jpeg",
    "category": "Casio",
    "name": "Casio Gshock DW-1E",
    "price": "5.500.000 VNĐ",
    "description": "Từ G-SHOCK, thương hiệu đồng hồ không ngừng đặt ra các tiêu chuẩn mới về độ bền của đồng hồ hiển thị giờ hiện hành và tung ra thị trường một loạt các mẫu máy cơ bản có màu đen đơn sắc cùng dây đeo bằng vải.Mẫu cơ bản là DW-5600, vốn là kiệt tác mang phong cách đồng hồ G-SHOCK nguyên thủy. Đồng hồ Casio G-Shock DW-5600BBN-1 là chiếc đồng hồ đẳng cấp của dòng đồng hồ G-Shock từ hãng đồng hồ Casio Japan Movement. Được lấy cảm hứng sự vất vả và ngày đêm làm việc của các chiến sĩ quân đội, Casio G-Shock đã phát hành những mẫu đồng hồ mới với phiên bản BLACK đi kèm với dòng dây đeo đặc biệt từ vải CORDURA. Những phiên bản đặc biệt chính là DW-5600, GA-100 và DW-6900. Casio G-Shock DW-5600BBN-1E là một mẫu đồng hồ mang màu đen đơn sắc được kết hợp với dây đeo bằng vải nhiều người ưa thích bởi sự hữu dụng và tính thời trang cao.",
    "availability": true
  },
  {
    "productCode": "CA06",
    "image": "../image/Casio/CASIO GSHOCK GA-2100SKE-7A.jpg",
    "category": "Casio",
    "name": "Casio Gshock GA-2100KE-7A",
    "price": "1.450.000 VNĐ",
    "description": "GA-2100SKE-7A không chỉ là chiếc đồng hồ thông thường, mà là biểu tượng của sự đoàn kết giữa thiết kế tinh tế, công nghệ tiên tiến và độ bền bỉ. Đến và khám phá thế giới của chiếc đồng hồ G-Shock này tại Casio.hcm, nơi nâng tầm phong cách và cái đẹp của bạn!",
    "availability": true
  },
  {
    "productCode": "CA07",
    "image": "../image/Casio/CASIO GSHOCK GM-2100G-1A9.png",
    "category": "Casio",
    "name": "Casio Gshock GM-2100G-1A9",
    "price": "2.800.000 VNĐ",
    "description": "Vừa bóng bẩy, sắc nét lại vừa táo bạo với chiếc G-SHOCK tiêu chuẩn, phá cách với hình bát giác phủ kim loại dựa trên thiết kế đặc trưng ban đầu, Casio G-Shock GM-2100G-1A9 đã tạo ấn tượng mạnh với không ít bạn trẻ yêu thích phong cách thể thao, trẻ trung, năng động.",
    "availability": true
  },
  {
    "productCode": "CA08",
    "image": "../image/Casio/CASIO LTP-V005L-1A.jpg",
    "category": "Casio",
    "name": "Casio LCP-V005L-1A",
    "price": "1.950.000 VNĐ",
    "description": "Với sự kết hợp hoàn hảo giữa màu sắc đặc biệt, chất liệu chất lượng và tính năng độc đáo, chiếc đồng hồ nữ Casio LTP-V005L-1A không chỉ là một chiếc đồng hồ, mà còn là một biểu tượng của phong cách và cá tính. Hãy đến ngay với Casio.hcm, sở hữu ngay một chiếc để thể hiện phong cách riêng của bạn ngay hôm nay!",
    "availability": true
  },
  {
    "productCode": "CA09",
    "image": "../image/Casio/CASIO MTP-B185D-1A.png",
    "category": "Casio",
    "name": "Casio MTP-B185B-1A",
    "price": "1.300.000 VNĐ",
    "description": "Với sự kết hợp hoàn hảo giữa màu sắc đặc biệt, chất liệu chất lượng và tính năng độc đáo, chiếc đồng hồ nữ Casio LTP-V005L-1A không chỉ là một chiếc đồng hồ, mà còn là một biểu tượng của phong cách và cá tính. Hãy đến ngay với Casio.hcm, sở hữu ngay một chiếc để thể hiện phong cách riêng của bạn ngay hôm nay!",
    "availability": true
  },
  {
    "productCode": "CA10",
    "image": "../image/Casio/CASIO-EDIFICE-EFV-620D-1A4.jpg",
    "category": "Casio",
    "name": "Casio Edifice EFV-620D-1A4",
    "price": "1.100.000 VNĐ",
    "description": "Chất liệu vỏ kim loại phủ ion màu bạc. Trọng lượng 80g. Dây đeo kim loại phủ ion màu bạc. Mặt kính là kính khoáng. Khả năng chống nước ở độ sâu 50 mét. Thời gian sử dụng pin dự kiến khoảng 3 năm đối với pin SR920SW",
    "availability": true
  },
];
  
    let pageSize = 4;
    let currentPage = 1;
    let cartCount = 0;

    const productContainer = document.querySelector(".product-grid");
    const paginationContainer = document.querySelector(".pagination");
    const cartCountElement = document.getElementById('cart-count');

    const listCategory = productContainer?.getAttribute('data-category');
    let filteredProducts = listCategory 
        ? renderProducts.filter(p => p.category === listCategory)
        : renderProducts;

    const customOrderModal = document.getElementById('custom-order-modal');
    const customCloseOrderModal = document.getElementById('custom-close-order-modal');
    const customContinueShoppingBtn = document.getElementById('custom-continue-shopping-btn');
    const customGoToCartBtn = document.getElementById('custom-go-to-cart-btn');

    function renderPage(page) {
        productContainer.innerHTML = "";
        const startIndex = (page - 1) * pageSize;
        const pageProducts = filteredProducts.slice(startIndex, startIndex + pageSize);

        pageProducts.forEach(product => {
            const isOutOfStock = !product.availability;

            const productItem = document.createElement("div");
            productItem.classList.add("mon");
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <a href="#" class="product-category">${product.category}</a>
                <h3 class="product-name">${product.name}</h3>
                <p class="price">${product.price}</p>
                <button class="btn btn-primary order-btn" ${isOutOfStock ? 'disabled style="background:#999;cursor:not-allowed;"' : ''}>
                    ${isOutOfStock ? "Hết hàng" : "Thêm vào giỏ"}
                </button>
            `;
            productContainer.appendChild(productItem);

            // Click vào ảnh/tên sản phẩm
            productItem.querySelectorAll(".product-img, .product-name").forEach(el => {
                el.addEventListener("click", e => {
                    e.preventDefault();
                    localStorage.setItem("selectedProduct", JSON.stringify(product));
                    window.location.href = `./product/mota.html?productCode=${product.productCode}`;
                });
            });

            // Click thêm vào giỏ
            const orderBtn = productItem.querySelector(".order-btn");
            if (orderBtn && !isOutOfStock) {
                orderBtn.addEventListener("click", () => {
                    if (customOrderModal) customOrderModal.style.display = 'block';
                    cartCount++;
                    if (cartCountElement) cartCountElement.textContent = cartCount;
                });
            }
        });
    }

    function renderPagination() {
        paginationContainer.innerHTML = "";
        const totalPages = Math.ceil(filteredProducts.length / pageSize);

        // Prev
        const prevItem = document.createElement("li");
        prevItem.innerHTML = `<i class="fa-solid fa-angles-left"></i>`;
        prevItem.classList.add("page1");
        prevItem.addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                renderPage(currentPage);
                renderPagination();
            }
        });
        paginationContainer.appendChild(prevItem);

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement("li");
            li.textContent = i;
            li.classList.add("page-item");
            if (i === currentPage) li.classList.add("active");
            li.addEventListener("click", () => {
                currentPage = i;
                renderPage(currentPage);
                renderPagination();
            });
            paginationContainer.appendChild(li);
        }

        // Next
        const nextItem = document.createElement("li");
        nextItem.innerHTML = `<i class="fa-solid fa-angles-right"></i>`;
        nextItem.classList.add("page2");
        nextItem.addEventListener("click", () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderPage(currentPage);
                renderPagination();
            }
        });
        paginationContainer.appendChild(nextItem);

        prevItem.classList.toggle("disabled", currentPage === 1);
        nextItem.classList.toggle("disabled", currentPage === totalPages);
    }

    // Modal sự kiện
    customCloseOrderModal?.addEventListener('click', () => customOrderModal.style.display = 'none');
    customContinueShoppingBtn?.addEventListener('click', () => customOrderModal.style.display = 'none');
    customGoToCartBtn?.addEventListener('click', () => {
        customOrderModal.style.display = 'none';
        window.location.href = './cart.html';
    });
    window.addEventListener('click', e => {
        if (e.target === customOrderModal) customOrderModal.style.display = 'none';
    });

    renderPage(currentPage);
    renderPagination();
});