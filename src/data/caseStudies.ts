export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  year: number;
  repo: string;
  stack: string[];
  problem: string;
  decisions: { title: string; body: string }[];
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "mist",
    title: "Mist",
    summary:
      "A tiling window manager for macOS, written in Swift with no third-party dependencies.",
    year: 2025,
    repo: "https://github.com/IzonIcy/Mist",
    stack: ["Swift", "SwiftPM", "Accessibility API", "CGEventTap"],
    problem:
      "The macOS tiling window managers that exist are closed source, unmaintained, or large C codebases. I wanted one I could read end to end, where the config model is checked instead of stringly typed.",
    decisions: [
      {
        title: "Two targets, one boundary",
        body: "MistCore imports no AppKit. Config parsing, layout, and the engine run headlessly, so they are testable without a window on screen. The app target owns accessibility and the event tap, which is the only part that needs a logged-in desktop.",
      },
      {
        title: "Reconcile, do not diff objects",
        body: "Windows, displays, and workspaces are stores keyed by stable ids. Each scan reconciles the live window list against the store. A window that vanished between plan and apply is handled by the next pass, not by a special case.",
      },
      {
        title: "Fail at parse time",
        body: "Unknown config keys, modifiers, and binding names throw invalidConfiguration with the offending value quoted. A hotkey that cannot fire should never bind silently, which is how a typo used to look like a working config.",
      },
    ],
    result:
      "Scan, reconcile, tile, and apply works against real windows. Float and directional focus hotkeys run through a CGEventTap, config hot-reloads live, and 82 tests cover the pure half.",
  },
  {
    slug: "lumicomp",
    title: "LumiComp",
    summary:
      "A C compiler written in C, with lexing, preprocessing, parsing, semantic analysis, and IR generation.",
    year: 2025,
    repo: "https://github.com/IzonIcy/LumiComp",
    stack: ["C11", "Make", "clang analyzer", "ASan/UBSan", "libFuzzer"],
    problem:
      "I wanted to know how a compiler actually gets from source bytes to a lower-level representation, rather than reading about the phases. Writing one forces you to confront the parts a diagram hides.",
    decisions: [
      {
        title: "One stage, one file",
        body: "Lexer, preprocessor, parser, semantic pass, and codegen each own a file with a narrow interface. Adding a construct touches the stage that owns it instead of threading state through the pipeline.",
      },
      {
        title: "Golden IR diffs",
        body: "Codegen output is checked in and diffed. An intentional lowering change is a readable diff, and an accidental one is impossible to miss. Regenerating is a deliberate flag, not the default.",
      },
      {
        title: "Fuzz the error paths",
        body: "Parser error recovery is where a compiler crashes, so there is a standalone ASan/UBSan harness and a libFuzzer target. The parser is exercised on garbage on purpose.",
      },
    ],
    result:
      "It compiles a meaningful C subset with source-located diagnostics. make verify runs the smoke suites, golden diffs, a clang comparison, and static analysis; CI runs the compiler matrix on clang and gcc.",
  },
  {
    slug: "lumi-term",
    title: "Lumi-Term",
    summary:
      "A GPU-accelerated terminal emulator in Rust with a real PTY and VT parsing.",
    year: 2026,
    repo: "https://github.com/IzonIcy/LumiTerm",
    stack: ["Rust", "egui", "portable-pty", "vt100", "C bridge"],
    problem:
      "The terminal is the tool I use most and understand least. Building one was the fastest way to learn what happens between a keystroke and a character appearing on screen.",
    decisions: [
      {
        title: "Real PTY, no fake shell",
        body: "The emulator spawns the actual login shell through a PTY. That means job control, signals, and full-screen programs work because the shell is real, not because they were simulated.",
      },
      {
        title: "Parse with a crate, render yourself",
        body: "Escape sequences are parsed by vt100 so the effort goes into screen state and rendering instead of reimplementing a parser as a first project. The rendering, scrollback search, and span coalescing are mine.",
      },
      {
        title: "A small C bridge for chrome",
        body: "Tab and window chrome state crosses an FFI boundary compiled by the build script. That kept platform window code out of the Rust logic, which is why the tab state machine is unit tested.",
      },
    ],
    result:
      "68 tests cover config loading, PTY lifecycle, scroll saturation, scrollback search, wide characters, and SGR span handling. The screen renders through egui, and tabs and scrollback search are wired to keys.",
  },
];

export const caseStudyByTitle = new Map(caseStudies.map((study) => [study.title, study]));
