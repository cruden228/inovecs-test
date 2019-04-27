
// select join
const selectJoin = document.getElementById("select-join");

selectJoin.addEventListener("click", (event)=>{
	const subMenu = selectJoin.getElementsByClassName("select-join__list")[0];
	const selected = selectJoin.getElementsByClassName("select-join__selected")[0];

	subMenu.classList.toggle("select-join__list-open");
	selectJoin.classList.toggle("form-join__select-open");

	if(!event.target.classList.contains("select-join__item")) return
	selected.innerHTML = event.target.innerHTML;
}, false)


// control form

const formJoin = document.getElementById("form-join");

const forEach = (array, iteratee) => {
  	Array.prototype.forEach.call(array, iteratee);
}

function validateEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

function writeSuccess (success){
	const popupJoin = document.getElementById("popup-join");
	popupJoin.classList.add("popup-window-join_open");
	const popupContent = popupJoin.getElementsByClassName("popup-window-join__content")[0];
	const popupElemClose = popupJoin.getElementsByClassName("popup-window-join__close")[0];
	popupContent.innerHTML = success;

	function popupClose (){
		popupJoin.classList.remove("popup-window-join_open");
		popupElemClose.removeEventListener("click", popupClose , false)
	}

	popupElemClose.addEventListener("click", popupClose , false)
}

formJoin.addEventListener("submit", (event) => {
	event.preventDefault();
	const inputs = event.target.getElementsByTagName("input");
	let fail = "success";
	forEach(inputs, (input) => {
		if(input.getAttribute("name") === "firstName" || 
			input.getAttribute("name") === "lastName") {
			if(input.value.length < 3) fail = "Incorrect first name or last name!";
		
		}else if(input.getAttribute("name") === "email"){
			if(!validateEmail(input.value)) fail = "Incorrect data mail!";
		
		}else if(input.getAttribute("name") === "phonePrefix"){
			var re = /^\+[0-9 -]*$/;
			if(!re.test(input.value)) fail = "Incorrect prefix phone!";

		}else if(input.getAttribute("name") === "phoneNumber"){
			if(input.value.length < 7 ||
				/\D/.test(input.value)) fail = "Incorrect data phone!";

		}

	});
	writeSuccess(fail);
}, false)