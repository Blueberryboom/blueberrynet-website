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
      avatarUrl: 'https://cdn.discordapp.com/icons/1179546132834703470/79ec749f09cf27d6970374f6ceab7f4e.png?size=256',
      inviteUrl: 'https://discord.gg/sKV2ze9HQv',
      selected: true,
    },
    {
      name: 'BigHappySmiley',
      description: 'The most active hangout server with around 1000 members.',
      role: 'TRIAL MOD',
      roleClass: 'role-mod',
      stats: '20 members',
      avatarClass: 'avatar-purple',
      initials: 'BHS',
      avatarUrl: 'https://cdn.discordapp.com/icons/1014240118884689921/a_0caad5fb91505db1f05e535be2eafe62.gif?size=256',
      inviteUrl: 'https://discord.gg/v2P5uY8PqJ',
      selected: true,
    },
    {
      name: 'Coming soon...',
      description: 'Server has been excluded per the owner\'s request.',
      role: 'ADMINISTRATOR',
      roleClass: 'role-admin',
      stats: 'Private server',
      avatarClass: 'avatar-green',
      initials: '-',
      avatarUrl: '',
      inviteUrl: '',
      selected: false,
    }
  ];

  const selectedServers = servers.filter((server) => server.selected !== false);

  const cardsHtml = selectedServers.map((server) => {
    const avatarImage = server.avatarUrl
      ? `<img class="owner-server-avatar-image" src="${server.avatarUrl}" alt="${server.name} icon" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';">`
      : '';

    const fallbackDisplay = server.avatarUrl ? 'style="display:none;"' : '';
    const joinAction = server.inviteUrl
      ? `<a class="owner-server-join" href="${server.inviteUrl}" target="_blank" rel="noopener noreferrer" aria-label="Join ${server.name}">Join server</a>`
      : '<span class="owner-server-join disabled" aria-disabled="true">Invite unavailable</span>';
    const clickableClass = server.inviteUrl ? 'is-clickable' : '';
    const inviteData = server.inviteUrl ? `data-invite-url="${server.inviteUrl}"` : '';

    return `
      <article class="owner-server-card ${clickableClass}" ${inviteData}>
        <div class="owner-server-head">
          <span class="owner-server-avatar ${server.avatarClass}" aria-hidden="true">
            ${avatarImage}
            <span class="owner-server-avatar-fallback" ${fallbackDisplay}>${server.initials}</span>
          </span>
          <div>
            <h3>${server.name}</h3>
            <p>${server.description}</p>
          </div>
        </div>
        <span class="owner-server-role ${server.roleClass}">${server.role}</span>
        <p class="owner-server-stats"><span class="owner-server-dot" aria-hidden="true"></span>${server.stats}</p>
        <div class="owner-server-actions">${joinAction}</div>
      </article>
    `;
  }).join('');

  const emptyStateHtml = selectedServers.length
    ? ''
    : '<p class="blueberry-empty-servers">No selected servers are configured yet.</p>';

  profileRoot.innerHTML = `
    <section class="blueberry-scene" aria-label="Blueberryboom profile card">
      <div class="blueberry-scene-glow glow-one" aria-hidden="true"></div>
      <div class="blueberry-scene-glow glow-two" aria-hidden="true"></div>
      <div class="blueberry-scene-stars" aria-hidden="true"></div>
      <div class="blueberry-scene-constellations" aria-hidden="true"></div>

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
          ${emptyStateHtml}
          <div class="owner-servers-grid compact">${cardsHtml}</div>
        </section>
      </article>
    </section>
  `;

  profileRoot.querySelectorAll('.owner-server-card[data-invite-url]').forEach((card) => {
    const inviteUrl = card.getAttribute('data-invite-url');
    if (!inviteUrl) return;

    card.addEventListener('click', (event) => {
      if (event.target.closest('a')) return;
      window.open(inviteUrl, '_blank', 'noopener,noreferrer');
    });

    card.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      window.open(inviteUrl, '_blank', 'noopener,noreferrer');
    });

    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'link');
    card.setAttribute('aria-label', `Open invite for ${card.querySelector('h3')?.textContent || 'server'}`);
  });
})();
