var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_RichmondtoSanFrancisco_1 = new ol.format.GeoJSON();
var features_RichmondtoSanFrancisco_1 = format_RichmondtoSanFrancisco_1.readFeatures(json_RichmondtoSanFrancisco_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RichmondtoSanFrancisco_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RichmondtoSanFrancisco_1.addFeatures(features_RichmondtoSanFrancisco_1);
var lyr_RichmondtoSanFrancisco_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RichmondtoSanFrancisco_1, 
                style: style_RichmondtoSanFrancisco_1,
                interactive: true,
                title: '<img src="styles/legend/RichmondtoSanFrancisco_1.png" /> Richmond to San Francisco'
            });
var format_RichmondtoCalgary_2 = new ol.format.GeoJSON();
var features_RichmondtoCalgary_2 = format_RichmondtoCalgary_2.readFeatures(json_RichmondtoCalgary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RichmondtoCalgary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RichmondtoCalgary_2.addFeatures(features_RichmondtoCalgary_2);
var lyr_RichmondtoCalgary_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RichmondtoCalgary_2, 
                style: style_RichmondtoCalgary_2,
                interactive: true,
                title: '<img src="styles/legend/RichmondtoCalgary_2.png" /> Richmond to Calgary'
            });
var format_Warehouses_3 = new ol.format.GeoJSON();
var features_Warehouses_3 = format_Warehouses_3.readFeatures(json_Warehouses_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Warehouses_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Warehouses_3.addFeatures(features_Warehouses_3);
var lyr_Warehouses_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Warehouses_3, 
                style: style_Warehouses_3,
                interactive: true,
                title: '<img src="styles/legend/Warehouses_3.png" /> Warehouses'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_RichmondtoSanFrancisco_1.setVisible(true);lyr_RichmondtoCalgary_2.setVisible(true);lyr_Warehouses_3.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_RichmondtoSanFrancisco_1,lyr_RichmondtoCalgary_2,lyr_Warehouses_3];
lyr_RichmondtoSanFrancisco_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Basic $': 'Basic $', 'Refridge $': 'Refridge $', });
lyr_RichmondtoCalgary_2.set('fieldAliases', {'Basic $': 'Basic $', 'Refridge $': 'Refridge $', });
lyr_Warehouses_3.set('fieldAliases', {'id': 'id', 'Location': 'Location', 'Phone': 'Phone', 'Website': 'Website', });
lyr_RichmondtoSanFrancisco_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Basic $': 'Range', 'Refridge $': 'Range', });
lyr_RichmondtoCalgary_2.set('fieldImages', {'Basic $': 'Range', 'Refridge $': 'Range', });
lyr_Warehouses_3.set('fieldImages', {'id': 'TextEdit', 'Location': 'TextEdit', 'Phone': 'TextEdit', 'Website': '', });
lyr_RichmondtoSanFrancisco_1.set('fieldLabels', {'Shape_Leng': 'header label', 'Basic $': 'header label', 'Refridge $': 'header label', });
lyr_RichmondtoCalgary_2.set('fieldLabels', {'Basic $': 'header label', 'Refridge $': 'header label', });
lyr_Warehouses_3.set('fieldLabels', {'id': 'header label', 'Location': 'header label', 'Phone': 'header label', 'Website': 'no label', });
lyr_Warehouses_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});