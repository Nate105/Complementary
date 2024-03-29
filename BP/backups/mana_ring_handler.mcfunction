execute as @a[hasItem={item=complementary:mana_ring_i,location=slot.inventory}] at @s run tag @s add fastmanalv1
execute as @a[hasItem={item=complementary:mana_ring_i,location=slot.hotbar}] at @s run tag @s add fastmanalv1
execute as @a[hasItem={item=complementary:mana_ring_i,location=slot.weapon.mainhand}] at @s run tag @s add fastmanalv1
execute as @a[hasItem={item=complementary:mana_ring_i,location=slot.inventory,quantity=0}] at @s run tag @s remove fastmanalv1
execute as @a[hasItem={item=complementary:mana_ring_i,location=slot.hotbar,quantity=0}] at @s run tag @s remove fastmanalv1
execute as @a[hasItem={item=complementary:mana_ring_i,location=slot.weapon.mainhand,quantity=0}] at @s run tag @s remove fastmanalv1