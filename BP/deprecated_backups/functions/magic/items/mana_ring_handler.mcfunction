scoreboard objectives add mana_ring_timer_i dummy
scoreboard objectives add mana_ring_timer_ii dummy
scoreboard objectives add mana_ring_timer_iii dummy

execute as @a[hasItem={item=complementary:mana_ring_i,location=slot.inventory}] at @s run scoreboard players set @s mana_ring_timer_i 10
execute as @a[hasItem={item=complementary:mana_ring_i,location=slot.hotbar}] at @s run scoreboard players set @s mana_ring_timer_i 10
execute as @a[hasItem={item=complementary:mana_ring_i,location=slot.weapon.mainhand}] at @s run scoreboard players set @s mana_ring_timer_i 10

execute as @a[hasItem={item=complementary:mana_ring_ii,location=slot.inventory}] at @s run scoreboard players set @s mana_ring_timer_ii 10
execute as @a[hasItem={item=complementary:mana_ring_ii,location=slot.hotbar}] at @s run scoreboard players set @s mana_ring_timer_ii 10
execute as @a[hasItem={item=complementary:mana_ring_ii,location=slot.weapon.mainhand}] at @s run scoreboard players set @s mana_ring_timer_ii 10

execute as @a[hasItem={item=complementary:mana_ring_iii,location=slot.inventory}] at @s run scoreboard players set @s mana_ring_timer_iii 10
execute as @a[hasItem={item=complementary:mana_ring_iii,location=slot.hotbar}] at @s run scoreboard players set @s mana_ring_timer_iii 10
execute as @a[hasItem={item=complementary:mana_ring_iii,location=slot.weapon.mainhand}] at @s run scoreboard players set @s mana_ring_timer_iii 10

scoreboard players remove @a mana_ring_timer_i 1
scoreboard players set @a[scores={mana_ring_timer_i=-1000..-1}] mana_ring_timer_i 0

scoreboard players remove @a mana_ring_timer_ii 1
scoreboard players set @a[scores={mana_ring_timer_ii=-1000..-1}] mana_ring_timer_ii 0

scoreboard players remove @a mana_ring_timer_iii 1
scoreboard players set @a[scores={mana_ring_timer_iii=-1000..-1}] mana_ring_timer_iii 0

tag @a[scores={mana_ring_timer_i=1..}] add fastmanalv1
tag @a[scores={mana_ring_timer_i=..0}] remove fastmanalv1

tag @a[scores={mana_ring_timer_ii=1..}] add fastmanalv2
tag @a[scores={mana_ring_timer_ii=..0}] remove fastmanalv2

tag @a[scores={mana_ring_timer_iii=1..}] add fastmanalv3
tag @a[scores={mana_ring_timer_iii=..0}] remove fastmanalv3