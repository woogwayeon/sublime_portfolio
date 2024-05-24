
const mainTab = document.querySelectorAll('.main-tab');
const tabIcon = document.querySelectorAll('.main-tab .icon');
const tabColline = document.querySelectorAll('.main-tab .colline');
const sideNav = document.querySelectorAll('.main-side');
const langSet = document.querySelectorAll('.footer-inner .lang')

const mainCon = document.querySelectorAll('.main-content');
const tabArr = [0, 1, 2, 3];

//초기설정
mainCon.forEach((firstSet)=>{firstSet.style.display='none'});
langSet.forEach((firstSet)=>{firstSet.style.display='none'});
mainCon[0].style.display="block";
mainTab[0].style.background="#333";
tabIcon[0].style.transform="rotate(90deg)"
tabIcon[0].style.marginTop="12px"
sideNav[0].style.background="#444"
langSet[0].style.display="block";
langSet[0].innerText="HTML"

//상단 탭메뉴
for( let i=0; i < tabArr.length; i++){

	mainTab[i].addEventListener('click',()=>{
		mainCon.forEach((e)=>{ e.style.display='none' });
		mainCon[i].style.display="block";
		
		mainTab.forEach((e)=>{ e.style.background="none" });
		mainTab[i].style.background="#333";

		tabIcon.forEach((e)=>{
			e.style.transform="rotate(0deg)"
			e.style.marginTop="0px"
		});
		
		tabIcon[i].style.transform="rotate(90deg)"
		tabIcon[i].style.marginTop="12px"

		mainCon.forEach((e)=>{ e.style.display='none' });
		mainCon[i].style.display="block";

		sideNav.forEach((e)=>{e.style.background="none"})
		sideNav[i].style.background="#444"

		langSet.forEach((e)=>{e.style.display='none'});
		langSet[i].style.display="block";
		



	})

	sideNav[i].addEventListener('click',()=>{
		mainCon.forEach((e)=>{ e.style.display='none' });
		mainCon[i].style.display="block";
		
		mainTab.forEach((e)=>{ e.style.background="none" });
		mainTab[i].style.background="#333";

		tabIcon.forEach((e)=>{
			e.style.transform="rotate(0deg)"
			e.style.marginTop="0px"
		});
		
		tabIcon[i].style.transform="rotate(90deg)"
		tabIcon[i].style.marginTop="12px"

		mainCon.forEach((e)=>{ e.style.display='none' });
		mainCon[i].style.display="block";

		sideNav.forEach((e)=>{e.style.background="none"})
		sideNav[i].style.background="#444"

				langSet.forEach((e)=>{e.style.display='none'});
		langSet[i].style.display="block";

	})


}

const sectionIds = ['visual', 'works', 'design', 'profile']; 
// 각 섹션에 해당하는 ID 목록

// 섹션을 보여주는 함수
function showSection(index) {
        mainCon.forEach((e) => { e.style.display = 'none'; });
        mainCon[index].style.display = 'block';

        mainTab.forEach((e) => { e.style.background = 'none'; });
        mainTab[index].style.background = '#333';

        tabIcon.forEach((e) => {
	        e.style.transform = 'rotate(0deg)';
	        e.style.marginTop = '0px';
	    });

        tabIcon[index].style.transform = 'rotate(90deg)';
        tabIcon[index].style.marginTop = '12px';

        sideNav.forEach((e) => { e.style.background = 'none'; });
        sideNav[index].style.background = '#444';

        langSet.forEach((e) => { e.style.display = 'none'; });
        langSet[index].style.display = 'block';
}

// 초기 설정: URL의 해시값에 따라 해당 섹션을 보여줌.
window.onload = () => {
        const hash = window.location.hash.substring(1); // URL의 해시값 GET.
        
        console.log(hash)
        
        const index = sectionIds.indexOf(hash); // hash 유효성 검사
        
        if (index !== -1) { // hash값이 유효할 경우에만 동작
        	showSection(index);
        }
};



