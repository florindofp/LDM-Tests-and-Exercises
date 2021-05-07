for $baile in doc("bailes.xml")/bailes/baile
where $baile/sala = 1
return $baile/nombre;


for $baile in doc("bailes.xml")/bailes/baile
let $nombre := $baile/nombre
where $baile/sala = 2
return data($nombre);


for $baile in doc("bailes.xml")/bailes/baile
let $nombre := $baile/nombre
where $baile/sala = 2
return $nombre;