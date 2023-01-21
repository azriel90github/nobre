function chamar(){
		nome = prompt(" Seja Bem vindo a Nobre Fashion. \n Digite o seu Nome: ");
		alert( "agradecemos a sua visita, muito obrigado por ajudar este projecto a crescer " +nome+ ". \n Clique Ok para continuar");

	}


	function activar_links(){
		zone_nav = window.document.getElementById('zone-nav');
		zone_nav.classList.remove('links_zone');
		zone_nav.classList.remove('direito');
		zone_nav.classList.remove('linha');
		zone_nav.classList.add('activar_links');
		apagar = window.document.getElementById('apagar');
		apagar.classList.remove('apagar');
		apagar.classList.add('des_apagar');
	}
	function des_activar_links(){
		zone_nav = window.document.getElementById('zone-nav');
		zone_nav.classList.add('links_zone');
		zone_nav.classList.add('direito');
		zone_nav.classList.add('linha');
		zone_nav.classList.remove('activar_links');
		apagar = window.document.getElementById('apagar');
		apagar.classList.add('apagar');
		apagar.classList.remove('des_apagar');	
	}

	