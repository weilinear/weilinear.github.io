<section class="newsletter-cta" aria-labelledby="newsletter-heading">
  <div class="newsletter-copy">
    <p class="newsletter-label">Email updates</p>
    <h2 id="newsletter-heading">Get the next post, not another feed.</h2>
    <p>
      I write about AI agents, software systems, investing, and experiments that
      survived contact with reality. One email when I publish something worth
      sharing.
    </p>
    <a
      href="https://weilinear.substack.com/subscribe?utm_source=blog&utm_medium=website&utm_campaign=article_cta"
      class="newsletter-link"
    >
      Open the signup page <span aria-hidden="true">→</span>
    </a>
  </div>

  <div class="newsletter-embed">
    <iframe
      src="https://weilinear.substack.com/embed"
      width="480"
      height="320"
      title="Subscribe to Wei Li on Substack"
      frameborder="0"
      scrolling="no"
      loading="lazy"
    ></iframe>
  </div>

  <p class="newsletter-note">
    Email delivery is handled by Substack. Unsubscribe at any time.
  </p>
</section>

<style>
  .newsletter-cta {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(20rem, 30rem);
    gap: 2rem 3rem;
    align-items: center;
    max-width: 72rem;
    margin: 3rem auto;
    padding: 2rem;
    border: 1px solid rgb(229 231 235);
    border-radius: 0.75rem;
    background: rgb(249 250 251);
  }

  :global(.dark) .newsletter-cta {
    border-color: rgb(55 65 81);
    background: rgb(17 24 39);
  }

  .newsletter-label {
    margin: 0 0 0.6rem;
    color: rgb(107 114 128);
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      monospace;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  h2 {
    max-width: 17ch;
    margin: 0;
    color: rgb(17 24 39);
    font-size: clamp(1.55rem, 3vw, 2rem);
    line-height: 1.15;
    letter-spacing: -0.025em;
  }

  :global(.dark) h2 {
    color: rgb(249 250 251);
  }

  .newsletter-copy > p:not(.newsletter-label) {
    max-width: 35rem;
    margin: 1rem 0;
    color: rgb(75 85 99);
    font-size: 0.95rem;
    line-height: 1.65;
  }

  :global(.dark) .newsletter-copy > p:not(.newsletter-label) {
    color: rgb(156 163 175);
  }

  .newsletter-link {
    color: rgb(37 99 235);
    font-size: 0.85rem;
    font-weight: 700;
    text-decoration: none;
  }

  .newsletter-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }

  :global(.dark) .newsletter-link {
    color: rgb(147 197 253);
  }

  .newsletter-embed {
    min-width: 0;
    overflow: hidden;
    border: 1px solid rgb(229 231 235);
    border-radius: 0.5rem;
    background: white;
  }

  .newsletter-embed iframe {
    display: block;
    width: 100%;
    max-width: 100%;
    border: 0;
    background: white;
  }

  .newsletter-note {
    grid-column: 1 / -1;
    margin: -0.75rem 0 0;
    color: rgb(107 114 128);
    font-size: 0.72rem;
    line-height: 1.4;
  }

  @media (max-width: 767px) {
    .newsletter-cta {
      grid-template-columns: minmax(0, 1fr);
      gap: 1.25rem;
      margin: 2rem 1rem;
      padding: 1.25rem;
    }

    .newsletter-note {
      grid-column: 1;
      margin-top: -0.35rem;
    }
  }

  :global(html.compact) .newsletter-cta {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
</style>
