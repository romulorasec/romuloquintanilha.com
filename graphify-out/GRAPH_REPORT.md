# Graph Report - .  (2026-06-21)

## Corpus Check
- 88 files · ~345,547 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 399 nodes · 567 edges · 45 communities (26 shown, 19 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Animation & Layout Components|Animation & Layout Components]]
- [[_COMMUNITY_Dependencies & Package Config|Dependencies & Package Config]]
- [[_COMMUNITY_Alert Dialog System|Alert Dialog System]]
- [[_COMMUNITY_Copywriting & Content Strategy|Copywriting & Content Strategy]]
- [[_COMMUNITY_shadcnui Configuration|shadcn/ui Configuration]]
- [[_COMMUNITY_UI Utility & Breadcrumb|UI Utility & Breadcrumb]]
- [[_COMMUNITY_TypeScript Configuration|TypeScript Configuration]]
- [[_COMMUNITY_Form Controls & Utilities|Form Controls & Utilities]]
- [[_COMMUNITY_Dropdown Menu System|Dropdown Menu System]]
- [[_COMMUNITY_Dialog System|Dialog System]]
- [[_COMMUNITY_Select System|Select System]]
- [[_COMMUNITY_Site Config & Footer|Site Config & Footer]]
- [[_COMMUNITY_Card Component|Card Component]]
- [[_COMMUNITY_Popover System|Popover System]]
- [[_COMMUNITY_Avatar System|Avatar System]]
- [[_COMMUNITY_Alert Component|Alert Component]]
- [[_COMMUNITY_Tabs System|Tabs System]]
- [[_COMMUNITY_Accordion System|Accordion System]]
- [[_COMMUNITY_Tooltip System|Tooltip System]]
- [[_COMMUNITY_GSAP Animation Engine|GSAP Animation Engine]]
- [[_COMMUNITY_Root Layout & Fonts|Root Layout & Fonts]]
- [[_COMMUNITY_Brand Logo (Red Variant)|Brand Logo (Red Variant)]]
- [[_COMMUNITY_Brand Logo (Black Variant)|Brand Logo (Black Variant)]]
- [[_COMMUNITY_Favicon & Brand Identity|Favicon & Brand Identity]]
- [[_COMMUNITY_Mobile Large Hero Portrait|Mobile Large Hero Portrait]]
- [[_COMMUNITY_Next.js Config & Security|Next.js Config & Security]]
- [[_COMMUNITY_Graphify Agent Workflows|Graphify Agent Workflows]]
- [[_COMMUNITY_Site Config Types|Site Config Types]]
- [[_COMMUNITY_Icon Components|Icon Components]]
- [[_COMMUNITY_Radio Group System|Radio Group System]]
- [[_COMMUNITY_Scroll Area System|Scroll Area System]]
- [[_COMMUNITY_Vercel Platform|Vercel Platform]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Desktop Hero Portrait|Desktop Hero Portrait]]
- [[_COMMUNITY_Mobile Hero Portrait|Mobile Hero Portrait]]
- [[_COMMUNITY_Tablet Hero Portrait|Tablet Hero Portrait]]
- [[_COMMUNITY_Profile Portrait|Profile Portrait]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Next.js Framework|Next.js Framework]]
- [[_COMMUNITY_UI Window Icon|UI Window Icon]]
- [[_COMMUNITY_File Icon|File Icon]]
- [[_COMMUNITY_Globe Icon|Globe Icon]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 133 edges
2. `compilerOptions` - 16 edges
3. `MotionFade()` - 9 edges
4. `CLAUDE.md — Project Instructions` - 9 edges
5. `Button()` - 7 edges
6. `tailwind` - 6 edges
7. `aliases` - 6 edges
8. `SiteButton()` - 6 edges
9. `CI Workflow` - 6 edges
10. `scripts` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Site Structure (Single-Page Sections)` --semantically_similar_to--> `Page Structure Templates`  [INFERRED] [semantically similar]
  CLAUDE.md → .agents/skills/copywriting/references/copy-frameworks.md
- `Branch Workflow Manual` --references--> `CI Workflow`  [INFERRED]
  BRANCH_WORKFLOW_MANUAL.md → .github/workflows/ci.yml
- `AGENTS.md — Next.js Agent Rules` --references--> `Next.js App Router Tech Stack`  [INFERRED]
  AGENTS.md → README.md
- `Accordion()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/accordion.tsx → src/lib/utils.ts
- `AccordionItem()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/accordion.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **CI Pipeline: TypeScript + ESLint + Build** — workflows_ci, workflows_ci_typecheck_job, workflows_ci_lint_job, workflows_ci_build_job [EXTRACTED 1.00]
- **Copywriting Skill + Reference System** — copywriting_skill, copy_frameworks_reference, natural_transitions_reference [EXTRACTED 1.00]
- **Core Project Documentation Set** — romuloquint_claude_md, romuloquint_readme, romuloquint_setup_notes, romuloquint_branch_workflow_manual [INFERRED 0.85]

## Communities (45 total, 19 thin omitted)

### Community 0 - "Animation & Layout Components"
Cohesion: 0.06
Nodes (33): MotionFade(), MotionFadeProps, Navbar(), navLinks, About(), ease, skills, Hero() (+25 more)

### Community 1 - "Dependencies & Package Config"
Cohesion: 0.05
Nodes (41): dependencies, class-variance-authority, clsx, framer-motion, gsap, @gsap/react, @hookform/resolvers, lenis (+33 more)

### Community 2 - "Alert Dialog System"
Cohesion: 0.06
Nodes (24): AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia(), AlertDialogOverlay() (+16 more)

### Community 3 - "Copywriting & Content Strategy"
Cohesion: 0.08
Nodes (28): Headline Formulas, Landing Page Section Types, Page Structure Templates, Copy Frameworks Reference, Conversion Copywriting Principles, CTA Copy Guidelines, Page Structure Framework, Copywriting Skill (+20 more)

### Community 4 - "shadcn/ui Configuration"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 5 - "UI Utility & Breadcrumb"
Cohesion: 0.18
Nodes (17): cn(), Breadcrumb(), BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage(), BreadcrumbSeparator() (+9 more)

### Community 6 - "TypeScript Configuration"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 7 - "Form Controls & Utilities"
Cohesion: 0.12
Nodes (9): Badge(), badgeVariants, Input(), Label(), Progress(), Separator(), Skeleton(), Switch() (+1 more)

### Community 8 - "Dropdown Menu System"
Cohesion: 0.12
Nodes (9): DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent() (+1 more)

### Community 9 - "Dialog System"
Cohesion: 0.18
Nodes (6): DialogContent(), DialogDescription(), DialogFooter(), DialogHeader(), DialogOverlay(), DialogTitle()

### Community 10 - "Select System"
Cohesion: 0.18
Nodes (8): SelectContent(), SelectGroup(), SelectItem(), SelectLabel(), SelectScrollDownButton(), SelectScrollUpButton(), SelectSeparator(), SelectTrigger()

### Community 11 - "Site Config & Footer"
Cohesion: 0.24
Nodes (4): siteConfig, Footer(), StackedCircularFooter(), StackedCircularFooterProps

### Community 12 - "Card Component"
Cohesion: 0.25
Nodes (7): Card(), CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader(), CardTitle()

### Community 13 - "Popover System"
Cohesion: 0.25
Nodes (4): PopoverContent(), PopoverDescription(), PopoverHeader(), PopoverTitle()

### Community 14 - "Avatar System"
Cohesion: 0.29
Nodes (6): Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup(), AvatarGroupCount(), AvatarImage()

### Community 15 - "Alert Component"
Cohesion: 0.40
Nodes (5): Alert(), AlertAction(), AlertDescription(), AlertTitle(), alertVariants

### Community 16 - "Tabs System"
Cohesion: 0.40
Nodes (5): Tabs(), TabsContent(), TabsList(), tabsListVariants, TabsTrigger()

### Community 17 - "Accordion System"
Cohesion: 0.40
Nodes (4): Accordion(), AccordionContent(), AccordionItem(), AccordionTrigger()

### Community 21 - "Brand Logo (Red Variant)"
Cohesion: 0.67
Nodes (4): Logo 2 Brand Image, Brand Color Red Vermillion, RQ Monogram Mark, Geometric Minimal Logo Style

### Community 22 - "Brand Logo (Black Variant)"
Cohesion: 0.67
Nodes (4): Logo Brand Image, Black on White Colorway, RQ Monogram Mark, Minimal Geometric Style

### Community 23 - "Favicon & Brand Identity"
Cohesion: 1.00
Nodes (3): RQ Monogram Favicon (32x32 dark badge with light text), Brand Identity — Rômulo Quintanilha, RQ Monogram Brand Mark

### Community 24 - "Mobile Large Hero Portrait"
Cohesion: 1.00
Nodes (3): Profile Hero Mobile Large Portrait Photo, Rômulo Quintanilha (portrait subject), Mobile Large Variant (1290x1920 tall phone)

### Community 26 - "Graphify Agent Workflows"
Cohesion: 0.67
Nodes (3): Graphify Agent Rule, Knowledge Graph Query Protocol, Graphify Workflow

## Knowledge Gaps
- **131 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+126 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **19 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `UI Utility & Breadcrumb` to `Animation & Layout Components`, `Alert Dialog System`, `Form Controls & Utilities`, `Dropdown Menu System`, `Dialog System`, `Select System`, `Card Component`, `Popover System`, `Avatar System`, `Alert Component`, `Tabs System`, `Accordion System`, `Tooltip System`, `Radio Group System`, `Scroll Area System`?**
  _High betweenness centrality (0.262) - this node is a cross-community bridge._
- **Why does `TestimonialSlider()` connect `Animation & Layout Components` to `UI Utility & Breadcrumb`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **Why does `MotionFade()` connect `Animation & Layout Components` to `Site Config & Footer`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _135 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Animation & Layout Components` be split into smaller, more focused modules?**
  _Cohesion score 0.061495457721872815 - nodes in this community are weakly interconnected._
- **Should `Dependencies & Package Config` be split into smaller, more focused modules?**
  _Cohesion score 0.047619047619047616 - nodes in this community are weakly interconnected._
- **Should `Alert Dialog System` be split into smaller, more focused modules?**
  _Cohesion score 0.06190476190476191 - nodes in this community are weakly interconnected._