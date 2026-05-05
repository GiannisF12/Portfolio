// Maps a tech tag to a brand SVG in /public/svg, when available.
// Lookup is case-insensitive and ignores whitespace, dots, hyphens, underscores.

const ICONS: Record<string, string> = {
  // languages
  java: "/svg/java.svg",
  javascript: "/svg/java-script.svg",
  js: "/svg/java-script.svg",
  typescript: "/svg/typescript.svg",
  ts: "/svg/typescript.svg",
  python: "/svg/python.svg",
  php: "/svg/php.svg",
  html: "/svg/html5.svg",
  html5: "/svg/html5.svg",
  css: "/svg/css3.svg",
  css3: "/svg/css3.svg",

  // frameworks
  react: "/svg/react.svg",
  vue: "/svg/vue.svg",
  angular: "/svg/angular.svg",
  nodejs: "/svg/nodejs.svg",
  node: "/svg/nodejs.svg",
  nextjs: "/svg/nextjs.svg",
  springboot: "/svg/springboot.svg",
  springsecurity: "/svg/springboot.svg",

  // python ecosystem (fall back to python icon)
  scikitlearn: "/svg/python.svg",
  tensorflow: "/svg/python.svg",
  pandas: "/svg/python.svg",
  numpy: "/svg/python.svg",

  // databases
  postgresql: "/svg/postgresql.svg",
  postgres: "/svg/postgresql.svg",
  mysql: "/svg/sql.svg",
  sql: "/svg/sql.svg",
  mongodb: "/svg/mongodb.svg",
  mongo: "/svg/mongodb.svg",

  // devops
  docker: "/svg/docker.svg",
};

export function iconFor(tech: string): string | undefined {
  const key = tech.toLowerCase().replace(/[\s.\-_]/g, "");
  return ICONS[key];
}
