import type { HostConfig } from '../scripts/host-config';

const antigravity: HostConfig = {
  name: 'antigravity',
  displayName: 'Antigravity',
  cliCommand: 'antigravity',
  cliAliases: ['gemini'],

  globalRoot: '.gemini/config/skills/gstack',
  localSkillRoot: '.gemini/skills/gstack',
  hostSubdir: '.gemini',
  usesEnvVars: true,

  frontmatter: {
    mode: 'allowlist',
    keepFields: ['name', 'description'],
    descriptionLimit: null,
  },

  generation: {
    generateMetadata: false,
    skipSkills: ['codex'],
    includeSkills: [],
  },

  pathRewrites: [
    { from: '~/.claude/skills/gstack', to: '~/.gemini/config/skills/gstack' },
    { from: '.claude/skills/gstack', to: '.gemini/skills/gstack' },
    { from: '.claude/skills', to: '.gemini/skills' },
    { from: 'CLAUDE.md', to: 'AGENTS.md' },
  ],
  toolRewrites: {
    'use the Bash tool': 'use the run_command tool',
    'use the Write tool': 'use the write_to_file tool',
    'use the Read tool': 'use the view_file tool',
    'use the Edit tool': 'use the replace_file_content tool',
    'use the Agent tool': 'dispatch a browser_subagent',
    'use the Grep tool': 'use the grep_search tool',
    'use the Glob tool': 'use the list_dir tool',
    'the Bash tool': 'the run_command tool',
    'the Read tool': 'the view_file tool',
    'the Write tool': 'the write_to_file tool',
    'the Edit tool': 'the replace_file_content tool',
  },

  suppressedResolvers: [
    'DESIGN_OUTSIDE_VOICES',
    'ADVERSARIAL_STEP',
    'CODEX_SECOND_OPINION',
    'CODEX_PLAN_REVIEW',
    'REVIEW_ARMY',
    'GBRAIN_CONTEXT_LOAD',
    'GBRAIN_SAVE_RESULTS',
  ],

  runtimeRoot: {
    globalSymlinks: ['bin', 'browse/dist', 'browse/bin', 'gstack-upgrade', 'ETHOS.md'],
    globalFiles: {
      'review': ['checklist.md', 'TODOS-format.md'],
    },
  },

  install: {
    prefixable: false,
    linkingStrategy: 'symlink-generated',
  },

  coAuthorTrailer: 'Co-Authored-By: Antigravity <antigravity@google.com>',
  learningsMode: 'basic',
};

export default antigravity;
