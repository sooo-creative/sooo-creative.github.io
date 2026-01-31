
        /* 스크롤 애니메이션 */
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.gallery-item').forEach(item => {
            observer.observe(item);
        });

        /* 모달 버전 */
        const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('pjModal');
    const modalImgContainer = document.getElementById('modalImgContainer');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalDetail = document.getElementById('modalDetail');
    const closeModal = document.querySelector('.close-modal');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const title = item.getAttribute('data-title');
        const desc = item.getAttribute('data-desc');     // <b>태그가 포함된 문자열
        const detail = item.getAttribute('data-detail'); // <b>태그가 포함된 문자열
        const images = item.getAttribute('data-images').split(',');

        // innerText 대신 innerHTML 사용
        modalTitle.innerHTML = title; 
        modalDesc.innerHTML = desc;   // 여기서 <b> 태그가 실제 볼드로 변환됨
        modalDetail.innerHTML = detail; // 여기서 <b> 태그가 실제 볼드로 변환됨

        // 이미지 처리 로직 (이전과 동일)
        modalImgContainer.innerHTML = ''; 
        images.forEach(imgSrc => {
            const imgTag = document.createElement('img');
            imgTag.src = imgSrc.trim();
            imgTag.style.width = '100%';
            imgTag.style.marginBottom = '15px';
            modalImgContainer.appendChild(imgTag);
        });


        // 4. 모달 띄우기
        modal.classList.add('active'); // 또는 modal.style.display = 'block';
    });
});

// 모달 닫기
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

        // 부드러운 스크롤 실행
        document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // 내부 링크(#)인 경우만 실행
            if (href.startsWith('#')) {
                e.preventDefault(); // 브라우저 기본 이동 차단

                // 만약 href가 그냥 "#" 이라면 맨 위(0,0)로 이동
                if (href === "#") {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } 
                // 만약 "#about" 처럼 ID가 지정되어 있다면 해당 위치로 이동
                else {
                    const target = document.querySelector(href);
                    if (target) {
                        const navHeight = document.querySelector('nav').offsetHeight;
                        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        });
    });
});