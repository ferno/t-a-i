"use strict";

var build = require("./build.js");

// JavaScript months are 0-indexed so I do this to keep my head straight.
var JANUARY   =  0;
var FEBRUARY  =  1;
var MARCH     =  2;
var APRIL     =  3;
var JULY      =  6;
var AUGUST    =  7;
var SEPTEMBER =  8;
var NOVEMBER  = 10;
var DECEMBER  = 11;

/**
	International Atomic Time incoming!
*/
module.exports = build([
	/*
		Data from IERS/USNO, after a one-time calculation to put it in the format I needed.
		For each of these data points, `atomic` indicates the TAI time when modifications
		were applied to the relationship between UTC and TAI. `offset` and `driftRate`
		provide a linear relationship between TAI and UTC starting from that moment:

		TAI - UTC = AX + B, where:
			A is the `driftRate` in TAI milliseconds per UTC day,
			X is the number of number of UTC days since the Unix epoch, 1970-01-01 00:00:00 UTC
			B was the `offset` in milliseconds between TAI and UTC at that time.

		Note that just because the X starts at the Unix epoch does NOT indicate that the 
		linear relationship extends forward or backward to that instant; it begins at `atomic`
		and ends at the beginning of the next period.

		Since `atomic` is a 64-bit float, it cannot exactly represent the beginning of any
		period. Instead we use the *next lowest float*, which is not always the closest
		float.
	*/
	{atomic: /* 1961-01-01 00:00:01.422818000 */ - 283996798577.18195, offset:  5682.770000, driftRate: 1.296000},
	{atomic: /* 1961-08-01 00:00:01.647570000 */ - 265679998352.43   , offset:  5632.770000, driftRate: 1.296000},
	{atomic: /* 1962-01-01 00:00:01.845858000 */ - 252460798154.142  , offset:  5127.848400, driftRate: 1.123200},
	{atomic: /* 1963-11-01 00:00:02.697278800 */ - 194659197302.7212 , offset:  5227.848400, driftRate: 1.123200},
	{atomic: /* 1964-01-01 00:00:02.765794000 */ - 189388797234.206  , offset:  5606.626000, driftRate: 1.296000},
	{atomic: /* 1964-04-01 00:00:02.983730000 */ - 181526397016.27   , offset:  5706.626000, driftRate: 1.296000},
	{atomic: /* 1964-09-01 00:00:03.282018000 */ - 168307196717.982  , offset:  5806.626000, driftRate: 1.296000},
	{atomic: /* 1965-01-01 00:00:03.540130000 */ - 157766396459.87   , offset:  5906.626000, driftRate: 1.296000},
	{atomic: /* 1965-03-01 00:00:03.716594000 */ - 152668796283.40598, offset:  6006.626000, driftRate: 1.296000},
	{atomic: /* 1965-07-01 00:00:03.974706000 */ - 142127996025.29398, offset:  6106.626000, driftRate: 1.296000},
	{atomic: /* 1965-09-01 00:00:04.155058000 */ - 136771195844.94199, offset:  6206.626000, driftRate: 1.296000},
	{atomic: /* 1966-01-01 00:00:04.313170000 */ - 126230395686.82999, offset:  8100.082000, driftRate: 2.592000},
	{atomic: /* 1968-02-01 00:00:06.185682000 */ -  60479993814.31799, offset:  8000.082000, driftRate: 2.592000},

	// From this point onwards UTC and TAI seconds are precisely the same length, yielding a
	// drift rate of zero.
	{atomic: /* 1972-01-01 00:00:10.000000000 */    63072010000      , offset: 10000.000000, driftRate: 0.000000},
	{atomic: /* 1972-07-01 00:00:11.000000000 */    78796811000      , offset: 11000.000000, driftRate: 0.000000},
	{atomic: /* 1973-01-01 00:00:12.000000000 */    94694412000      , offset: 12000.000000, driftRate: 0.000000},
	{atomic: /* 1974-01-01 00:00:13.000000000 */   126230413000      , offset: 13000.000000, driftRate: 0.000000},
	{atomic: /* 1975-01-01 00:00:14.000000000 */   157766414000      , offset: 14000.000000, driftRate: 0.000000},
	{atomic: /* 1976-01-01 00:00:15.000000000 */   189302415000      , offset: 15000.000000, driftRate: 0.000000},
	{atomic: /* 1977-01-01 00:00:16.000000000 */   220924816000      , offset: 16000.000000, driftRate: 0.000000},
	{atomic: /* 1978-01-01 00:00:17.000000000 */   252460817000      , offset: 17000.000000, driftRate: 0.000000},
	{atomic: /* 1979-01-01 00:00:18.000000000 */   283996818000      , offset: 18000.000000, driftRate: 0.000000},
	{atomic: /* 1980-01-01 00:00:19.000000000 */   315532819000      , offset: 19000.000000, driftRate: 0.000000},
	{atomic: /* 1981-07-01 00:00:20.000000000 */   362793620000      , offset: 20000.000000, driftRate: 0.000000},
	{atomic: /* 1982-07-01 00:00:21.000000000 */   394329621000      , offset: 21000.000000, driftRate: 0.000000},
	{atomic: /* 1983-07-01 00:00:22.000000000 */   425865622000      , offset: 22000.000000, driftRate: 0.000000},
	{atomic: /* 1985-07-01 00:00:23.000000000 */   489024023000      , offset: 23000.000000, driftRate: 0.000000},
	{atomic: /* 1988-01-01 00:00:24.000000000 */   567993624000      , offset: 24000.000000, driftRate: 0.000000},
	{atomic: /* 1990-01-01 00:00:25.000000000 */   631152025000      , offset: 25000.000000, driftRate: 0.000000},
	{atomic: /* 1991-01-01 00:00:26.000000000 */   662688026000      , offset: 26000.000000, driftRate: 0.000000},
	{atomic: /* 1992-07-01 00:00:27.000000000 */   709948827000      , offset: 27000.000000, driftRate: 0.000000},
	{atomic: /* 1993-07-01 00:00:28.000000000 */   741484828000      , offset: 28000.000000, driftRate: 0.000000},
	{atomic: /* 1994-07-01 00:00:29.000000000 */   773020829000      , offset: 29000.000000, driftRate: 0.000000},
	{atomic: /* 1996-01-01 00:00:30.000000000 */   820454430000      , offset: 30000.000000, driftRate: 0.000000},
	{atomic: /* 1997-07-01 00:00:31.000000000 */   867715231000      , offset: 31000.000000, driftRate: 0.000000},
	{atomic: /* 1999-01-01 00:00:32.000000000 */   915148832000      , offset: 32000.000000, driftRate: 0.000000},
	{atomic: /* 2006-01-01 00:00:33.000000000 */  1136073633000      , offset: 33000.000000, driftRate: 0.000000},
	{atomic: /* 2009-01-01 00:00:34.000000000 */  1230768034000      , offset: 34000.000000, driftRate: 0.000000},
	{atomic: /* 2012-07-01 00:00:35.000000000 */  1341100835000      , offset: 35000.000000, driftRate: 0.000000},
	{atomic: /* 2015-07-01 00:00:36.000000000 */  1435708836000      , offset: 36000.000000, driftRate: 0.000000},
	{atomic: /* 2017-01-01 00:00:37.000000000 */  1483228837000      , offset: 37000.000000, driftRate: 0.000000}
]);

module.exports.build = build;
