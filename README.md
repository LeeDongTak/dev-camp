dev camp 로그인/회원가입 폼 만들기

사용 라이브 러리
shadcn/ui
zod
react-hook-form

shadcn/ui으로 이미 만들어진 컴포넌트를 가져와 사용한다. 
tailwind css 기반으로 작성되었기 때문에 tailwind css를 이용하여 스타일을 커스텀할 수 있다. 

zod를 이용하여 유효성검사를 할 수 있다. 
기존 타입스크립트로 타입에러를 걸려내느것에 더해 유효성검사까지 가능하다.

zod로 작성한 validation을 react-hook-form으로 form유효성 검사에 적용할 수 있다. 
이미 shadcn/ui에 react-hook-form을 적용하여 컴포넌트를 말들었기 때문에 shadcn/ui의 컴포넌트는 
건들 필요가 없고 react-hook-form에 zod로 작성된 validation을 연결하여 함수에 호출하면 된다. 


