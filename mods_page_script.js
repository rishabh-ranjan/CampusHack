/* Dynamic card behavior in mods page */

/* global data variables */
var mod_names = ["DevClub", "ANCC", "Music Club", "Drama Club", "Fine Arts Club"];
var is_mod_subd = [true, false, true, false, false];

/* DOM variables */
var sub_mods_wall = document.getElementById('sub_mods_wall');
var other_mods_wall = document.getElementById('other_mods_wall');

/* Functions */
// returns a card object
function createCard(ind)
{
	let card = document.createElement('div');
	card.classList.add('sub_mod');

	let title = document.createElement('div');
	title.classList.add('mod_name');
	title.textContent = mod_names[ind];

	let button = document.createElement('div');
	let image;
	if(is_mod_subd[ind])
	{
		console.log('hello');
		button.classList.add('remove_sub');
		image = document.createElement('img');
		image.src = 'remove.png';
	}
	else
	{
		button.classList.add('add_sub');
		image = document.createElement('img');
		image.src = 'plus.png';
	}
	button.appendChild(image);

	card.appendChild(title);
	card.appendChild(button);
	return card;
}

/* Executions */
// creates and deploys all cards in the mod_names array
for(let i = 0; i < mod_names.length; ++i)
{
	let card = createCard(i);
	if(is_mod_subd[i])
	{
		sub_mods_wall.appendChild(card);
	}
	else
	{
		other_mods_wall.appendChild(card);
	}
}