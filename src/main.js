// 1. sweetalert2 라이브러리와 CSS 파일을 가져옵니다.
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// '절대 이 버튼을 클릭하지 마세요' 버튼 요소를 선택합니다.
const forbiddenButton = document.querySelector('#forbidden-button');

// 버튼에 클릭 이벤트 리스너를 추가합니다.
forbiddenButton.addEventListener('click', () => {
  // 2. 기존 alert() 대신 Swal.fire()를 사용합니다.
  Swal.fire({
    title: '당신은 5억년 버튼을 눌렀습니다',
    html: '<strong>당신의 5억년 동안의 기억이 사라졌습니다.</strong><br>10,000,000원이 계좌로 입금되었습니다.',
    icon: 'warning', // 아이콘 종류: success, error, warning, info, question
    confirmButtonText: '닫기',
    confirmButtonColor: '#ff0055', // 버튼 색상은 이전 CSS 테마와 맞춰줍니다.
    
  });
});

console.log('sweetalert2가 적용된 Vite 앱이 로드되었습니다!');