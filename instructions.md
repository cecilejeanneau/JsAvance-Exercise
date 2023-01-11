# Orcs

## Écrivez les classes Creature, Orc, Urukhai et ChiefOrc conformément au schéma ci-dessus, sachant que :

Urukhai et ChiefOrc héritent de Orc, qui elle-même hérite de Creature.

Actions :
- Une Creature peut faire : saySomething() et identity()
- Un Orc peut faire (en plus de saySomething() et identity()) : scream() et bite()
- Un Urukhai peut faire (en plus de saySomething(), identity(), scream() et bite()) : kill()
- Un ChiefOrc peut faire (en plus de saySomething(), identity(), scream() et bite()) : giveOrder()



## Bonus (si vous avez déjà fini) !
Écrire la même implémentation avec la syntaxe ES5 "à l'ancienne" (avec la function, prototype, call, Objet.create et constructor) ;)