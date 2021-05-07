for $alumno in doc("alumnos_fp.xml")/practica_ldm/alumnos/alumno
where $alumno/telef = "942756645"
return $alumno/telef


doc("alumnos_fp.xml")/practica_ldm/alumnos/alumno[telef="942756645"]/telef

1.

for $a in doc("alumnos_fp.xml")/practica_ldm/alumnos/alumno 
where $a/cod union $a/nota/cod 
return data($a/apenom)

2.

for $a in doc("alumnos_fp.xml")/practica_ldm/notas/nota
for $b in doc("alumnos_fp.xml")/practica_ldm/asignaturas/asignatura 
    where $a/alum="n43483437" and
    $b/cod=$a/asig 
return (data($b/nombre), data($a/calificacion))
