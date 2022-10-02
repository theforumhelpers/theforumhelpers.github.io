const betterPostLink = (link) => link.replace(/topic\/\d+\/\?page=\d#post-/, 'post/');
// Thanks to @gosoccerboy5 for the above function

const valueOf = (query) => document.querySelector(query).value;
const checked = (query) => document.querySelector(query).checked;

const subforumOptions = {
	suggestions: 'Suggestions',
	ats: 'Advanced Topics',
	qas: 'Questions about Scratch',
	hws: 'Help with scripts'
};

async function createApplication() {
	// Function to fill in a template with proper values
	let application = '';
	application += `@${valueOf('#username')} - `;

	let activeSubforums = [];

	// Out of all the subforums, note down all the user has selected
	for (let subforum in subforumOptions) {
		if (checked(`#${subforum}`)) {
			activeSubforums.push(subforumOptions[subforum]);
		}
	}
	application += `active in ${activeSubforums.join(', ')}. \n`;

	let posts = Array.from(document.querySelectorAll('.post-id'));
	posts.forEach((post, index) => {
		posts[index] = betterPostLink(post.value);
	});
	posts = posts.filter(post => post.trim() !== '');

	application += `Most constructive posts - ${posts.join(', ')}. \n`;
	application += `Most recent post: ${betterPostLink(valueOf('#recent'))}. \n`;
	if (!valueOf('#additional').trim() !== '') {
		application += `Additional info: ${valueOf('#additional')}. \n`;
	}

	document.querySelector('.result').style.display = 'block';
	document.querySelector('#result').innerText = application;
	window.scrollTo({ top: document.body.clientHeight, behaviour: 'smooth' })
}

document.querySelector('#create').addEventListener('click', createApplication)
document.querySelector('.copy').addEventListener('click', () => {
	navigator.clipboard.writeText(document.querySelector('#result').value);
	document.querySelector('.copy').innerText = 'Copied!'
})