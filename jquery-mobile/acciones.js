// JavaScript Document

$(document).ready(function(e){
$('#principal').height($('#page').height());//calcular el alto de la pantalla del dispositivo
	document.addEventListener("deviceready",function(){
		//precargar el solido
		audio-window.plugins.LowLatencyAudio;
		//animales domesticos
		audio.preloadFX('perro', 'perro.mp3', function(e){alert('error' + e);});
		audio.preloadFX('gato', 'gato.mp3', function(e){alert('error' + e);});
		audio.preloadFX('vaca', 'vaca.mp3', function(e){alert('error' + e);});
		audio.preloadFX('pato', 'pato.mp3', function(e){alert('error' + e);});
		audio.preloadFX('cerdo', 'cerdo.mp3', function(e){alert('error' + e);});
		audio.preloadFX('caballo', 'caballo.mp3', function(e){alert('error' + e);});
		//animales salvajes
		audio.preloadFX('leon', 'leon.mp3', function(e){alert('error' + e);});
		audio.preloadFX('mono', 'mono.mp3', function(e){alert('error' + e);});
		audio.preloadFX('buho', 'buho.mp3', function(e){alert('error' + e);});
		audio.preloadFX('jaguar', 'jaguar.mp3', function(e){alert('error' + e);});
		audio.preloadFX('oso', 'oso.mp3', function(e){alert('error' + e);});
		audio.preloadFX('elefante', 'elefaante.mp3', function(e){alert('error' + e);});
		
		
		//REPRODUCIR LAS NOTAS
		
		
		$('.img').bind('touchstart',function(){$(this).addClass('tocada');
audio.play($(this).attr('id'));});
	$('nota').bind('touched',function(){$(this).removeClass('tocada');});
	
	},false);//deviceready
	});//ready
	
	