var app = app || {};
/*app = (()=>{
	var init=x=>{
		onCreate(x);
		setContentView();
	};
	var onCreate=x=>{
		app.router.onCreate(x);
	};
	var setContentView=()=>{
		$('#wrapper').empty();
		app.algorithm.init();
	};
	return {init:init};
})();
*/

app = (()=>{
	var init=x=>{
		$.getScript(x+'/resources/js/router.js',()=>{
			$.extend(new Router(x));
			app.algorithm.onCreate();
		})
	};
	return {init:init};
})();

app.algorithm = (()=>{
	var $wrapper,context,algorithm,view;
	var onCreate=()=>{
		$wrapper = $('#wrapper');
		context = $.context();
		algorithm = $.javascript()+'/algorithm.js';
		view = $.javascript()+'/view.js';
		setContentView();
	};
	var setContentView=()=>{
		$wrapper.empty();
		$.getScript(view,()=>{
			$wrapper.html(navigation(image));
			var button = '<button id="btn-nav-1st" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">'
			    +'        <span class="sr-only">Toggle navigation</span>'
			    +'        <span class="icon-bar"></span>'
			    +'        <span class="icon-bar"></span>'
			    +'        <span class="icon-bar"></span>'
			    +'      </button>';
			$('#div-nav-1st').append(button);
			$('#btn-nav-1st').click(()=>{
				alert('Button Click !!');
			});
			var aLogin =  ' <a id="a-login" href="#"> '
		    +'              <span class="glyphicon glyphicon-user" aria-hidden="true">&nbsp;로그인</span>'
		    +'              </a>';
			$('#li-login').append(aLogin);
			$('#a-login').click(()=>{
				alert('LOGIN BUTTON CLICK');
			});
		});
	};
	return{onCreate:onCreate};
})();