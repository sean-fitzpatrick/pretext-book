// This list of all tags was generated by `npx vite-node scripts/dump-all-elements.ts`
const ALL_TAGS = [
    "abbr",
    "abstract",
    "acknowledgement",
    "acro",
    "activity",
    "ad",
    "address",
    "alert",
    "algorithm",
    "alteration",
    "am",
    "angles",
    "answer",
    "appendix",
    "archive",
    "article",
    "articletitle",
    "aside",
    "assemblage",
    "assumption",
    "asymptote",
    "asymptote-preamble",
    "attr",
    "attribution",
    "author",
    "author-biographies",
    "axiom",
    "backmatter",
    "bc",
    "biblio",
    "biographical",
    "biography",
    "blockquote",
    "book",
    "brandlogo",
    "c",
    "ca",
    "caption",
    "case",
    "cd",
    "cell",
    "chapter",
    "chord",
    "claim",
    "cline",
    "code",
    "col",
    "colophon",
    "commentary",
    "computation",
    "conclusion",
    "conjecture",
    "console",
    "contributor",
    "contributors",
    "convention",
    "copyright",
    "corollary",
    "creator",
    "credit",
    "cross-references",
    "date",
    "dblbrackets",
    "dblprime",
    "dedication",
    "definition",
    "degree",
    "delete",
    "demonstration",
    "department",
    "description",
    "division",
    "dl",
    "docinfo",
    "doubleflat",
    "doublesharp",
    "edition",
    "editor",
    "eg",
    "ellipsis",
    "em",
    "email",
    "entity",
    "etal",
    "etc",
    "example",
    "exercise",
    "exercisegroup",
    "exercises",
    "exploration",
    "fact",
    "feedback",
    "figure",
    "fillin",
    "flat",
    "fn",
    "foreign",
    "fragment",
    "fragref",
    "frontmatter",
    "genus",
    "gi",
    "glossary",
    "h",
    "headnote",
    "heuristic",
    "hint",
    "historical",
    "holder",
    "hypothesis",
    "ibid",
    "icon",
    "identity",
    "idx",
    "ie",
    "image",
    "images",
    "index",
    "index-list",
    "init",
    "initialism",
    "input",
    "insert",
    "insight",
    "institution",
    "instruction",
    "intertext",
    "introduction",
    "investigation",
    "journal",
    "kbd",
    "langle",
    "latex",
    "latex-image",
    "latex-image-preamble",
    "latex-preamble",
    "lemma",
    "letter",
    "li",
    "line",
    "list",
    "list-of",
    "listing",
    "location",
    "lq",
    "lsq",
    "m",
    "macro-file",
    "macros",
    "mag",
    "md",
    "mdash",
    "mdn",
    "me",
    "memo",
    "men",
    "midpoint",
    "minilicense",
    "minus",
    "mrow",
    "n",
    "name",
    "natural",
    "nb",
    "nbsp",
    "ndash",
    "notation",
    "notation-list",
    "note",
    "number",
    "numbering",
    "obelus",
    "objectives",
    "observation",
    "ol",
    "outcomes",
    "output",
    "p",
    "package",
    "pages",
    "paragraphs",
    "part",
    "per",
    "permille",
    "personname",
    "pg-code",
    "pg-macros",
    "phonomark",
    "pilcrow",
    "plaintitle",
    "plusminus",
    "pm",
    "poem",
    "postlude",
    "pre",
    "preface",
    "prelude",
    "pretext",
    "prime",
    "principle",
    "problem",
    "program",
    "project",
    "prompt",
    "proof",
    "proposition",
    "ps",
    "publisher",
    "pubtitle",
    "q",
    "quantity",
    "question",
    "rangle",
    "reading-questions",
    "references",
    "registered",
    "remark",
    "rename",
    "role",
    "row",
    "rq",
    "rsq",
    "sage",
    "sageplot",
    "sbsgroup",
    "scaledeg",
    "score",
    "section",
    "section-mark",
    "see",
    "seealso",
    "series",
    "servicemark",
    "sharp",
    "shortlicense",
    "shorttitle",
    "sidebyside",
    "solidus",
    "solution",
    "solutions",
    "species",
    "sq",
    "stack",
    "stage",
    "stale",
    "stanza",
    "statement",
    "subexercises",
    "subsection",
    "subsubsection",
    "subtitle",
    "swungdash",
    "table",
    "tabular",
    "tag",
    "tage",
    "task",
    "taxon",
    "technology",
    "term",
    "tex",
    "theorem",
    "timeofday",
    "times",
    "timesignature",
    "title",
    "titlepage",
    "today",
    "trademark",
    "ul",
    "unit",
    "url",
    "usage",
    "var",
    "video",
    "viz",
    "volume",
    "vs",
    "warning",
    "website",
    "webwork",
    "xelatex",
    "xetex",
    "xref",
    "year",
];

export default {
    Text: { title: <em>Text</em> },
    ...Object.fromEntries(
        ALL_TAGS.map((tag) => [
            tag,
            { title: <code>{`<${tag}>`}</code>, isPretextTag: true },
        ]),
    ),
};
