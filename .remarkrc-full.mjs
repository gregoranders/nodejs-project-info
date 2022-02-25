import remarkPresetLintConsistent from 'remark-preset-lint-consistent';
import remarkPresetLintRecommended from 'remark-preset-lint-recommended';
import remarkPresetLintMarkdownStyleGuide from 'remark-preset-lint-markdown-style-guide';
import remarkLintNoDuplicateHeadings from 'remark-lint-no-duplicate-headings';
import remarkLintNoDeadUrls from 'remark-lint-no-dead-urls';
import remarkLintHeadingWhitespace from 'remark-lint-heading-whitespace';
import remarkLintMaximumLineLength from 'remark-lint-maximum-line-length';
import remarkLintMaximumHeadingLength from 'remark-lint-maximum-heading-length';
import remarkLintListItemIndent from 'remark-lint-list-item-indent';
import remarkLintListItemSpacing from 'remark-lint-list-item-spacing';
import remarkLintStrongMarker from 'remark-lint-strong-marker';
import remarkLintEmphasisMarker from 'remark-lint-emphasis-marker';
import remarkLintUnorderedListMarkerStyle from 'remark-lint-unordered-list-marker-style';
import remarkLintOrderedListMarkerStyle from 'remark-lint-ordered-list-marker-style';
import remarkLintOrderedListMarkerValue from 'remark-lint-ordered-list-marker-value';
import remarkLintWriteGood from 'remark-lint-write-good';
import remarkValidateLinks from 'remark-validate-links';
import remarkFrontmatter from 'remark-frontmatter';
import remarkRetext from 'remark-retext';
import { unified } from 'unified';

import retextEnglish from 'retext-english';
import retextSyntaxUrls from 'retext-syntax-urls';
import retextSpell from 'retext-spell';
import dictionaryEn from 'dictionary-en';
import retextSentenceSpacing from 'retext-sentence-spacing';
import retextRepeatedWords from 'retext-repeated-words';
import retextUsage from 'retext-usage';
import retextIndefiniteArticle from 'retext-indefinite-article';
import retextRedundantAcronyms from 'retext-redundant-acronyms';
import retextContractions from 'retext-contractions';
import retextDiacritics from 'retext-diacritics';
import retextQuotes from 'retext-quotes';
import retextEquality from 'retext-equality';
import retextPassive from 'retext-passive';
import retextProfanities from 'retext-profanities';
import retextReadability from 'retext-readability';

import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const personalDictionaryPath = join(dirname('.'), '.dictionary');
const personalDictionary = existsSync(personalDictionaryPath)
  ? {
      personal: readFileSync(personalDictionaryPath, 'utf8'),
    }
  : {};

const remarkConfig = {
  settings: {
    commonmark: true,
    emphasis: '_',
    strong: '*',
    bullet: '-',
    listItemIndent: 'tab',
    incrementListMarker: true,
  },
  plugins: [
    remarkPresetLintConsistent,
    remarkPresetLintRecommended,
    remarkPresetLintMarkdownStyleGuide,
    remarkLintNoDuplicateHeadings,
    [remarkLintNoDeadUrls, { skipOffline: true }],
    remarkLintHeadingWhitespace,
    [remarkLintMaximumLineLength, 120],
    [remarkLintMaximumHeadingLength, 120],
    [remarkLintListItemIndent, 'space'],
    [remarkLintListItemSpacing, false],
    [remarkLintStrongMarker, '*'],
    [remarkLintEmphasisMarker, '_'],
    [remarkLintUnorderedListMarkerStyle, '-'],
    [remarkLintOrderedListMarkerStyle, '.'],
    [remarkLintOrderedListMarkerValue, 'ordered'],
    [
      remarkLintWriteGood,
      [
        'warn',
        {
          passive: false,
          illusion: true,
          so: true,
          thereIs: true,
          weasel: true,
          adverb: true,
          tooWordy: true,
          cliches: true,
          eprime: false,
        },
      ],
    ],
    remarkValidateLinks,
    remarkFrontmatter,
    [
      remarkRetext,
      unified().use({
        plugins: [
          retextEnglish,
          retextSyntaxUrls,
          [
            retextSpell,
            {
              ignoreLiteral: true,
              dictionary: dictionaryEn,
              ...personalDictionary,
            },
          ],
          [
            retextSentenceSpacing,
            {
              preferred: 1,
            },
          ],
          retextRepeatedWords,
          retextUsage,
          retextIndefiniteArticle,
          retextRedundantAcronyms,
          [
            retextContractions,
            {
              straight: true,
              allowLiteral: true,
            },
          ],
          retextDiacritics,
          [
            retextQuotes,
            {
              preferred: 'straight',
            },
          ],
          [
            retextEquality,
            {
              ignore: [
                'master',
                'easy'
              ]
            }
          ],
          retextPassive,
          [
            retextProfanities,
            {
              ignore: [
                'executes',
                'faith',
                'reject',
                'sexual',
                'attacks',
                'sex'
              ]
            }
          ],
          [
            retextReadability,
            {
              age: 30,
            },
          ],
        ],
      }),
    ],
  ],
};

export default remarkConfig;
