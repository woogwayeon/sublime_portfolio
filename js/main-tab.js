
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



