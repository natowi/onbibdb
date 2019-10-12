var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Toner',
    'type': 'base',
        source: new ol.source.Stamen({
        layer: 'toner'
        })
})
]
});
var format_GermanyAL4 = new ol.format.GeoJSON();
var features_GermanyAL4 = format_GermanyAL4.readFeatures(geojson_GermanyAL4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GermanyAL4 = new ol.source.Vector();
jsonSource_GermanyAL4.addFeatures(features_GermanyAL4);var lyr_GermanyAL4 = new ol.layer.Vector({
                source:jsonSource_GermanyAL4, 
                style: style_GermanyAL4,
                title: "Germany_AL4"
            });var lyr_tin17 = new ol.layer.Image({
                            opacity: 1,
                            title: "tin17",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/tin17.png",
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [300, 300],
                                imageExtent: [677056.274954, 6004321.824614, 1666241.270143, 7370021.727130]
                            })
                        });var format_onleihen1713 = new ol.format.GeoJSON();
var features_onleihen1713 = format_onleihen1713.readFeatures(geojson_onleihen1713, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_onleihen1713 = new ol.source.Vector();
jsonSource_onleihen1713.addFeatures(features_onleihen1713);var lyr_onleihen1713 = new ol.layer.Vector({
                source:jsonSource_onleihen1713, 
                style: style_onleihen1713,
                title: "onleihen170103"
            });

lyr_GermanyAL4.setVisible(true);lyr_tin17.setVisible(true);lyr_onleihen1713.setVisible(true);
var layersList = [baseLayer,lyr_GermanyAL4,lyr_tin17,lyr_onleihen1713];
