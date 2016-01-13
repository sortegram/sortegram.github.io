/*
  Sortegram.js
  author  :  Victor Ribeiro
  site    :  http://sortegram.com/
  github  :  http://github.com/sortegram/sortegram
  licence : MIT
*/

'use strict';
// Define all vars
var d = document,
    w = window,
    cGo = document.getElementById( 'c-go' ),
    sgGo = document.getElementById( 'sg-go' ),
    minMax = $( '.min-max' ),

    // Style vars
    show = 'block',
    hide = 'none',

    // Colors vars [background, button, font]
    green = ['#116D01','#00B70B','#FFF','#FFF'],
    blue = ['#1763D0','#79A9EF','#FFF','#FFF'],
    red = ['#BB2E2E','#E68383','#FFF','#FFF'],
    yellow = ['#7B6803','#DED516','#FFF','#FFF'],
    orange = ['#C7781B','#BD2F2F','#FFF','#FFF'],
    pink = ['#C35AC1','#FF8FF8','#FFF','#FFF'],
    lilac = ['#9B4AD0','#C79BEA','#FFF','#FFF'],
    cyan = ['#009BA9','#75CDEC','#FFF','#FFF'],
    violet = ['#96197C','#D84EFD','#FFF','#FFF'],

    // Colors vars [background, button, font, font body]
    greenLight = ['#ABDCA2','#7DD887','#043A08', '#043A08'],///
    blueLight = ['#B1CBF1','#8DE2E1','#0448AD','#040A3A'],///
    redLight = ['#FBC6C6','#DA0808','#8A1D1D','#8A1D1D'],
    yellowLight = ['#EAEA6D','#DAD108','#585308','#585308'],
    orangeLight = ['#FBE5C6','#DA8408','#581B08','#581B08'],
    pinkLight = ['#FEDEFF','#FF89F7','#690465','#690465'],
    lilacLight = ['#ECDEFF','#DB89FF','#5A0469','#5A0469'],
    cyanLight = ['#96FFEF','#57B9CE','#045169','#045169'],
    violetLight = ['#FC97FF','#BA57CE','#690465','#690465'],

    // Number input vars
    n = document.getElementById( 'n' ),
    x = document.getElementById( 'x' ),
    y = document.getElementById( 'y' ),

    // DOM vars
    $bg_uiColor = $( '#cover, #sidebar, .splash-loader' ),
    $btn_uiColor = $( '#sg-raffle, #c-raffle, #cc-raffle, #b-raffle, .new-btn, .new-btn-manage, .sort-btn, #c-result, #sg-done, #sg-refresh' ),
    $fnt_uiColor = $( 'body' ),
    $bd_fntColor = $( '#logo, #input-username-lbl, .sidebar-op, #sg-current, #sg-current-2, p, #number-of-participants, .new-btn, .new-btn-manage, .sort-btn' ),

    cResult = document.getElementById( 'c-result' ),
    sgResult = document.getElementById( 'sg-result' ),
    userName = document.getElementById( 'username' ),
    inputUserNameLabel = document.getElementById( 'input-username-lbl' ),
    sgNoPEdit = document.getElementById( 'number-of-participants' ),
    sgNoP = document.getElementById( 'number-of-participants-2' ),
    sgManage = document.getElementById( 'sg-manage-btn' ),
    NoPdiv = document.getElementById( 'NoPdiv' ),
    savedNames = document.getElementById( 'user-names-2' ),
    savedNamesEdit = document.getElementById( 'user-names' ),
    savedNamesMng = document.getElementById( 'user-names-manage' ),
    saveBtn = document.getElementById( 'sg-save' ),
    $deleteUser = $( '.delete-user' ),
    deleteBtn = document.getElementById( 'delete-all' ),
    isNew = document.getElementById( 'is-new' ),
    isLight = document.getElementById( 'is-light' ),
    nbOpsBtn = document.getElementById( 'navbar-ops-btn' ),
    nbOpsBtnClose = document.getElementById( 'navbar-ops-btn-close' ),
    cCurrent = document.getElementById( 'c-current' ),
    sgCurrent = document.getElementById( 'sg-current' ),

    // LocalStorage vars (all of them starts with underscore)
    _uiColor = localStorage.getItem( 'ui-color' ),
    _isNew = localStorage.getItem( 'is-new' ),
    _isLight = localStorage.getItem( 'is-light' ),
    _savedNamesEdit = localStorage.getItem( 'saved-names-edit' );




setInterval(function() {
  if ( _isNew === 'true' ) {
  isNew.checked = true;
} else {
  isNew.checked = false;
}
}, 100);



if ( _isLight === 'true' ) {
  isLight.checked = false
} else {
  isLight.checked = true
}

setInterval(function() {
  if ( isLight.checked === true ) {
  localStorage.setItem( 'is-light','false' )
} else {
  localStorage.setItem( 'is-light','true' )
}
}, 100);




if ( !localStorage['is-new'] ) {
  localStorage.setItem( 'is-new','true' );
  localStorage.setItem( 'is-light','false' );
  localStorage.setItem( 'saved-names-edit','' );
  sgManage.style.display = hide;
  document.location.reload();
}
if ( _isNew === 'true' ) {
  sgManage.style.display = hide;
}
if ( _isNew === 'false' ) {
  sgManage.style.display = show;
  $( '#user-names' ).html(_savedNamesEdit);
}




// Funções a serem carregadas na inicialização
function appLoad () {
  if ( _isLight === 'false' ) { // If is Dark
        if ( !_uiColor ) {
          localStorage.setItem( 'ui-color','' );
          $bg_uiColor.css( 'background-color',green[0] );
          $btn_uiColor.css( 'background-color',green[1] );
          $fnt_uiColor.css( 'color',green[2] );
          $bd_fntColor.css( 'color',green[3] );
          $( '.verde' ).css( 'border','2px solid #000000' );
        } else if ( _uiColor === 'green' ) {
              $bg_uiColor.css( 'background-color',green[0] );
              $btn_uiColor.css( 'background-color',green[1] );
              $fnt_uiColor.css( 'color',green[2] );
              $bd_fntColor.css( 'color',green[3] );
              $( '.verde' ).css( 'border','2px solid #000000' );
        } else if ( _uiColor === 'blue' ) {
              $bg_uiColor.css( 'background-color',blue[0] );
              $btn_uiColor.css( 'background-color',blue[1] );
              $fnt_uiColor.css( 'color',blue[2] );
              $bd_fntColor.css( 'color',blue[3] );
              $( '.azul' ).css( 'border','2px solid #000000' );
        } else if ( _uiColor === 'red' ) {
              $bg_uiColor.css( 'background-color',red[0] );
              $btn_uiColor.css( 'background-color',red[1] );
              $fnt_uiColor.css( 'color',red[2] );
              $bd_fntColor.css( 'color',red[3] );
              $( '.vermelho' ).css( 'border','2px solid #000000' );
        } else if ( _uiColor === 'yellow' ) {
              $bg_uiColor.css( 'background-color',yellow[0] );
              $btn_uiColor.css( 'background-color',yellow[1] );
              $fnt_uiColor.css( 'color',yellow[2] );
              $bd_fntColor.css( 'color',yellow[3] );
              $( '.amarelo' ).css( 'border','2px solid #000000' );
        } else if ( _uiColor === 'orange' ) {
              $bg_uiColor.css( 'background-color',orange[0] );
              $btn_uiColor.css( 'background-color',orange[1] );
              $fnt_uiColor.css( 'color',orange[2] );
              $bd_fntColor.css( 'color',orange[3] );
              $( '.laranja' ).css( 'border','2px solid #000000' );
        } else if ( _uiColor === 'pink' ) {
              $bg_uiColor.css( 'background-color',pink[0] );
              $btn_uiColor.css( 'background-color',pink[1] );
              $fnt_uiColor.css( 'color',pink[2] );
              $bd_fntColor.css( 'color',pink[3] );
              $( '.rosa' ).css( 'border','2px solid #000000' );
        } else if ( _uiColor === 'lilac' ) {
              $bg_uiColor.css( 'background-color',lilac[0] );
              $btn_uiColor.css( 'background-color',lilac[1] );
              $fnt_uiColor.css( 'color',lilac[2] );
              $bd_fntColor.css( 'color',lilac[3] );
              $( '.lilas' ).css( 'border','2px solid #000000' );
        } else if ( _uiColor === 'cyan' ) {
              $bg_uiColor.css( 'background-color',cyan[0] );
              $btn_uiColor.css( 'background-color',cyan[1] );
              $fnt_uiColor.css( 'color',cyan[2] );
              $bd_fntColor.css( 'color',cyan[3] );
              $( '.ciano' ).css( 'border','2px solid #000000' );
        } else if ( _uiColor === 'violet' ) {
              $bg_uiColor.css( 'background-color',violet[0] );
              $btn_uiColor.css( 'background-color',violet[1] );
              $fnt_uiColor.css( 'color',violet[2] );
              $bd_fntColor.css( 'color',violet[3] );
              $( '.violeta' ).css( 'border','2px solid #000000' );
        }
    }
    else { // If is Light
      if ( !_uiColor ) {
          localStorage.setItem( 'ui-color','' );
          $bg_uiColor.css( 'background-color',greenLight[0] );
          $btn_uiColor.css( 'background-color',greenLight[1] );
          $fnt_uiColor.css( 'color',greenLight[2] );
          $bd_fntColor.css( 'color',greenLight[3] );
          $( '.verde' ).css( 'border','2px solid #000000' );
        } else if ( _uiColor === 'green' ) {
              $bg_uiColor.css( 'background-color',greenLight[0] );
              $btn_uiColor.css( 'background-color',greenLight[1] );
              $fnt_uiColor.css( 'color',greenLight[2] );
              $bd_fntColor.css( 'color',greenLight[3] );
              $( '.verde' ).css( 'border','2px solid #000000' );
        } else if ( _uiColor === 'blue' ) {
              $bg_uiColor.css( 'background-color',blueLight[0] );
              $btn_uiColor.css( 'background-color',blueLight[1] );
              $fnt_uiColor.css( 'color',blueLight[2] );
              $bd_fntColor.css( 'color',blueLight[3] );
              $( '.azul' ).css( 'border','2px solid #000000' );
        } else if ( _uiColor === 'red' ) {
              $bg_uiColor.css( 'background-color',redLight[0] );
              $btn_uiColor.css( 'background-color',redLight[1] );
              $fnt_uiColor.css( 'color',redLight[2] );
              $bd_fntColor.css( 'color',redLight[3] );
              $( '.vermelho' ).css( 'border','2px solid #000000' );
        } else if ( _uiColor === 'yellow' ) {
              $bg_uiColor.css( 'background-color',yellowLight[0] );
              $btn_uiColor.css( 'background-color',yellowLight[1] );
              $fnt_uiColor.css( 'color',yellowLight[2] );
              $bd_fntColor.css( 'color',yellowLight[3] );
              $( '.amarelo' ).css( 'border','2px solid #000000' );
        } else if ( _uiColor === 'orange' ) {
              $bg_uiColor.css( 'background-color',orangeLight[0] );
              $btn_uiColor.css( 'background-color',orangeLight[1] );
              $fnt_uiColor.css( 'color',orangeLight[2] );
              $bd_fntColor.css( 'color',orangeLight[3] );
              $( '.laranja' ).css( 'border','2px solid #000000' );
        } else if ( _uiColor === 'pink' ) {
              $bg_uiColor.css( 'background-color',pinkLight[0] );
              $btn_uiColor.css( 'background-color',pinkLight[1] );
              $fnt_uiColor.css( 'color',pinkLight[2] );
              $bd_fntColor.css( 'color',pinkLight[3] );
              $( '.rosa' ).css( 'border','2px solid #000000' );
        } else if ( _uiColor === 'lilac' ) {
              $bg_uiColor.css( 'background-color',lilacLight[0] );
              $btn_uiColor.css( 'background-color',lilacLight[1] );
              $fnt_uiColor.css( 'color',lilacLight[2] );
              $bd_fntColor.css( 'color',lilacLight[3] );
              $( '.lilas' ).css( 'border','2px solid #000000' );
        } else if ( _uiColor === 'cyan' ) {
              $bg_uiColor.css( 'background-color',cyanLight[0] );
              $btn_uiColor.css( 'background-color',cyanLight[1] );
              $fnt_uiColor.css( 'color',cyanLight[2] );
              $bd_fntColor.css( 'color',cyanLight[3] );
              $( '.ciano' ).css( 'border','2px solid #000000' );
        } else if ( _uiColor === 'violet' ) {
              $bg_uiColor.css( 'background-color',violetLight[0] );
              $btn_uiColor.css( 'background-color',violetLight[1] );
              $fnt_uiColor.css( 'color',violetLight[2] );
              $bd_fntColor.css( 'color',violetLight[3] );
              $( '.violeta' ).css( 'border','2px solid #000000' );
        }
    }
        $('#content').show();

      setTimeout(function () {
        $('.splash-loader').fadeOut('slow');
      }, 2000);
};
//








$( sgNoPEdit ).html( $( '#user-names > dt' ).size() );




if ( $( '#user-names > dt' ).size() === 0 ) {
  document.getElementById( 'part-plural' ).innerHTML = 's';
  document.getElementById( 'part-plural-2' ).innerHTML = 's';
}
 else if ( $( '#user-names > dt' ).size() === 1 ) {
   document.getElementById( 'part-plural' ).innerHTML = '';
   document.getElementById( 'part-plural-2' ).innerHTML = '';
 }
  else {
   document.getElementById( 'part-plural' ).innerHTML = 's';
   document.getElementById( 'part-plural-2' ).innerHTML = 's';
 }




// Rola a lista de participantes para o final
function downList() {
    $( '#user-names' ).animate({
    scrollTop: $( '#user-names' )[0].scrollHeight
  }, 200);
}




// Inicio
function home() {
  cResult.style.color = '#FFF';
  cResult.style.backgroundColor = 'rgba(236, 248, 255, 0.5)';
  cResult.style.borderTop = '3px solid #FFF';
  cResult.style.borderBottom = '3px solid #FFF';
      $( '#home' ).removeClass( 'close' ).addClass( 'open' );
      $( '#sg-about' ).removeClass( 'open' ).addClass( 'close' );
      $( '#sg-manage' ).removeClass( 'open' ).addClass( 'close' );
      $( '#classic' ).removeClass( 'open' ).addClass( 'close' );
      $( '#sortegram' ).removeClass( 'open' ).addClass( 'close' );
      $( '#start-sortegram' ).removeClass( 'open' ).addClass( 'close' );
      $( '#h-o-t' ).removeClass( 'open' ).addClass( 'close' );
  document.getElementById( 'logo' ).innerHTML = 'Sortegram';
  $( '#trophy' ).hide();
  $( '#sg-refresh' ).hide();
  sgQuit();
  cNew();
}




// Gerenciar SS
function sgManageBtn () {
  cResult.style.color = '#FFF';
  cResult.style.backgroundColor = 'rgba(236, 248, 255, 0.5)';
  cResult.style.borderTop = '3px solid #FFF';
  cResult.style.borderBottom = '3px solid #FFF';
      $( '#sg-manage' ).removeClass( 'close' ).addClass( 'open' );
      $( '#sg-about' ).removeClass( 'open' ).addClass( 'close' );
      $( '#home' ).removeClass( 'open' ).addClass( 'close' );
      $( '#classic' ).removeClass( 'open' ).addClass( 'close' );
      $( '#sortegram' ).removeClass( 'open' ).addClass( 'close' );
      $( '#start-sortegram' ).removeClass( 'open' ).addClass( 'close' );
      $( '#h-o-t' ).removeClass( 'open' ).addClass( 'close' );
  document.getElementById( 'logo' ).innerHTML = 'Sorteio salvo';
  $( '#user-names-manage .delete-user' ).hide();
  sgQuit();
  cNew();
  Last();
}




// Ultimo sorteio
function Last () {

      $( '#sg-manage' ).removeClass( 'close' ).addClass( 'open' );
      $( '#sg-about' ).removeClass( 'open' ).addClass( 'close' );
      $( '#sortegram' ).removeClass( 'open' ).addClass( 'close' );
      $( '#start-sortegram' ).removeClass( 'open' ).addClass( 'close' );
      $( '#home' ).removeClass( 'open' ).addClass( 'close' );
      $( '#h-o-t' ).removeClass( 'open' ).addClass( 'close' );

if ( $( '#user-names' ).html() === _savedNamesEdit ) {
      $( '#user-names-manage' ).html(_savedNamesEdit);
}
 else if ( $( '#user-names' ).html() === '' ) {
      $( '#user-names-manage' ).html(_savedNamesEdit);
}
 else if ( $( '#user-names-manage' ).html() === '' ) {
      $( '#user-names-manage' ).html(_savedNamesEdit);
}
 else {
      $( '#user-names-manage' ).html($( '#user-names' ).html());
  }
      document.getElementById( 'logo' ).innerHTML = 'Sorteio salvo';
      $('#user-names-manage .delete-user').hide();
}

function editLast () {

      userName.value = '';
      userName.focus();
      $( '.new-btn, .back-to-home-btn' ).hide(); // Esconde o botao 'Novo Sorteio'

      $( '#sortegram' ).removeClass( 'close' ).addClass( 'open' );
      $( '#sg-manage' ).removeClass( 'open' ).addClass( 'close' );
      $( '#start-sortegram' ).removeClass( 'open' ).addClass( 'close' );
      $( '#home' ).removeClass( 'open' ).addClass( 'close' );
      $( '#h-o-t' ).removeClass( 'open' ).addClass( 'close' );
      $( '#sg-about' ).removeClass( 'open' ).addClass( 'close' );

        document.getElementById( 'logo' ).innerHTML = 'Editar';
        document.getElementById( 'user-names' ).innerHTML = _savedNamesEdit;
        changeNumber();

      saveBtn.disabled = true;
      saveBtn.innerHTML = 'Salvo';
      saveBtn.style.backgroundImage = 'url(img/ic_done_white_24dp_1x.png)';

      Reload();
}





// Reinicia o Sorteio Clássico
function cNew () {
  cGo.style.display = show;
  cResult.style.display = hide;
  $( '.new-btn, .back-to-home-btn' ).hide();
  cCurrent.innerHTML = '';
  n.removeAttribute( 'disabled' );
  x.removeAttribute( 'disabled' );
  y.removeAttribute( 'disabled' );
  cGo.removeAttribute( 'disabled' );
}



// Reinicia o Sorteio Sortegram
function sgNew () {
  sgGo.style.display = show;
  sgResult.style.display = hide;
  $( '.new-btn, .back-to-home-btn' ).hide();
  sgCurrent.innerHTML = '';
  sgGo.removeAttribute( 'disabled' );

      // Esconde o trofeu
    $( '#trophy' ).hide();

    $( '#sg-refresh' ).hide();

    NoPdiv.style.display = show;

      userName.value = '';
      userName.focus();

        $( '.new-btn, .back-to-home-btn' ).hide(); // Esconde o botao 'Novo Sorteio'

        $( '#sortegram' ).removeClass( 'close' ).addClass( 'open' );
        $( '#sg-manage' ).removeClass( 'open' ).addClass( 'close' );
        $( '#start-sortegram' ).removeClass( 'open' ).addClass( 'close' );
        $( '#home' ).removeClass( 'open' ).addClass( 'close' );
        $( '#h-o-t' ).removeClass( 'open' ).addClass( 'close' );
        $( '#sg-about' ).removeClass( 'open' ).addClass( 'close' );

        document.getElementById( 'logo' ).innerHTML = 'Adicionar';

      savedNamesEdit = document.getElementById( 'user-names' ).innerHTML = '';
      document.getElementById( 'user-names-2' ).innerHTML = '';


      changeNumber();

      saveBtn.disabled = true;
      saveBtn.innerHTML = 'Salvar';
      saveBtn.style.backgroundImage = 'url(img/appbar.save.png)';
}




function sgQuit () {
  $( '#trophy' ).hide();
  $( '#sg-refresh' ).hide();

  sgGo.style.display = show;
  sgResult.style.display = hide;
  $( '.new-btn, .back-to-home-btn' ).hide();
  sgCurrent.innerHTML = '';
  sgGo.removeAttribute( 'disabled' );
}



// Começa o Sorteio Clássico
function cStart () {
// Cria uma array com a quantidade de numeros dada de modo que não se repitam
var arr = []
while ( arr.length < n.value ) {
  var randomnumber = Math.floor(Math.random() * ((Number(y.value) - Number(x.value)) + 1) + Number(x.value))
  var found = false;
  for ( var i = 0; i < arr.length; i++ ) {
  if ( arr[i] === randomnumber ) {
    found = true;
    break
    }
  }
  if ( !found ) {
    arr[arr.length] = randomnumber
    };
}

  if ( y.value.length !== 0 || x.value.length !== 0 // Se os campos x e Y estiverem preenchidos
    && x.value.match(/^(\d){0,7}$/g) //
    && y.value.match(/^(\d){0,7}$/g) // E se eles possuirem ate 7 digitos
    && n.value <= y.value // E o valor de n for menor que y
      ) {
    cResult.style.color = '#888888';
    cResult.style.backgroundColor = '#FFF';
    cResult.style.fontSize = '38pt';
    cResult.style.borderRadius = '0px';
    document.getElementById( 'logo' ).innerHTML = 'Sorteando';

    $( '#logo' ).removeClass( 'logo-blink addfadeIn' ).addClass( 'logo-blink' );
    $( cResult ).removeClass( 'result-rotate' ).addClass( 'result-rotate' );
    $( cResult ).removeClass( 'addfadeIn' );

    var sort = setInterval(function() {
      n.setAttribute( 'disabled','true' );
      x.setAttribute( 'disabled','true' );
      y.setAttribute( 'disabled','true' );
      cGo.setAttribute( 'disabled','true' );
      cGo.style.display = hide;
      cResult.style.display = show;
      cResult.innerHTML = Math.floor(Math.random() * ((Number(y.value) - Number(x.value)) + 1) + Number(x.value));

  if ( cResult.innerHTML.length <= 5 ) {
      cResult.style.fontSize = '38pt';
  }
   else if ( cResult.innerHTML.length >= 6 ) {
      cResult.style.fontSize = '20pt';
  }
}, 60);


// Resultado do sorteio
setTimeout(function() { // Timeout de 4s

if ( n.value !== '' ) { // Se o campo n NAO estiver vazio...
      clearInterval(sort); // Remove o loop de numeros
      $( '.new-btn, .back-to-home-btn' ).fadeIn(); // Mostra o botao 'Novo Sorteio'
              cResult.innerHTML = arr; // Exibe os resultados

              cResult.style.color = '#FFF';
              cResult.style.backgroundColor = 'rgba(242, 255, 0, 0.5)';
              cResult.style.borderTop = '3px solid #FFF';
              cResult.style.borderBottom = '3px solid #FFF';
              cResult.style.marginLeft = '-3px';

              document.getElementById( 'logo' ).innerHTML = 'Resultado';

      // Acrescenta um tracinho apos cada numero do resultado
      cResult.innerHTML = cResult.innerHTML.replace(/,/g,' - ');

      // Retorna a data e hora atuais
      var now = new Date().toLocaleString(),
      plural,
      cCurrent = document.getElementById( 'c-current' );
      // Plural ou singular?
      if ( Number(n.value) > 1 ) {
        plural = 's';
      }
      else if ( Number(n.value) === 1 ) {
        plural = '';
      }
      else if ( Number(n.value) === 0 ) {
        plural = 's';
      }

      // Imprime a data e hora do sorteio
      cCurrent.innerHTML =
      'Número'
      +plural
      +' gerado'
      +plural
      +' em '
      + now
      +'.<br><br>';

      // Remove o efeito de fadeIn e rotacao
      $( '#c-result' ).removeClass( 'addfadeIn result-rotate' ).addClass( 'addfadeIn' );
      $( '#logo' ).removeClass( 'addfadeIn logo-blink' ).addClass( 'addfadeIn' );

      // Aumenta ou diminui a fonte de acordo com o resultado
      if ( cResult.innerHTML.length <= 12 ) {
          cResult.style.fontSize = '38pt';
      }
       else if ( cResult.innerHTML.length >= 13 ) {
          cResult.style.fontSize = '20pt';
      }
    };

  }, 4000);
  }
    else if ( Number(n.value) >= Number(y.value) ) {
      swal('Erro :(','asdadwdwadawdawdwdwwe.','error');
    }
    else {
      swal('Erro :(','Preencha os campos de número Máximo e Mínimo corretamente.','error');
    }
}

        // Abre o menu lateral
        nbOpsBtn.addEventListener( 'click', function() {
        $( '#sidebar' ).removeClass( 'close' ).addClass( 'open' );
        document.getElementById( 'sidebar-overlay' ).style.display = show;
        nbOpsBtn.style.display = hide;
        nbOpsBtnClose.style.display = show;
        });

        // Fecha o menu lateral
        document.addEventListener( 'click', function ( event ) {
          if ( !$( event.target ).closest( '#sidebar, #navbar-ops-btn' ).length
            || $( event.target ).closest( '.sidebar-op' ).length ) {
              $( '#sidebar' ).removeClass( 'open' ).addClass( 'close' );
              document.getElementById( 'sidebar-overlay' ).style.display = hide;
              nbOpsBtnClose.style.display = hide;
              nbOpsBtn.style.display = show;
            }
          });

// Seleciona o conteudo de n, y e x
$( '#n, #x, #y' ).on( 'focus', function() {
    this.select();
});

// Altera o numero de participantes do sorteio Sortegram
function changeNumber () {
  sgNoPEdit.innerHTML = $( '#user-names > dt' ).size();
  sgNoP.innerHTML = $( '#user-names > dt' ).size();

if ( $( '#user-names > dt' ).size() === 0 ) {
  document.getElementById( 'part-plural' ).innerHTML = 's';
  document.getElementById( 'part-plural-2' ).innerHTML = 's';
}
 else if ( $( '#user-names > dt' ).size() === 1 ) {
   document.getElementById( 'part-plural' ).innerHTML = '';
   document.getElementById( 'part-plural-2' ).innerHTML = '';
 }
  else {
   document.getElementById( 'part-plural' ).innerHTML = 's';
   document.getElementById( 'part-plural-2' ).innerHTML = 's';
 }
}




// SORTEGRAM

function sbmt () { // Funcao que adiciona a lista o participante
  if ( userName.value.length !== 0
    && userName.value.match(/^@?([\w\W]){1,30}$/g)
    ) {
        downList();

        saveBtn.disabled = false;
        saveBtn.innerHTML = 'Salvar';
        saveBtn.style.backgroundImage = 'url(img/appbar.save.png)';

          savedNamesEdit = document.getElementById( 'user-names' ).innerHTML +=
          '<dt><div class=\'dt-text\'>'
          + userName.value
          + '</div><button class=\'delete-user\'></button></dt>';

          savedNames = document.getElementById( 'user-names-2' ).innerHTML = savedNamesEdit;

              changeNumber();
}
 else {
  userName.select();
  inputUserNameLabel.innerHTML = 'Nome de participante inválido!';
  inputUserNameLabel.style.color = '#FFFF00';
  $( inputUserNameLabel ).removeClass( 'error-shake' ).addClass( 'error-shake' );

  setTimeout(function () {
    inputUserNameLabel.innerHTML = 'Digite o nome do participante';
    inputUserNameLabel.style.color = '';
    $( inputUserNameLabel ).removeClass( 'error-shake' );
  }, 5000);
  }
}

$( d ).on('click','.delete-user',function () {
      $( this ).parent().remove();
      $( '#user-names-2' ).html( $( '#user-names' ).html() );
      $( '#user-names-manage' ).html( $( '#user-names' ).html() );

        changeNumber();

        saveBtn.disabled = false;
        saveBtn.innerHTML = 'Salvar';
        saveBtn.style.backgroundImage = 'url(img/appbar.save.png)';

});



// Começa o Sorteio Sortegram
function sgStart () {
// Cria uma array com a quantidade de numeros dada de modo que não se repitam
var sortear = Math.floor(Math.random() * ((Number(sgNoP.innerHTML) - 1) + 1) + 1),
    winner = sortear - 1;

    isNew.checked = true;

    sgResult.style.color = '#FFF';
    sgResult.style.fontSize = '38pt';
    document.getElementById( 'logo' ).innerHTML = 'Sorteando';

    $( '#logo' ).removeClass( 'logo-blink addfadeIn' ).addClass( 'logo-blink' );
    $( sgResult ).removeClass( 'addfadeIn' );

    nbOpsBtn.disabled = true;

var sort = setInterval(function() {
      sgGo.disabled = true;
      sgGo.style.display = hide;
      sgResult.style.display = show;
      sgResult.innerHTML = Math.floor(Math.random() * ((Number(sgNoP.innerHTML) - 1) + 1) + 1);


      // Aumenta ou diminui a fonte de acordo com o resultado
      if ( sgResult.innerHTML.length <= 5 ) {
          sgResult.style.fontSize = '30pt';
      }
      else if ( sgResult.innerHTML.length <= 10 ) {
          sgResult.style.fontSize = '20pt';
      }
       else if ( sgResult.innerHTML.length <= 16 ) {
          sgResult.style.fontSize = '18pt';
      }
       else if ( sgResult.innerHTML.length <= 18 ) {
          sgResult.style.fontSize = '16pt';
      }
        else if ( sgResult.innerHTML.length >= 19 ) {
      sgResult.style.fontSize = '12pt';
      }
}, 60);

  NoPdiv.style.display = hide;

      // Bloqueia o scroll enquanto o sorteio é feito
      $( '#user-names-2' ).removeClass( 'scroll' ).addClass( 'lock-scroll' );

      $( '#sg-result' ).before( '<div id=\'spinner\'><\/div>' );
      $( '#spinner' ).fadeIn();



// Exibe o 'Sorteando'
setTimeout(function() { // Timeout de 4s

$( '#user-names-2' ).animate({
  scrollTop: $( '#user-names-2 dt:nth-child(1)' ).position().top
}, 400);

      clearInterval(sort); // Remove o loop de numeros

              sgResult.innerHTML = sortear; // Exibe os resultados

              sgResult.style.color = '#FFF';
              sgResult.style.backgroundColor = 'transparent';

              document.getElementById( 'logo' ).innerHTML = 'Resultado';

      // Retorna a data e hora atuais
      var now = new Date().toLocaleString(),
      plural,
      sgCurrent = document.getElementById( 'sg-current' );
      // Plural ou singular?
      if ( Number(n.value) > 1 ) {
        plural = 's';
      }
      else if ( Number(n.value) === 1 ) {
        plural = '';
      }
      else {
        plural = 's';
      }



          // Mostra o trofeu
          $( '#sg-result' ).before( '<div id=\'trophy\'><\/div>' );
          $( '#trophy' ).show( 'bounce' );
          $( '#spinner' ).fadeOut();

          nbOpsBtn.disabled = false;

      // Imprime a data e hora do sorteio
      sgCurrent.innerHTML =
      'Sorteio feito em '
      + now
      +'.<br><br>';

      // Remove o efeito de fadeIn e rotacao e adiciona fadeIn novamente
      $( '#logo' ).removeClass( 'addfadeIn logo-blink' ).addClass( 'addfadeIn' );

// Mostra o nome do participante que venceu
      setTimeout(function () {

        if ( sortear === 1 ) {
          $( '#user-names-2' ).animate({
          scrollTop: $( '#user-names-2 dt:nth-child('+sortear+')' ).position().top
          }, 1000);
        }
        else {
          $( '#user-names-2' ).animate({
          scrollTop: $( '#user-names-2 dt:nth-child('+winner+')' ).position().top
          }, 1000);
        }

        $( '#user-names-2 dt:nth-child('+sortear+')' ).css({
          'background-color':'#FFF',
          'color':'#000',
          'border':'3px solid #F00'
          });


        // Permite o scroll quando o sorteio termina
        $( '#user-names-2' ).removeClass( 'lock-scroll' ).addClass( 'scroll' );

          sgResult.innerHTML = sortear + ". " + $( '#user-names-2 dt:nth-child('+sortear+')' ).children().html();
          sgResult.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';

          $( '.new-btn, .back-to-home-btn' ).show(); // Mostra o botao 'Novo Sorteio'

          $( '#sg-refresh' ).show();

      // Aumenta ou diminui a fonte de acordo com o resultado
      if ( sgResult.innerHTML.length <= 5 ) {
          sgResult.style.fontSize = '30pt';
      }
      else if ( sgResult.innerHTML.length <= 10 ) {
          sgResult.style.fontSize = '20pt';
      }
       else if ( sgResult.innerHTML.length <= 16 ) {
          sgResult.style.fontSize = '18pt';
      }
       else if ( sgResult.innerHTML.length <= 18 ) {
          sgResult.style.fontSize = '16pt';
      }
        else if ( sgResult.innerHTML.length >= 19 ) {
      sgResult.style.fontSize = '12pt';
      }
    }, 2000);

  }, 4000);
};

// Desabilita o botao direito (ou o toque continuo)
$( d ).contextmenu(function() {
  return false;
});






// Começa o Cara ou coroa
function ccStart () {
// Cria uma array com a quantidade de numeros dada de modo que não se repitam
var sortearCC = Math.floor(Math.random() * ((1001 - 1) + 1) + 1);

    document.getElementById( 'logo' ).innerHTML = 'Rodando';

    $( '#logo' ).removeClass( 'logo-blink addfadeIn' ).addClass( 'logo-blink' );

    $( '.flipper' ).addClass( 'rotate-coin' );

    nbOpsBtn.disabled = true;


setTimeout(function() { // Timeout de 4s
            $( '.flipper' ).removeClass( 'rotate-coin' );
              if (sortearCC <= 500) {
                $('.cara').css({'transform': 'rotateY(0deg)'});
                $('.coroa').css({'transform': 'rotateY(180deg)'});
                var resultCC = 'Cara';
              } else {
                $('.coroa').css({'transform': 'rotateY(0deg)'});
                $('.cara').css({'transform': 'rotateY(180deg)'});
                var resultCC = 'Coroa';
              }

              document.getElementById( 'logo' ).innerHTML = resultCC;

              nbOpsBtn.disabled = false;


      // Remove o efeito de fadeIn e rotacao e adiciona fadeIn novamente
      $( '#logo' ).removeClass( 'addfadeIn logo-blink' ).addClass( 'addfadeIn' );

  }, 3000);
};



// Funcao para selecionar o SC
function cRaffle () {
    $( '.new-btn, .back-to-home-btn' ).hide(); // Esconde o botao 'Novo Sorteio'
    $( '#classic' ).removeClass( 'close' ).addClass( 'open' );
    $( '#sg-manage' ).removeClass( 'open' ).addClass( 'close' );
    $( '#home' ).removeClass( 'open' ).addClass( 'close' );
    $( '#h-o-t' ).removeClass( 'open' ).addClass( 'close' );
    $( '#sg-about' ).removeClass( 'open' ).addClass( 'close' );

      document.getElementById( 'logo' ).innerHTML = 'Clássico';
}

// Funcao para selecionar o CC
function ccRaffle () {
  $( '#h-o-t' ).removeClass( 'close' ).addClass( 'open' );
  $( '.new-btn, .back-to-home-btn' ).hide(); // Esconde o botao 'Novo Sorteio'
  $( '#sg-manage' ).addClass( 'close' ).removeClass( 'open' );
  $( '#home' ).removeClass( 'open' ).addClass( 'close' );
  $( '#sg-about' ).removeClass( 'open' ).addClass( 'close' );
      document.getElementById( 'logo' ).innerHTML = 'Cara ou Coroa';
}

// Funcao para selecionar o BINGO
function bRaffle () {
  $( '#bingo' ).removeClass( 'close' ).addClass( 'open' );
  $( '.new-btn, .back-to-home-btn' ).hide(); // Esconde o botao 'Novo Sorteio'
  $( '#sg-manage' ).addClass( 'close' ).removeClass( 'open' );
  $( '#home' ).removeClass( 'open' ).addClass( 'close' );
  $( '#h-o-t' ).removeClass( 'open' ).addClass( 'close' );
      document.getElementById( 'logo' ).innerHTML = 'Bingo';
}


// Funcao para selecionar o SS
function sgRaffle () {
  if ( isNew.checked === true ) { // Se NAO EXISTE jogo salvo
    sgNew();
  }
  else if ( isNew.checked === false ) { // Se EXISTE jogo salvo
    swal({
    title: "Já existe um sorteio salvo!",
    text: "Deseja Editar o sorteio salvo ou criar um Novo?",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#00AD2B",
    confirmButtonText: "Novo",
    cancelButtonText: "Editar"
    }, function(isConfirm){
      if (isConfirm) {
        sgNew();
        } else {
          editLast();
          }
          });
  }
}

// Funcao para limpar a lista de participantes
function deleteRaffle () {
  swal({
      title: 'Certeza?',
      text: 'Deseja mesmo excluir esse sorteio?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#35B138',
      cancelButtonText: 'Não',
      confirmButtonText: 'Sim',
      allowOutsideClick: true,
      closeOnConfirm: false
    }, function() {
          savedNames = document.getElementById( 'user-names' ).innerHTML = '';
          document.getElementById( 'user-names-2' ).innerHTML = '';
          sgSaveList();
          changeNumber();

          home();

          sgManage.style.display = hide;

          localStorage.setItem( 'is-new',true );
          localStorage.setItem( 'saved-names-edit','' );

          isNew.checked = true;

      swal({
        title: 'Pronto!',
        text: 'Sorteio excluído.',
        type: 'success',
        timer: 5000,
        allowOutsideClick: true
      });

      Reload();
  });
}

// Remover todos sem confirmacao (atalho)
function removeAllNoConfirm () {
  savedNamesEdit = document.getElementById( 'user-names' ).innerHTML = '';
  document.getElementById( 'user-names-2' ).innerHTML = '';
  localStorage.setItem( 'saved-names-edit','' );
      sgSaveList();
      changeNumber();
      sgManage.style.display = hide;
}


function sgSaveList () {
  savedNamesEdit = document.getElementById( 'user-names' ).innerHTML;
  savedNamesMng = document.getElementById( 'user-names' ).innerHTML;
    localStorage.setItem( 'is-new',false );
    localStorage.setItem( 'saved-names-edit',savedNamesEdit );
}

function sgSaveRaffle () {
  if ( $( '#user-names > dt' ).size() > 0 ) {
      sgSaveList();
      changeNumber();
      sgManage.style.display = show;

      saveBtn.disabled = true;
      saveBtn.innerHTML = 'Salvo';
      saveBtn.style.backgroundImage = 'url(img/ic_done_white_24dp_1x.png)';

      $( '#user-names-manage' ).html($( '#user-names' ).html());

      Reload();
    }
      else {
        return false;
      }
}

function sgRaffleReady () {
sgResult.style.backgroundColor = 'transparent';
$( '#sg-refresh' ).hide();
  if ( isNew.checked
    && $( '#user-names > dt' ).size() > 1
    ) {
        $( '#user-names-2' ).html($( '#user-names' ).html());

        $( '#start-sortegram' ).removeClass( 'close' ).addClass( 'open' );
        $( '#sg-manage' ).removeClass( 'open' ).addClass( 'close' );
        $( '#home' ).removeClass( 'open' ).addClass( 'close' );
        $( '#sortegram' ).removeClass( 'open' ).addClass( 'close' );
        $( '#h-o-t' ).removeClass( 'open' ).addClass( 'close' );
        $( '#sg-about' ).removeClass( 'open' ).addClass( 'close' );

        $( '#user-names-2' ).removeClass( 'lock-scroll' ).addClass( 'scroll' );

        document.getElementById( 'logo' ).innerHTML = 'Sortegram';

        $('#user-names-2 .delete-user').hide();
    }

  else if (  !isNew.checked
          && $( '#user-names > dt' ).size() > 1
          ) {

          $( '#user-names-2' ).html($( '#user-names' ).html());

          $( '#start-sortegram' ).removeClass( 'close' ).addClass( 'open' );
          $( '#sg-manage' ).removeClass( 'open' ).addClass( 'close' );
          $( '#sortegram' ).removeClass( 'open' ).addClass( 'close' );
          $( '#h-o-t' ).removeClass( 'open' ).addClass( 'close' );
          $( '#sg-about' ).removeClass( 'open' ).addClass( 'close' );

          $( '#user-names-2' ).removeClass( 'lock-scroll' ).addClass( 'scroll' );

          document.getElementById( 'logo' ).innerHTML = 'Sortegram';

          $('#user-names-2 .delete-user').hide();
    }
  else {
      swal({
        title: 'Erro :(',
        text: 'O sorteio precisa ter pelo menos 2 participantes!',
        type: 'error',
        timer: 10000,
        allowOutsideClick: true
      });
  }
  Reload();
}


function sgRaffleRefresh () {

  sgGo.style.display = show;
  sgResult.style.display = hide;
  $( '.new-btn, .back-to-home-btn' ).hide();
  sgCurrent.innerHTML = '';
  sgGo.removeAttribute( 'disabled' );

      // Esconde o trofeu
    $( '#trophy' ).hide();

    $( '#sg-refresh' ).hide();

    NoPdiv.style.display = show;

        $( '.new-btn, .back-to-home-btn' ).hide(); // Esconde o botao 'Novo Sorteio'




  sgResult.style.backgroundColor = 'transparent';

        $( '#user-names-2' ).removeClass( 'lock-scroll' ).addClass( 'scroll' );

        document.getElementById( 'logo' ).innerHTML = 'Re-sorteio';

        $('#user-names-2 .delete-user').hide();

        $('#user-names-2 dt').css({
          "background-color": "",
          "color":"",
          "border":""
          });

  $( '#sg-refresh' ).hide();

  Reload();
}








$( '.ui-color-picker .ui-color' ).on( 'click', function () {
    $( '.ui-color' ).css( 'border','' );
    $( this ).css( 'border','2px solid #000000' );

if ( !isLight.checked ) { // If is not dark
    if ( $( this ).hasClass( 'verde' ) ) {
      $bg_uiColor.css( 'background-color', greenLight[0] );
      $btn_uiColor.css( 'background-color', greenLight[1] );
      $fnt_uiColor.css( 'color', greenLight[2] );
      $bd_fntColor.css( 'color',greenLight[3] );
      localStorage.setItem( 'ui-color','green' );
    }
     else if ( $( this ).hasClass( 'azul' ) ) {
      $bg_uiColor.css( 'background-color', blueLight[0] );
      $btn_uiColor.css( 'background-color', blueLight[1] );
      $fnt_uiColor.css( 'color', blueLight[2] );
      $bd_fntColor.css( 'color',blueLight[3] );
      localStorage.setItem( 'ui-color','blue' );
    }
     else if ( $( this ).hasClass( 'vermelho' ) ) {
      $bg_uiColor.css( 'background-color', redLight[0] );
      $btn_uiColor.css( 'background-color', redLight[1] );
      $fnt_uiColor.css( 'color', redLight[2] );
      $bd_fntColor.css( 'color',redLight[3] );
      localStorage.setItem( 'ui-color','red' );
    }
     else if ( $( this ).hasClass( 'amarelo' ) ) {
      $bg_uiColor.css( 'background-color', yellowLight[0] );
      $btn_uiColor.css( 'background-color', yellowLight[1] );
      $fnt_uiColor.css( 'color', yellowLight[2] );
      $bd_fntColor.css( 'color',yellowLight[3] );
      localStorage.setItem( 'ui-color','yellow' );
    }
     else if ( $( this ).hasClass( 'laranja' ) ) {
      $bg_uiColor.css( 'background-color', orangeLight[0] );
      $btn_uiColor.css( 'background-color', orangeLight[1] );
      $fnt_uiColor.css( 'color', orangeLight[2] );
      $bd_fntColor.css( 'color',orangeLight[3] );
      localStorage.setItem( 'ui-color','orange' );
    }
     else if ( $( this ).hasClass( 'rosa' ) ) {
      $bg_uiColor.css( 'background-color', pinkLight[0] );
      $btn_uiColor.css( 'background-color', pinkLight[1] );
      $fnt_uiColor.css( 'color', pinkLight[2] );
      $bd_fntColor.css( 'color',pinkLight[3] );
      localStorage.setItem( 'ui-color','pink' );
    }
     else if ( $( this ).hasClass( 'lilas' ) ) {
      $bg_uiColor.css( 'background-color', lilacLight[0] );
      $btn_uiColor.css( 'background-color', lilacLight[1] );
      $fnt_uiColor.css( 'color', lilacLight[2] );
      $bd_fntColor.css( 'color',lilacLight[3] );
      localStorage.setItem( 'ui-color','lilac' );
    }
     else if ( $( this ).hasClass( 'ciano' ) ) {
      $bg_uiColor.css( 'background-color', cyanLight[0] );
      $btn_uiColor.css( 'background-color', cyanLight[1] );
      $fnt_uiColor.css( 'color', cyanLight[2] );
      $bd_fntColor.css( 'color',cyanLight[3] );
      localStorage.setItem( 'ui-color','cyan' );
    }
     else if ( $( this ).hasClass( 'violeta' ) ) {
      $bg_uiColor.css( 'background-color', violetLight[0] );
      $btn_uiColor.css( 'background-color', violetLight[1] );
      $fnt_uiColor.css( 'color', violetLight[2] );
      $bd_fntColor.css( 'color',violetLight[3] );
      localStorage.setItem( 'ui-color','violet' );
    }
  }
    else { // If is dark
      if ( $( this ).hasClass( 'verde' ) ) {
      $bg_uiColor.css( 'background-color', green[0] );
      $btn_uiColor.css( 'background-color', green[1] );
      $fnt_uiColor.css( 'color', green[2] );
      $bd_fntColor.css( 'color',green[3] );
      localStorage.setItem( 'ui-color','green' );
    }
     else if ( $( this ).hasClass( 'azul' ) ) {
      $bg_uiColor.css( 'background-color', blue[0] );
      $btn_uiColor.css( 'background-color', blue[1] );
      $fnt_uiColor.css( 'color', blue[2] );
      $bd_fntColor.css( 'color',blue[3] );
      localStorage.setItem( 'ui-color','blue' );
    }
     else if ( $( this ).hasClass( 'vermelho' ) ) {
      $bg_uiColor.css( 'background-color', red[0] );
      $btn_uiColor.css( 'background-color', red[1] );
      $fnt_uiColor.css( 'color', red[2] );
      $bd_fntColor.css( 'color',red[3] );
      localStorage.setItem( 'ui-color','red' );
    }
     else if ( $( this ).hasClass( 'amarelo' ) ) {
      $bg_uiColor.css( 'background-color', yellow[0] );
      $btn_uiColor.css( 'background-color', yellow[1] );
      $fnt_uiColor.css( 'color', yellow[2] );
      $bd_fntColor.css( 'color',yellow[3] );
      localStorage.setItem( 'ui-color','yellow' );
    }
     else if ( $( this ).hasClass( 'laranja' ) ) {
      $bg_uiColor.css( 'background-color', orange[0] );
      $btn_uiColor.css( 'background-color', orange[1] );
      $fnt_uiColor.css( 'color', orange[2] );
      $bd_fntColor.css( 'color',orange[3] );
      localStorage.setItem( 'ui-color','orange' );
    }
     else if ( $( this ).hasClass( 'rosa' ) ) {
      $bg_uiColor.css( 'background-color', pink[0] );
      $btn_uiColor.css( 'background-color', pink[1] );
      $fnt_uiColor.css( 'color', pink[2] );
      $bd_fntColor.css( 'color',pink[3] );
      localStorage.setItem( 'ui-color','pink' );
    }
     else if ( $( this ).hasClass( 'lilas' ) ) {
      $bg_uiColor.css( 'background-color', lilac[0] );
      $btn_uiColor.css( 'background-color', lilac[1] );
      $fnt_uiColor.css( 'color', lilac[2] );
      $bd_fntColor.css( 'color',lilac[3] );
      localStorage.setItem( 'ui-color','lilac' );
    }
     else if ( $( this ).hasClass( 'ciano' ) ) {
      $bg_uiColor.css( 'background-color', cyan[0] );
      $btn_uiColor.css( 'background-color', cyan[1] );
      $fnt_uiColor.css( 'color', cyan[2] );
      $bd_fntColor.css( 'color',cyan[3] );
      localStorage.setItem( 'ui-color','cyan' );
    }
     else if ( $( this ).hasClass( 'violeta' ) ) {
      $bg_uiColor.css( 'background-color', violet[0] );
      $btn_uiColor.css( 'background-color', violet[1] );
      $fnt_uiColor.css( 'color', violet[2] );
      $bd_fntColor.css( 'color',violet[3] );
      localStorage.setItem( 'ui-color','violet' );
    }
    }


    swal({
        title: 'Pronto!',
        text: 'Salvando alterações...',
        type: 'success',
        showConfirmButton: false,
        timer: 2000
      });
});




x.oninput = function () {
    document.getElementById( 'x' ).setAttribute( 'max', y.value - 2 );
}

n.onchange = function () {
    if ( Number(n.value) >= Number(y.value)
      || Number(n.value) > Number(y.value) - x.value )
      { n.value = y.value - x.value;
      }
    if ( Number(x.value) > Number(y.value) ) {
      x.value = y.value - 2;
    }
    if ( Number(n.value) === 0 ) {
      n.value = 1;
      document.getElementById( 'numb-plural' ).innerHTML = '';
    }
    if ( Number(n.value) > 100 ) {
      n.value = 100;
      document.getElementById( 'numb-plural' ).innerHTML = 's';
    }
}

x.onchange = function () {
    if ( Number(x.value) >= Number(y.value) ) {
      x.value = y.value - 2;
    }
    if ( Number(n.value) >= Number(y.value)
      || Number(n.value) > Number(y.value) - x.value ) {
      n.value = y.value - x.value;
    }
}

y.onchange = function () {
    if ( Number(y.value) <= Number(x.value) ) {
      y.value = Number(x.value) + 2;
    }
    if ( Number(n.value) >= Number(y.value)
      || Number(n.value) > Number(y.value) - x.value ) {
      n.value = y.value - x.value;
    }
}

n.oninput = function () {
    if ( this.value.length > 3 ) {
        this.value = this.value.slice( 0,3 );
    }

document.getElementById( 'n' ).setAttribute( 'max', y.value - x.value - 1 );

if ( Number(n.value) > 1 ) {
  document.getElementById( 'numb-plural' ).innerHTML = 's';
}
else if ( Number(n.value) === 1 ) {
  document.getElementById( 'numb-plural' ).innerHTML = '';
}
else if ( Number(n.value) === 0 ) {
  document.getElementById( 'numb-plural' ).innerHTML = 's';
}
}

x.oninput = function () {
    if ( this.value.length > 7 ) {
        this.value = this.value.slice( 0,7 );
        }
}

y.oninput = function () {
    if ( this.value.length > 7 ) {
        this.value = this.value.slice( 0,7 );
        }
}

userName.oninput = function () {
    if ( this.value.length > 30 ) {
        this.value = this.value.slice( 0,30 );
        }
}



// Reload script
function Reload () {
  $( '#script' ).remove();

  var _s = document.createElement( 'script' );
  _s.id = 'script';
  _s.src = 'js/sortegram.dev.js';
  document.body.appendChild( _s );
};





// Sobre o Sortegram

document.getElementById('sg-about-text').innerHTML =
'<h2>Sortegram</h2>\
Autor: <b>Victor Ribeiro</b><br>\
Versão: <b>v1.3.0</b><br>\
Website: <b><a href=\"#\" onclick=\"window.open(\'http:\/\/sortegram.com\/\', \'_system\');\">http:\/\/sortegram.com\/<\/a></b><br>\
<br>\
O <b>Sortegram</b> é um pequeno aplicativo que você pode usar para sortear \
pessoas, números e muitas outras coisas que você precisar. Basta adicionar os participantes e sorteá-los.<br><br>\
Você pode ainda salvar a lista de participantes para continuar em outro momento. \
Essa opção é útil para quem tem uma lista imensa de participantes e quer ir adicionando aos poucos.<br><br>\
Para quem quer apenas sortear números aleatórios, o <b>Sortegram</b> conta também com o <b>Sorteio Clássico</b>. \
Nele você pode sortear um ou vários números, de modo que nenhum deles se repita.<br><br>\
O aplicativo conta ainda com o modo <b>Cara ou Coroa</b>, em que você não precisa \
de uma moeda de verdade para jogar. Basta entrar no modo (apertando no ícone do meio da tela inicial) e tocar na moeda. \
Os resultados são completamente aleatórios e você não precisa se preocupar com trapaças.<br><br>\
Se você tem alguma dúvida de como utilizar o aplicativo, ou apenas quer dar seu feedback, \
elogiando ou dizendo em que o aplicativo pode melhorar, mande um email para o desenvolvedor em <a href=\'mailto:victor_ribeiro135@hotmail.com?subject=Feedback Sortegram\'>victor_ribeiro135@hotmail.com</a>. ;)\
';

function About () {
  cResult.style.color = '#FFF';
  cResult.style.backgroundColor = 'rgba(236, 248, 255, 0.5)';
  cResult.style.borderTop = '3px solid #FFF';
  cResult.style.borderBottom = '3px solid #FFF';
      $( '#sg-about' ).removeClass( 'close' ).addClass( 'open' );
      $( '#sg-manage' ).removeClass( 'open' ).addClass( 'close' );
      $( '#home' ).removeClass( 'open' ).addClass( 'close' );
      $( '#classic' ).removeClass( 'open' ).addClass( 'close' );
      $( '#sortegram' ).removeClass( 'open' ).addClass( 'close' );
      $( '#start-sortegram' ).removeClass( 'open' ).addClass( 'close' );
      $( '#h-o-t' ).removeClass( 'open' ).addClass( 'close' );
  document.getElementById( 'logo' ).innerHTML = 'Sobre';
  $( '#user-names-manage .delete-user' ).hide();
  sgQuit();
  cNew();
}




// Listen for orientation changes
window.addEventListener("orientationchange", function() {
  // Announce the new orientation number
  if ( window.orientation === 90 ) {
    $('.splash-orientation').show();
    $('.splash-orientation-img-left').show();
    $('.splash-orientation-img-right').hide();
  } else if ( window.orientation === -90 ) {
    $('.splash-orientation').show();
    $('.splash-orientation-img-right').show();
    $('.splash-orientation-img-left').hide();
  } else {
    $('.splash-orientation').hide();
  }
}, false);

/* Shake event (only testing)
var myShakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 1000 // optional, determines the frequency of event generation
});

myShakeEvent.start();

window.addEventListener('shake', shakeEventDidOccur, false);

//function to call when shake occurs
function shakeEventDidOccur () {
    scStart();
    sgStart();
    ccStart();
}
*/
