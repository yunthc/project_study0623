// 스타일시트를 직접 임포트할 수도 있지만, 여기서는 index.html에서 연결하는 방식을 사용합니다.
// import '../indexStyles.css' // Vite에서는 이 방식도 가능합니다.

// '절대 이 버튼을 클릭하지 마세요' 버튼 요소를 선택합니다.
const forbiddenButton = document.querySelector('#forbidden-button');

// 버튼에 클릭 이벤트 리스너를 추가합니다.
forbiddenButton.addEventListener('click', () => {
  // 버튼을 클릭하면 경고창을 띄웁니다.
  alert('당신의 5억년 동안의 기억이 사라졌습니다.');
});

console.log('Vite 앱이 성공적으로 로드되었습니다. 버튼을 눌러보세요!');