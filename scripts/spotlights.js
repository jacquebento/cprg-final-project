// everytime the home page refreshes a new set of 4 cards are created from the directory data

const url = 'https://jacquebento.github.io/cprg-final-project/data/members.json';

const spotlights = document.querySelector('#spotlights');

async function getMembersData(){
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.members);
    data.members.sort(() => Math.random() - 0.5);
    displayMembers(data.members);
}

const displayMembers = (members) => {
    var n = 0;
    members.forEach((member) => {

            if (n < 4){
                n = n + 1;
                let card = document.createElement('section');
                card.className = "members";
                let logo = document.createElement('img');
                logo.className = "logo";
                let name = document.createElement('h2'); 
                let address = document.createElement('h3');
                let phone = document.createElement('h3');
                let website = document.createElement('a');
                
                name.textContent = `${member.name}`; 
                address.textContent = `Address: ${member.address}`;
                phone.textContent = `Phone: ${member.phone}`;
                website.textContent = `${member.website}`;
                
                logo.setAttribute('src', member.logo);
                logo.setAttribute('alt', `Logo of ${member.name}`);
                logo.setAttribute('loading', 'lazy');
                logo.setAttribute('width', '340');
                logo.setAttribute('height', '440');
            
                website.setAttribute('href', `index.html`);
                website.setAttribute('aria-label', `${member.name} website`);
                
                card.appendChild(name); 
                card.appendChild(address);
                card.appendChild(phone);
                card.appendChild(website);
                card.appendChild(logo);
            
                spotlights.appendChild(card);
            }          
    }); 
  }

getMembersData();


