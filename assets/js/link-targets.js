document.addEventListener('DOMContentLoaded', () => {
  const anchors = document.querySelectorAll('a[href]');
  const { origin } = window.location;

  anchors.forEach((a) => {
    const href = a.getAttribute('href');
    if (!href) return;

    // Skip fragment-only, mailto, tel
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      a.removeAttribute('target');
      return;
    }

    // Respect explicit opt-out
    if (a.hasAttribute('data-no-external')) {
      a.removeAttribute('target');
      return;
    }

    let url;
    try {
      url = new URL(href, window.location.href);
    } catch {
      return;
    }

    const isExternal = url.origin !== origin;

    if (isExternal) {
      a.setAttribute('target', '_blank');
      const existingRel = (a.getAttribute('rel') || '').split(/\s+/).filter(Boolean);
      if (!existingRel.includes('noopener')) existingRel.push('noopener');
      if (!existingRel.includes('noreferrer')) existingRel.push('noreferrer');
      a.setAttribute('rel', existingRel.join(' '));
    } else {
      a.removeAttribute('target');
    }
  });
});
