/* Dynamic card behavior in mods page */

/* global data variables */
var tom_event_names = ["Tor", "gui", "Raag", "Mujra", "Draw"];
var tom_event_mods = ["DevClub", "ANCC", "Music Club", "Drama Club", "Fine Arts Club"];
var tom_event_venues = ["LH318", "VI 67", "SAC", "Basement", "Lounge"];
var tom_event_start_dates = ["2 Feb", "6 Feb", "8 Feb", "10 Feb", "15 Feb"];
var tom_is_event_subd = [true, false, true, false, false];
var tom_is_event_strd = [false, false, true, true, false];
var tom_event_cards = [];

/* DOM variables */
var tom_starred = document.getElementById('tom_starred');
var tom_subs = document.getElementById('tom_subs');
var tom_others = document.getElementById('tom_others');

/* Functions */
// function to toggle card position of mod_cards[i]
function tom_toggleEventCard(ind)
{
	// if(tom_is_event_strd[ind])
	// {
	// 	tom_starred.removeChild(tom_event_cards[ind]);
	// }
	// else if (tom_is_event_subd[ind])
	// {
	// 	tom_subs.removeChild(tom_event_cards[ind]);
 //    }
 //    else
 //    {
 //        tom_others.removeChild(tom_event_cards[ind]);
 //    }
	for(let i = 0; i < tom_event_cards.length; ++i)
	{
		let card = tom_event_cards[i];
		if(tom_is_event_strd[i])
		{
			tom_starred.removeChild(card);
		}
		else if(tom_is_event_subd[i])
		{
			tom_subs.removeChild(card);
		}
		else
		{
			tom_others.removeChild(card);
		}
	}
	tom_is_event_strd[ind] = !tom_is_event_strd[ind];
	generate_tom_wall();
	// tom_event_cards[ind] = tom_createEventCard(ind);
	// if(tom_is_event_strd[ind])
	// {
	// 	tom_starred.appendChild(tom_event_cards[ind]);
	// }
	// else if(tom_is_event_subd[ind])
	// {
	// 	tom_subs.appendChild(tom_event_cards[ind]);
 //    }
 //    else
 //    {
 //        tom_others.appendChild(tom_event_cards[ind]);
 //    }
}

// returns a card object
function tom_createEventCard(ind)
{
	let card = document.createElement('div');
    card.classList.add('starred_event');
    
    let info = document.createElement('div');
    info.classList.add('event_info');

	let title = document.createElement('div');
	title.classList.add('event_title');
    title.textContent = tom_event_names[ind];
    
	let by = document.createElement('div');
	by.classList.add('by');
    by.textContent = tom_event_mods[ind];

	let venue = document.createElement('div');
	venue.classList.add('venue');
    venue.textContent = tom_event_venues[ind];

	let start_at = document.createElement('div');
	start_at.classList.add('event_time');
    start_at.textContent = tom_event_start_dates[ind];

	let button = document.createElement('div');
	let image;
	if(tom_is_event_strd[ind])
	{
		button.classList.add('unstar');
		image = document.createElement('img');
		image.src = 'unstar.png';
	}
	else
	{
		button.classList.add('star');
		image = document.createElement('img');
		image.src = 'star.png';
	}
	button.appendChild(image);
	button.addEventListener('click', function(){tom_toggleEventCard(ind);}, false);

    info.appendChild(title);
    info.appendChild(by);
    info.appendChild(venue);
	info.appendChild(start_at);
    card.appendChild(info);
    card.appendChild(button);
	return card;
}

/* Executions */
// creates and deploys all cards in the mod_names array
function generate_tom_wall() {
	tom_event_cards = [];
	for(let i = 0; i < tom_event_names.length; ++i)
	{
		let card = tom_createEventCard(i);
		if(tom_is_event_strd[i])
		{
			tom_event_cards.push(tom_starred.appendChild(card));
		}
		else if (tom_is_event_subd[i])
		{
			tom_event_cards.push(tom_subs.appendChild(card));
	    }
	    else
	    {
	        tom_event_cards.push(tom_others.appendChild(card));
	    }
	}
}

for(let i = 0; i < tom_event_names.length; ++i)
{
	let card = tom_createEventCard(i);
	if(tom_is_event_strd[i])
	{
		tom_event_cards.push(tom_starred.appendChild(card));
	}
	else if (tom_is_event_subd[i])
	{
		tom_event_cards.push(tom_subs.appendChild(card));
    }
    else
    {
        tom_event_cards.push(tom_others.appendChild(card));
    }
}