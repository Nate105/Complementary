scoreboard objectives add mana_boost_i dummy

tag @a[scores={mana_boost_i=1..}] add mana_boost_i
tag @a[scores={mana_boost_i=..0}] remove mana_boost_i

scoreboard players remove @a mana_boost_i 1
scoreboard players set @a[scores={mana_boost_i=-1000..-1}] mana_boost_i 0