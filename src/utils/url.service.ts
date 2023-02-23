import { Injectable } from '@nestjs/common';
import { Link, LinkType } from './url.model';

@Injectable()
export class UrlService {
  getQueryParams(url: string): object {
    if (!url) return {};
    const urlParams: URLSearchParams = new URLSearchParams(new URL(url).search);
    const queryParams = {};
    for (const [key, value] of urlParams.entries()) {
      queryParams[key] = value;
    }
    return queryParams;
  }

  getLinks(urlLinks: string): Link[] {
    const links: string[] = urlLinks.split(', ');
    const result: Link[] = [];
    links.forEach((link) => {
      const [url, rel] = link.split('; rel="');
      result.push({
        url: url.slice(1, -1),
        rel: rel.slice(0, -1),
      });
    });
    return result;
  }

  getLinkUrl(links: Link[], rel: LinkType): string {
    return links.find((link) => link.rel === rel)?.url || '';
  }
}
