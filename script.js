var child1 = document.getElementById('child1'),
child2 = document.getElementById('child2'),
result = document.getElementById('result');
child1.addEventListener('mouseover', function(e) {
result.innerHTML = "L'élément quitté juste avant que le curseur n'entre sur l'enfant n°1 est : " + e.relatedTarget.id;
}, false);
child2.addEventListener('mouseout', function(e) {
result.innerHTML = "L'élément survolé juste après que le curseur ait quitté l'enfant n°2 est : " + e.relatedTarget.id;
}, false);


var position = document.getElementById('position');

document.addEventListener('mousemove', function(e) {
position.innerHTML = 'Position X : ' + e.clientX + 'px<br/>Position Y : ' + e.clientY + 'px';
}, false);


