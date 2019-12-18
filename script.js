// Sélection de tous les éléments 'paragraphe'
console.log ($('p'));
console.log ($('p')[0]);

// Sélection de tous les éléments ayant 'maClasse' pour classe
console.log ($('.maClasse'));

console.log ($('#premier-paragraphe'));

// Sélection de tous les 'span' qui sont dans un 'div';
console.log ($('div span'));

//Sélection de tous les éléments 'p' impairs et on lui attribue un fond rouge
$('p:odd').css ('background', 'red');

//Remplacement du texte des paragraphes impairs
$('p:odd').text('truc');

// Sélection de l'index 1 du paragraphe p
$('p:eq(1)').css ('background', 'red');

// Ajouter une class à tous les éléments 'p'
$('p').addClass ('maClasse');

// html remplace innerHtml
$('p').html ('<b>Test</b>');

// Ajouter du css
$('p').css ('background', 'blue');
$('p').css ('border', '5px solid yellow');

// Récupérer la hauteur de tous les éléments 'p'
var hauteur = $('p').height();
alert(hauteur);

// Récupérer le contenu des éléments 'p' (du premier élément de la sélection)
var html = $('p').html ();
console.log(html);

// Récupérer la valeur du second paragraphe
var html = $('.maClasse').html ();
console.log(html);

// Sélectionner l'élément parent des paragraphes
// $('p').parent().fadeOut();

// Animation
// fadeIn = espèce de fondu
// fadeOut = disparaître
$('p').fadeOut().fadeIn();

// Ecouter le click
$('p').click(function () {
   alert('ça marche');
});

// 'this' concerne uniquement le paragraphe sur lequel on a cliqué
$('p').click(function () {
    $(this).html('ça marche').css('background', 'pink');
});

// Each pour parcourir chaque élément d'une collection
// This fait référence à chaque paragraphe
$('p').each(function () {
    $(this).css('background', 'blue');
});