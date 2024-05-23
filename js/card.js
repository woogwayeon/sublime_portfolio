const card = document.querySelector('.card');

let chArray = [
				{ 
					name:'화담숲', 
					logo:'../images/logo/flower-logo.png', 
					images:'../images/con-card/flower.jpg' 
				},
				{ 
					name:'sparco',
					logo:'../images/logo/sparco-logo.svg',
					images:'../images/con-card/sparco.jpg' 
				}
			]

chArray.map((arrayN)=>{

	console.log(arrayN.name);
	console.log(arrayN.images);


	const createMainDiv = document.createElement('div');

	for (i=0; i<3; i++ ){
		const p = document.createElement('p');
		const img = document.createElement('img');
		createMainDiv.appendChild(p);
		createMainDiv.appendChild(img);
		card.appendChild(createMainDiv);
	}

	const pp = createMainDiv.querySelectorAll("p")
	const inImg = createMainDiv.querySelectorAll("img")
	pp[0].innerText=`이름 : ${arrayN.name}`;
	inImg[0].setAttribute('src', arrayN.images);
	inImg[1].setAttribute('src', arrayN.logo);


})