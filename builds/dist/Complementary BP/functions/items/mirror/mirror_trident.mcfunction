execute as @a[hasitem=[{item=complementary:mirror,location=slot.weapon.mainhand,slot=0}]] at @s run execute as @e[type=thrown_trident,r=10] at @s run particle complementary:reflect_particle ~~~
execute as @a[hasitem=[{item=complementary:mirror,location=slot.weapon.offhand,slot=0}]] at @s run execute as @e[type=thrown_trident,r=10] at @s run particle complementary:reflect_particle ~~~
execute as @a[hasitem=[{item=complementary:mirror,location=slot.weapon.mainhand,slot=0}]] at @s run execute as @e[type=thrown_trident,r=10] at @s run playsound item.shield.block @a ~~~
execute as @a[hasitem=[{item=complementary:mirror,location=slot.weapon.offhand,slot=0}]] at @s run execute as @e[type=thrown_trident,r=10] at @s run playsound item.shield.block @a ~~~
execute as @a[hasitem=[{item=complementary:mirror,location=slot.weapon.mainhand,slot=0}]] at @s run execute as @e[type=thrown_trident,r=10] at @s run tp ^^^-1 facing @p
execute as @a[hasitem=[{item=complementary:mirror,location=slot.weapon.offhand,slot=0}]] at @s run execute as @e[type=thrown_trident,r=10] at @s run tp ^^^-1 facing @p