    function focus_links(mens){
        mensagem = mens;
        links = window.document.getElementById('links_footer1');
        parceiro = window.document.getElementById('links_footer2');
        redes = window.document.getElementById('links_footer3');

        if(mensagem == 1){
            links.style.display = "block";
        }else if (mensagem == 2) {
            parceiro.style.display = 'block';
        }else if(mensagem == 3){
            redes.style.display = 'block';
        }
    }
        function des_focus_links(mens){
        mensagem = mens;
        links = window.document.getElementById('links_footer1');
        parceiro = window.document.getElementById('links_footer2');
        redes = window.document.getElementById('links_footer3');

        if(mensagem == 1){
            links.style.display = "none";
        }else if (mensagem == 2) {
            parceiro.style.display = 'none';
        }else if(mensagem == 3){
            redes.style.display = 'none';
        }
    }
    let mensa = 1;
    n1 = window.document.getElementById('n1');
    n2 = window.document.getElementById('n2');
    n3 = window.document.getElementById('n3');
    n4 = window.document.getElementById('n4');
    num1 = window.document.getElementById('num1');
    num2 = window.document.getElementById('num2');
    num3 = window.document.getElementById('num3');
    num4 = window.document.getElementById('num4');
    welcome = window.document.getElementById('welcome');
    function inicia(){
        setInterval("contagem()" , 6000);
        setInterval("contagem_teste()" , 6000);
    }
    function contagem(){
        mensa++;
        regulador(mensa);
        if (mensa >= 5 ) {
        mensa = 0;
        }
    }
    function regulador(mensagem){
        timer = mensagem;
       if (timer == 1){
            n1.classList.add('btn_scone_active');
            n4.classList.remove('btn_scone_active');
            num1.classList.add('btn_scone_active');
            num4.classList.remove('btn_scone_active');
            welcome.classList.remove('welcome-fundo4');
            welcome.classList.add('welcome-fundo1');
        } else if(timer == 2){
            n2.classList.add('btn_scone_active');
            n1.classList.remove('btn_scone_active');
            num2.classList.add('btn_scone_active');
            num1.classList.remove('btn_scone_active');
            welcome.classList.remove('welcome-fundo1');
            welcome.classList.add('welcome-fundo2');
        } else if(timer == 3){
            n3.classList.add('btn_scone_active');
            n2.classList.remove('btn_scone_active');
            welcome.classList.remove('welcome-fundo2');
            num3.classList.add('btn_scone_active');
            num2.classList.remove('btn_scone_active');
            welcome.classList.add('welcome-fundo3');
        } else if(timer == 4){
            n4.classList.add('btn_scone_active');
            n3.classList.remove('btn_scone_active')
            num4.classList.add('btn_scone_active');
            num3.classList.remove('btn_scone_active');
            welcome.classList.remove('welcome-fundo3')
            welcome.classList.add('welcome-fundo4')
        }
    }
    testemunha1 = window.document.getElementById('testemunho1');
    testemunha2 = window.document.getElementById('testemunho2');
    testemunha3 = window.document.getElementById('testemunho3');
    testemunha4 = window.document.getElementById('testemunho4');
    msg = 0;
    function contagem_teste(){
       normal = 'zona_float';
       direito = 'float_r';
       esquerdo = 'float_left';
       msg++;
       if (msg == 1){
         testemunha3.classList.remove(direito);
         testemunha3.classList.add(esquerdo);
         testemunha4.classList.remove(normal);
         testemunha4.classList.add(direito);
         testemunha1.classList.remove(esquerdo);
         testemunha1.classList.add(normal);            
       } else if (msg == 2){ 
         testemunha4.classList.remove(direito);
         testemunha4.classList.add(esquerdo);
         testemunha1.classList.remove(normal);
         testemunha1.classList.add(direito);
         testemunha2.classList.remove(esquerdo);
         testemunha2.classList.add(normal);
       } else if(msg == 3){
         testemunha1.classList.remove(direito);
         testemunha1.classList.add(esquerdo);
         testemunha2.classList.remove(normal);
         testemunha2.classList.add(direito);
         testemunha3.classList.remove(esquerdo);
         testemunha3.classList.add(normal);
       } else if(msg == 4){
         testemunha2.classList.remove(direito);
         testemunha2.classList.add(esquerdo);
         testemunha3.classList.remove(normal);
         testemunha3.classList.add(direito);
         testemunha4.classList.remove(esquerdo);
         testemunha4.classList.add(normal);
       }else if(msg >= 5) {
            msg = 0;
       } 
    }
    function scroll_active(){
        nav_top = window.document.getElementById('nav-top')
        Window = window.pageYOffset;
        blocoTop = window.document.getElementById('blocos');
        blocos = window.document.getElementById('blocos');
        if (Window >= 80) {
            nav_top.classList.add('nav-top_none');
        }else if(Window < 80){
            nav_top.classList.remove('nav-top_none');
        }
        if (Window >= 90){
            blocos.classList.add("scroll-on");
            blocos.classList.remove("scroll-off");
        }else if(Window <= 90){
            blocos.classList.remove("scroll-on");
            blocos.classList.add("scroll-off");
        }

    }
