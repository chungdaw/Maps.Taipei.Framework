/*
 * Converter for Maps.Taipei ver. 0.1
 * Copyright (C) 2016 Chung-Dau Wang(王崇道)
*/

var fs = require('fs');
var cvrt_csv2geojson = require('csv2geojson');
var cvrt_kml2geojson = require('togeojson');
var dom_parser = require('xmldom').DOMParser;


//input: shapefile, csv, kml, or  geojson
//output: geojson, kml, csv
//WGS84 EPSG:3857 <-> WGS84 EPSG:4326


function MapsTaipei(name) {
	this.name = name;
}

MapsTaipei.prototype.greet = function() {
	return "hello world";
}							

MapsTaipei.prototype.csv2geojson = function(raw) {
	cvrt_csv2geojson.csv2geojson(raw, function(err, data) {
	});
}  	  
MapsTaipei.prototype.csv2geojson = function(raw_path) {
	kml = new dom_parser().parseFromString(fs.readFileSync(raw_path, 'utf8'));
	var converted = cvrt_kml2geojson.kml(kml);
}


module.exports = MapsTaipei;

