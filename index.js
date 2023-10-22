// Đóng mở Modal
const buyBtns = document.querySelectorAll('.js-buy-ticket')
        const modal = document.querySelector('.js-modal')
        const modalContainer = document.querySelector('.js-modal-container')
        const modalClose = document.querySelector('.js-modal-close')


        // Hàm hiển thị modal mua vé (thêm class open vào modal)
        function showBuyTickets() {
            modal.classList.add('open')
        }

        // hàm ẩn modal mua vé (gỡ bỏ class open vào modal)
        function hideBuyTickets() {
            modal.classList.remove('open')
        }

        // Lặp qua từng thẻ button và nghe hành vi click
        for (const buyBtn of buyBtns) {
            buyBtn.addEventListener('click', showBuyTickets)
        }

        // nghe hành vi click vào button close
        modalClose.addEventListener('click', hideBuyTickets)

        modal.addEventListener('click', hideBuyTickets)

        modalContainer.addEventListener('click', function (event) {
            event.stopPropagation( )
        })
// ============================================== // ============================================================================================ // 
// Tắt , mở menu header moblie
    var header =document.getElementById('header');
    var mobileMenu =document.getElementById('mobile-menu');
    var headerHeight = header.clientHeight;

    //  dong mo mobile menu
    mobileMenu.onclick = function() {
        var isClosed = header.clientHeight === headerHeight;
        if (isClosed) {
            header.style.height = 'auto';
        } else {
            header.style.height = null;
        }
    }

    // tu dong dong khi chon menu
    var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
    for (var i = 0; i < menuItems.length; i++) {
        var menuItem = menuItems[i];
        
        menuItem.onclick = function(event) {
            var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            if (isParentMenu) {
                event.preventDefault();
            } else {
                header.style.height = null;
            }
        }
    }   