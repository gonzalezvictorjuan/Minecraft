# Minecraft

Generador de Islas:

Rotador:
execute as @e[type=armor_stand] at @s run tp @s ~ ~ ~ ~1 ~

Constructor:
execute at @e[name=GIsla] run fill ~ ~ ~ ^ ^ ^5 minecraft:grass_block

Libro:
/give @p written_book{pages:['["",{"text":"Teleports\\n"},{"text":"[Root]","clickEvent":{"action":"run_command","value":"/tp 0 3 0"}},{"text":"\\n\\nIslas:\\n"},{"text":"[Base1]","color":"dark_gray","clickEvent":{"action":"run_command","value":"/tp 750 60 0"}},{"text":" ","color":"reset"},{"text":"[Base2]","color":"dark_blue","clickEvent":{"action":"run_command","value":"/tp 607 60 441"}},{"text":" \\n","color":"reset"},{"text":"[Base3]","color":"dark_green","clickEvent":{"action":"run_command","value":"/tp 232 60 713"}},{"text":" ","color":"dark_green"},{"text":"[Base4]","color":"dark_aqua","clickEvent":{"action":"run_command","value":"/tp -232 60 713"}},{"text":" ","color":"reset"},{"text":"[Base5]","color":"dark_red","clickEvent":{"action":"run_command","value":"/tp -607 60 441"}},{"text":" ","color":"reset"},{"text":"[Base6]","color":"dark_purple","clickEvent":{"action":"run_command","value":"/tp -750 60 0"}},{"text":"\\n","color":"reset"},{"text":"[Base7]","color":"gold","clickEvent":{"action":"run_command","value":"/tp -607 60 -441"}},{"text":" ","color":"reset"},{"text":"[Base8]","color":"blue","clickEvent":{"action":"run_command","value":"/tp -232 63 -713"}},{"text":"\\n","color":"reset"},{"text":"[Base9]","color":"red","clickEvent":{"action":"run_command","value":"/tp 232 60 -713"}},{"text":" ","color":"red"},{"text":"[Base10]","color":"light_purple","clickEvent":{"action":"run_command","value":"/tp 607 60 -441"}},{"text":"\\n ","color":"reset"}]'],title:"Book of World",author:White,display:{Lore:["The world is fantastic!"]}}

SubBase 1 (): /setblock 750 60 0 minecraft:diamond_block
SubBase 2 (): /setblock 607 60 441 minecraft:diamond_block
SubBase 3 (): /setblock 232 60 713 minecraft:diamond_block
SubBase 4 (): /setblock -232 60 713 minecraft:diamond_block
SubBase 5 (): /setblock -607 60 441 minecraft:diamond_block
SubBase 6 (): /setblock -750 60 0 minecraft:diamond_block
SubBase 7 (): /setblock -607 60 -441 minecraft:diamond_block
SubBase 8 (): /setblock -232 60 -713 minecraft:diamond_block
SubBase 9 (): /setblock 232 60 -713 minecraft:diamond_block
SubBase 10 (): /setblock 607 60 -441 minecraft:diamond_block
