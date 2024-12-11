var map = L.map('map', {
    center: [-12.188461100359312, -77.00878855885357],
    zoom: 13.5,
    minZoom: 12,
    maxZoom: 20,
    maxBounds: [[-12.230789,-77.053988], [-12.129953,-76.948375]]
});
var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var bgoogleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3'] });

bgoogleSat.addTo(map);

var Colegio_Chorrillo = L.tileLayer.wms("http://localhost:8080/geoserver/web_chorrilos/wms?", {
    layers: "web_chorrilos:colegios_chorrilos", //gisweb:centros educaticos chorrillo
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Colegio_Chorrillo.addTo(map);

 var Curvas_Nivel = L.tileLayer.wms("http://localhost:8080/geoserver/web_chorrilos/wms?", {
    layers: "web_chorrilos:curvas", //gisweb:curvas de nivel chorrillo
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Curvas_Nivel.addTo(map);

 var Farmacia = L.tileLayer.wms("http://localhost:8080/geoserver/web_chorrilos/wms?", {
    layers: "web_chorrilos:farmacia_chorrilos", //gisweb:Farmacias chorrillos
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Farmacia.addTo(map);

 var Grifo = L.tileLayer.wms("http://localhost:8080/geoserver/web_chorrilos/wms?", {
    layers: "web_chorrilos:grifo_chorrilos", //gisweb:Grifos Chorrillos
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Grifo.addTo(map);











 var baseMaps = {
    "OSM": basemapOSM,
    "Google Satelite": bgoogleSat
};

var overlayMaps = {
    "Colegio Chorrillo": Colegio_Chorrillo,
    "Curvas de Nivel": Curvas_Nivel,
    "Farmacia": Farmacia,
    "Grifo": Grifo
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);
