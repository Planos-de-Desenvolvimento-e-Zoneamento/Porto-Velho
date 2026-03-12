ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-63.927670, -8.751848, -63.905297, -8.739505]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_FundeadourosLongoPrazo_1 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_1 = format_FundeadourosLongoPrazo_1.readFeatures(json_FundeadourosLongoPrazo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosLongoPrazo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_1.addFeatures(features_FundeadourosLongoPrazo_1);
var lyr_FundeadourosLongoPrazo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_1, 
                style: style_FundeadourosLongoPrazo_1,
                popuplayertitle: 'Fundeadouros - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_1.png" /> Fundeadouros - Longo Prazo'
            });
var format_FundeadourosMdioPrazo_2 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_2 = format_FundeadourosMdioPrazo_2.readFeatures(json_FundeadourosMdioPrazo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosMdioPrazo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_2.addFeatures(features_FundeadourosMdioPrazo_2);
var lyr_FundeadourosMdioPrazo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_2, 
                style: style_FundeadourosMdioPrazo_2,
                popuplayertitle: 'Fundeadouros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_2.png" /> Fundeadouros - Médio Prazo '
            });
var format_FundeadourosCurtoPrazo_3 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_3 = format_FundeadourosCurtoPrazo_3.readFeatures(json_FundeadourosCurtoPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosCurtoPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_3.addFeatures(features_FundeadourosCurtoPrazo_3);
var lyr_FundeadourosCurtoPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_3, 
                style: style_FundeadourosCurtoPrazo_3,
                popuplayertitle: 'Fundeadouros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_3.png" /> Fundeadouros - Curto Prazo '
            });
var format_FundeadourosSituaoAtual_4 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_4 = format_FundeadourosSituaoAtual_4.readFeatures(json_FundeadourosSituaoAtual_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosSituaoAtual_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_4.addFeatures(features_FundeadourosSituaoAtual_4);
var lyr_FundeadourosSituaoAtual_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_4, 
                style: style_FundeadourosSituaoAtual_4,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_4.png" /> Fundeadouros - Situação Atual '
            });
var format_BaciasdeEvoluoLongoPrazo_5 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_5 = format_BaciasdeEvoluoLongoPrazo_5.readFeatures(json_BaciasdeEvoluoLongoPrazo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoLongoPrazo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_5.addFeatures(features_BaciasdeEvoluoLongoPrazo_5);
var lyr_BaciasdeEvoluoLongoPrazo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_5, 
                style: style_BaciasdeEvoluoLongoPrazo_5,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_5.png" /> Bacias de Evolução - Longo Prazo'
            });
var format_BaciasdeEvoluoMdioPrazo_6 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_6 = format_BaciasdeEvoluoMdioPrazo_6.readFeatures(json_BaciasdeEvoluoMdioPrazo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoMdioPrazo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_6.addFeatures(features_BaciasdeEvoluoMdioPrazo_6);
var lyr_BaciasdeEvoluoMdioPrazo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_6, 
                style: style_BaciasdeEvoluoMdioPrazo_6,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_6.png" /> Bacias de Evolução - Médio Prazo '
            });
var format_BaciasdeEvoluoCurtoPrazo_7 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_7 = format_BaciasdeEvoluoCurtoPrazo_7.readFeatures(json_BaciasdeEvoluoCurtoPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_7.addFeatures(features_BaciasdeEvoluoCurtoPrazo_7);
var lyr_BaciasdeEvoluoCurtoPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_7, 
                style: style_BaciasdeEvoluoCurtoPrazo_7,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_7.png" /> Bacias de Evolução - Curto Prazo'
            });
var format_BaciasdeEvoluoSituaoAtual_8 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_8 = format_BaciasdeEvoluoSituaoAtual_8.readFeatures(json_BaciasdeEvoluoSituaoAtual_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoSituaoAtual_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_8.addFeatures(features_BaciasdeEvoluoSituaoAtual_8);
var lyr_BaciasdeEvoluoSituaoAtual_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_8, 
                style: style_BaciasdeEvoluoSituaoAtual_8,
                popuplayertitle: 'Bacias de Evolução - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_8.png" /> Bacias de Evolução - Situação Atual '
            });
var format_CanaisdeAcessoLongoPrazo_9 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_9 = format_CanaisdeAcessoLongoPrazo_9.readFeatures(json_CanaisdeAcessoLongoPrazo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoLongoPrazo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_9.addFeatures(features_CanaisdeAcessoLongoPrazo_9);
var lyr_CanaisdeAcessoLongoPrazo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_9, 
                style: style_CanaisdeAcessoLongoPrazo_9,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_9.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_10 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_10 = format_CanaisdeAcessoMdioPrazo_10.readFeatures(json_CanaisdeAcessoMdioPrazo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoMdioPrazo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_10.addFeatures(features_CanaisdeAcessoMdioPrazo_10);
var lyr_CanaisdeAcessoMdioPrazo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_10, 
                style: style_CanaisdeAcessoMdioPrazo_10,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_10.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_11 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_11 = format_CanaisdeAcessoCurtoPrazo_11.readFeatures(json_CanaisdeAcessoCurtoPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoCurtoPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_11.addFeatures(features_CanaisdeAcessoCurtoPrazo_11);
var lyr_CanaisdeAcessoCurtoPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_11, 
                style: style_CanaisdeAcessoCurtoPrazo_11,
                popuplayertitle: 'Canais de Acesso - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_11.png" /> Canais de Acesso - Curto Prazo'
            });
var format_CanaisdeAcessoSituaoAtual_12 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_12 = format_CanaisdeAcessoSituaoAtual_12.readFeatures(json_CanaisdeAcessoSituaoAtual_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoSituaoAtual_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_12.addFeatures(features_CanaisdeAcessoSituaoAtual_12);
var lyr_CanaisdeAcessoSituaoAtual_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_12, 
                style: style_CanaisdeAcessoSituaoAtual_12,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_12.png" /> Canais de Acesso - Situação Atual '
            });
var format_AcessosHidroviriosExternos_13 = new ol.format.GeoJSON();
var features_AcessosHidroviriosExternos_13 = format_AcessosHidroviriosExternos_13.readFeatures(json_AcessosHidroviriosExternos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosHidroviriosExternos_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosHidroviriosExternos_13.addFeatures(features_AcessosHidroviriosExternos_13);
var lyr_AcessosHidroviriosExternos_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosHidroviriosExternos_13, 
                style: style_AcessosHidroviriosExternos_13,
                popuplayertitle: 'Acessos Hidroviários Externos',
                interactive: true,
                title: '<img src="styles/legend/AcessosHidroviriosExternos_13.png" /> Acessos Hidroviários Externos'
            });
var format_AcessosRodoviriosInternosLongoPrazo_14 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_14 = format_AcessosRodoviriosInternosLongoPrazo_14.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_14.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_14);
var lyr_AcessosRodoviriosInternosLongoPrazo_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_14, 
                style: style_AcessosRodoviriosInternosLongoPrazo_14,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_14.png" /> Acessos Rodoviários Internos - Longo Prazo '
            });
var format_AcessosRodoviriosInternosMdioPrazo_15 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_15 = format_AcessosRodoviriosInternosMdioPrazo_15.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_15.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_15);
var lyr_AcessosRodoviriosInternosMdioPrazo_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_15, 
                style: style_AcessosRodoviriosInternosMdioPrazo_15,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_15.png" /> Acessos Rodoviários Internos - Médio Prazo '
            });
var format_AcessosRodoviriosInternosCurtoPrazo_16 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_16 = format_AcessosRodoviriosInternosCurtoPrazo_16.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_16.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_16);
var lyr_AcessosRodoviriosInternosCurtoPrazo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_16, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_16,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_16.png" /> Acessos Rodoviários Internos - Curto Prazo '
            });
var format_AcessosRodoviriosInternosSituaoAtual_17 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_17 = format_AcessosRodoviriosInternosSituaoAtual_17.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_17.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_17);
var lyr_AcessosRodoviriosInternosSituaoAtual_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_17, 
                style: style_AcessosRodoviriosInternosSituaoAtual_17,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_17.png" /> Acessos Rodoviários Internos - Situação Atual'
            });
var format_AcessosRodoviriosExternos_18 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_18 = format_AcessosRodoviriosExternos_18.readFeatures(json_AcessosRodoviriosExternos_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosExternos_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_18.addFeatures(features_AcessosRodoviriosExternos_18);
var lyr_AcessosRodoviriosExternos_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_18, 
                style: style_AcessosRodoviriosExternos_18,
                popuplayertitle: 'Acessos Rodoviários Externos',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_18.png" /> Acessos Rodoviários Externos'
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_19 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_19 = format_reasNoAfetassOperaesPorturiasLongoPrazo_19.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_19.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_19);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_19, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_19,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_19.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_20 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_20 = format_reasNoAfetassOperaesPorturiasMdioPrazo_20.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_20.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_20);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_20, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_20,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_20.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_21 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_21 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_21.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_21.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_21);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_21, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_21,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_21.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo'
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_22 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_22 = format_reasNoAfetassOperaesPorturiasSituaoAtual_22.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_22.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_22);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_22, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_22,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_22.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual '
            });
var format_reaseInstalaesAlfandegadas_23 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_23 = format_reaseInstalaesAlfandegadas_23.readFeatures(json_reaseInstalaesAlfandegadas_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadas_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_23.addFeatures(features_reaseInstalaesAlfandegadas_23);
var lyr_reaseInstalaesAlfandegadas_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_23, 
                style: style_reaseInstalaesAlfandegadas_23,
                popuplayertitle: 'Áreas e Instalações Alfandegadas ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_23.png" /> Áreas e Instalações Alfandegadas '
            });
var format_AcostagemLongoPrazo_24 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_24 = format_AcostagemLongoPrazo_24.readFeatures(json_AcostagemLongoPrazo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemLongoPrazo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_24.addFeatures(features_AcostagemLongoPrazo_24);
var lyr_AcostagemLongoPrazo_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_24, 
                style: style_AcostagemLongoPrazo_24,
                popuplayertitle: 'Acostagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_24.png" /> Acostagem - Longo Prazo '
            });
var format_AcostagemMdioPrazo_25 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_25 = format_AcostagemMdioPrazo_25.readFeatures(json_AcostagemMdioPrazo_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemMdioPrazo_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_25.addFeatures(features_AcostagemMdioPrazo_25);
var lyr_AcostagemMdioPrazo_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_25, 
                style: style_AcostagemMdioPrazo_25,
                popuplayertitle: 'Acostagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_25.png" /> Acostagem - Médio Prazo '
            });
var format_AcostagemCurtoPrazo_26 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_26 = format_AcostagemCurtoPrazo_26.readFeatures(json_AcostagemCurtoPrazo_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemCurtoPrazo_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_26.addFeatures(features_AcostagemCurtoPrazo_26);
var lyr_AcostagemCurtoPrazo_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_26, 
                style: style_AcostagemCurtoPrazo_26,
                popuplayertitle: 'Acostagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_26.png" /> Acostagem - Curto Prazo '
            });
var format_AcostagemSituaoAtual_27 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_27 = format_AcostagemSituaoAtual_27.readFeatures(json_AcostagemSituaoAtual_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemSituaoAtual_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_27.addFeatures(features_AcostagemSituaoAtual_27);
var lyr_AcostagemSituaoAtual_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_27, 
                style: style_AcostagemSituaoAtual_27,
                popuplayertitle: 'Acostagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_27.png" /> Acostagem - Situação Atual '
            });
var format_ArmazenagemLongoPrazo_28 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_28 = format_ArmazenagemLongoPrazo_28.readFeatures(json_ArmazenagemLongoPrazo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemLongoPrazo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_28.addFeatures(features_ArmazenagemLongoPrazo_28);
var lyr_ArmazenagemLongoPrazo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_28, 
                style: style_ArmazenagemLongoPrazo_28,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_28.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_29 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_29 = format_ArmazenagemMdioPrazo_29.readFeatures(json_ArmazenagemMdioPrazo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemMdioPrazo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_29.addFeatures(features_ArmazenagemMdioPrazo_29);
var lyr_ArmazenagemMdioPrazo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_29, 
                style: style_ArmazenagemMdioPrazo_29,
                popuplayertitle: 'Armazenagem - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_29.png" /> Armazenagem - Médio Prazo'
            });
var format_ArmazenagemCurtoPrazo_30 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_30 = format_ArmazenagemCurtoPrazo_30.readFeatures(json_ArmazenagemCurtoPrazo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemCurtoPrazo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_30.addFeatures(features_ArmazenagemCurtoPrazo_30);
var lyr_ArmazenagemCurtoPrazo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_30, 
                style: style_ArmazenagemCurtoPrazo_30,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_30.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_31 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_31 = format_ArmazenagemSituaoAtual_31.readFeatures(json_ArmazenagemSituaoAtual_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemSituaoAtual_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_31.addFeatures(features_ArmazenagemSituaoAtual_31);
var lyr_ArmazenagemSituaoAtual_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_31, 
                style: style_ArmazenagemSituaoAtual_31,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_31.png" /> Armazenagem - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_35 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_35 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_35.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_35.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_35);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_35, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_35,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_35.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_36 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_36 = format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_36.readFeatures(json_reasAfetassOperaesPorturiasArrendadasMdioPrazo_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_36.addFeatures(features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_36);
var lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_36, 
                style: style_reasAfetassOperaesPorturiasArrendadasMdioPrazo_36,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasMdioPrazo_36.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_37 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_37 = format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_37.readFeatures(json_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_37.addFeatures(features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_37);
var lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_37, 
                style: style_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_37,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasCurtoPrazo_37.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo'
            });
var format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_38 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_38 = format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_38.readFeatures(json_reasAfetassOperaesPorturiasArrendadasSituaoAtual_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_38.addFeatures(features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_38);
var lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_38, 
                style: style_reasAfetassOperaesPorturiasArrendadasSituaoAtual_38,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasSituaoAtual_38.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual '
            });
var format_CargaGeralGranelSlidoGranelLquido_39 = new ol.format.GeoJSON();
var features_CargaGeralGranelSlidoGranelLquido_39 = format_CargaGeralGranelSlidoGranelLquido_39.readFeatures(json_CargaGeralGranelSlidoGranelLquido_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralGranelSlidoGranelLquido_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralGranelSlidoGranelLquido_39.addFeatures(features_CargaGeralGranelSlidoGranelLquido_39);
var lyr_CargaGeralGranelSlidoGranelLquido_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralGranelSlidoGranelLquido_39, 
                style: style_CargaGeralGranelSlidoGranelLquido_39,
                popuplayertitle: 'Carga Geral/Granel Sólido/Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralGranelSlidoGranelLquido_39.png" /> Carga Geral/Granel Sólido/Granel Líquido'
            });
var format_CargaGeralGranelSlidoConteinerizada_40 = new ol.format.GeoJSON();
var features_CargaGeralGranelSlidoConteinerizada_40 = format_CargaGeralGranelSlidoConteinerizada_40.readFeatures(json_CargaGeralGranelSlidoConteinerizada_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralGranelSlidoConteinerizada_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralGranelSlidoConteinerizada_40.addFeatures(features_CargaGeralGranelSlidoConteinerizada_40);
var lyr_CargaGeralGranelSlidoConteinerizada_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralGranelSlidoConteinerizada_40, 
                style: style_CargaGeralGranelSlidoConteinerizada_40,
                popuplayertitle: 'Carga Geral/Granel Sólido/Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralGranelSlidoConteinerizada_40.png" /> Carga Geral/Granel Sólido/Conteinerizada'
            });
var format_CargaGeralGranelSlido_41 = new ol.format.GeoJSON();
var features_CargaGeralGranelSlido_41 = format_CargaGeralGranelSlido_41.readFeatures(json_CargaGeralGranelSlido_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralGranelSlido_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralGranelSlido_41.addFeatures(features_CargaGeralGranelSlido_41);
var lyr_CargaGeralGranelSlido_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralGranelSlido_41, 
                style: style_CargaGeralGranelSlido_41,
                popuplayertitle: 'Carga Geral/Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralGranelSlido_41.png" /> Carga Geral/Granel Sólido'
            });
var format_CargaGeralConteinerizada_42 = new ol.format.GeoJSON();
var features_CargaGeralConteinerizada_42 = format_CargaGeralConteinerizada_42.readFeatures(json_CargaGeralConteinerizada_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralConteinerizada_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralConteinerizada_42.addFeatures(features_CargaGeralConteinerizada_42);
var lyr_CargaGeralConteinerizada_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralConteinerizada_42, 
                style: style_CargaGeralConteinerizada_42,
                popuplayertitle: 'Carga Geral/Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralConteinerizada_42.png" /> Carga Geral/Conteinerizada'
            });
var format_GranelSlido_43 = new ol.format.GeoJSON();
var features_GranelSlido_43 = format_GranelSlido_43.readFeatures(json_GranelSlido_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_43.addFeatures(features_GranelSlido_43);
var lyr_GranelSlido_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_43, 
                style: style_GranelSlido_43,
                popuplayertitle: 'Granel Sólido ',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_43.png" /> Granel Sólido '
            });
var format_CargaGeral_44 = new ol.format.GeoJSON();
var features_CargaGeral_44 = format_CargaGeral_44.readFeatures(json_CargaGeral_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeral_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_44.addFeatures(features_CargaGeral_44);
var lyr_CargaGeral_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_44, 
                style: style_CargaGeral_44,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_44.png" /> Carga Geral'
            });
var format_GranelLquido_45 = new ol.format.GeoJSON();
var features_GranelLquido_45 = format_GranelLquido_45.readFeatures(json_GranelLquido_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquido_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_45.addFeatures(features_GranelLquido_45);
var lyr_GranelLquido_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_45, 
                style: style_GranelLquido_45,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_45.png" /> Granel Líquido'
            });
var format_GranelSlido_46 = new ol.format.GeoJSON();
var features_GranelSlido_46 = format_GranelSlido_46.readFeatures(json_GranelSlido_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_46.addFeatures(features_GranelSlido_46);
var lyr_GranelSlido_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_46, 
                style: style_GranelSlido_46,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_46.png" /> Granel Sólido'
            });
var format_CargaGeralConteinerizada_47 = new ol.format.GeoJSON();
var features_CargaGeralConteinerizada_47 = format_CargaGeralConteinerizada_47.readFeatures(json_CargaGeralConteinerizada_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralConteinerizada_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralConteinerizada_47.addFeatures(features_CargaGeralConteinerizada_47);
var lyr_CargaGeralConteinerizada_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralConteinerizada_47, 
                style: style_CargaGeralConteinerizada_47,
                popuplayertitle: 'Carga Geral/Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralConteinerizada_47.png" /> Carga Geral/Conteinerizada'
            });
var format_CargaGeralGranelSlido_48 = new ol.format.GeoJSON();
var features_CargaGeralGranelSlido_48 = format_CargaGeralGranelSlido_48.readFeatures(json_CargaGeralGranelSlido_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralGranelSlido_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralGranelSlido_48.addFeatures(features_CargaGeralGranelSlido_48);
var lyr_CargaGeralGranelSlido_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralGranelSlido_48, 
                style: style_CargaGeralGranelSlido_48,
                popuplayertitle: 'Carga Geral/Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralGranelSlido_48.png" /> Carga Geral/Granel Sólido'
            });
var format_CargaGeralGranelSlidoConteinerizada_49 = new ol.format.GeoJSON();
var features_CargaGeralGranelSlidoConteinerizada_49 = format_CargaGeralGranelSlidoConteinerizada_49.readFeatures(json_CargaGeralGranelSlidoConteinerizada_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralGranelSlidoConteinerizada_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralGranelSlidoConteinerizada_49.addFeatures(features_CargaGeralGranelSlidoConteinerizada_49);
var lyr_CargaGeralGranelSlidoConteinerizada_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralGranelSlidoConteinerizada_49, 
                style: style_CargaGeralGranelSlidoConteinerizada_49,
                popuplayertitle: 'Carga Geral/Granel Sólido/Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralGranelSlidoConteinerizada_49.png" /> Carga Geral/Granel Sólido/Conteinerizada'
            });
var format_CargaGeralGranelSlidoGranelLquido_50 = new ol.format.GeoJSON();
var features_CargaGeralGranelSlidoGranelLquido_50 = format_CargaGeralGranelSlidoGranelLquido_50.readFeatures(json_CargaGeralGranelSlidoGranelLquido_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralGranelSlidoGranelLquido_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralGranelSlidoGranelLquido_50.addFeatures(features_CargaGeralGranelSlidoGranelLquido_50);
var lyr_CargaGeralGranelSlidoGranelLquido_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralGranelSlidoGranelLquido_50, 
                style: style_CargaGeralGranelSlidoGranelLquido_50,
                popuplayertitle: 'Carga Geral/Granel Sólido/Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralGranelSlidoGranelLquido_50.png" /> Carga Geral/Granel Sólido/Granel Líquido'
            });
var format_GranelLquido_51 = new ol.format.GeoJSON();
var features_GranelLquido_51 = format_GranelLquido_51.readFeatures(json_GranelLquido_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquido_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_51.addFeatures(features_GranelLquido_51);
var lyr_GranelLquido_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_51, 
                style: style_GranelLquido_51,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_51.png" /> Granel Líquido'
            });
var format_GranelSlido_52 = new ol.format.GeoJSON();
var features_GranelSlido_52 = format_GranelSlido_52.readFeatures(json_GranelSlido_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_52.addFeatures(features_GranelSlido_52);
var lyr_GranelSlido_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_52, 
                style: style_GranelSlido_52,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_52.png" /> Granel Sólido'
            });
var format_CargaGeralConteinerizada_53 = new ol.format.GeoJSON();
var features_CargaGeralConteinerizada_53 = format_CargaGeralConteinerizada_53.readFeatures(json_CargaGeralConteinerizada_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralConteinerizada_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralConteinerizada_53.addFeatures(features_CargaGeralConteinerizada_53);
var lyr_CargaGeralConteinerizada_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralConteinerizada_53, 
                style: style_CargaGeralConteinerizada_53,
                popuplayertitle: 'Carga Geral/Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralConteinerizada_53.png" /> Carga Geral/Conteinerizada'
            });
var format_CargaGeralGranelSlido_54 = new ol.format.GeoJSON();
var features_CargaGeralGranelSlido_54 = format_CargaGeralGranelSlido_54.readFeatures(json_CargaGeralGranelSlido_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralGranelSlido_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralGranelSlido_54.addFeatures(features_CargaGeralGranelSlido_54);
var lyr_CargaGeralGranelSlido_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralGranelSlido_54, 
                style: style_CargaGeralGranelSlido_54,
                popuplayertitle: 'Carga Geral/Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralGranelSlido_54.png" /> Carga Geral/Granel Sólido'
            });
var format_CargaGeralGranelSlidoConteinerizada_55 = new ol.format.GeoJSON();
var features_CargaGeralGranelSlidoConteinerizada_55 = format_CargaGeralGranelSlidoConteinerizada_55.readFeatures(json_CargaGeralGranelSlidoConteinerizada_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralGranelSlidoConteinerizada_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralGranelSlidoConteinerizada_55.addFeatures(features_CargaGeralGranelSlidoConteinerizada_55);
var lyr_CargaGeralGranelSlidoConteinerizada_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralGranelSlidoConteinerizada_55, 
                style: style_CargaGeralGranelSlidoConteinerizada_55,
                popuplayertitle: 'Carga Geral/Granel Sólido/Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralGranelSlidoConteinerizada_55.png" /> Carga Geral/Granel Sólido/Conteinerizada'
            });
var format_CargaGeralGranelSlidoGranelLquido_56 = new ol.format.GeoJSON();
var features_CargaGeralGranelSlidoGranelLquido_56 = format_CargaGeralGranelSlidoGranelLquido_56.readFeatures(json_CargaGeralGranelSlidoGranelLquido_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralGranelSlidoGranelLquido_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralGranelSlidoGranelLquido_56.addFeatures(features_CargaGeralGranelSlidoGranelLquido_56);
var lyr_CargaGeralGranelSlidoGranelLquido_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralGranelSlidoGranelLquido_56, 
                style: style_CargaGeralGranelSlidoGranelLquido_56,
                popuplayertitle: 'Carga Geral/Granel Sólido/Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralGranelSlidoGranelLquido_56.png" /> Carga Geral/Granel Sólido/Granel Líquido'
            });
var format_CargaGeral_57 = new ol.format.GeoJSON();
var features_CargaGeral_57 = format_CargaGeral_57.readFeatures(json_CargaGeral_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeral_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_57.addFeatures(features_CargaGeral_57);
var lyr_CargaGeral_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_57, 
                style: style_CargaGeral_57,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_57.png" /> Carga Geral'
            });
var format_CargaGeralGranelSlidoGranelLquido_58 = new ol.format.GeoJSON();
var features_CargaGeralGranelSlidoGranelLquido_58 = format_CargaGeralGranelSlidoGranelLquido_58.readFeatures(json_CargaGeralGranelSlidoGranelLquido_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralGranelSlidoGranelLquido_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralGranelSlidoGranelLquido_58.addFeatures(features_CargaGeralGranelSlidoGranelLquido_58);
var lyr_CargaGeralGranelSlidoGranelLquido_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralGranelSlidoGranelLquido_58, 
                style: style_CargaGeralGranelSlidoGranelLquido_58,
                popuplayertitle: 'Carga Geral/Granel Sólido/Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralGranelSlidoGranelLquido_58.png" /> Carga Geral/Granel Sólido/Granel Líquido'
            });
var format_CargaGeralGranelSlidoConteinerizada_59 = new ol.format.GeoJSON();
var features_CargaGeralGranelSlidoConteinerizada_59 = format_CargaGeralGranelSlidoConteinerizada_59.readFeatures(json_CargaGeralGranelSlidoConteinerizada_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralGranelSlidoConteinerizada_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralGranelSlidoConteinerizada_59.addFeatures(features_CargaGeralGranelSlidoConteinerizada_59);
var lyr_CargaGeralGranelSlidoConteinerizada_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralGranelSlidoConteinerizada_59, 
                style: style_CargaGeralGranelSlidoConteinerizada_59,
                popuplayertitle: 'Carga Geral/Granel Sólido/Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralGranelSlidoConteinerizada_59.png" /> Carga Geral/Granel Sólido/Conteinerizada'
            });
var format_CargaGeralGranelSlido_60 = new ol.format.GeoJSON();
var features_CargaGeralGranelSlido_60 = format_CargaGeralGranelSlido_60.readFeatures(json_CargaGeralGranelSlido_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralGranelSlido_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralGranelSlido_60.addFeatures(features_CargaGeralGranelSlido_60);
var lyr_CargaGeralGranelSlido_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralGranelSlido_60, 
                style: style_CargaGeralGranelSlido_60,
                popuplayertitle: 'Carga Geral/Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralGranelSlido_60.png" /> Carga Geral/Granel Sólido'
            });
var format_CargaGeralConteinerizada_61 = new ol.format.GeoJSON();
var features_CargaGeralConteinerizada_61 = format_CargaGeralConteinerizada_61.readFeatures(json_CargaGeralConteinerizada_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralConteinerizada_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralConteinerizada_61.addFeatures(features_CargaGeralConteinerizada_61);
var lyr_CargaGeralConteinerizada_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralConteinerizada_61, 
                style: style_CargaGeralConteinerizada_61,
                popuplayertitle: 'Carga Geral/Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralConteinerizada_61.png" /> Carga Geral/Conteinerizada'
            });
var format_GranelSlido_62 = new ol.format.GeoJSON();
var features_GranelSlido_62 = format_GranelSlido_62.readFeatures(json_GranelSlido_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_62.addFeatures(features_GranelSlido_62);
var lyr_GranelSlido_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_62, 
                style: style_GranelSlido_62,
                popuplayertitle: 'Granel Sólido ',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_62.png" /> Granel Sólido '
            });
var format_GranelLquido_63 = new ol.format.GeoJSON();
var features_GranelLquido_63 = format_GranelLquido_63.readFeatures(json_GranelLquido_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquido_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_63.addFeatures(features_GranelLquido_63);
var lyr_GranelLquido_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_63, 
                style: style_GranelLquido_63,
                popuplayertitle: 'Granel Líquido ',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_63.png" /> Granel Líquido '
            });
var format_CargaGeral_64 = new ol.format.GeoJSON();
var features_CargaGeral_64 = format_CargaGeral_64.readFeatures(json_CargaGeral_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeral_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_64.addFeatures(features_CargaGeral_64);
var lyr_CargaGeral_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_64, 
                style: style_CargaGeral_64,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_64.png" /> Carga Geral'
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_65 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_65 = format_reasAfetassOperaesPorturiasLongoPrazo_65.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_65.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_65);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_65, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_65,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_65.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_66 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_66 = format_reasAfetassOperaesPorturiasMdioPrazo_66.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_66.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_66);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_66, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_66,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_66.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_67 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_67 = format_reasAfetassOperaesPorturiasCurtoPrazo_67.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_67.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_67);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_67, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_67,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_67.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo'
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_68 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_68 = format_reasAfetassOperaesPorturiasSituaoAtual_68.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_68.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_68);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_68, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_68,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_68.png" /> Áreas Afetas às Operações Portuárias - Situação Atual'
            });
var format_PoligonaldareadoPortoOrganizadodePortoVelho_69 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodePortoVelho_69 = format_PoligonaldareadoPortoOrganizadodePortoVelho_69.readFeatures(json_PoligonaldareadoPortoOrganizadodePortoVelho_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoligonaldareadoPortoOrganizadodePortoVelho_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodePortoVelho_69.addFeatures(features_PoligonaldareadoPortoOrganizadodePortoVelho_69);
var lyr_PoligonaldareadoPortoOrganizadodePortoVelho_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodePortoVelho_69, 
                style: style_PoligonaldareadoPortoOrganizadodePortoVelho_69,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Porto Velho',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodePortoVelho_69.png" /> Poligonal da Área do Porto Organizado de Porto Velho'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodePortoVelho_69,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado '});
var group_reasAfetassOperaesPorturia = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_65,lyr_reasAfetassOperaesPorturiasMdioPrazo_66,lyr_reasAfetassOperaesPorturiasCurtoPrazo_67,lyr_reasAfetassOperaesPorturiasSituaoAtual_68,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuária'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual = new ol.layer.Group({
                                layers: [lyr_CargaGeralGranelSlidoGranelLquido_58,lyr_CargaGeralGranelSlidoConteinerizada_59,lyr_CargaGeralGranelSlido_60,lyr_CargaGeralConteinerizada_61,lyr_GranelSlido_62,lyr_GranelLquido_63,lyr_CargaGeral_64,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Situação Atual '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo = new ol.layer.Group({
                                layers: [lyr_GranelLquido_51,lyr_GranelSlido_52,lyr_CargaGeralConteinerizada_53,lyr_CargaGeralGranelSlido_54,lyr_CargaGeralGranelSlidoConteinerizada_55,lyr_CargaGeralGranelSlidoGranelLquido_56,lyr_CargaGeral_57,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Curto Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo = new ol.layer.Group({
                                layers: [lyr_CargaGeral_44,lyr_GranelLquido_45,lyr_GranelSlido_46,lyr_CargaGeralConteinerizada_47,lyr_CargaGeralGranelSlido_48,lyr_CargaGeralGranelSlidoConteinerizada_49,lyr_CargaGeralGranelSlidoGranelLquido_50,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Médio Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo = new ol.layer.Group({
                                layers: [lyr_CargaGeralGranelSlidoGranelLquido_39,lyr_CargaGeralGranelSlidoConteinerizada_40,lyr_CargaGeralGranelSlido_41,lyr_CargaGeralConteinerizada_42,lyr_GranelSlido_43,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Longo Prazo'});
var group_reasAfetassOperaesPorturiaArrendadas = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_36,lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_37,lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_38,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuária Arrendadas'});
var group_reasAfetassOperaesPorturiaDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_35,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuária Disponíveis para Arrendamento'});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_28,lyr_ArmazenagemMdioPrazo_29,lyr_ArmazenagemCurtoPrazo_30,lyr_ArmazenagemSituaoAtual_31,],
                                fold: 'open',
                                title: 'Armazenagem'});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_24,lyr_AcostagemMdioPrazo_25,lyr_AcostagemCurtoPrazo_26,lyr_AcostagemSituaoAtual_27,],
                                fold: 'open',
                                title: 'Acostagem'});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadas_23,],
                                fold: 'open',
                                title: 'Àreas e Instalações Alfandegadas'});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_19,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_20,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_21,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_22,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias  '});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_18,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos'});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_14,lyr_AcessosRodoviriosInternosMdioPrazo_15,lyr_AcessosRodoviriosInternosCurtoPrazo_16,lyr_AcessosRodoviriosInternosSituaoAtual_17,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos'});
var group_AcessosHidroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosHidroviriosExternos_13,],
                                fold: 'open',
                                title: 'Acessos Hidroviários Externos'});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_9,lyr_CanaisdeAcessoMdioPrazo_10,lyr_CanaisdeAcessoCurtoPrazo_11,lyr_CanaisdeAcessoSituaoAtual_12,],
                                fold: 'open',
                                title: 'Canais de Acesso'});
var group_BaciasdeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_5,lyr_BaciasdeEvoluoMdioPrazo_6,lyr_BaciasdeEvoluoCurtoPrazo_7,lyr_BaciasdeEvoluoSituaoAtual_8,],
                                fold: 'open',
                                title: 'Bacias de Evolução'});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_1,lyr_FundeadourosMdioPrazo_2,lyr_FundeadourosCurtoPrazo_3,lyr_FundeadourosSituaoAtual_4,],
                                fold: 'open',
                                title: 'Fundeadouros'});

lyr_GoogleSatellite_0.setVisible(true);lyr_FundeadourosLongoPrazo_1.setVisible(false);lyr_FundeadourosMdioPrazo_2.setVisible(false);lyr_FundeadourosCurtoPrazo_3.setVisible(false);lyr_FundeadourosSituaoAtual_4.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_5.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_6.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_7.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_8.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_9.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_10.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_11.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_12.setVisible(false);lyr_AcessosHidroviriosExternos_13.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_14.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_15.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_16.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_17.setVisible(false);lyr_AcessosRodoviriosExternos_18.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_19.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_20.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_21.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_22.setVisible(false);lyr_reaseInstalaesAlfandegadas_23.setVisible(false);lyr_AcostagemLongoPrazo_24.setVisible(false);lyr_AcostagemMdioPrazo_25.setVisible(false);lyr_AcostagemCurtoPrazo_26.setVisible(false);lyr_AcostagemSituaoAtual_27.setVisible(false);lyr_ArmazenagemLongoPrazo_28.setVisible(false);lyr_ArmazenagemMdioPrazo_29.setVisible(false);lyr_ArmazenagemCurtoPrazo_30.setVisible(false);lyr_ArmazenagemSituaoAtual_31.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_35.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_36.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_37.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_38.setVisible(false);lyr_CargaGeralGranelSlidoGranelLquido_39.setVisible(false);lyr_CargaGeralGranelSlidoConteinerizada_40.setVisible(false);lyr_CargaGeralGranelSlido_41.setVisible(false);lyr_CargaGeralConteinerizada_42.setVisible(false);lyr_GranelSlido_43.setVisible(false);lyr_CargaGeral_44.setVisible(false);lyr_GranelLquido_45.setVisible(false);lyr_GranelSlido_46.setVisible(false);lyr_CargaGeralConteinerizada_47.setVisible(false);lyr_CargaGeralGranelSlido_48.setVisible(false);lyr_CargaGeralGranelSlidoConteinerizada_49.setVisible(false);lyr_CargaGeralGranelSlidoGranelLquido_50.setVisible(false);lyr_GranelLquido_51.setVisible(false);lyr_GranelSlido_52.setVisible(false);lyr_CargaGeralConteinerizada_53.setVisible(false);lyr_CargaGeralGranelSlido_54.setVisible(false);lyr_CargaGeralGranelSlidoConteinerizada_55.setVisible(false);lyr_CargaGeralGranelSlidoGranelLquido_56.setVisible(false);lyr_CargaGeral_57.setVisible(false);lyr_CargaGeralGranelSlidoGranelLquido_58.setVisible(false);lyr_CargaGeralGranelSlidoConteinerizada_59.setVisible(false);lyr_CargaGeralGranelSlido_60.setVisible(false);lyr_CargaGeralConteinerizada_61.setVisible(false);lyr_GranelSlido_62.setVisible(false);lyr_GranelLquido_63.setVisible(false);lyr_CargaGeral_64.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_65.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_66.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_67.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_68.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodePortoVelho_69.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Fundeadouros,group_BaciasdeEvoluo,group_CanaisdeAcesso,group_AcessosHidroviriosExternos,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_reasNoAfetassOperaesPorturias,group_reaseInstalaesAlfandegadas,group_Acostagem,group_Armazenagem,group_reasAfetassOperaesPorturiaDisponveisparaArrendamento,group_reasAfetassOperaesPorturiaArrendadas,group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual,group_reasAfetassOperaesPorturia,group_PoligonaldareadoPortoOrganizado];
lyr_FundeadourosLongoPrazo_1.set('fieldAliases', {'N. Ident.': 'Número de Identificação', 'Fun��o': 'Função ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosMdioPrazo_2.set('fieldAliases', {'N. Ident.': 'Número de Identificação ', 'Fun��o': 'Função ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosCurtoPrazo_3.set('fieldAliases', {'N. Ident.': 'Número de Identificação ', 'Fun��o': 'Função ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosSituaoAtual_4.set('fieldAliases', {'N. Ident.': 'Número de Identificação ', 'Fun��o': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoLongoPrazo_5.set('fieldAliases', {'Fun��o': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoMdioPrazo_6.set('fieldAliases', {'Fun��o': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoCurtoPrazo_7.set('fieldAliases', {'Fun��o': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoSituaoAtual_8.set('fieldAliases', {'Fun��o': 'Função ', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoLongoPrazo_9.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoMdioPrazo_10.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoCurtoPrazo_11.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoSituaoAtual_12.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_AcessosHidroviriosExternos_13.set('fieldAliases', {'Nome': 'Nome', 'Atualiza': 'Atualização ', 'Calado Min': 'Calado Mínimo (m) ', 'Calado Max': 'Calado Máximo (m) ', });
lyr_AcessosRodoviriosInternosLongoPrazo_14.set('fieldAliases', {'Nº Pistas': 'Número de Pistas de Rolamento ', 'Ident.': 'Identificação ', });
lyr_AcessosRodoviriosInternosMdioPrazo_15.set('fieldAliases', {'Nº Pistas': 'Número de Pistas de Rolamento ', 'Ident.': 'Identificação ', });
lyr_AcessosRodoviriosInternosCurtoPrazo_16.set('fieldAliases', {'Nº Pistas': 'Número de Pistas de Rolamento ', 'Ident.': 'Identificação ', });
lyr_AcessosRodoviriosInternosSituaoAtual_17.set('fieldAliases', {'N� Pistas': 'Número de Pistas de Rolamento ', 'Ident.': 'Identificação ', });
lyr_AcessosRodoviriosExternos_18.set('fieldAliases', {'NOME': 'Nome ', 'SIGLA': 'Sigla ', 'JURISDI�?': 'Jurisdição ', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_19.set('fieldAliases', {'Nome': 'Nome', 'Destina�?': 'Destinação ', '�reas': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_20.set('fieldAliases', {'Nome': 'Nome', 'Destina�?': 'Destinação ', '�reas': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_21.set('fieldAliases', {'Nome': 'Nome', 'Destina�?': 'Destinação ', '�rea': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_22.set('fieldAliases', {'Nome': 'Nome', 'Destina�?': 'Destinação ', '�reas': 'Área (m²) ', });
lyr_reaseInstalaesAlfandegadas_23.set('fieldAliases', {'Ins. Legal': 'Instrumento Legal ', 'Nome': 'Nome', });
lyr_AcostagemLongoPrazo_24.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Ber�o': 'Identificador do Berço ', 'C. Const': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemMdioPrazo_25.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Ber�o': 'Identificador do Berço ', 'C. Const': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemCurtoPrazo_26.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Ber�o': 'Identificador do Berço ', 'C. Const': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemSituaoAtual_27.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Ber�o': 'Identificador do Berço ', 'C. Const': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_ArmazenagemLongoPrazo_28.set('fieldAliases', {'NOME': 'Nome', 'T. instal.': 'Tipo de Instalação', 'Capacidade': 'Capacidade', 'Volume': 'Volume', '�rea': 'Área (m²)', });
lyr_ArmazenagemMdioPrazo_29.set('fieldAliases', {'NOME': 'Nome', 'T. instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', '�rea': 'Área (m²) ', });
lyr_ArmazenagemCurtoPrazo_30.set('fieldAliases', {'NOME': 'Nome', 'T. instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', '�rea': 'Área (m²) ', });
lyr_ArmazenagemSituaoAtual_31.set('fieldAliases', {'NOME': 'Nome', 'T. instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', '�rea': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', '�rea': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', '�rea': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', '�rea': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_35.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', '�rea': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_36.set('fieldAliases', {'NOME': 'Nome', 'Arrend.': 'Arrendatário ', 'N� Cont.': 'Número do Contrato ', 'D. In�cio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato', 'P. Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', '�rea': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_37.set('fieldAliases', {'NOME': 'Nome', 'Arrend.': 'Arrendatário ', 'N� Cont.': 'Número do Contrato ', 'D. In�cio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P. Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', '�rea': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_38.set('fieldAliases', {'NOME': 'Nome', 'Arrend.': 'Arrendatário ', 'N� Cont.': 'Número do Contrato ', 'D. In�cio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P. Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', '�rea': 'Área (m²) ', });
lyr_CargaGeralGranelSlidoGranelLquido_39.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_CargaGeralGranelSlidoConteinerizada_40.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_CargaGeralGranelSlido_41.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_CargaGeralConteinerizada_42.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_GranelSlido_43.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_CargaGeral_44.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_GranelLquido_45.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_GranelSlido_46.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_CargaGeralConteinerizada_47.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_CargaGeralGranelSlido_48.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_CargaGeralGranelSlidoConteinerizada_49.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_CargaGeralGranelSlidoGranelLquido_50.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_GranelLquido_51.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_GranelSlido_52.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_CargaGeralConteinerizada_53.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_CargaGeralGranelSlido_54.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_CargaGeralGranelSlidoConteinerizada_55.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_CargaGeralGranelSlidoGranelLquido_56.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_CargaGeral_57.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_CargaGeralGranelSlidoGranelLquido_58.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_CargaGeralGranelSlidoConteinerizada_59.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_CargaGeralGranelSlido_60.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_CargaGeralConteinerizada_61.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_GranelSlido_62.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_GranelLquido_63.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_CargaGeral_64.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_65.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_66.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_67.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_68.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal': 'Tipo de Instalação ', '�rea': 'Área(m²) ', });
lyr_PoligonaldareadoPortoOrganizadodePortoVelho_69.set('fieldAliases', {'Name': 'Anexo', 'ins. legal': 'Instrumento Legal ', });
lyr_FundeadourosLongoPrazo_1.set('fieldImages', {'N. Ident.': 'TextEdit', 'Fun��o': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosMdioPrazo_2.set('fieldImages', {'N. Ident.': 'TextEdit', 'Fun��o': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_3.set('fieldImages', {'N. Ident.': 'TextEdit', 'Fun��o': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosSituaoAtual_4.set('fieldImages', {'N. Ident.': 'TextEdit', 'Fun��o': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoLongoPrazo_5.set('fieldImages', {'Fun��o': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_6.set('fieldImages', {'Fun��o': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_7.set('fieldImages', {'Fun��o': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_8.set('fieldImages', {'Fun��o': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_9.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_10.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_11.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_12.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_AcessosHidroviriosExternos_13.set('fieldImages', {'Nome': 'TextEdit', 'Atualiza': 'TextEdit', 'Calado Min': 'TextEdit', 'Calado Max': 'TextEdit', });
lyr_AcessosRodoviriosInternosLongoPrazo_14.set('fieldImages', {'Nº Pistas': 'TextEdit', 'Ident.': 'TextEdit', });
lyr_AcessosRodoviriosInternosMdioPrazo_15.set('fieldImages', {'Nº Pistas': 'TextEdit', 'Ident.': 'TextEdit', });
lyr_AcessosRodoviriosInternosCurtoPrazo_16.set('fieldImages', {'Nº Pistas': 'TextEdit', 'Ident.': 'TextEdit', });
lyr_AcessosRodoviriosInternosSituaoAtual_17.set('fieldImages', {'N� Pistas': 'TextEdit', 'Ident.': 'TextEdit', });
lyr_AcessosRodoviriosExternos_18.set('fieldImages', {'NOME': 'TextEdit', 'SIGLA': 'TextEdit', 'JURISDI�?': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_19.set('fieldImages', {'Nome': 'TextEdit', 'Destina�?': 'TextEdit', '�reas': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_20.set('fieldImages', {'Nome': 'TextEdit', 'Destina�?': 'TextEdit', '�reas': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_21.set('fieldImages', {'Nome': 'TextEdit', 'Destina�?': 'TextEdit', '�rea': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_22.set('fieldImages', {'Nome': 'TextEdit', 'Destina�?': 'TextEdit', '�reas': 'TextEdit', });
lyr_reaseInstalaesAlfandegadas_23.set('fieldImages', {'Ins. Legal': 'TextEdit', 'Nome': 'TextEdit', });
lyr_AcostagemLongoPrazo_24.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Ber�o': 'TextEdit', 'C. Const': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemMdioPrazo_25.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Ber�o': 'TextEdit', 'C. Const': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemCurtoPrazo_26.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Ber�o': 'TextEdit', 'C. Const': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemSituaoAtual_27.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Ber�o': 'TextEdit', 'C. Const': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_28.set('fieldImages', {'NOME': 'TextEdit', 'T. instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', '�rea': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_29.set('fieldImages', {'NOME': 'TextEdit', 'T. instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', '�rea': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_30.set('fieldImages', {'NOME': 'TextEdit', 'T. instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', '�rea': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_31.set('fieldImages', {'NOME': 'TextEdit', 'T. instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', '�rea': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', '�rea': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', '�rea': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', '�rea': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_35.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', '�rea': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_36.set('fieldImages', {'NOME': 'TextEdit', 'Arrend.': 'TextEdit', 'N� Cont.': 'TextEdit', 'D. In�cio': 'TextEdit', 'D. Term.': 'TextEdit', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', '�rea': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_37.set('fieldImages', {'NOME': 'TextEdit', 'Arrend.': 'TextEdit', 'N� Cont.': 'TextEdit', 'D. In�cio': 'TextEdit', 'D. Term.': 'TextEdit', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', '�rea': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_38.set('fieldImages', {'NOME': 'TextEdit', 'Arrend.': 'TextEdit', 'N� Cont.': 'TextEdit', 'D. In�cio': 'TextEdit', 'D. Term.': 'TextEdit', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', '�rea': 'TextEdit', });
lyr_CargaGeralGranelSlidoGranelLquido_39.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_CargaGeralGranelSlidoConteinerizada_40.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_CargaGeralGranelSlido_41.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_CargaGeralConteinerizada_42.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_GranelSlido_43.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_CargaGeral_44.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_GranelLquido_45.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_GranelSlido_46.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_CargaGeralConteinerizada_47.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_CargaGeralGranelSlido_48.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_CargaGeralGranelSlidoConteinerizada_49.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_CargaGeralGranelSlidoGranelLquido_50.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_GranelLquido_51.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_GranelSlido_52.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_CargaGeralConteinerizada_53.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_CargaGeralGranelSlido_54.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_CargaGeralGranelSlidoConteinerizada_55.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_CargaGeralGranelSlidoGranelLquido_56.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_CargaGeral_57.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_CargaGeralGranelSlidoGranelLquido_58.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_CargaGeralGranelSlidoConteinerizada_59.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_CargaGeralGranelSlido_60.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_CargaGeralConteinerizada_61.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_GranelSlido_62.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_GranelLquido_63.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_CargaGeral_64.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_65.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_66.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_67.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_68.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal': 'TextEdit', '�rea': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodePortoVelho_69.set('fieldImages', {'Name': 'TextEdit', 'ins. legal': 'TextEdit', });
lyr_FundeadourosLongoPrazo_1.set('fieldLabels', {'N. Ident.': 'inline label - visible with data', 'Fun��o': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_2.set('fieldLabels', {'N. Ident.': 'inline label - visible with data', 'Fun��o': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_3.set('fieldLabels', {'N. Ident.': 'inline label - visible with data', 'Fun��o': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_4.set('fieldLabels', {'N. Ident.': 'inline label - visible with data', 'Fun��o': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_5.set('fieldLabels', {'Fun��o': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_6.set('fieldLabels', {'Fun��o': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_7.set('fieldLabels', {'Fun��o': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_8.set('fieldLabels', {'Fun��o': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_9.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_10.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_11.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_12.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_AcessosHidroviriosExternos_13.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Atualiza': 'inline label - visible with data', 'Calado Min': 'inline label - visible with data', 'Calado Max': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_14.set('fieldLabels', {'Nº Pistas': 'inline label - visible with data', 'Ident.': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_15.set('fieldLabels', {'Nº Pistas': 'inline label - visible with data', 'Ident.': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_16.set('fieldLabels', {'Nº Pistas': 'inline label - visible with data', 'Ident.': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_17.set('fieldLabels', {'N� Pistas': 'inline label - visible with data', 'Ident.': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_18.set('fieldLabels', {'NOME': 'inline label - visible with data', 'SIGLA': 'inline label - visible with data', 'JURISDI�?': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_19.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destina�?': 'inline label - visible with data', '�reas': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_20.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destina�?': 'inline label - visible with data', '�reas': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_21.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destina�?': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_22.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destina�?': 'inline label - visible with data', '�reas': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_23.set('fieldLabels', {'Ins. Legal': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_24.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Ber�o': 'inline label - visible with data', 'C. Const': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_25.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Ber�o': 'inline label - visible with data', 'C. Const': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_26.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Ber�o': 'inline label - visible with data', 'C. Const': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_27.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Ber�o': 'inline label - visible with data', 'C. Const': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_28.set('fieldLabels', {'NOME': 'inline label - visible with data', 'T. instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_29.set('fieldLabels', {'NOME': 'inline label - visible with data', 'T. instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_30.set('fieldLabels', {'NOME': 'inline label - visible with data', 'T. instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_31.set('fieldLabels', {'NOME': 'inline label - visible with data', 'T. instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_32.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_33.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_34.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_35.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_36.set('fieldLabels', {'NOME': 'inline label - visible with data', 'Arrend.': 'inline label - visible with data', 'N� Cont.': 'inline label - visible with data', 'D. In�cio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_37.set('fieldLabels', {'NOME': 'inline label - visible with data', 'Arrend.': 'inline label - visible with data', 'N� Cont.': 'inline label - visible with data', 'D. In�cio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_38.set('fieldLabels', {'NOME': 'inline label - visible with data', 'Arrend.': 'inline label - visible with data', 'N� Cont.': 'inline label - visible with data', 'D. In�cio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_CargaGeralGranelSlidoGranelLquido_39.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_CargaGeralGranelSlidoConteinerizada_40.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_CargaGeralGranelSlido_41.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_CargaGeralConteinerizada_42.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_GranelSlido_43.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_CargaGeral_44.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_GranelLquido_45.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_GranelSlido_46.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_CargaGeralConteinerizada_47.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_CargaGeralGranelSlido_48.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_CargaGeralGranelSlidoConteinerizada_49.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_CargaGeralGranelSlidoGranelLquido_50.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_GranelLquido_51.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_GranelSlido_52.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_CargaGeralConteinerizada_53.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_CargaGeralGranelSlido_54.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_CargaGeralGranelSlidoConteinerizada_55.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_CargaGeralGranelSlidoGranelLquido_56.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_CargaGeral_57.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_CargaGeralGranelSlidoGranelLquido_58.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_CargaGeralGranelSlidoConteinerizada_59.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_CargaGeralGranelSlido_60.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_CargaGeralConteinerizada_61.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_GranelSlido_62.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_GranelLquido_63.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_CargaGeral_64.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_65.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_66.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_67.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_68.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal': 'inline label - visible with data', '�rea': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodePortoVelho_69.set('fieldLabels', {'Name': 'inline label - visible with data', 'ins. legal': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodePortoVelho_69.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});