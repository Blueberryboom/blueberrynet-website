(() => {
  const profileRoot = document.getElementById('profileRoot');
  if (!profileRoot) return;

  profileRoot.innerHTML = `
    <section class="hero team-landing-hero owner-hero-surface">
      <div class="container hero-wrapper owner-hero-grid reveal">
        <div class="hero-text owner-hero-copy">
          <span class="status-strip">Owner</span>
          <h1>Meet Blueberryboom</h1>
          <p>
            I run Blueberry Network and love creating cozy, fun spaces for people to play,
            chat, and build cool things together.
          </p>
        </div>

        <aside class="owner-photo-shell" aria-label="Profile photo placeholder">
          <div class="owner-photo-placeholder">Add Profile Photo</div>
        </aside>
      </div>
    </section>

    <section class="stats-strip owner-quote-section reveal">
      <div class="container">
        <article class="owner-quote-card">
          <h2>Favourite Quote</h2>
          <p>"Build the community you wish existed."</p>
        </article>
      </div>
    </section>

    <section class="section owner-about-section">
      <div class="container owner-profile-grid">
        <article class="card owner-about-card reveal">
          <h2>About Me</h2>
          <p>
            Hey! I’m Blueberryboom, owner of Blueberry Network. I spend most of my time planning
            projects, supporting team members, and making sure the community stays welcoming.
          </p>
          <p>
            I’m especially interested in Minecraft communities, Discord growth, and building tools
            that make online spaces more fun and easier to manage.
          </p>
        </article>

        <article class="card owner-contact-card reveal">
          <h2>Contact</h2>
          <p>Want to collaborate, ask a question, or just say hi?</p>
          <div class="owner-contact-links">
            <a class="btn-primary" href="/discord">Message on Discord</a>
            <a class="btn-secondary" href="mailto:hello@blueberrynet.uk">Email Me</a>
          </div>
        </article>
      </div>
    </section>
  `;

  const reveals = profileRoot.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  reveals.forEach((el) => observer.observe(el));
})();
