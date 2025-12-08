document.addEventListener('DOMContentLoaded', function() {
    // 네비게이션 활성화
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // 클릭 시 네비게이션 활성화
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    });

    // 스크롤 시 네비게이션 자동 활성화
    function updateActiveNav() {
      let current = '';
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 250;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', updateActiveNav);

    // 페이지 로드 시 초기 활성화
    updateActiveNav();

  // 코드 아코디언 초기화
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

  // 비밀번호 Toggle 버튼
  const visibilityButtons = document.querySelectorAll('.visibility_btn');
  for (const button of visibilityButtons) {
    button.addEventListener('click', function() {
      this.classList.toggle('active');
      const input = this.closest('.relative').querySelector('input');
      if (input.type === 'password') {
        input.type = 'text';
      } else {
        input.type = 'password';
      }
    });
  }

  // 모달 열기
  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.onclick = () => {
      const modal = document.getElementById(btn.dataset.modal);
      modal.style.display = 'block';
      setTimeout(() => modal.classList.add('active'), 10);
    };
  });

  // 모달 닫기
  document.querySelectorAll('.modal_wrap').forEach(wrap => {
    wrap.onclick = e => {
      if (!e.target.closest('.modal_box.bottom') || e.target.classList.contains('modal_close_btn')) {
        wrap.classList.remove('active');
        setTimeout(() => wrap.style.display = 'none', 300);
      }
    };
  });

  // 탭메뉴
  document.querySelectorAll('.tab_item').forEach(item => {
    item.onclick = () => {
      const tabWrap = item.closest('.tab_wrap');
      tabWrap.querySelectorAll('.tab_item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      tabWrap.querySelectorAll('.tab_panel').forEach(p => p.classList.remove('active'));
      document.getElementById(item.dataset.tab).classList.add('active');
    };
  });

}); // DOMContentLoaded