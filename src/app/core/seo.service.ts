
import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private title = inject(Title);
  private meta = inject(Meta);
  private document = inject(DOCUMENT);

  private readonly siteName = 'Victory Barbershop';
  private readonly siteUrl = 'https://victorybarberllc.com';

  updatePage(
    pageTitle: string,
    description: string,
    route: string
  ): void {

    const canonicalUrl = `${this.siteUrl}${route}`;

    this.title.setTitle(pageTitle);

    this.meta.updateTag({
      name: 'description',
      content: description
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });

    // Open Graph
    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.meta.updateTag({
      property: 'og:site_name',
      content: this.siteName
    });

    this.meta.updateTag({
      property: 'og:title',
      content: pageTitle
    });

    this.meta.updateTag({
      property: 'og:description',
      content: description
    });

    this.meta.updateTag({
      property: 'og:url',
      content: canonicalUrl
    });

    // Twitter
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: pageTitle
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: description
    });

    // Canonical URL
    let canonical = this.document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;
  }
}
