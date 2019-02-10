/* Campus Hackathon!!! */

/* Variables for DOM objects */

var mods_button = document.getElementById('mods_button');
var mods_page = document.getElementById('mods_page');

var events_button = document.getElementById('events_button');
var events_page = document.getElementById('events_page');

var add_event_button = document.getElementById('add_event_button');
var add_event_page = document.getElementById('add_event_page');

var today_button = document.getElementById('today_button');
var today_page = document.getElementById('today_page');

var tom_button = document.getElementById('tom_button');
var tom_page = document.getElementById('tom_page');

var dat_button = document.getElementById('dat_button');
var dat_page = document.getElementById('dat_page');

/* Other global variables */

// map of all the button id's in outer_navbar and its page
var outer_navbar = {
    'mods_button': mods_page,
    'events_button': events_page,
    'add_event_button': add_event_page
};

// above for inner navbar
var inner_navbar = {
    'today_button': today_page,
    'tom_button': tom_page,
    'dat_button': dat_page
};

// currently active outer navbar page
var active_outer_button = events_button;
var active_inner_button = today_button;

/* Functions */
function changeOuterPage(event)
{
    outer_navbar[active_outer_button.id].style.display = 'none';
    active_outer_button.classList.remove('active');
    outer_navbar[event.target.id].style.display = 'block';
    event.target.classList.add('active');
    active_outer_button = event.target;
}

function changeInnerPage(event)
{
    inner_navbar[active_inner_button.id].style.display = 'none';
    active_inner_button.classList.remove('active');
    inner_navbar[event.target.id].style.display = 'block';
    event.target.classList.add('active');
    active_inner_button = event.target;
}

/* Initializations / assignment of properties/functions */

// sets default display styles of pages
// and adds event listeners to the buttons

// for outer navbar
for(let button_id in outer_navbar)
{
    outer_navbar[button_id].style.display = 'none';
    document.getElementById(button_id).classList.remove('active');
    document.getElementById(button_id).addEventListener('click', changeOuterPage, false);
}
outer_navbar[active_outer_button.id].style.display = 'block';
active_outer_button.classList.add('active');

// same as above for inner navbar
for(let button_id in inner_navbar)
{
    inner_navbar[button_id].style.display = 'none';
    document.getElementById(button_id).classList.remove('active');
    document.getElementById(button_id).addEventListener('click', changeInnerPage, false);
}
inner_navbar[active_inner_button.id].style.display = 'block';
active_inner_button.classList.add('active');
