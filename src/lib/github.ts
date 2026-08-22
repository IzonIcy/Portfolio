/**
 * Fetch this user's public repos from the GitHub API at build time.
 *
 * Falls back to a small curated list when the API is unreachable or
 * rate-limited (no token in CI), so the page never breaks a deploy.
 */

const GITHUB_USER = 'IzonIcy';

export type ProjectCard = {
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string;
};

const FALLBACK_PROJECTS: ProjectCard[] = [
  {
    name: 'Angel',
    description:
      'AI agent that connects to Discord, Slack, iMessage, and Signal with tool use, memory, and coding agents.',
    url: 'https://github.com/IzonIcy/Angel',
    stars: 0,
    language: 'TypeScript',
  },
  {
    name: 'Clay',
    description: 'Fast Homebrew-compatible package manager.',
    url: 'https://github.com/IzonIcy/Clay',
    stars: 0,
    language: 'Rust',
  },
  {
    name: 'Mist',
    description: 'Tiling window manager for macOS, built on Apple APIs only.',
    url: 'https://github.com/IzonIcy/Mist',
    stars: 0,
    language: 'Swift',
  },
];

type GithubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
};

function toCard(repo: GithubRepo): ProjectCard {
  return {
    name: repo.name,
    description: repo.description ?? '',
    url: repo.html_url,
    stars: repo.stargazers_count,
    language: repo.language ?? '',
  };
}

export async function fetchProjects(limit = 8): Promise<{
  projects: ProjectCard[];
  source: 'github' | 'fallback';
}> {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
      { headers },
    );
    if (!response.ok) {
      throw new Error(`GitHub API responded ${response.status}`);
    }

    const repos = (await response.json()) as GithubRepo[];
    if (!Array.isArray(repos)) {
      throw new Error('unexpected API payload');
    }

    const projects = repos
      .filter(
        (repo) => !repo.fork && !repo.name.toLowerCase().includes('config'),
      )
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, limit)
      .map(toCard);

    if (projects.length === 0) {
      throw new Error('no eligible repos returned');
    }
    return { projects, source: 'github' };
  } catch (error) {
    console.warn(
      `[projects] falling back to static list: ${
        error instanceof Error ? error.message : 'unknown error'
      }`,
    );
    return { projects: FALLBACK_PROJECTS, source: 'fallback' };
  }
}
