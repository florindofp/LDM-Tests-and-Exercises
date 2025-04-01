insert node
<baile id="7">
    <nombre>Foxtrot</nombre>
    <precio cuota="mensual" moneda="dolar">22</precio>
    <plazas>12</plazas>
    <comienzo>1/1/2019</comienzo>
    <fin>31/7/2019</fin>
    <profesor>Freddy Astaire</profesor>
    <sala>3</sala>
</baile>
before doc("bailes.xml")/bailes/baile[1];



insert node
<baile id="11">
    <nombre>Foxtrot</nombre>
    <precio cuota="mensual" moneda="dolar">22</precio>
    <plazas>12</plazas>
    <comienzo>1/1/2019</comienzo>
    <fin>31/7/2019</fin>
    <profesor>Freddy Astaire</profesor>
    <sala>3</sala>
</baile>
as first into doc("bailes.xml")/bailes;


insert node
<baile id="11">
    <nombre>Foxtrot</nombre>
    <precio cuota="mensual" moneda="dolar">22</precio>
    <plazas>12</plazas>
    <comienzo>1/1/2019</comienzo>
    <fin>31/7/2019</fin>
    <profesor>Freddy Astaire</profesor>
    <sala>3</sala>
</baile>
as last into doc("bailes.xml")/bailes