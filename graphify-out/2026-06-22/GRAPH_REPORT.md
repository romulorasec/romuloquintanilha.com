# Graph Report - romuloquint  (2026-06-22)

## Corpus Check
- 77 files · ~348,746 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 601 nodes · 803 edges · 63 communities (43 shown, 20 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 9 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b676302d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

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
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_GSAP Animation Engine|GSAP Animation Engine]]
- [[_COMMUNITY_Root Layout & Fonts|Root Layout & Fonts]]
- [[_COMMUNITY_Brand Logo (Red Variant)|Brand Logo (Red Variant)]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Next.js Config & Security|Next.js Config & Security]]
- [[_COMMUNITY_Graphify Agent Workflows|Graphify Agent Workflows]]
- [[_COMMUNITY_Site Config Types|Site Config Types]]
- [[_COMMUNITY_Icon Components|Icon Components]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Sitemap|Sitemap]]
- [[_COMMUNITY_Vercel Platform|Vercel Platform]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Desktop Hero Portrait|Desktop Hero Portrait]]
- [[_COMMUNITY_Mobile Hero Portrait|Mobile Hero Portrait]]
- [[_COMMUNITY_Tablet Hero Portrait|Tablet Hero Portrait]]
- [[_COMMUNITY_Profile Portrait|Profile Portrait]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_UI Window Icon|UI Window Icon]]
- [[_COMMUNITY_Toast Notification|Toast Notification]]
- [[_COMMUNITY_File Icon|File Icon]]
- [[_COMMUNITY_Globe Icon|Globe Icon]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 67|Community 67]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 133 edges
2. `Natural Transitions` - 20 edges
3. `romuloquintanilha.com Personal Portfolio` - 20 edges
4. `compilerOptions` - 16 edges
5. `CLAUDE.md — romuloquintanilha.com` - 15 edges
6. `What each command does in this project` - 13 edges
7. `Copywriting` - 11 edges
8. `Framer Motion Animation` - 10 edges
9. `MotionFade()` - 9 edges
10. `Practical examples` - 9 edges

## Surprising Connections (you probably didn't know these)
- `Branch Workflow Manual` --references--> `CI Workflow`  [INFERRED]
  BRANCH_WORKFLOW_MANUAL.md → .github/workflows/ci.yml
- `AGENTS.md — Next.js Agent Rules` --references--> `Next.js App Router Tech Stack`  [INFERRED]
  AGENTS.md → README.md
- `AlertDialogOverlay()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts
- `AlertDialogContent()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts
- `AlertDialogHeader()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (63 total, 20 thin omitted)

### Community 0 - "Animation & Layout Components"
Cohesion: 0.05
Nodes (41): 1. Editing the copy of an existing section, 2. Changing the color of a button, 3. Adding a new section to a page, 4. Adjusting spacing, 5. Fixing a button that doesn't work, 6. Reviewing changes that were already made before committing, 7. Sending committed changes to the remote repository, 80/20 workflow for this project (+33 more)

### Community 1 - "Dependencies & Package Config"
Cohesion: 0.15
Nodes (9): AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia(), AlertDialogOverlay() (+1 more)

### Community 2 - "Alert Dialog System"
Cohesion: 0.25
Nodes (6): Conversion Copywriting Principles, CTA Copy Guidelines, AI Writing Tells (Transitions to Avoid), Natural Transitions Reference, Contents, Copy Frameworks Reference

### Community 3 - "Copywriting & Content Strategy"
Cohesion: 0.33
Nodes (6): About Page, Feature Page, Homepage, Landing Page, Page-Specific Guidance, Pricing Page

### Community 4 - "shadcn/ui Configuration"
Cohesion: 0.06
Nodes (40): Border and Shadow, CLAUDE.md — romuloquintanilha.com, Code Conventions, Color Palette, Deployment & Infrastructure, Design Tokens, Git hygiene rules, Hero Layout (editorial bold style) (+32 more)

### Community 5 - "UI Utility & Breadcrumb"
Cohesion: 0.12
Nodes (26): cn(), Accordion(), AccordionContent(), AccordionItem(), AccordionTrigger(), Avatar(), AvatarBadge(), AvatarFallback() (+18 more)

### Community 6 - "TypeScript Configuration"
Cohesion: 0.09
Nodes (23): Best Practice Guidelines, Concluding Content, Contents, Emphasising Key Points, Expert quotes, Giving Examples, Hedging Language, Indicating Addition (+15 more)

### Community 7 - "Form Controls & Utilities"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 8 - "Dropdown Menu System"
Cohesion: 0.08
Nodes (24): dependencies, class-variance-authority, clsx, framer-motion, gsap, @gsap/react, @hookform/resolvers, lenis (+16 more)

### Community 9 - "Dialog System"
Cohesion: 0.18
Nodes (6): SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetTitle()

### Community 10 - "Select System"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 11 - "Site Config & Footer"
Cohesion: 0.11
Nodes (10): Badge(), badgeVariants, Checkbox(), Input(), Label(), Progress(), Separator(), Skeleton() (+2 more)

### Community 12 - "Card Component"
Cohesion: 0.12
Nodes (15): AGENTS.md — Next.js Agent Rules, dev→main Branch Model, Branch Workflow Manual, Next.js App Router Tech Stack, romuloquintanilha.com Portfolio Project, README — romuloquintanilha.com, Arquivos importantes, Idiomas configurados (+7 more)

### Community 13 - "Popover System"
Cohesion: 0.29
Nodes (7): Additional Formulas, Audience-Focused, Differentiation-Focused, Headline Formulas, Outcome-Focused, Problem-Focused, Proof-Focused

### Community 14 - "Avatar System"
Cohesion: 0.12
Nodes (9): DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent() (+1 more)

### Community 15 - "Alert Component"
Cohesion: 0.25
Nodes (7): Card(), CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader(), CardTitle()

### Community 16 - "Tabs System"
Cohesion: 0.18
Nodes (8): SelectContent(), SelectGroup(), SelectItem(), SelectLabel(), SelectScrollDownButton(), SelectScrollUpButton(), SelectSeparator(), SelectTrigger()

### Community 17 - "Community 17"
Cohesion: 0.19
Nodes (10): InfoModalProps, Dialog(), DialogContent(), DialogDescription(), DialogFooter(), DialogHeader(), DialogOverlay(), DialogPortal() (+2 more)

### Community 18 - "Community 18"
Cohesion: 0.20
Nodes (9): Button(), buttonVariants, Pagination(), PaginationContent(), PaginationEllipsis(), PaginationLink(), PaginationLinkProps, PaginationNext() (+1 more)

### Community 19 - "GSAP Animation Engine"
Cohesion: 0.10
Nodes (19): devDependencies, eslint, eslint-config-next, @inspira-ui/plugins, tailwindcss, tailwindcss-animate, @tailwindcss/postcss, @types/node (+11 more)

### Community 20 - "Root Layout & Fonts"
Cohesion: 0.17
Nodes (8): AccordionItemProps, ease, expandedChildVariants, expandedContainerVariants, InteractiveImageAccordionProps, MobileAccordionItemProps, reducedChildVariants, reducedContainerVariants

### Community 21 - "Brand Logo (Red Variant)"
Cohesion: 0.25
Nodes (4): PopoverContent(), PopoverDescription(), PopoverHeader(), PopoverTitle()

### Community 22 - "Community 22"
Cohesion: 0.33
Nodes (6): Above the Fold, Core Sections, Page Structure Framework, Core Sections, Landing Page Section Types, Supporting Sections

### Community 23 - "Community 23"
Cohesion: 0.33
Nodes (6): Benefits Over Features, Clarity Over Cleverness, Copywriting Principles, Customer Language Over Company Language, One Idea Per Section, Specificity Over Vagueness

### Community 25 - "Next.js Config & Security"
Cohesion: 0.33
Nodes (5): Environment Variables, Getting Started, romuloquintanilha.com, Scripts, Stack

### Community 26 - "Graphify Agent Workflows"
Cohesion: 0.40
Nodes (5): Alert(), AlertAction(), AlertDescription(), AlertTitle(), alertVariants

### Community 27 - "Site Config Types"
Cohesion: 0.40
Nodes (5): Tabs(), TabsContent(), TabsList(), tabsListVariants, TabsTrigger()

### Community 28 - "Icon Components"
Cohesion: 0.40
Nodes (3): graphify, Knowledge Graph Query Protocol, Workflow: graphify

### Community 29 - "Community 29"
Cohesion: 0.33
Nodes (6): Copywriting, Core Principles, Quick Quality Check, Related Skills, Voice and Tone, Writing Style Rules

### Community 33 - "ESLint Config"
Cohesion: 0.67
Nodes (4): Logo 2 Brand Image, Brand Color Red Vermillion, RQ Monogram Mark, Geometric Minimal Logo Style

### Community 34 - "Desktop Hero Portrait"
Cohesion: 0.67
Nodes (4): Logo Brand Image, Black on White Colorway, RQ Monogram Mark, Minimal Geometric Style

### Community 35 - "Mobile Hero Portrait"
Cohesion: 1.00
Nodes (3): RQ Monogram Favicon (32x32 dark badge with light text), Brand Identity — Rômulo Quintanilha, RQ Monogram Brand Mark

### Community 36 - "Tablet Hero Portrait"
Cohesion: 1.00
Nodes (3): Profile Hero Mobile Large Portrait Photo, Rômulo Quintanilha (portrait subject), Mobile Large Variant (1290x1920 tall phone)

### Community 56 - "Community 56"
Cohesion: 0.06
Nodes (34): MotionFade(), MotionFadeProps, siteConfig, ContactForm(), Navbar(), navLinks, About(), bodyStyle (+26 more)

### Community 57 - "Community 57"
Cohesion: 0.33
Nodes (6): Compact Landing Page, Enterprise/B2B Landing Page, Feature-Heavy Page (Weak), Page Structure Templates, Product Launch Page, Varied, Engaging Page (Strong)

### Community 58 - "Community 58"
Cohesion: 0.40
Nodes (5): 1. Page Purpose, 2. Audience, 3. Product/Offer, 4. Context, Before Writing

### Community 59 - "Community 59"
Cohesion: 0.40
Nodes (5): Alternatives, Annotations, Meta Content (if relevant), Output Format, Page Copy

### Community 60 - "Community 60"
Cohesion: 0.40
Nodes (5): Be Direct, Best Practices, Pepper in Humor (When Appropriate), Use Analogies When Helpful, Use Rhetorical Questions

### Community 61 - "Community 61"
Cohesion: 0.40
Nodes (5): Benefits Section, How It Works Section, Problem Section, Section Writing Tips, Testimonial Selection

### Community 67 - "Community 67"
Cohesion: 0.12
Nodes (14): checkFallbackRateLimit(), escapeHtml(), ipWindows, maskIp(), POST(), ContactFormProps, errorStyle, fieldStyle (+6 more)

## Knowledge Gaps
- **271 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+266 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **20 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `UI Utility & Breadcrumb` to `Dependencies & Package Config`, `Community 39`, `Dialog System`, `Site Config & Footer`, `Avatar System`, `Alert Component`, `Tabs System`, `Community 17`, `Community 18`, `Brand Logo (Red Variant)`, `Community 56`, `Community 24`, `Graphify Agent Workflows`, `Site Config Types`, `Community 30`?**
  _High betweenness centrality (0.194) - this node is a cross-community bridge._
- **Why does `Framer Motion Animation` connect `shadcn/ui Configuration` to `Community 56`, `Dropdown Menu System`, `Community 67`, `Root Layout & Fonts`?**
  _High betweenness centrality (0.181) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Dropdown Menu System` to `GSAP Animation Engine`?**
  _High betweenness centrality (0.074) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _273 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Animation & Layout Components` be split into smaller, more focused modules?**
  _Cohesion score 0.047619047619047616 - nodes in this community are weakly interconnected._
- **Should `shadcn/ui Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.06341463414634146 - nodes in this community are weakly interconnected._
- **Should `UI Utility & Breadcrumb` be split into smaller, more focused modules?**
  _Cohesion score 0.12413793103448276 - nodes in this community are weakly interconnected._