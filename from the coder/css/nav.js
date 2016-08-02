function createSvg(tagName){
	return document.createElementNS('http://www.w3.org/2000/svg',tagName);
}


function createSvgTri(obj,fillColor,w,h,d){
	var oSvg=createSvg('svg');
	oSvg.setAttribute('width',w);
	oSvg.setAttribute('height',h);
	obj.appendChild(oSvg);
	var oPath=createSvg('path');
	oPath.setAttribute('d',d);
	oPath.setAttribute('fill',fillColor);	
	oSvg.appendChild(oPath);
};
window.onload=window.onresize=function(){
	/********nav********/
	$('.iconNav').click(function(){
		showNav();
	});
	
	$('.iconClose').click(function(){
		hideNav();	
	});
	
	$('.navcon li').click(function(){
		if($(window).width()<=640){
			hideNav();	
		}
			
	});
	
	function showNav(){
		$('.iconNav').css("display","none");
		$('.iconClose').css("display","block");
		$('.navcon').css("display","block");
		$('.nav').addClass("navAfter");	
	}
	
	function hideNav(){
		$('.iconNav').css("display","block");
		$('.iconClose').css("display","none");
		$('.navcon').css("display","none");
		$('.nav').removeClass("navAfter");	
	};
	
	
	/********svg triangle********/
	<!--d="M  L  Z"  M--moveTo L--lineTo  Z闭合路径-->
	/*
	<svg width="800" height="600">
		
		<path d="M800 0 L0 600L800 600Z" fill="#92fffc"></path>
	</svg>
	*/
	var w=0;
	var h=0;
	
	w=$('.swiper-slide').width();
	h=$('.swiper-slide').height();
	console.log(w,h);
	
	//P16 Layout Rules	
	var oLayout = document.getElementById('Layout');
	createSvgTri(oLayout,'#92fffc',w,h,'M'+ w +' 0 L0 '+ h + 'L' + w + ' ' + h+'Z');
	
	
	//P18 Safe Area
	var oSafeArea = document.getElementById('SafeArea');
	createSvgTri(oSafeArea,'#fff988',w,h,'M0 0L'+ w +' 0 L '+  w + ' ' + h+'Z');	
	
	//P19 Balance and Rhythm
	var oBalance = document.getElementById('Balance');
	createSvgTri(oBalance,'#fff988',w,h,'M0 0L0 '+ h +' L '+  w + ' ' + h+'Z');	
}



