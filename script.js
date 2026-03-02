const reviews = [
    { name: "Vipin", product: "KRI-K27", rating: 5, comment: "Bahut accha product hai for bone health! Highly recommended." },
    { name: "Shailesh Sharma", product: "KRISURE", rating: 4, comment: "Good immunity booster. Feeling healthier now." },
    { name: "Sumit", product: "KEFTAL SPASS", rating: 5, comment: "Dard se turant aaram milta hai. Very effective medicine!" },
    { name: "Md. Kauser", product: "KPDEX", rating: 4, comment: "Good cough syrup. Khansi mein relief milta hai." },
    { name: "Bhanu", product: "KRI-K27", rating: 5, comment: "Doctor ne recommend kiya tha. Excellent quality!" },
    { name: "Chetanya", product: "UTI-LEU", rating: 5, comment: "Helped me recover quickly. Bahut satisfied hoon!" },
    { name: "Abhishek", product: "Aciramol P", rating: 4, comment: "Reliable pain relief. Ghar mein hamesha rakhta hoon." },
    { name: "Vikash", product: "KRISURE", rating: 5, comment: "Immunity bahut improve hui hai. Great product!" },
    { name: "Shilendra", product: "Aciramol SP", rating: 5, comment: "Fast acting aur effective. Highly recommended!" },
    { name: "Jay Pratap", product: "KPin-NT", rating: 4, comment: "Nerve health ke liye accha hai. Effective product." },
    { name: "Neha Mishra", product: "KP wash", rating: 5, comment: "Natural aur gentle. Daily use ke liye perfect!" },
    { name: "Swati Tomar", product: "KP-D3 60k", rating: 5, comment: "Great vitamin D supplement. Energy level badh gaya!" },
    { name: "Ajay Singh", product: "KPDEX", rating: 5, comment: "Khansi ke liye kamaal ki dawa. Trusted brand!" },
    { name: "Kailash Sharma", product: "KRI-K27", rating: 4, comment: "Good bone health supplement. Improvement dikh raha hai." },
    { name: "Anita", product: "KRISURE", rating: 5, comment: "Poora family use karta hai. Excellent quality!" },
    { name: "Rashmi Sharma", product: "KEFTAL SPASS", rating: 5, comment: "Dard se quick relief. Bahut effective hai!" },
    { name: "Rinkesh", product: "UTI-LEU", rating: 4, comment: "Effective product. Doctor ne suggest kiya tha." },
    { name: "Bharti", product: "Aciramol P", rating: 5, comment: "Bukhar aur dard mein always reliable. Great product!" },
    { name: "Girija", product: "KP wash", rating: 5, comment: "Gentle aur effective. Love this product!" },
    { name: "Shivprakash", product: "KRI-K27", rating: 5, comment: "Excellent formulation. Bahut acche results mil rahe hain!" },
    { name: "Neha", product: "KPDEX", rating: 4, comment: "Good cough relief. Jaldi aaram milta hai." },
    { name: "Pooja", product: "KRISURE", rating: 5, comment: "Immunity boost ho gayi. Feeling healthier every day!" },
    { name: "Vivek", product: "Aciramol SP", rating: 5, comment: "Pain management ke liye very effective. Highly satisfied!" },
    { name: "Neeraj", product: "KPin-NT", rating: 4, comment: "Neurological support ke liye accha. Good quality." },
    { name: "Bhanu Pratap", product: "KP-D3 60k", rating: 5, comment: "Perfect vitamin D dosage. Kaafi better feel kar raha hoon!" },
    { name: "Sachin", product: "KEFTAL SPASS", rating: 5, comment: "Quick pain relief. Hamesha paas rakhta hoon!" },
    { name: "Arpit", product: "UTI-LEU", rating: 5, comment: "Effective treatment. Results se bahut khush hoon!" },
    { name: "K Sarkar", product: "KRI-K27", rating: 5, comment: "Bone health ke liye sabse accha. Highly recommended!" },
    { name: "Jitendra Gupta", product: "KRISURE", rating: 4, comment: "Good immunity booster. Family ka favorite hai." },
    { name: "C K Biswash", product: "Aciramol P", rating: 5, comment: "Reliable aur effective. Hamesha kaam karta hai!" },
    { name: "S KS Sarkar", product: "KPDEX", rating: 5, comment: "Excellent cough syrup. Fast relief guaranteed!" },
    { name: "Khurseed", product: "KP wash", rating: 4, comment: "Natural aur safe. Daily hygiene ke liye good." },
    { name: "Kamal", product: "Aciramol SP", rating: 5, comment: "Dard se bahut effective relief. Trusted brand!" },
    { name: "Abhishek", product: "KPin-NT", rating: 5, comment: "Neurological support mein excellent. Great results!" },
    { name: "Akash", product: "KP-D3 60k", rating: 5, comment: "High quality vitamin D. Energetic feel ho raha hai!" },
    { name: "Ansari", product: "KEFTAL SPASS", rating: 4, comment: "Good pain relief. Satisfied with results." },
    { name: "Tahir", product: "UTI-LEU", rating: 5, comment: "Effective aur reliable. Highly recommended!" },
    { name: "Haider", product: "KRI-K27", rating: 5, comment: "Bone health ke liye best. Improvement dikh raha hai!" },
    { name: "V Taneja", product: "KRISURE", rating: 5, comment: "Excellent immunity booster. Family regularly use karti hai!" },
    { name: "Om Prakash", product: "KPDEX", rating: 4, comment: "Good cough medicine. Effective hai." }
];

const products = [
    {
        id: 1,
        name: "KRI-K27 Bone Health Booster",
        description: "Comprehensive bone health support with K27 formulation.",
        composition: "Calcium Citrate Malate 250mg, Calcitriol 0.25mcg, Vitamin K2-7 45mcg, Zinc Oxide 7.5mg, Magnesium Oxide 50mg",
        mrp: 175,
        mrpDisplay: "₹175 (Strips)",
        img: "krik-27.png",
        category: "Bone Health"
    },
    {
        id: 2,
        name: "KRISURE Immunity Booster",
        description: "Boost your natural defenses with our premium immunity syrup.",
        composition: "Ferric Ammonium Citrate 160mg, Folic Acid 0.5mg, Cyanocobalamin 7.5mg, Cupric Sulfate 30mcg, Manganese Sulfate 30mcg",
        mrp: 175,
        mrpDisplay: "₹175 (200ml)",
        img: "krisure.png",
        category: "Immunity & Iron Booster"
    },
    {
        id: 3,
        name: "KEFTAL SPASS",
        description: "Effective relief from spasmodic pain and discomfort.",
        composition: "Mefenamic Acid 250mg & Dicyclomine Hydrochloride 10mg",
        mrp: 49,
        mrpDisplay: "₹49",
        img: "KEFTAL.PNG",
        category: "Spasmodic Pain Relief"
    },
    {
        id: 4,
        name: "KPDEX Cough Syrup",
        description: "Fast-acting relief for respiratory congestion and cough.",
        composition: "Ambroxol 15mg, Dextromethorphan Hbr 10mg, Phenylephrine HCl 5mg, Chlorpheniramine Maleate 2mg, Menthol Syrup 1.5mg",
        mrp: 120,
        mrpDisplay: "₹120 (100ml)",
        img: "KPDEX.PNG",
        category: "Dry & Wet Cough Syrup"
    },
    {
        id: 5,
        name: "Kpdex H",
        description: "Natural honey-based cough syrup for soothing relief.",
        composition: "Honey-based cough syrup formulation",
        mrp: 140,
        mrpDisplay: "₹140 (100ml)",
        img: "kpdex-h.png",
        category: "Ayurvedic Cough Syrup"
    },
    {
        id: 6,
        name: "UTI-LEU Capsule",
        description: "Specialized care for urinary tract health and comfort.",
        composition: "Cranberry Extract 200mg, D-Mannose 200mg, Potassium Magnesium Citrate 975mg",
        mrp: 350,
        mrpDisplay: "₹350 (Strips)",
        img: "UTI-LEU.png",
        category: "UTI & Leucorrhoea Treatment"
    },
    {
        id: 7,
        name: "Aciramol P",
        description: "Reliable pain relief and fever reduction formula.",
        composition: "Aceclofenac 100mg & Paracetamol 325mg",
        mrp: 120,
        mrpDisplay: "₹120 (Strips)",
        img: "AP.png",
        category: "Pain Relief"
    },
    {
        id: 8,
        name: "Aciramol SP",
        description: "Enhanced formula for fast and effective pain relief.",
        composition: "Aceclofenac 100mg, Paracetamol 325mg & Serratiopeptidase 15mg",
        mrp: 150,
        mrpDisplay: "₹150 (Strips)",
        img: "ASP.png",
        category: "Pain Relief"
    },
    {
        id: 9,
        name: "KPin-NT",
        description: "Neurological comfort and support for nerve health.",
        composition: "Pregabalin 75mg & Nortriptyline Hydrochloride 10mg",
        mrp: 350,
        mrpDisplay: "₹350 (strips)",
        img: "KPINT.PNG",
        category: "Neuro Pain Relief"
    },
    {
        id: 10,
        name: "KP wash",
        description: "Natural hygiene care for daily protection.",
        composition: "Lactic Acid, Tea Tree Oil, Sea Buckthorn Oil",
        mrp: 250,
        mrpDisplay: "₹250 (100ml)",
        img: "KPWASH.PNG",
        category: "Personal Care & Herbal Intimate Wash"
    },
    {
        id: 11,
        name: "KP-D3 60k",
        description: "High-potency Vitamin D3 for optimal bone health.",
        composition: "Cholecalciferol 60,000 IU",
        mrp: 99,
        mrpDisplay: "₹99 (strips)",
        img: "Screenshot_20260302-144810.png",
        category: "Bone Health"
    }
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    const cartToggle = document.getElementById('cart-toggle');
    const closeCart = document.getElementById('close-cart');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.querySelector('.cart-count');
    const cartTotalAmount = document.getElementById('cart-total-amount');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeCheckout = document.getElementById('close-checkout');
    const checkoutForm = document.getElementById('checkout-form');
    const checkoutTotal = document.getElementById('checkout-total');

    // Inject Products
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card glass-card reveal';
        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.img}" alt="${product.name}">
                <span class="category-tag">${product.category}</span>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="composition"><strong>Composition:</strong> ${product.composition}</p>
                <p>${product.description}</p>
                <div class="product-footer">
                    <span class="mrp">${product.mrpDisplay}</span>
                    <button class="btn btn-sm btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });

    // Inject Reviews
    const reviewsContainer = document.getElementById('reviews-container');
    if (reviewsContainer) {
        reviews.forEach(review => {
            const reviewCard = document.createElement('div');
            reviewCard.className = 'review-card glass-card reveal';
            const stars = '★'.repeat(review.rating);
            reviewCard.innerHTML = `
                <div class="review-header">
                    <div class="reviewer-info">
                        <div class="reviewer-avatar">${review.name.charAt(0)}</div>
                        <div>
                            <h4>${review.name}</h4>
                            <p class="product-name">${review.product}</p>
                        </div>
                    </div>
                    <div class="rating">${stars}</div>
                </div>
                <p class="review-text">${review.comment}</p>
            `;
            reviewsContainer.appendChild(reviewCard);
        });
    }

    // Cart Logic
    const updateCartUI = () => {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
        } else {
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.img}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p class="price">₹${item.mrp}</p>
                        <span class="remove-item" data-id="${item.id}">Remove</span>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
        }

        const total = cart.reduce((sum, item) => sum + item.mrp, 0);
        cartTotalAmount.innerText = `₹${total}`;
        cartCount.innerText = cart.length;
    };

    productsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const id = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(p => p.id === id);
            cart.push(product);
            updateCartUI();
            cartSidebar.classList.add('active');
            cartOverlay.classList.add('active');
        }
    });

    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item')) {
            const id = parseInt(e.target.getAttribute('data-id'));
            const index = cart.findIndex(item => item.id === id);
            if (index !== -1) {
                cart.splice(index, 1);
                updateCartUI();
            }
        }
    });

    cartToggle.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
    });

    const closeCartFn = () => {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    };

    closeCart.addEventListener('click', closeCartFn);
    cartOverlay.addEventListener('click', closeCartFn);

    // Checkout Logic
    const checkoutBtn = document.querySelector('.cart-footer .btn-block');
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        const total = cart.reduce((sum, item) => sum + item.mrp, 0);
        checkoutTotal.innerText = `₹${total}`;
        checkoutModal.classList.add('active');
        closeCartFn();
    });

    closeCheckout.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
    });

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            name: document.getElementById('cust-name').value,
            phone: document.getElementById('cust-phone').value,
            email: document.getElementById('cust-email').value,
            address: document.getElementById('cust-address').value,
            city: document.getElementById('cust-city').value,
            pincode: document.getElementById('cust-pincode').value,
            items: cart,
            total: cart.reduce((sum, item) => sum + item.mrp, 0)
        };

        console.log('Order placed:', formData);
        alert(`Thank you for your order!\n\nOrder Total: ₹${formData.total}\n\nWe will contact you at ${formData.phone} for delivery confirmation.`);

        // Clear cart and close modal
        cart = [];
        updateCartUI();
        checkoutModal.classList.remove('active');
        checkoutForm.reset();
    });

    // Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.add('fa-bars');
                menuToggle.querySelector('i').classList.remove('fa-times');
            }
        });
    });

    // Form Submission - Send to Email
    const enquiryForm = document.getElementById('enquiry-form');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const name = enquiryForm.querySelector('input[type="text"]').value;
            const email = enquiryForm.querySelector('input[type="email"]').value;
            const message = enquiryForm.querySelector('textarea').value;

            // Create mailto link
            const subject = encodeURIComponent(`Enquiry from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            const mailtoLink = `mailto:Infokrirapharma@gmail.com?subject=${subject}&body=${body}`;

            // Open default email client
            window.location.href = mailtoLink;

            // Show confirmation
            alert('Thank you for your enquiry! Your email client will open to send the message.');
            enquiryForm.reset();
        });
    }
});
