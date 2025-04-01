for $baile in doc("bailes.xml")/bailes/baile
let $nombre := $baile/nombre
where $baile/sala = 2 and $baile/precio <35 and $baile/precio[@moneda="euro"]
return $nombre;