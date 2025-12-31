# Component Library

> 🚧 이 프로젝트는 지속적으로 업데이트되고 있습니다. 새로운 컴포넌트가 계속 추가될 예정입니다!

웹 개발을 위한 재사용 가능한 UI 컴포넌트 라이브러리입니다. 반응형 타이포그래피 시스템과 일관된 디자인 변수를 기반으로 다양한 컴포넌트를 제공합니다.

## 프로젝트 개요

이 프로젝트는 일관된 디자인 시스템을 기반으로 한 UI 컴포넌트 모음을 제공합니다. 각 컴포넌트는 다양한 크기, 스타일, 상태를 지원하며 쉽게 커스터마이징할 수 있습니다.

## 포함된 컴포넌트

### 디자인 시스템
- **Colors**: Primary(Orange), Gray(Surface), 상태 컬러(Red, Blue, Yellow)
- **Typography**: 반응형 폰트 시스템 (clamp 기반), Heading & Body 텍스트

### Buttons
- **계층 구조** (6가지): Primary, Secondary, Tertiary, Inverse, Neutral, Subtle
- **사이즈** (5가지): XS, SM, MD, LG, XL
- **변형**: 아이콘 버튼, 텍스트 버튼, 링크 버튼
- **상태**: 기본, 호버, 비활성화

### Form Components

#### Input
- **사이즈** (4가지): SM, MD, LG, XL
- **변형**: 기본형, Bottom Line 스타일
- **기능**: 라벨, 에러 메시지, 버튼 조합, 파일 업로드
- **상태**: 기본, 포커스, 비활성화

#### Textarea
- **사이즈** (3가지): SM, MD, LG
- **기능**: Input과 동일한 구조 및 스타일
- **특징**: 세로 방향 크기 조정 가능

#### Checkbox
- **스타일** (3가지): 기본형, Switch Toggle, Chips
- **사이즈**: SM, MD, LG
- **상태**: 선택, 미선택, 비활성화

#### Radio Button
- **스타일** (2가지): 기본형, Radio Chips
- **사이즈**: SM, MD, LG
- **상태**: 선택, 미선택, 비활성화

#### Select
- **사이즈** (3가지): SM, MD, LG
- **기능**: 커스텀 드롭다운 아이콘, 라벨 지원
- **상태**: 기본, 비활성화

### UI Components

#### Tooltip
- 정보 제공을 위한 툴팁 컴포넌트
- 호버 시 표시

#### Modal
- **중앙 모달**: 정보 전달 및 사용자 확인
- **하단 모달 (Bottom Sheet)**: 모바일 최적화 팝업
- 배경 딤 처리 및 포커스 트랩

#### Tabs
- 관련 콘텐츠 그룹화 및 전환
- 활성 탭 시각적 강조

#### Card
- 콘텐츠 그룹화 및 리스트 표시
- 뱃지, 날짜, 링크 포함

#### Table
- 구조화된 데이터 표시
- 헤더 및 본문 구분
- 가로 스크롤 지원

#### Badge
- **타입** (2가지): 숫자형, 텍스트형
- **사이즈** (4가지): XS, SM, MD, LG
- **상태**: Primary, Secondary, Tertiary, Disabled

## 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**:
  - CSS Variables (Design Tokens)
  - Fluid Typography (clamp 기반)
  - 반응형 미디어쿼리
- **JavaScript**: 네비게이션, 모달, 아코디언 인터랙션
- **Pretendard Font**: 한글 웹 폰트
- **Phosphor Icons**: 아이콘 시스템
- **Material Symbols**: 보조 아이콘

## 디자인 시스템

### 반응형 타이포그래피
```css
/* 유동적 폰트 시스템 */
html { font-size: clamp(12px, 1.5vw, 16px); }

/* rem 기반 변수 */
--text-2xs: 0.625rem;  /* 7.5px ~ 10px */
--text-xs: 0.75rem;    /* 9px ~ 12px */
--text-sm: 0.875rem;   /* 10.5px ~ 14px */
--text-base: 1rem;     /* 12px ~ 16px */
--text-md: 1.125rem;   /* 13.5px ~ 18px */
--text-lg: 1.25rem;    /* 15px ~ 20px */
--text-xl: 1.5rem;     /* 18px ~ 24px */
--text-2xl: 1.75rem;   /* 21px ~ 28px */
--text-3xl: 2rem;      /* 24px ~ 32px */
--text-4xl: 2.25rem;   /* 27px ~ 36px */
```

### 디자인 토큰
```css
/* Semantic Colors */
--text-primary: 기본 텍스트
--text-secondary: 보조 텍스트
--text-tertiary: 부가 텍스트
--text-disabled: 비활성 텍스트

/* System Heights */
--height-xs: 1.5rem;
--height-sm: 2rem;
--height-md: 2.75rem;
--height-xl: 3.5rem;

/* Spacing */
--space-xs: 0.5rem;
--space-sm: 0.625rem;
--space-md: 0.75rem;
--space-lg: 0.875rem;
```

### 클래스 네이밍 컨벤션

**언더스코어(_) 네이밍**을 사용하여 커스텀 컴포넌트와 유틸리티 클래스를 명확히 구분합니다.

- **커스텀 컴포넌트**: `btn_base`, `input_field`, `check_label` (언더스코어)
- **Tailwind 유틸리티**: `flex`, `gap-4`, `bg-white` (하이픈)

#### 예시
```html
<!-- 커스텀 컴포넌트 -->
<button class="btn_base primary md">
  버튼
</button>

<!-- 함께 사용 -->
<div class="input_field">
  <label class="input_label">Label</label>
  <input class="input_base md" />
</div>
```

## 프로젝트 구조

```
component-library/
├── component_library.html    # 메인 HTML 파일
├── css/
│   ├── common.css            # 공통 스타일 (네비게이션, 테이블)
│   ├── components.css        # 컴포넌트 스타일
│   ├── root_semantic_layout.css  # 시맨틱 디자인 토큰
│   └── root_system_layout.css    # 시스템 변수
├── js/
│   └── common.js             # 네비게이션 및 인터랙션
└── README.md
```

## 사용 방법

1. 프로젝트 클론 또는 다운로드
```bash
git clone [repository-url]
cd component-library
```

2. [component_library.html](component_library.html) 파일을 브라우저에서 열기

3. 좌측 사이드바에서 원하는 컴포넌트 선택

4. 각 컴포넌트의 "코드 보기"를 클릭하여 코드 예시 확인

5. 필요한 HTML 및 CSS 클래스를 복사하여 사용

## 색상 팔레트

### Primary Colors (Orange)
- `--orange-500`: `#FF6E2B` (메인 브랜드 컬러)
- `--orange-600`: `#F05323`
- `--orange-700`: `#DA4C20`

### Gray (Surface)
- `--gray-50 ~ --gray-950`: 11단계 회색 스케일

### Accent Colors
- **Blue**: `--blue-500` (#4A8AFF)
- **Red**: `--red-500` (#FF6868)
- **Yellow**: `--yellow-500` (#FFC700)

## 주요 기능

- ✅ **반응형 타이포그래피**: clamp 기반 유동적 폰트 시스템
- ✅ **일관된 디자인 토큰**: CSS Variables 기반 테마 시스템
- ✅ **접근성**: 시맨틱 HTML과 ARIA 속성 지원
- ✅ **코드 아코디언**: 각 컴포넌트의 코드를 접었다 펼칠 수 있음
- ✅ **자동 네비게이션**: 스크롤 시 현재 섹션 자동 하이라이트
- ✅ **모바일 대응**: 태블릿/모바일 미디어쿼리 적용

## 커스터마이징

### CSS 변수 수정
```css
:root {
  /* Primary 컬러 변경 */
  --orange-500: #your-color;

  /* 폰트 크기 범위 조정 */
  html { font-size: clamp(14px, 1.5vw, 18px); }

  /* Spacing 조정 */
  --space-md: 1rem;
}
```

### 미디어쿼리 커스터마이징
```css
@media (max-width: 1024px) {
  :root {
    --text-2xs: 9px;  /* 모바일 최소 폰트 크기 조정 */
  }
}
```

## 브라우저 지원

- ✅ Chrome (최신 버전)
- ✅ Firefox (최신 버전)
- ✅ Safari (최신 버전)
- ✅ Edge (최신 버전)

**요구사항:**
- CSS `clamp()` 지원 (IE11 미지원)
- CSS Variables 지원
- ES6+ JavaScript

## 향후 계획

- [ ] Alert/Toast 컴포넌트 추가
- [ ] Loading Spinner 추가
- [ ] Breadcrumb 네비게이션 추가
- [ ] Pagination 컴포넌트 추가
- [ ] Dropdown Menu 추가
- [ ] Accordion 컴포넌트 추가
- [ ] 다크 모드 지원

## 라이센스

MIT License

## 기여

이슈 및 PR은 언제든 환영합니다!

---