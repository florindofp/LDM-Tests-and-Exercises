<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html>
        <body>
            <h2>My CD Collection</h2>
            <xsl:for-each select="catalog/cd">
                <h1><xsl:value-of select="title"/></h1>
                <ul>
                    <li>Artista: <xsl:value-of select="artist"/></li>
                    <li>Precio: <xsl:value-of select="price"/></li>
                    <li>Año: <xsl:value-of select="year"/></li>
                </ul>
            </xsl:for-each>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>

