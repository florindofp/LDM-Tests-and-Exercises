for $baile in doc("bailes.xml")/bailes/baile
let $profesor:= $baile/profesor
where $baile/precio[@cuota="mensual"]
return $profesor

