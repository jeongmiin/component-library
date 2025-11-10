    // 네비게이션 활성화
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    });

    // 스크롤 시 네비게이션 자동 활성화
    window.addEventListener('scroll', () => {
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });

    // 코드 아코디언 초기화
    document.addEventListener('DOMContentLoaded', function() {
      // 모든 코드 블록을 찾아서 아코디언으로 변환
      const codeBlocks = document.querySelectorAll('.bg-gray-900.rounded-lg.p-5.overflow-x-auto');

      codeBlocks.forEach(block => {
        // 이미 아코디언으로 래핑되어 있는지 확인
        if (block.parentElement.classList.contains('code_accordion_content')) {
          return;
        }

        // 아코디언 헤더 생성
        const header = document.createElement('div');
        header.className = 'code_accordion_header';
        header.innerHTML = '<span>코드 보기</span><i class="ph ph-caret-down code_accordion_icon"></i>';

        // 아코디언 컨텐츠 래퍼 생성
        const content = document.createElement('div');
        content.className = 'code_accordion_content';

        // 기존 코드 블록을 컨텐츠로 이동
        block.parentNode.insertBefore(header, block);
        block.parentNode.insertBefore(content, block);
        content.appendChild(block);

        // 클릭 이벤트 추가
        header.addEventListener('click', function() {
          this.classList.toggle('active');
          content.classList.toggle('active');
        });
      });
    });