/* Dynamic card behavior in mods page */

/* global data variables */
var event_names = ["Tor", "gui", "Raag", "Mujra", "Draw"];
var event_mods = ["DevClub", "ANCC", "Music Club", "Drama Club", "Fine Arts Club"];
var event_venues = ["LH318", "VI 67", "SAC", "Basement", "Lounge"];
var event_start_dates = ["2 Feb", "6 Feb", "8 Feb", "10 Feb", "15 Feb"];
var is_event_subd = [true, false, true, false, false];
var is_event_strd = [false, false, true, true, false];
var event_cards = [];

/* DOM variables */
var starred = document.getElementById('up_starred');
var subs = document.getElementById('up_subs');
var others = document.getElementById('up_others');

/* Functions */
// function to toggle card position of mod_cards[i]
function toggleEventCard(ind)
{
	if(is_event_strd[ind])
	{
		up_starred.removeChild(event_cards[ind]);
	}
	else if (is_event_subd[ind])
	{
		up_subs.removeChild(event_cards[ind]);
    }
    else
    {
        up_others.removeChild(event_cards[ind]);
    }
	is_event_strd[ind] = !is_event_strd[ind];
	event_cards[ind] = createEventCard(ind);
	if(is_event_strd[ind])
	{
		up_starred.appendChild(event_cards[ind]);
	}
	else if (is_event_subd[ind])
	{
		up_subs.appendChild(event_cards[ind]);
    }
    else
    {
        up_others.appendChild(event_cards[ind]);
    }
}

// returns a card object
function createEventCard(ind)
{
	let card = document.createElement('div');
    card.classList.add('starred_event');
    
    let info = document.createElement('div');
    info.classList.add('event_info');

	let title = document.createElement('div');
	title.classList.add('event_title');
    title.textContent = event_names[ind];
    
	let by = document.createElement('div');
	by.classList.add('by');
    by.textContent = event_mods[ind];

	let venue = document.createElement('div');
	venue.classList.add('venue');
    venue.textContent = event_venues[ind];

	let start_at = document.createElement('div');
	start_at.classList.add('event_time');
    start_at.textContent = event_start_dates[ind];

	let button = document.createElement('div');
	let image;
	if(is_event_strd[ind])
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
	button.addEventListener('click', function(){toggleEventCard(ind);}, false);

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
for(let i = 0; i < event_names.length; ++i)
{
	let card = createEventCard(i);
	if(is_event_strd[i])
	{
		event_cards.push(up_starred.appendChild(card));
	}
	else if (is_event_subd[i])
	{
		event_cards.push(up_subs.appendChild(card));
    }
    else
    {
        event_cards.push(up_others.appendChild(card));
    }
}