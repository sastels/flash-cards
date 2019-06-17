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

export const allWords = {
  wordsPrePrimary,
  wordsPrimary,
  wordsGrade1,
  wordsGrade2,
  wordsGrade3,
  wordsNouns
};
