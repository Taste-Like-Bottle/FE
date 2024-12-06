# 스포크가드 디자인 Prompt 생성 앱

---

## 개요
이 프로젝트는 **AI 기술 (Gemini-1.5-Flash API + GPT + DALL·E 3)** 을 활용하여 **휠체어 사용자를 위한 스포크가드 디자인 Prompt 생성 앱**입니다. 사용자는 간단한 키워드 입력만으로 독창적이고 감각적인 디자인을 얻을 수 있으며, 이는 장애인들이 자신의 개성과 취향을 스포크가드를 통해 자유롭게 표현할 수 있도록 합니다.

이 프로젝트는 단순히 디자인을 제공하는 것을 넘어, **다양한 언어를 지원**하고 **사용자 친화적인 인터페이스**를 갖추었으며, 더 나아가 **장애 아동을 포함한 저수준 언어 사용자를 위해서도 폭넓은 선택지와 창의적인 결과**를 제공하고자 합니다.

아래에는 실제 휠체어에 적용 가능한 시각적 예시 이미지와 사용자 UI 스크린샷을 첨부할 예정입니다.

---

## 주요 특징

### 1. 멀티모달 AI 활용
- **GPT & DALL·E 3 API 연동**: 텍스트 기반의 간단한 키워드 입력으로 다양한 비주얼 디자인 샘플을 생성할 수 있습니다.  
- **Gemini-1.5-Flash API**를 통한 백엔드 모델 온도값(0.3~0.4) 세밀 조정으로 안정적이고 창의적인 결과물 제공.

### 2. 사용자 친화적 인터페이스
- **다국어 지원**: 한국어, 영어 등 다양한 언어로 키워드 입력 및 안내가 가능.  
- **직관적인 UI/UX**: 사용자 경험을 극대화한 인터페이스로, 컴퓨터나 스마트폰에 익숙하지 않은 사용자도 쉽게 접근.  
- **저연령·저언어능력 사용자를 위한 간편 모드**: 단순한 이모지나 간단한 그림 아이콘만으로도 디자인 Prompt를 생성할 수 있게 하여, 아동 또는 언어 구사 능력이 낮은 사용자도 손쉽게 창의적인 디자인을 얻을 수 있습니다.

### 3. 디자인 접근성 강화
- **디자인 결과물 저장 및 공유**: 생성된 스포크가드 디자인을 디지털 파일로 저장하고, 소셜 미디어나 이메일을 통해 공유할 수 있습니다.  
- **확장 가능한 디자인 커뮤니티 형성**: 향후 사용자들이 생성한 디자인을 모아 오픈 갤러리 형태로 운영, 다양한 아이디어와 취향을 서로 교류하는 장을 마련할 수 있습니다.

---

## 지속가능성 목표 기여 (UN SDGs)
- **목표 10번 (불평등 완화)**: 장애인이 자신의 개성을 시각적으로 표현하고, 이를 통해 사회적 차별을 극복하고 자존감을 높일 수 있도록 돕습니다.  
- **목표 3번 (건강과 웰빙 보장)**: 디자인을 통한 자기표현은 심리적 안정감과 삶의 질 향상에 기여합니다.

---

## 기술 스택
- **백엔드**: Node.js 기반 API 서버  
- **AI 모델**: Gemini-1.5-Flash API (Prompt 모델링 및 안정적 결과 제공), GPT, DALL·E 3  
- **프론트엔드**: React, Vue.js 등 (선택 사항)  
- **다국어 지원**: i18n 라이브러리를 통한 다국어 번역 및 현지화 구현

---

## 설치 및 실행 방법 (예시)
```bash
# 프로젝트 클론
git clone https://github.com/your-repo/spokeguard-design-generator.git

# 백엔드 서버 실행
cd backend
npm install
npm run start

# 프론트엔드 서버 실행
cd frontend
npm install
npm run serve
```

---

## 사용 방법
1. 웹 브라우저에서 애플리케이션 접근 (예: http://localhost:8080)
2. 원하는 언어 선택
3. 간단한 키워드(예: "바다", "별이 빛나는 밤", "미소 짓는 고양이"), 색, 스타일을 선정
4. AI 모델이 자동으로 스포크가드 디자인을 생성
5. 결과물을 저장 또는 공유

---

## 스크린샷 및 예시 이미지
(여기에 실제 스포크가드 예시 이미지, UI 화면 캡처 등을 첨부 예정)

![스포크가드 디자인 예시](./images/spokeguard_example.png)  
![UI 스크린샷 예시](./images/ui_screenshot.png)

---
