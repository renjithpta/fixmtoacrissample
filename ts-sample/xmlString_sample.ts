const { writeFileSync} = require('fs');
import * as parser from 'fixmtoacrisconverter'


let fileContent = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+
'<!-- ~ Copyright (C) 2020 Snowflake Software Ltd. All rights reserved.  -->'+
'<fx:Flight xmlns:fb="http://www.fixm.aero/base/4.2" xmlns:fx="http://www.fixm.aero/flight/4.2" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">'+
	'<fx:aircraft>'+
		'<fx:aircraftAddress>3C650B</fx:aircraftAddress>'+
		'<fx:aircraftApproachCategory>D</fx:aircraftApproachCategory>'+
		'<fx:aircraftType>'+
			'<fx:type>'+
				'<fx:icaoAircraftTypeDesignator>A346</fx:icaoAircraftTypeDesignator>'+
			'</fx:type>'+
		'</fx:aircraftType>'+
		'<fx:capabilities>'+
			'<fx:communication>'+
				'<fx:communicationCapabilityCode>E2 E3 H M1 Y</fx:communicationCapabilityCode>'+
				'<fx:datalinkCommunicationCapabilityCode>J3 J4 J5</fx:datalinkCommunicationCapabilityCode>'+
				'<fx:otherDatalinkCapabilities>SVM</fx:otherDatalinkCapabilities>'+
				'<fx:selectiveCallingCode>EGBF</fx:selectiveCallingCode>'+
			'</fx:communication>'+
			'<fx:navigation>'+
				'<fx:navigationCapabilityCode>D F G I W X</fx:navigationCapabilityCode>'+
				'<fx:otherNavigationCapabilities>RNVD1E2A1</fx:otherNavigationCapabilities>'+
				'<fx:performanceBasedCode>A1 B1 C1 D1 L1 O1 S1 S2</fx:performanceBasedCode>'+
			'</fx:navigation>'+
			'<fx:standardCapabilities>STANDARD</fx:standardCapabilities>'+
			'<fx:surveillance>'+
				'<fx:surveillanceCapabilityCode>B1 D1 L</fx:surveillanceCapabilityCode>'+
			'</fx:surveillance>'+
		'</fx:capabilities>'+
		'<fx:registration>DAIHK</fx:registration>'+
		'<fx:wakeTurbulence>H</fx:wakeTurbulence>'+
	'</fx:aircraft>'+
	'<fx:arrival>'+
		'<fx:destinationAerodrome>'+
			'<fb:locationIndicator>KLAX</fb:locationIndicator>'+
		'</fx:destinationAerodrome>'+
		'<fx:destinationAerodromeAlternate>'+
			'<fb:locationIndicator>KONT</fb:locationIndicator>'+
		'</fx:destinationAerodromeAlternate>'+
'</fx:arrival>'+
	'<fx:departure>'+
		'<fx:aerodrome>'+
			'<fb:locationIndicator>EDDM</fb:locationIndicator>'+
		'</fx:aerodrome>'+
		'<fx:estimatedOffBlockTime>2018-03-02T10:00:00.000Z</fx:estimatedOffBlockTime>'+
	'</fx:departure>'+
	'<fx:flightIdentification>'+
		'<fx:aircraftIdentification>DLH462</fx:aircraftIdentification>'+
	'</fx:flightIdentification>'+
	'<fx:flightType>S</fx:flightType>'+
	'<fx:gufi codeSpace="urn:uuid">1afa829b-d4ee-46df-a68e-60de0b73c437</fx:gufi>'+
	'<fx:operator>'+
		'<fb:designatorIcao>DLH</fb:designatorIcao>'+
	'</fx:operator>'+
	'<fx:remarks>TCAS</fx:remarks>'+
	'<fx:routeTrajectoryGroup>'+
		'<fx:filed>'+
			'<fx:climbProfile>'+
				'<fx:profilePoint>'+
					'<fx:distance uom="KM">0.0</fx:distance>'+
					'<fx:level>'+
						'<fb:flightLevel uom="SM">44.8</fb:flightLevel>'+
					'</fx:level>'+
					'<fx:time>P0Y0M0DT0H0M0S</fx:time>'+
				'</fx:profilePoint>'+
			'</fx:climbProfile>'+
			'<fx:descentProfile>'+
				'<fx:profilePoint>'+
					'<fx:distance uom="KM">0.0</fx:distance>'+
					'<fx:level>'+
						'<fb:flightLevel uom="SM">1249.7</fb:flightLevel>'+
					'</fx:level>'+
					'<fx:time>P0Y0M0DT0H0M0S</fx:time>'+
				'</fx:profilePoint>'+
			'</fx:descentProfile>'+
			'<fx:element seqNum="0">'+
				'<fx:alongRouteDistance uom="KM">0.0</fx:alongRouteDistance>'+
				'<fx:point4D>'+
					'<fx:level>'+
						'<fb:flightLevel uom="SM">45.0</fb:flightLevel>'+
					'</fx:level>'+
					'<fx:metData>'+
						'<fx:temperature uom="C">2.1</fx:temperature>'+
						'<fx:windDirection uom="DEG">256.0</fx:windDirection>'+
						'<fx:windSpeed uom="M_SEC">7.57</fx:windSpeed>'+
					'</fx:metData>'+
					'<fx:pointProperty>'+
					    '<fx:propertyType>INITIAL_PREDICTION_POINT</fx:propertyType>'+
					'</fx:pointProperty>'+
					'<fx:position srsName="urn:ogc:def:crs:EPSG::4326">'+
					    '<fb:pos>48.35378333333333 11.78608611111111</fb:pos>'+
					'</fx:position>'+
					'<fx:predictedAirspeed uom="KM_H">0.0</fx:predictedAirspeed>'+
					'<fx:time>'+
						'<fx:absoluteTime>2018-03-02T10:10:00.000Z</fx:absoluteTime>'+
					'</fx:time>'+
				'</fx:point4D>'+
				'<fx:routeDesignatorToNextElement>'+
					'<fx:standardInstrumentDeparture>'+
						'<fb:designator>INPUD1S</fb:designator>'+
					'</fx:standardInstrumentDeparture>'+
				'</fx:routeDesignatorToNextElement>'+
			'</fx:element>'+
			'<fx:element seqNum="1">'+
				'<fx:alongRouteDistance uom="KM">10.112</fx:alongRouteDistance>'+
				'<fx:elementStartPoint>'+
					'<fb:designatedPoint>'+
						'<fb:designator>DM051</fb:designator>'+
					'</fb:designatedPoint>'+
				'</fx:elementStartPoint>'+
				'<fx:point4D>'+
					'<fx:level>'+
						'<fb:flightLevel uom="SM">117.0</fb:flightLevel>'+
					'</fx:level>'+
					'<fx:metData>'+
						'<fx:temperature uom="C">-1.7</fx:temperature>'+
						'<fx:windDirection uom="DEG">262.0</fx:windDirection>'+
						'<fx:windSpeed uom="M_SEC">8.66</fx:windSpeed>'+
					'</fx:metData>'+
					'<fx:position srsName="urn:ogc:def:crs:EPSG::4326">'+
					    '<fb:pos>48.3336 11.652766666666666</fb:pos>'+
					'</fx:position>'+
					'<fx:predictedAirspeed uom="KM_H">574.2</fx:predictedAirspeed>'+
					'<fx:time>'+
						'<fx:relativeTimeFromInitialPredictionPoint>P0Y0M0DT0H2M13S</fx:relativeTimeFromInitialPredictionPoint>'+
					'</fx:time>'+
				'</fx:point4D>'+
				'<fx:routeDesignatorToNextElement>'+
					'<fx:standardInstrumentDeparture>'+
						'<fb:designator>INPUD1S</fb:designator>'+
					'</fx:standardInstrumentDeparture>'+
				'</fx:routeDesignatorToNextElement>'+
			'</fx:element>'+
			'<fx:routeInformation>'+
				'<fx:cruisingLevel>'+
					'<fb:flightLevel uom="FL">240.0</fb:flightLevel>'+
				'</fx:cruisingLevel>'+
				'<fx:cruisingSpeed uom="KT">431.0</fx:cruisingSpeed>'+
				'<fx:flightRulesCategory>I</fx:flightRulesCategory>'+
				'<fx:routeText>INPUD1S INPUD Y102 UPALA M726 ANELA/N0479F340 UM726 LASGA DCT KUMER/N0483F360 DCT LBV UP992 ATTUS DCT VES P619 GUNPA/M082F360 DCT 63N010W/M082F380 64N020W 64N030W 63N040W 62N050W/M080F360 DCT NIFTY/M077F340 DCT MIBNO/N0442F340 DCT RODBO DCT 56N080W/N0463F380 5130N09000W/N0460F400 DCT VBI DCT DPR DCT CKW DCT HELPR DCT NORRA J107 OVETO DCT HEC RIIVR2</fx:routeText>'+
				'<fx:totalEstimatedElapsedTime>P0Y0M0DT11H22M0S</fx:totalEstimatedElapsedTime>'+
			'</fx:routeInformation>'+
			'<fx:takeoffMass uom="KG">305523.0</fx:takeoffMass>'+
		'</fx:filed>'+
	'</fx:routeTrajectoryGroup>'+
'</fx:Flight>';

let acrisData  = parser.transformFixmToAcris(fileContent);
console.log("Data : ",acrisData);
writeFileSync("./acris_example1.json",JSON.stringify(acrisData));
