const LinksSocialMidia = {
  github: 'nahrdmelo',
  facebook: 'nataliarmelo',
  instagram: 'nataliarmelo_',
  twitter: '_nataliarmelo'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = ` https://api.github.com/users/${LinksSocialMidia.github} `

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLocation.textContent = data.location
    })
}

getGitHubProfileInfos()
