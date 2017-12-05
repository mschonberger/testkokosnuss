var ref = document.querySelector("#js-ref");
var bas = document.querySelector("#js-bas");
var adv = document.querySelector("#js-adv");
var git = document.querySelector("#js-git");

ref.addEventListener('click', function(){
	ref.style.color = 'var(--color-border)';
	bas.style.color = 'var(--color-text-light)';
	adv.style.color = 'var(--color-text-light)';
	git.style.color = 'var(--color-text-light)';
});

bas.addEventListener('click', function(){
	ref.style.color = 'var(--color-text-light)';
	bas.style.color = 'var(--color-border)';
	adv.style.color = 'var(--color-text-light)';
	git.style.color = 'var(--color-text-light)';
});

adv.addEventListener('click', function(){
	ref.style.color = 'var(--color-text-light)';
	bas.style.color = 'var(--color-text-light)';
	adv.style.color = 'var(--color-border)';
	git.style.color = 'var(--color-text-light)';
});

git.addEventListener('click', function(){
	ref.style.color = 'var(--color-text-light)';
	bas.style.color = 'var(--color-text-light)';
	adv.style.color = 'var(--color-text-light)';
	git.style.color = 'var(--color-border)';
});