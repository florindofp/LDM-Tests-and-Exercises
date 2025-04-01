for $baile in doc("bailes.xml")/bailes/baile
let $nombre := $baile/nombre
let $profesor := $baile/profesor
let $plazas := $baile/plazas
where $baile/precio[@cuota="trimestral"]
order by $baile/plazas
return <tr>
<td>{data($nombre)}</td>
<td>{data($profesor)}</td>
<td>{data($plazas)}</td>
</tr>;