(() => {
  const profileRoot = document.getElementById('profileRoot');
  if (!profileRoot) return;

  profileRoot.innerHTML = `
    <section class="section owner-hero-section">
      <div class="container owner-hero-shell reveal">
        <div class="owner-hero-copy">
          <span class="status-strip">Owner</span>
          <h1>Blueberryboom</h1>
          <p>
            Me = Blueberry?
            I'm the owner of the Blueberry Network and a developer/coder! Swimming and gaming are my main hobbies. I also manage discord servers for free!
          </p>
          <div class="owner-hero-cta">
            <a class="btn-primary" href="/discord">My Youtube</a>
            <a class="btn-secondary" href="mailto:hello@blueberrynet.uk">Contact Me (email)</a>
          </div>
        </div>

        <aside class="owner-hero-media" aria-label="Blueberryboom profile visuals">
          <div class="owner-banner" role="img" aria-label="Blueberry themed banner image"></div>
          <img class="owner-profile-photo" src="https://raw.githubusercontent.com/Blueberryboom/blueberrynet-website/refs/heads/main/assets/blueberryboom_profile.png" alt="Blueberryboom profile photo">
        </aside>
      </div>
    </section>

    <section class="section owner-quote-section reveal" id="ownerQuoteSection">
      <canvas id="ownerQuoteConstellation" aria-hidden="true"></canvas>
      <div class="container owner-quote-copy">
        <p>“Build the community you wish existed — then invite everyone to help shape it.”</p>
      </div>
    </section>

    <section class="section owner-servers-section">
      <div class="container">
        <h2 class="section-title reveal">Discord servers I work in</h2>
        <div class="card-grid owner-servers-grid">
          <article class="card reveal">
            <h3>Blueberry Network</h3>
            <p>Owner • Community planning, moderation systems, event direction, and roadmap coordination.</p>
          </article>
          <article class="card reveal">
            <h3>Partner Communities</h3>
            <p>Advisor • Server setup audits, growth strategy, onboarding polish, and engagement ideas.</p>
          </article>
          <article class="card reveal">
            <h3>Minecraft Teams</h3>
            <p>Project lead • Team communication workflows, release announcements, and cross-server collabs.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section owner-role-section">
      <div class="container owner-role-grid">
        <article class="card owner-role-card reveal">
          <h2>My role in Blueberry Network</h2>
          <ul>
            <li>Set vision for community growth and long-term projects.</li>
            <li>Support moderators/admins and keep operations smooth.</li>
            <li>Plan launches, updates, and collaborations.</li>
            <li>Keep the culture friendly, safe, and creative.</li>
          </ul>
        </article>

        <article class="card owner-hire-card reveal">
          <h2>Hire me / Contact</h2>
          <p>
            Need help with a Discord server, Minecraft community, or launch strategy?
            I’m open to collaborations and consulting.
          </p>
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
  }, { threshold: 0.14 });

  reveals.forEach((el, index) => {
    el.style.setProperty('--reveal-delay', `${Math.min(index * 60, 280)}ms`);
    observer.observe(el);
  });

  (() => {
    const canvas = document.getElementById('ownerQuoteConstellation');
    const section = document.getElementById('ownerQuoteSection');
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d');
    let w = 0;
    let h = 0;
    let mouse = { x: -9999, y: -9999 };
    const dots = Array.from({ length: 36 }, () => ({
      x: 0,
      y: 0,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
    }));

    const resize = () => {
      const rect = section.getBoundingClientRect();
      w = canvas.width = rect.width;
      h = canvas.height = section.offsetHeight;
      dots.forEach((dot) => {
        if (!dot.x && !dot.y) {
          dot.x = Math.random() * w;
          dot.y = Math.random() * h;
        }
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < dots.length; i += 1) {
        const dot = dots[i];
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const distance = Math.hypot(dx, dy);

        if (distance < 120) {
          const force = (120 - distance) / 120;
          dot.vx += (dx / (distance || 1)) * force * 0.2;
          dot.vy += (dy / (distance || 1)) * force * 0.2;
        }

        dot.vx *= 0.985;
        dot.vy *= 0.985;
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0 || dot.x > w) dot.vx *= -1;
        if (dot.y < 0 || dot.y > h) dot.vy *= -1;

        dot.x = Math.max(0, Math.min(w, dot.x));
        dot.y = Math.max(0, Math.min(h, dot.y));

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(146, 187, 255, 0.75)';
        ctx.fill();

        for (let j = i + 1; j < dots.length; j += 1) {
          const dot2 = dots[j];
          const lx = dot.x - dot2.x;
          const ly = dot.y - dot2.y;
          const lineDistance = Math.hypot(lx, ly);
          if (lineDistance < 118) {
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(dot2.x, dot2.y);
            ctx.strokeStyle = `rgba(124, 167, 247, ${0.3 - (lineDistance / 118) * 0.22})`;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };

    section.addEventListener('mousemove', (event) => {
      const rect = section.getBoundingClientRect();
      mouse = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    });

    section.addEventListener('mouseleave', () => {
      mouse = { x: -9999, y: -9999 };
    });

    window.addEventListener('resize', resize);
    resize();
    requestAnimationFrame(draw);
  })();
})();
