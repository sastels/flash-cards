const _prePrimer =
  'a, and, away, big, blue, can, come, down, find, for, funny, go, help, here, I, in, is, it, jump, little, look, make, me, my, not, one, play, red, run, said, see, the, three, to, two, up, we, where, yellow, you';
const _primer =
  'all, am, are, at, ate, be, black, brown, but, came, did, do, eat, four, get, good, have, he, into, like, must, new, no, now, on, our, out, please, pretty, ran, ride, saw, say, she, so, soon, that, there, they, this, too, under, want, was, well, went, what, white, who, will, with, yes';
const _grade1 =
  'after, again, an, any, as, ask, by, could, every, fly, from, give, giving, had, has, her, him, his, how, just, know, let, live, may, of, old, once, open, over, put, round, some, stop, take, thank, them, then, think, walk, were, when';
const _grade2 =
  "always, around, because, been, before, best, both, buy, call, cold, does, don't, fast, first, five, found, gave, goes, green, its, made, many, off, or, pull, read, right, sing, sit, sleep, tell, their, these, those, upon, us, use, very, wash, which, why, wish, work, would, write, your";
const _grade3 =
  'about, better, bring, carry, clean, cut, done, draw, drink, eight, fall, far, full, got, grow, hold, hot, hurt, if, keep, kind, laugh, light, long, much, myself, never, nine, only, own, pick, seven, shall, show, six, small, start, ten, today, together, try, warm';
const _nouns =
  'apple, baby, back, ball, bear, bed, bell, bird, birthday, boat, box, boy, bread, brother, cake, car, cat, chair, chicken, children, Christmas, coat, corn, cow, day, dog, doll, door, duck, egg, eye, farm, farmer, father, feet, fire, fish, floor, flower, game, garden, girl, good-bye, grass, ground, hand, head, hill, home, horse, house, kitty, leg, letter, man, men, milk, money, morning, mother, name, nest, night, paper, party, picture, pig, rabbit, rain, ring, robin, Santa Claus, school, seed, sheep, shoe, sister, snow, song, squirrel, stick, street, sun, table, thing, time, top, toy, tree, watch, water, way, wind, window, wood';

export const wordsPrePrimary = _prePrimer.split(',').map(s => s.trim());
export const wordsPrimary = _primer.split(',').map(s => s.trim());
export const wordsGrade1 = _grade1.split(',').map(s => s.trim());
export const wordsGrade2 = _grade2.split(',').map(s => s.trim());
export const wordsGrade3 = _grade3.split(',').map(s => s.trim());
export const wordsNouns = _nouns.split(',').map(s => s.trim());

const digits0to4 = ['0', '1', '2', '3', '4'];
const digits5to9 = ['5', '6', '7', '8', '9'];
const digits0to9 = digits0to4.concat(digits5to9);

const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));
const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);
const allSums = (digitsA, digitsB) => [
  ...new Set(cartesian(digitsA, digitsB).map(pair => `${pair[0]} + ${pair[1]}`))
];

export const allWords = {
  'Pre-primary': wordsPrePrimary,
  Primary: wordsPrimary,
  'Grade 1': wordsGrade1,
  'Grade 2': wordsGrade2,
  'Grade 3': wordsGrade3,
  Nouns: wordsNouns,
  'Math plus 1': allSums(digits0to9, ['1']),
  'Math plus 2': allSums(digits0to9, ['2']),
  'Math plus 3': allSums(digits0to9, ['3']),
  'Math addition 1': allSums(digits0to4, digits0to4),
  'Math addition 2': allSums(digits5to9, digits0to4),
  'Math addition 3': allSums(digits0to4, digits5to9),
  'Math addition 4': allSums(digits0to9, digits0to9)
};

export const areas = {
  'English words': [
    'Pre-primary',
    'Primary',
    'Grade 1',
    'Grade 2',
    'Grade 3',
    'Nouns'
  ],
  Math: [
    'Math plus 1',
    'Math plus 2',
    'Math plus 3',
    'Math addition 1',
    'Math addition 2',
    'Math addition 3',
    'Math addition 4'
  ]
};
