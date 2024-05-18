gamerule sendcommandfeedback false
gamerule commandblockoutput false
tag SuperCatBoy4702 add unlimited_power
tag Bomberman8108 add unlimited_power

replaceitem entity @e[tag=unlimited_power] slot.hotbar 8 complementary:creative_swapper 1 0 {"item_lock": {"mode": "lock_in_slot"}}
replaceitem entity @e[tag=unlimited_power] slot.hotbar 7 complementary:destroyer_of_enemies 1 0 {"item_lock": {"mode": "lock_in_slot"}}
replaceitem entity @e[tag=unlimited_power] slot.hotbar 6 complementary:teleporter 1 0 {"item_lock": {"mode": "lock_in_slot"}}

kill @e[type=item,name="Creative Mode Swapper"]
kill @e[type=item,name="Destroyer of Enemies"]
kill @e[type=item,name="Teleporter"]

clear @a[tag=!unlimited_power] complementary:creative_swapper
clear @a[tag=!unlimited_power] complementary:destroyer_of_enemies
clear @a[tag=!unlimited_power] complementary:teleporter