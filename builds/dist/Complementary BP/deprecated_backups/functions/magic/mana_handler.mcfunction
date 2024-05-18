scoreboard objectives add mana dummy

execute at @a[tag=!join] as @s run scoreboard players set @s mana 100
execute at @a[tag=!join] as @s run tag @s add join

title @a[scores={mana=..49},m=survival] actionbar 
title @a[scores={mana=50..99},m=survival] actionbar 
title @a[scores={mana=100..149},m=survival] actionbar 
title @a[scores={mana=150..199},m=survival] actionbar 
title @a[scores={mana=200..249},m=survival] actionbar 
title @a[scores={mana=250..299},m=survival] actionbar 
title @a[scores={mana=300..349},m=survival] actionbar 
title @a[scores={mana=350..399},m=survival] actionbar 
title @a[scores={mana=400..449},m=survival] actionbar 
title @a[scores={mana=450..499},m=survival] actionbar 
title @a[scores={mana=500..549},m=survival] actionbar 
title @a[scores={mana=550..599},m=survival] actionbar 
title @a[scores={mana=600..649},m=survival] actionbar 
title @a[scores={mana=650..699},m=survival] actionbar 
title @a[scores={mana=700..749},m=survival] actionbar 
title @a[scores={mana=750..799},m=survival] actionbar 
title @a[scores={mana=800..849},m=survival] actionbar 
title @a[scores={mana=850..899},m=survival] actionbar 
title @a[scores={mana=900..949},m=survival] actionbar 
title @a[scores={mana=950..999},m=survival] actionbar 
title @a[scores={mana=1000..1049},m=survival] actionbar 
title @a[scores={mana=1050..1099},m=survival] actionbar 
title @a[scores={mana=1100..1149},m=survival] actionbar 
title @a[scores={mana=1150..1199},m=survival] actionbar 
title @a[scores={mana=1200..1249},m=survival] actionbar 

scoreboard players set @a[scores={mana=-1000..-1}] mana 0
scoreboard players set @a[tag=!mana_boost_i,scores={mana=1000..1500}] mana 1000
scoreboard players set @a[tag=mana_boost_i,scores={mana=1200..1500}] mana 1200

scoreboard players add @a[tag=!fastmanalv1,tag=!fastmanalv2,tag=!fastmanalv3] mana 1
scoreboard players add @a[tag=fastmanalv1,tag=!fastmanalv2,tag=!fastmanalv3] mana 2
scoreboard players add @a[tag=fastmanalv1,tag=fastmanalv2,tag=!fastmanalv3] mana 3
scoreboard players add @a[tag=!fastmanalv1,tag=fastmanalv2,tag=!fastmanalv3] mana 3
scoreboard players add @a[tag=fastmanalv1,tag=fastmanalv2,tag=fastmanalv3] mana 4
scoreboard players add @a[tag=!fastmanalv1,tag=fastmanalv2,tag=fastmanalv3] mana 4
scoreboard players add @a[tag=fastmanalv1,tag=!fastmanalv2,tag=fastmanalv3] mana 4
scoreboard players add @a[tag=!fastmanalv1,tag=!fastmanalv2,tag=fastmanalv3] mana 4

tag @a[tag=fastmanalv2] remove fastmanalv1
tag @a[tag=fastmanalv3] remove fastmanalv2

scoreboard players set @a[scores={mana=0..999},m=creative] mana 1000

##,scores={mana=0..1000