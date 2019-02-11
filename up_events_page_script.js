/* Dynamic card behavior in mods page */

/* global data variables */
var up_event_names = ["Tor", "gui", "Raag", "Mujra", "Draw"];
var up_event_mods = ["DevClub", "ANCC", "Music Club", "Drama Club", "Fine Arts Club"];
var up_event_venues = ["LH318", "VI 67", "SAC", "Basement", "Lounge"];
var up_event_start_dates = ["2 Feb", "6 Feb", "8 Feb", "10 Feb", "15 Feb"];
var up_is_event_subd = [true, false, true, false, false];
var up_is_event_strd = [false, false, true, true, false];
var up_event_cards = [];

/* DOM variables */
var up_starred = document.getElementById('up_starred');
var up_subs = document.getElementById('up_subs');
var up_others = document.getElementById('up_others');

/* Functions */
// function to toggle card position of mod_cards[i]
function up_toggleEventCard(ind)
{
	if(up_is_event_strd[ind])
	{
		up_starred.removeChild(up_event_cards[ind]);
	}
	else if (up_is_event_subd[ind])
	{
		up_subs.removeChild(up_event_cards[ind]);
    }
    else
    {
        up_others.removeChild(up_event_cards[ind]);
    }
	up_is_event_strd[ind] = !up_is_event_strd[ind];
	up_event_cards[ind] = up_createEventCard(ind);
	if(up_is_event_strd[ind])
	{
		up_starred.appendChild(up_event_cards[ind]);
	}
	else if(up_is_event_subd[ind])
	{
		up_subs.appendChild(up_event_cards[ind]);
    }
    else
    {
        up_others.appendChild(up_event_cards[ind]);
    }
}

// returns a card object
function up_createEventCard(ind)
{
	let card = document.createElement('div');
    card.classList.add('starred_event');
    
    let info = document.createElement('div');
    info.classList.add('event_info');

	let title = document.createElement('div');
	title.classList.add('event_title');
    title.textContent = up_event_names[ind];
    
	let by = document.createElement('div');
	by.classList.add('by');
    by.textContent = up_event_mods[ind];

	let venue = document.createElement('div');
	venue.classList.add('venue');
    venue.textContent = up_event_venues[ind];

	let start_at = document.createElement('div');
	start_at.classList.add('event_time');
    start_at.textContent = up_event_start_dates[ind];

	let button = document.createElement('div');
	let image;
	if(up_is_event_strd[ind])
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
	button.addEventListener('click', function(){up_toggleEventCard(ind);}, false);

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
for(let i = 0; i < up_event_names.length; ++i)
{
	let card = up_createEventCard(i);
	if(up_is_event_strd[i])
	{
		up_event_cards.push(up_starred.appendChild(card));
	}
	else if (up_is_event_subd[i])
	{
		up_event_cards.push(up_subs.appendChild(card));
    }
    else
    {
        up_event_cards.push(up_others.appendChild(card));
    }
}