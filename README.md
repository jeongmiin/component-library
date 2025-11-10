# Component Library
> 🚧 이 프로젝트는 지속적으로 업데이트되고 있습니다. 새로운 컴포넌트가 계속 추가될 예정입니다!

웹 개발을 위한 재사용 가능한 UI 컴포넌트 라이브러리입니다. Tailwind CSS를 기반으로 다양한 폼 요소와 인터랙티브 컴포넌트를 제공합니다.

## 프로젝트 개요

이 프로젝트는 일관된 디자인 시스템을 기반으로 한 UI 컴포넌트 모음을 제공합니다. 각 컴포넌트는 다양한 크기, 스타일, 상태를 지원하며 쉽게 커스터마이징할 수 있습니다.

## 포함된 컴포넌트

### Buttons
- 6가지 계층 구조: Primary, Secondary, Tertiary, Inverse, Neutral, Subtle
- 5가지 사이즈: XS, SM, MD, LG, XL
- 아이콘 버튼, 텍스트 버튼, 링크 버튼 지원
- 비활성화 상태 지원

### Input
- 3가지 사이즈: SM, MD, LG
- Bottom Line 스타일
- Floating Label 지원
- 에러/성공 메시지 표시
- 버튼과 함께 사용 가능
- 비활성화 상태 지원

### Checkbox
- 3가지 사이즈: SM, MD, LG
- 선택, 미선택, 비활성화 상태
- Switch Toggle 스타일
- Chips 스타일 (박스형 체크박스)

### Radio Button
- 3가지 사이즈: SM, MD, LG
- 선택, 미선택, 비활성화 상태
- Radio Chips 스타일 (박스형 라디오버튼)

### Select
- 3가지 사이즈: SM, MD, LG
- 커스텀 드롭다운 아이콘
- Label 지원

## 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 커스텀 CSS 변수 및 스타일
- **Tailwind CSS v4**: 유틸리티 기반 스타일링
- **JavaScript**: 인터랙션 및 네비게이션
- **Pretendard Font**: 한글 웹 폰트
- **Phosphor Icons**: 아이콘 시스템

## 디자인 철학

### 클래스 네이밍 컨벤션

이 프로젝트는 **언더스코어(_) 네이밍**을 사용하여 커스텀 컴포넌트 클래스와 Tailwind CSS 클래스를 명확히 구분합니다.

- **커스텀 컴포넌트**: `btn_base`, `input_field`, `check_label` (언더스코어 사용)
- **Tailwind CSS**: `flex`, `gap-4`, `bg-white` (하이픈 사용)

이러한 네이밍 방식을 통해 코드를 읽을 때 어떤 클래스가 커스텀 스타일인지, Tailwind 유틸리티 클래스인지 한눈에 알아볼 수 있습니다.

#### 예시
```html
<!-- 명확한 구분 -->
<button class="btn_base primary md">
  <!-- btn_base: 커스텀 컴포넌트 -->
  <!-- primary, md: 커스텀 수식어 -->
</button>

<div class="flex gap-4 bg-white rounded-lg p-6">
  <!-- flex, gap-4, bg-white 등: Tailwind 유틸리티 -->
</div>

<!-- 함께 사용 -->
<input class="input_base md border border-gray-200 focus:ring-2" />
<!-- input_base, md: 커스텀 | border, focus:ring-2: Tailwind -->
```

## 프로젝트 구조

```
component-library/
├── component_library.html    # 메인 HTML 파일
├── css/
│   ├── common.css            # 공통 스타일
│   ├── components.css        # 컴포넌트 스타일
│   ├── root_semantic_layout.css
│   ├── root_system_layout.css
│   └── theme.css             # 테마 설정
├── js/
│   └── common.js             # 네비게이션 및 아코디언 스크립트
└── README.md
```

## 사용 방법

1. 프로젝트 클론 또는 다운로드
2. [component_library.html](component_library.html) 파일을 브라우저에서 열기
3. 좌측 사이드바에서 원하는 컴포넌트 선택
4. 각 컴포넌트의 코드 예시를 참고하여 사용

## 색상 팔레트

### Primary Colors (Orange)
- Orange-500: `#FF6E2B` (메인 브랜드 컬러)
- Orange-600: `#F05323`
- Orange-700: `#DA4C20`

### Gray Scale
- Gray-50 ~ Gray-950: 다양한 회색 톤

### Accent Colors (Blue)
- Blue-500: `#4A8AFF`
- Blue-600: `#427EFF`
- Blue-700: `#2160D5`

## 주요 기능

- **다크 모드 준비**: CSS 변수 기반 테마 시스템
- **접근성**: 시맨틱 HTML과 ARIA 레이블 지원
- **코드 아코디언**: 각 컴포넌트의 코드를 접었다 펼 수 있음
- **자동 네비게이션**: 스크롤 시 현재 섹션 자동 하이라이트

## 커스터마이징

CSS 변수를 수정하여 쉽게 테마를 변경할 수 있습니다:

```css
:root {
  --color-orange-500: #FF6E2B;
  --color-gray-900: #292F38;
  /* ... 기타 변수들 */
}
```

## 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)


