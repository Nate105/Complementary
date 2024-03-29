scoreboard players set @a [scores={alive=!2}] alive 0
scoreboard players set @e [type=player] alive 1
execute at @a[scores={alive=0}] run summon complementary:gravestone ^^^ facing @s
scoreboard players set @a [scores={alive=0}] alive 2