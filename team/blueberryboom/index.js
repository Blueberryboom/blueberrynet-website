(() => {
  const profileRoot = document.getElementById('profileRoot');
  if (!profileRoot) return;

  document.body.classList.add('blueberryboom-compact-page');

  const CUSTOM_PROFILE_PHOTO_URL = 'https://raw.githubusercontent.com/Blueberryboom/blueberrynet-website/refs/heads/main/assets/blueberryboom_profile.png';
  const CUSTOM_BANNER_URL = 'https://raw.githubusercontent.com/Blueberryboom/blueberrynet-website/refs/heads/main/assets/blueberryboom_banner.jpg';

  const servers = [
    {
      name: 'The Staff Network',
      description: 'The best server to search staff, work or improve your staff experience.',
      role: 'OWNER',
      roleClass: 'role-owner',
      stats: '96 online · 517 members',
      avatarClass: 'avatar-blue',
      initials: 'TS',
    },
    {
      name: 'The Hangout Hub',
      description: 'The most active hangout server with around 1000 members.',
      role: 'SR. MANAGER',
      roleClass: 'role-manager',
      stats: '93 online · 1,038 members',
      avatarClass: 'avatar-purple',
      initials: 'HH',
    },
    {
      name: 'BeluGANG',
      description: 'The official Beluga server.',
      role: 'MODERATOR',
      roleClass: 'role-mod',
      stats: '66,684 online · 962,987 members',
      avatarClass: 'avatar-green',
      initials: 'BG',
    },
    {
      name: 'Open Ads & Nitro',
      description: 'The largest and most efficient advertising server on Discord.',
      role: 'MODERATOR',
      roleClass: 'role-mod',
      stats: '1,731 online · 39,465 members',
      avatarClass: 'avatar-lime',
      initials: 'OA',
    },
    {
      name: 'Ace Casters',
      description: 'A small fishing server with lots of active fishers.',
      role: 'ADMINISTRATOR',
      roleClass: 'role-admin',
      stats: '48 online · 457 members',
      avatarClass: 'avatar-orange',
      initials: 'AC',
    },
    {
      name: "Adnan's Ace",
      description: 'The support server for the best economy bot on Discord.',
      role: 'SR. MODERATOR',
      roleClass: 'role-srmod',
      stats: '30 online · 202 members',
      avatarClass: 'avatar-cyan',
      initials: 'AA',
    },
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
