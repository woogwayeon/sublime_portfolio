

// Works

// 웍스 탭 스크롤 애니메이션 함수
let observer = new IntersectionObserver((e)=>{
	e.forEach((e)=>{
		if(e.isIntersecting){
			e.target.style.opacity= 1;
		}else{
			e.target.style.opacity= 0;
		}
	})
})	

let card = document.querySelectorAll('.works-card')
let worksEx = document.querySelector('.works-ex')

observer.observe(worksEx)
for(i=0; i<6; i++){
	observer.observe(card[i])
}

// 웍스 탭 카드 오버했을 때 하얀 설명상자가 올라오는 함수
const worksCard = document.querySelectorAll('.works-card');
const cardOver = document.querySelectorAll('.card-mouse-over');
const items = [1, 2, 3, 4, 5];

cardOver.forEach(n=>{n.style.bottom='-200px'});

for(let i = 0; i < items.length; i++) {
	
	console.log(items[i]);

	worksCard[i].addEventListener('mouseover', function(){
		cardOver[i].style.bottom=0
	});
	worksCard[i].addEventListener('mouseout', function(){
		cardOver[i].style.bottom='-200px'
	});
}


/*---------------------------------------------------------*/


//Design

//디자인 탭 스크롤 모션 함수
let observer2 = new IntersectionObserver((e)=>{
	e.forEach((e)=>{
		if(e.isIntersecting){
			e.target.style.opacity= 1;
		}else{
			e.target.style.opacity= 0;
		}
	})
})

let d_card = document.querySelectorAll('.design-card')
let designEx = document.querySelector('.design-ex')
let presetH2 = document.querySelector('.preset')
let presetP = document.querySelectorAll('.de-sublime .blank-space')
let presetP2 = document.querySelectorAll('.de-sublime .port-em')

observer2.observe(designEx)
observer2.observe(presetH2)
for(i=0; i<6; i++){
	observer2.observe(d_card[i])
	observer2.observe(presetP[i])
}

for(e=0; e<12; e++){
	observer2.observe(presetP2[e])
}

// 디자인 탭 카드 오버했을 때 설명상자가 올라오는 함수
const designCard = document.querySelectorAll('.design-card');
const designOver = document.querySelectorAll('.design-mouse-over');
const dItems = [1, 2, 3, 4, 5, 6];

designOver.forEach(n=>{n.style.bottom='-200px'});

for(let i = 0; i < dItems.length; i++) {
	
	console.log(items[i]);

	designCard[i].addEventListener('mouseover', function(){
		designOver[i].style.bottom=0
	});
	designCard[i].addEventListener('mouseout', function(){
		designOver[i].style.bottom='-200px'
	});
}


/*----------------------------------------------------------*/

//Footer

//네이버 마이박스 연결 안내하는 함수

const cloud = document.querySelector('.link-cloud');
const cloudLink = document.querySelector('.h-ex');

console.log(cloudLink)

cloud.addEventListener('mouseover',()=>{
	cloudLink.style.opacity=1
})
cloud.addEventListener('mouseleave',()=>{
	cloudLink.style.opacity=0
})


// footer 스크롤을 제어하는 함수

let observer3 = new IntersectionObserver((e)=>{
	e.forEach((e)=>{
		if(e.isIntersecting){
			e.target.style.opacity= 1;
		}else{
			e.target.style.opacity= 0;
		}
	})
})

let p_about = document.querySelector('.about')
let p_ability = document.querySelector('.ability')
let p_character = document.querySelector('.character')


observer3.observe(p_about);
observer3.observe(p_ability);
observer3.observe(p_character);

// 할 수 있어요 모달창을 띄우고 감추는 함수
	
const attCard = document.querySelectorAll('.a-card');
const attModal = document.querySelectorAll('.doit');
const mClose = document.querySelectorAll('.done');
const mNums = [ 1, 2, 3, 4, 5, 6 ];

attModal.forEach((e)=>{e.style.display='none'});

for(let n=0; n < mNums.length; n++){

	attCard[n].addEventListener('click', ()=>{
		attModal[n].style.display='block';
		attModal[n].style.opacity='1';
	})

	mClose[n].addEventListener('click',()=>{
		attModal[n].style.display='none';

	})

}
