export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  angular: {
    name: "Angular",
    iconName: "angular",
  },
  astro: {
    name: "Astro",
    iconName: "astro",
  },
  bootstrap: {
    name: "Bootstrap",
    iconName: "bootstrap",
  },
  cloudflare: {
    name: "Cloudflare",
    iconName: "cloudflare",
  },
  html: {
    name: "HTML 5",
    iconName: "html",
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  mongo: {
    name: "MongoDb",
    iconName: "mongo",
  },
  mysql: {
    name: "MySQL",
    className: "!bg-[#f6ece1]",
    iconName: "mysql",
  },
  wordpress: {
    name: "Wordpress",
    iconName: "wordpress",
  },
  node: {
    name: "Node.js",
    iconName: "node",
  },
  tailwind: {
    name: "Tailwind CSS",
    iconName: "tailwind",
  },
  figma: {
    name: "Figma",
    iconName: "figma",
  },
  firebase: {
    name: "Firebase",
    iconName: "firebase",
  },
  markdown: {
    name: "Markdown",
    iconName: "markdown",
  },
  php: {
    name: "PHP",
    iconName: "php",
  },
  sass: {
    name: "Sass",
    iconName: "sass",
  },
  ts: {
    name: "TypeScript",
    iconName: "typescript",
  },
  git: {
    name: "Git",
    iconName: "git",
  },
  css: {
    name: "CSS",
    iconName: "css",
  },
  vercel: {
    name: "Vercel",
    iconName: "vercel",
  },
  netlify: {
    name: "Netlify",
    iconName: "netlify",
  },
  gatsby: {
    name: "Gatsby",
    iconName: "gatsby",
  },
  windsurf: {
    name: "Windsurf",
    iconName: "windsurf-logo",
  },
  cursor: {
    name: "Cursor",
    iconName: "cursor-ia",
  },
  deepseek: {
    name: "DeepSeek",
    iconName: "deepseek",
  },
  python: {
    name: "Python",
    iconName: "python",
  },
  Ahrefs: {
    name: "Ahrefs",
    iconName: "Ahrefs",
  },
  Docusaurus: {
    name: "Docusaurus",
    iconName: "Docusaurus",
  },
  Webflow: {
    name: "Webflow",
    iconName: "Webflow",
  },
  semrush: {
    name: "semrush",
    iconName: "semrush",
  },
  HubSpot: {
    name: "HubSpot",
    iconName: "HubSpot",
  },

  Framer: {
    name: "Framer",
    iconName: "Framer",

  },
  GA: {
    name: "GA",
    iconName: "GA",
  },

clay: {
    name: "clay",
    iconName: "clay",
  }, 

  GSC: {
    name: "Google Search Console",
    iconName: "GSC",
  }, 

  Mintlify: {
    name: "Mintlify",
    iconName: "Mintlify",
  }, 
  
  chatgpt: {
    name: "Chatgpt",
    iconName: "chatgpt",
  }, 

  Perplexity: {
    name: "Perplexity",
    iconName: "Perplexity",
  }, 

  Claude: {
    name: "Claude",
    iconName: "Claude",
  },
  
  linkedin: {
    name: "linkedin",
    iconName: "linkedin",
  },
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
}; 