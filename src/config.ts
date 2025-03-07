import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string;
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    rss?: boolean;
  };
  homepage: PostFilter;
  googleAnalysis?: string;
  search?: boolean;
}

export const siteConfig: SiteConfig = {
  site: "https://github.com/BrianPhiri/my-blog",
  title: "Brian's self hosting chronicles",
  slogan: "",
  description: "Yea... I host my own [insert service here]",
  social: {
    github: "https://github.com/BrianPhiri",
    linkedin: "https://www.linkedin.com/in/brianphiri/",
    email: "contact@brianphiri.com",
    rss: true,
  },
  homepage: {
    maxPosts: 5,
    tags: [],
    excludeTags: [],
  },
  googleAnalysis: "", // your google analysis id
  search: true, // set this to false if you don't want to provide a search feature
};
