/* nav mav-menu khi thu nhỏ */
document.querySelector('.toggle').addEventListener('click', function() {
  const navMenu = document.querySelector('.nav-menu');
  const faBars = document.querySelector('.fa-bars');
  const faXmark = document.querySelector('.fa-xmark');

  navMenu.classList.toggle('show');
  this.classList.toggle('active'); 

  if (this.classList.contains('active')) {
      faBars.style.opacity = '0'; 
      faXmark.style.opacity = '1'; 
  } else {
      faBars.style.opacity = '1'; 
      faXmark.style.opacity = '0'; 
  }
});

function setActiveMenu(menuItem) {
  document.querySelectorAll('.nav-menu li').forEach(item => {
      item.classList.remove('active');
  });
  menuItem.classList.add('active');
}

document.querySelectorAll('.nav-menu .dropdown > a').forEach(item => {
  item.addEventListener('click', function(event) {
      event.preventDefault();
      const subMenuId = item.nextElementSibling.id;
      toggleSubMenu(subMenuId);
  });
});

document.querySelectorAll('.nav-menu li a').forEach(item => {
  item.addEventListener('click', function() {
      setActiveMenu(item.parentElement);
  });
});

/* poster */
let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthItems = items.length;

let autoSlider = setInterval(() => {
  next.click();
}, 8000);

next.onclick = function () {
  active = (active + 1) % lengthItems;
  reloadSlider();
};

prev.onclick = function () {
  active = (active - 1 + lengthItems) % lengthItems;
  reloadSlider();
};

function reloadSlider() {
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + "px";

  let lastActiveDot = document.querySelector(".slider .dots li.active");
  if (lastActiveDot) lastActiveDot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(autoSlider);
  autoSlider = setInterval(() => {
    next.click();
  }, 8000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", function () {
    active = key;
    reloadSlider();
  });
});

/* Tìm kiếm */
document.addEventListener("DOMContentLoaded", function() {
  const searchToggle = document.querySelector(".searchToggle");
  const searchBox = document.querySelector(".search-bar");
  const searchInput = document.getElementById("search-input");
  const searchBoxButton = document.querySelector(".search-box button");
  const dropdownItems1 = document.querySelectorAll("#list .dropdown-list-item");
  const dropdownItems2 = document.querySelectorAll("#price-list .dropdown-list-item");
  const dropdownList1 = document.getElementById("list");
  const dropdownList2 = document.getElementById("price-list");
  const span1 = document.getElementById("span");
  const span2 = document.getElementById("price-span");

  let selectedText1 = "Tất cả";
  let selectedText2 = "Khoảng giá";

  searchToggle.addEventListener("click", () => {
      searchToggle.classList.toggle("active");
      const isActive = searchToggle.classList.contains("active");
      searchBox.style.display = isActive ? "flex" : "none";
  });

  function performSearch(e) {
      const query = searchInput.value.trim();

      if (query === "") {
          return;
      }

      searchToggle.classList.remove("active");
      searchBox.style.display = "none";

      span1.innerText = selectedText1;
      span2.innerText = selectedText2;

      console.log(`Tìm kiếm với từ khóa: ${query}`);
  }

  searchBoxButton.addEventListener("click", performSearch);

  searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
          performSearch(e);
      }
  });

  document.querySelector(".dropdown-bar1").addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownList1.classList.toggle("show");
      dropdownList2.classList.remove("show");
  });

  document.querySelector(".dropdown-bar2").addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownList2.classList.toggle("show");
      dropdownList1.classList.remove("show");
  });

  dropdownItems1.forEach((item) => {
      item.addEventListener("click", (e) => {
          selectedText1 = e.target.innerText;
          span1.innerText = selectedText1;
          updatePlaceholder();
          dropdownList1.classList.remove("show");
      });
  });

  dropdownItems2.forEach((item) => {
      item.addEventListener("click", (e) => {
          selectedText2 = e.target.innerText;
          span2.innerText = selectedText2;
          updatePlaceholder();
          dropdownList2.classList.remove("show");
      });
  });

  document.addEventListener("click", () => {
      dropdownList1.classList.remove("show");
      dropdownList2.classList.remove("show");
  });

  dropdownList1.addEventListener("click", (e) => e.stopPropagation());
  dropdownList2.addEventListener("click", (e) => e.stopPropagation());

  function updatePlaceholder() {
      searchInput.placeholder = `Tìm kiếm ${selectedText1}, ${selectedText2}`;
  }
});

/* user */
document.addEventListener("DOMContentLoaded", function () {
  const userIcon = document.querySelector(".fa-user");
  const dropdownUser = document.querySelector(".dropdown-user");
  let hideTimeout;

  userIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownUser.style.display =
      dropdownUser.style.display === "flex" ? "none" : "flex";
  });

  function hideDropdown() {
    hideTimeout = setTimeout(() => {
      dropdownUser.style.display = "none";
    }, 200);
  }

  userIcon.addEventListener("mouseleave", hideDropdown);
  dropdownUser.addEventListener("mouseleave", hideDropdown);

  dropdownUser.addEventListener("mouseenter", function () {
    clearTimeout(hideTimeout);
  });

  document.addEventListener("click", function (event) {
    if (
      !userIcon.contains(event.target) &&
      !dropdownUser.contains(event.target)
    ) {
      dropdownUser.style.display = "none";
    }
  });
});

/* Top */
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* Sản phẩm và phân trang */
document.addEventListener("DOMContentLoaded", function () {
const productListElement = document.getElementById("productList");

if (!productListElement) {
  console.error("Không tìm thấy phần tử #productList");
  return;
}

const renderProducts = [
  {
    "productCode": "CA01",
    "image": "../image/Casio/CASIO AMW-880-1A.png",
    "category": "Casio",
    "name": "Casio AMW-880-1A",
    "price": "1.250.000 VNĐ",
    "description": "Thể thao mà vẫn tinh xảo – Casio AMW-880-1AVDF chắc chắn sẽ là bạn đồng hành lý tưởng bất kể bạn đi đâu trong ngày...",
    "availability": true
  },
  {
    "productCode": "SE01",
    "image": "../image/Seiko/Seiko 37mm Nam SNK357K1.jpg",
    "category": "Seiko",
    "name": "Seiko 37mm Nam SNK357K1",
    "price": "6.500.000 VNĐ",
    "description": "Mặt dial của model Seiko SNK357K1 được thiết kế họa tiết nền Repetiton độc đáo...",
    "availability": true
  },
  {
    "productCode": "CA02",
    "image": "../image/Casio/CASIO EDIFICE ECB-10AT-1A.png",
    "category": "Casio",
    "name": "Casio Edifice ECB-10AT-1A",
    "price": "950.000 VNĐ",
    "description": "ECB-10AT-1A không chỉ là một chiếc đồng hồ, mà còn là biểu tượng của phong cách và sự tiện ích...",
    "availability": true
  },
  {
    "productCode": "RO07",
    "image": "../image/Rolex/Land-Dweller 40.png",
    "category": "Rolex",
    "name": "Land-Dweller 40",
    "price": "315.000.000 VNĐ",
    "description": "Mặt đồng hồ này được trang trí bằng họa tiết tổ ong với lớp phủ bóng mờ...",
    "availability": true
  },
  {
    "productCode": "CA03",
    "image": "../image/Casio/CASIO EDIFICE EFV-C100D-1B.jpg",
    "category": "Casio",
    "name": "Casio Edifice EFV-C100D-1B",
    "price": "3.000.000 VNĐ",
    "description": "Đồng hồ Casio Edifice EFV-C100D-1BV mang phong cách mạnh mẽ, khoẻ khoắn với tông đen – vàng...",
    "availability": true
  },
  {
    "productCode": "CA05",
    "image": "../image/Casio/CASIO GSHOCK DW-5600BBN-1E.jpeg",
    "category": "Casio",
    "name": "Casio Gshock DW-1E",
    "price": "5.500.000 VNĐ",
    "description": "Từ G-SHOCK, thương hiệu đồng hồ không ngừng đặt ra các tiêu chuẩn mới về độ bền...",
    "availability": true
  },
  {
    "productCode": "RO03",
    "image": "../image/Rolex/Day-Date 36.png",
    "category": "Rolex",
    "name": "Day-Date 36",
    "price": "345.000.000 VNĐ",
    "description": "Mặt đồng hồ đi kèm 10 viên kim cương cắt hình chữ nhật...",
    "availability": true
  },
  {
    "productCode": "CA06",
    "image": "../image/Casio/CASIO GSHOCK GA-2100SKE-7A.jpg",
    "category": "Casio",
    "name": "Casio Gshock GA-2100KE-7A",
    "price": "1.450.000 VNĐ",
    "description": "GA-2100SKE-7A không chỉ là chiếc đồng hồ thông thường, mà là biểu tượng của sự đoàn kết...",
    "availability": true
  }
];

const itemsPerPage = 4;
let currentPage = 1;

function renderPage(page) {
  productListElement.innerHTML = "";

  const start = (page - 1) * itemsPerPage;
  const end = page * itemsPerPage;
  const productsToShow = renderProducts.slice(start, end);

  productsToShow.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("menu_item");
    productElement.setAttribute("data-product", JSON.stringify(product));

    const productImage = document.createElement("div");
    productImage.classList.add("menu_item_img");

    const imageLink = document.createElement("a");
    imageLink.href = "#";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.classList.add("menu_img");

    imageLink.appendChild(img);
    productImage.appendChild(imageLink);

    const category = document.createElement("p");
    category.classList.add("product-category");
    category.textContent = product.category.toUpperCase();
    category.style.textAlign = "center";
    productImage.appendChild(category);

    const productInfo = document.createElement("div");
    productInfo.classList.add("menu_item_info");
    const productLink = document.createElement("a");
    const title = document.createElement("h3");
    title.classList.add("menu_item_title");
    title.innerHTML = `<strong>${product.name}</strong>`;
    productLink.appendChild(title);
    productInfo.appendChild(productLink);
    const price = document.createElement("p");
    price.classList.add("price_item");
    price.textContent = product.price;
    productInfo.appendChild(price);

    productElement.appendChild(productImage);
    productElement.appendChild(productInfo);
    productListElement.appendChild(productElement);

    productElement.addEventListener("click", () => {
      product.image = '../' + product.image
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "./product/mota.html";
    });
  });
}

function updatePagination() {
      const totalPages = Math.ceil(renderProducts.length / itemsPerPage);

      const prevButton = document.querySelector(".page1");
      const nextButton = document.querySelector(".page2");
      const listPageElement = document.querySelector(".pagination");

      if (!listPageElement) {
          console.error("Không tìm thấy phần tử .pagination");
          return;
      }

      const pageLinks = listPageElement.querySelectorAll("li:not(.page1):not(.page2)");

      if (currentPage === 1) {
          prevButton.classList.add("disabled");
          nextButton.classList.remove("disabled");
      } else if (currentPage === totalPages) {
          nextButton.classList.add("disabled");
          prevButton.classList.remove("disabled");
      } else {
          prevButton.classList.remove("disabled");
          nextButton.classList.remove("disabled");
      }

      pageLinks.forEach((link) => link.classList.remove("active"));
      if (pageLinks[currentPage - 1]) {
          pageLinks[currentPage - 1].classList.add("active");
      }
  }

document.querySelector(".page1").addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    renderPage(currentPage);
    updatePagination();
  }
});

document.querySelector(".page2").addEventListener("click", function () {
  const totalPages = Math.ceil(renderProducts.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderPage(currentPage);
    updatePagination();
  }
});

document.querySelectorAll(".listpage li:not(.page1):not(.page2)").forEach(function (pageLink, index) {
  pageLink.addEventListener("click", function () {
    currentPage = index + 1;
    renderPage(currentPage);
    updatePagination();
  });
});

renderPage(currentPage);
updatePagination();
});

/* Chi tiết sản phẩm */
document.addEventListener("DOMContentLoaded", () => {
const productData = JSON.parse(localStorage.getItem("selectedProduct"));

if (!productData) {
  window.location.href = "../index.html";
  return;
}

const breadcumCategory = document.querySelector("#breadcum-category");
breadcumCategory.textContent = productData.category;

breadcumCategory.addEventListener("click", () => {
  window.location.href = `../menu/allmenu.html#all-menu-section`;
});

const breadcumProduct = document.querySelector("#breadcum-product");
breadcumProduct.textContent = productData.name;

document.querySelector(".product-gallery img").src = productData.image;
document.querySelector(".product_details_info h3").textContent =
  productData.name;
document.querySelector(".availability b").textContent =
  productData.availability ? "Còn hàng" : "Hết hàng";
document.querySelector(
  ".availability"
).innerHTML += ` | Mã sản phẩm: <b>${productData.productCode}</b>`;
document.querySelector(".price").textContent = productData.price;
document.querySelector(".product_tag-read p").textContent =
  productData.description;
});

document.addEventListener("DOMContentLoaded", function() {
const thumbnails = document.querySelectorAll('.thumbnail-img');

const carouselImage = document.querySelector('.carousel-item img');

if (!carouselImage) {
  console.error('Không tìm thấy hình ảnh carousel chính');
  return;
}

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', function() {
        if (this.src) {
            carouselImage.src = this.src;
        }
    });
});
});

