/* Dynamic card behavior in mods page */

/* global data variables */
var today_event_names = ["Torque", "Qui", "Rang"];
var today_event_mods = ["Astronomy Club", "Literary Club", "BRCC"];
var today_event_venues = ["LH318", "VI 67", "SAC"];
var today_event_start_dates = ["11 Feb 5:00pm - 14 Feb 6:00pm", "11 Feb 6:00pm - 11 Feb 10:00pm", "11 Feb 7:00pm - 11 Feb 8:00pm"];
var today_is_event_subd = [false, true, false];
var today_is_event_strd = [false, false, true];
var today_event_cards = [];

/* DOM variables */
var today_starred = document.getElementById('today_starred');
var today_subs = document.getElementById('today_subs');
var today_others = document.getElementById('today_others');

/* Functions */
// function to toggle card position of mod_cards[i]
function today_toggleEventCard(ind)
{
	// if(today_is_event_strd[ind])
	// {
	// 	today_starred.removeChild(today_event_cards[ind]);
	// }
	// else if (today_is_event_subd[ind])
	// {
	// 	today_subs.removeChild(today_event_cards[ind]);
 //    }
 //    else
 //    {
 //        today_others.removeChild(today_event_cards[ind]);
 //    }
	for(let i = 0; i < today_event_cards.length; ++i)
	{
		let card = today_event_cards[i];
		if(today_is_event_strd[i])
		{
			today_starred.removeChild(card);
		}
		else if(today_is_event_subd[i])
		{
			today_subs.removeChild(card);
		}
		else
		{
			today_others.removeChild(card);
		}
	}
	today_is_event_strd[ind] = !today_is_event_strd[ind];
	generate_today_wall();
	// today_event_cards[ind] = today_createEventCard(ind);
	// if(today_is_event_strd[ind])
	// {
	// 	today_starred.appendChild(today_event_cards[ind]);
	// }
	// else if(today_is_event_subd[ind])
	// {
	// 	today_subs.appendChild(today_event_cards[ind]);
 //    }
 //    else
 //    {
 //        today_others.appendChild(today_event_cards[ind]);
 //    }
}

// returns a card object
function today_createEventCard(ind)
{
	let card = document.createElement('div');
    card.classList.add('starred_event');
    
    let info = document.createElement('div');
    info.classList.add('event_info');

	let title = document.createElement('div');
	title.classList.add('event_title');
    title.textContent = today_event_names[ind];
    
	let by = document.createElement('div');
	by.classList.add('by');
    by.textContent = today_event_mods[ind];

	let venue = document.createElement('div');
	venue.classList.add('venue');
    venue.textContent = today_event_venues[ind];

	let start_at = document.createElement('div');
	start_at.classList.add('event_time');
    start_at.textContent = today_event_start_dates[ind];

	let button = document.createElement('div');
	let image;
	if(today_is_event_strd[ind])
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
	button.addEventListener('click', function(){today_toggleEventCard(ind);}, false);

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
function generate_today_wall() {
	today_event_cards = [];
	for(let i = 0; i < today_event_names.length; ++i)
	{
		let card = today_createEventCard(i);
		if(today_is_event_strd[i])
		{
			today_event_cards.push(today_starred.appendChild(card));
		}
		else if (today_is_event_subd[i])
		{
			today_event_cards.push(today_subs.appendChild(card));
	    }
	    else
	    {
	        today_event_cards.push(today_others.appendChild(card));
	    }
	}
}

for(let i = 0; i < today_event_names.length; ++i)
{
	let card = today_createEventCard(i);
	if(today_is_event_strd[i])
	{
		today_event_cards.push(today_starred.appendChild(card));
	}
	else if (today_is_event_subd[i])
	{
		today_event_cards.push(today_subs.appendChild(card));
    }
    else
    {
        today_event_cards.push(today_others.appendChild(card));
    }
}