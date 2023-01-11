'use strict';

import Creature from './classes/Creature.js';
import Orc from './classes/Orc.js';
import ChiefOrc from './classes/ChiefOrc.js';
import Urukhai from './classes/Urukhai.js';

const creature1 = new Creature('george', 12, 15);
creature1.identity();
creature1.saySomething("You've been killed !");

const orc1 = new Orc('Kurluk', 27, 25);

orc1.bite(creature1);
orc1.scream('bazinga !');