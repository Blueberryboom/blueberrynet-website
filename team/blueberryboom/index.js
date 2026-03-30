(() => {
  const profileRoot = document.getElementById('profileRoot');
  if (!profileRoot) return;

  document.body.classList.add('blueberryboom-compact-page');

  const CUSTOM_PROFILE_PHOTO_URL = 'https://raw.githubusercontent.com/Blueberryboom/blueberrynet-website/refs/heads/main/assets/blueberryboom_profile.png';
  const CUSTOM_BANNER_URL = 'https://raw.githubusercontent.com/Blueberryboom/blueberrynet-website/refs/heads/main/assets/blueberryboom_banner.jpg';

  const servers = [
    {
      name: 'The BlueberryTeam',
      description: 'Do you like chatting, chilling, and gaming? Then this is the right place for you! Join for more info!',
      role: 'OWNER',
      roleClass: 'role-owner',
      stats: '180 members',
      avatarClass: 'avatar-blue',
      initials: 'BB',
    },
    {
      name: 'BigHappySmiley',
      description: 'The most active hangout server with around 1000 members.',
      role: 'TRIAL MOD',
      roleClass: 'role-mod',
      stats: '20 members',
      avatarClass: 'avatar-purple',
      initials: 'BHS',
    },
    {
      name: 'Coming soon...',
      description: 'Server has beem excluded per the owners request.',
      role: 'ADMINISTRATOR',
      roleClass: 'role-admin',
      stats: '66,684 online · 962,987 members',
      avatarClass: 'avatar-green',
      initials: '-',
    }
  ];

  const cardsHtml = servers.map((server) => `
    <article class="owner-server-card">
      <div class="owner-server-head">
        <span class="owner-server-avatar ${server.avatarClass}" aria-hidden="true">${server.initials}</span>
        <div>
          <h3>${server.name}</h3>
          <p>${server.description}</p>
        </div>
      </div>
      <span class="owner-server-role ${server.roleClass}">${server.role}</span>
      <p class="owner-server-stats"><span class="owner-server-dot" aria-hidden="true"></span>${server.stats}</p>
    </article>
  `).join('');

  profileRoot.innerHTML = `
    <section class="blueberry-scene" aria-label="Blueberryboom profile card">
      <div class="blueberry-scene-glow glow-one" aria-hidden="true"></div>
      <div class="blueberry-scene-glow glow-two" aria-hidden="true"></div>
      <div class="blueberry-scene-stars" aria-hidden="true"></div>

      <article class="blueberry-profile-shell">
        <a class="blueberry-back-btn" href="/team" aria-label="Go back to team page">← Back to team</a>

        <div class="blueberry-profile-banner" style="background-image: linear-gradient(rgba(19, 29, 49, 0.2), rgba(8, 12, 22, 0.86)), url(${CUSTOM_BANNER_URL});"></div>

        <div class="blueberry-profile-top">
          <img class="blueberry-profile-photo" src="${CUSTOM_PROFILE_PHOTO_URL}" alt="Blueberryboom profile photo">
          <div>
            <h1>Blueberryboom</h1>
            <p class="blueberry-profile-tag">Discord Moderator • Administrator • Developer</p>
          </div>
        </div>

        <section>
          <h2 class="blueberry-section-title">Servers I work in</h2>
          <div class="owner-servers-grid compact">${cardsHtml}</div>
        </section>
      </article>
    </section>
  `;
})();
