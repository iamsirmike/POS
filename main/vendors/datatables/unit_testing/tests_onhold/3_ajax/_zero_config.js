// DATA_TEMPLATE: empty_table
oTest.fnStart( "Sanity checks for DataTables with data from JS" );

oTest.fnTest( 
	"jQuery.dataTable function",
	null,
	function () { return typeof jQuery().dataTable == "function"; }
);

oTest.fnTest(
	"jQuery.dataTableSettings storage array",
	null,
	function () { return typeof jQuery().dataTableSettings == "object"; }
);

oTest.fnTest(
	"jQuery.dataTableExt plugin object",
	null,
	function () { return typeof jQuery().dataTableExt == "object"; }
);

$(document).ready( function () {
	var oInit = {
		"sAjaxSource": "../../../examples/ajax/sources/arrays.txt"
	};
	$('#example').dataTable( oInit );
	
	/* Basic checks */
	oTest.fnWaitTest( 
		"Length changing div exists",
		null,
		function () { return document.getElementById('example_length') != null; }
	);
	
	oTest.fnTest( 
		"Filtering div exists",
		null,
		function () { return document.getElementById('example_filter') != null; }
	);
	
	oTest.fnTest( 
		"Information div exists",
		null,
		function () { return document.getElementById('example_info') != null; }
	);
	
	oTest.fnTest( 
		"Pagination div exists",
		null,
		function () { return document.getElementById('example_paginate') != null; }
	);
	
	oTest.fnTest( 
		"Processing div is off by default",
		null,
		function () { return document.getElementById('example_processing') == null; }
	);
	
	oTest.fnWaitTest( 
		"10 rows shown on the first page",
		null,
		function () { return $('#example tbody tr').length == 10; }
	);
	
	oTest.fnTest( 
		"Initial sort occured",
		null,
		function () { return $('#example tbody td:eq(0)').html() == "Gecko"; }
	);
	
	/* Need to use the WaitTest for sorting due to the setTimeout datatables uses */
	oTest.fnTest( 
		"Sorting (first click) on second column",
		function () { $('#example thead th:eq(1)').click(); },
		function () { return $('#example tbody td:eq(1)').html() == "All others"; }
	);
	
	oTest.fnTest( 
		"Sorting (second click) on second column",
		function () { $('#example thead th:eq(1)').click(); },
		function () { return $('#example tbody td:eq(1)').html() == "Seamonkey 1.1"; }
	);
	
	oTest.fnTest( 
		"Sorting (third click) on second column",
		function () { $('#example thead th:eq(1)').click(); },
		function () { return $('#example tbody td:eq(1)').html() == "All others"; }
	);
	
	oTest.fnTest( 
		"Sorting (first click) on numeric column",
		function () { $('#example thead th:eq(3)').click(); },
		function () { return $('#example tbody td:eq(3)').html() == "-"; }
	);
	
	oTest.fnTest( 
		"Sorting (second click) on numeric column",
		function () { $('#example thead th:eq(3)').click(); },
		function () { return $('#example tbody td:eq(3)').html() == "522.1"; }
	);
	
	oTest.fnTest( 
		"Sorting multi-column (first click)",
		function () { 
			$('#example thead th:eq(0)').click();
			oDispacher.click( $('#example thead th:eq(1)')[0], { 'shift': true } ); },
		function () { var b = 
			$('#example tbody td:eq(0)').html() == "Gecko" && 
			$('#example tbody td:eq(1)').html() == "Camino 1.0"; return b; }
	);
	
	oTest.fnTest( 
		"Sorting multi-column - sorting second column only",
		function () { 
			$('#example thead th:eq(1)').click(); },
		function () { return $('#example tbody td:eq(1)').html() == "All others"; }
	);
	
	/* Basic paging */
	oTest.fnTest( 
		"Paging to second page",
		function () { $('#example_next').click(); },
		function () { return $('#example tbody td:eq(1)').html() == "IE Mobile"; }
	);
	
	oTest.fnTest( 
		"Paging to first page",
		function () { $('#example_previous').click(); },
		function () { return $('#example tbody td:eq(1)').html() == "All others"; }
	);
	
	oTest.fnTest( 
		"Attempting to page back beyond the first page",
		function () { $('#example_previous').click(); },
		function () { return $('#example tbody td:eq(1)').html() == "All others"; }
	);
	
	/* Changing length */
	oTest.fnTest( 
		"Changing table length to 25 records",
		function () { $("select[name=example_length]").val('25').change(); },
		function () { return $('#example tbody tr').length == 25; }
	);
	
	oTest.fnTest( 
		"Changing table length to 50 records",
		function () { $("select[name=example_length]").val('50').change(); },
		function () { return $('#example tbody tr').length == 50; }
	);
	
	oTest.fnTest( 
		"Changing table length to 100 records",
		function () { $("select[name=example_length]").val('100').change(); },
		function () { return $('#example tbody tr').length == 57; }
	);
	
	oTest.fnTest( 
		"Changing table length to 10 records",
		function () { $("select[name=example_length]").val('10').change(); },
		function () { return $('#example tbody tr').length == 10; }
	);
	
	/*
	 * Information element
	 */
	oTest.fnTest(
		"Information on zero config",
		null,
		function () { return document.getElementById('example_info').innerHTML == "Showing 1 to 10 of 57 entries"; }
	);
	
	oTest.fnTest(
		"Information on second page",
		function () { $('#example_next').click(); },
		function () { return document.getElementById('example_info').innerHTML == "Showing 11 to 20 of 57 entries"; }
	);
	
	oTest.fnTest(
		"Information on third page",
		function () { $('#example_next').click(); },
		function () { return document.getElementById('example_info').innerHTML == "Showing 21 to 30 of 57 entries"; }
	);
	
	oTest.fnTest(
		"Information on last page",
		function () {
			$('#example_next').click();
			$('#example_next').click();
			$('#example_next').click();
		},
		function () { return document.getElementById('example_info').innerHTML == "Showing 51 to 57 of 57 entries"; }
	);
	
	oTest.fnTest(
		"Information back on first page",
		function () {
			$('#example_previous').click();
			$('#example_previous').click();
			$('#example_previous').click();
			$('#example_previous').click();
			$('#example_previous').click();
		},
		function () { return document.getElementById('example_info').innerHTML == "Showing 1 to 10 of 57 entries"; }
	);
	
	oTest.fnTest(
		"Information with 25 records",
		function () { $("select[name=example_length]").val('25').change(); },
		function () { return document.getElementById('example_info').innerHTML == "Showing 1 to 25 of 57 entries"; }
	);
	
	oTest.fnTest(
		"Information with 25 records - second page",
		function () { $('#example_next').click(); },
		function () { return document.getElementById('example_info').innerHTML == "Showing 26 to 50 of 57 entries"; }
	);
	
	oTest.fnTest(
		"Information with 100 records - first page",
		function () {
			$('#example_previous').click();
			$("select[name=example_length]").val('100').change();
		},
		function () { return document.getElementById('example_info').innerHTML == "Showing 1 to 57 of 57 entries"; }
	);
	
	oTest.fnTest(
		"Information back to 10 records",
		function () {
			$('#example_previous').click();
			$("select[name=example_length]").val('10').change();
		},
		function () { return document.getElementById('example_info').innerHTML == "Showing 1 to 10 of 57 entries"; }
	);
	
	oTest.fnTest(
		"Information with filter 'Win'",
		function () { $('#example_filter input').val("Win").keyup(); },
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 1 to 10 of 31 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Information with filter 'Win' second page",
		function () { $('#example_next').click(); },
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 11 to 20 of 31 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Information with filter 'Win' last page",
		function () {
			$('#example_next').click();
			$('#example_next').click();
		},
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 31 to 31 of 31 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Information with filter 'Win' back to first page",
		function () {
			$('#example_previous').click();
			$('#example_previous').click();
			$('#example_previous').click();
		},
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 1 to 10 of 31 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Information with filter 'Win' second page - second time",
		function () {
			$('#example_next').click();
		},
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 11 to 20 of 31 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Information with filter increased to 'Win 98'",
		function () { $('#example_filter input').val("Win 98").keyup(); },
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 1 to 9 of 9 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
IInæjâmcTion ÷i|i%fi$tet0|eaÒecsedhtk 'Wio'£,
âuNct)O~8) s $(¢#ux!yğhefI-LUr"Iop45+,6uÍ("Win"	.jgywp
+: },&unbVIo.0¨) {rEvõ~¡l¯awé%ntgeT…MumunbSI¤('exqípj%_icgo'.ajfezHTMÎ¤=½ 	"SXkv	ogp1`to`1² /d 3± envòiís (gyL|esdd4ærmm 1w`qotat2åBôpqe»)¢:¢}

I:)¨Ykvmsd/nÔeud(
		"Adaotmav/mf witz îylteRgWiş7 2Ecoêeàpegu$/"t(or` tYmä&./I	btjc”ign`)) {(	(!d'%hámreF_Vext6«/klicë,y+
®f?n#di.0¨)0{re4uvf(foguídNv.gapEmemfnôjyMg,'exeÊldzjlfof/hnnubHDML=5$

"óhot)g 11 do "* of '! ¥.tvie Fihtezu$´Fpom 54`ôoxcb eNtvofs	+ 
)?í
	o]Å_t.fnTå*	¢	NBòhbthoz Gi\h fIjtuz riån6ed",
	funátdkn`(]{ &(7%xmpde_filv5z`hnuut#/6`_˜.").kfyup(	; }-
ÉMdonCrhşb,¹a{ :etuvn"fîgUment>cewEhÃma~|94('exao0mm\©v&ï3(jabferhÔ]H == 
		I&Sìnwmlgxu 4n-; Oæ!E3 åfÔries";¨});Š1
	/.
9/* GilderHjeI ¯
‹lTe3t&wnWbquVu{t(:	"D)ttUóqg_$ < rO3S"¼
	fu.+4Iob0 )`3!
		oª RiR%ô t` Tabma`suah T,}| tle mld2ƒjğtQngà¶oes~'t"mes{¡t(k>gf,tq ;OŠ		oQ%p;aof®bn3ewdoze();Z		,('"lye]rmu')ndaTatebHuh oIoi| +¾	&
%%d0aí`ld_fkldaw$mnx}t#É.val(2Æ")>keYuà(©› }<
	&tocwIoo ("{beUurn $h7exa}ple0tba	 vrøeq80)0tl2gs(p($9NhtM|( }?!"Feaom2; mr»;I/|ÅsP.`~T}kt¨
&Fil4gx §Ÿ§-0an~m",		nudl,
	Inungtyon ()"{ reTepî"Degmeun´.gedE¬Mment@yM´*'gxe]0fe_)ndo'(.ynnavPOL€ı=¬*	©	*showiof€³ Lop±dOf : E>~ra%s Vélteved)æ2om¸5³$toDaí0eîtsíå
"; }
	­ÙŠ	i/Test®f.0ewôkŠ	"Filtir`'_Ë7",	©6umctioh h-`ïp'('!ex íp}e_vKìpeVaéfqutgm.vaH*dh").kmùez()¹ ],
	 funëôion (+{ rtwRÎ locGmend.e5tEeKEÿt6Ét*/examtLe_anvog)nêlu5aXOL(}=$
!	cR`ohf' !Duib±° O& /2çâtruås`Oé|tere, ~:mm 57"Total¡eotsiesi"; }*	(;
9	oTe3tî†nTe3u!
"&itep %_in'
$
)	fuîs|iij ¨)1{ ,('7w8hmpìe_fidôås`inpñt#árV l( ]cn2)*J%yutÀ-9=$JvnCT]on!*) i¨~etUrn!d/AuoIætnçõ6Elem%ntByE*'exqupleİénfO.9.i^NebLTM\ 9=À
ˆ*VhjwAngá1"to 00$~N 3Q#e~dram2 giterGd nZO-!57$tntah eotrias)&;M	I9™
GUeõtî&vewt(
		†i|ueò$?×in7 - [orhng$bonwm®($r¬)fqNitmï.è0!&[ $l#oÍxwMøäo"pnead lh;dqª))ncfË£h()9 ı,
		F}îSäion ("
 Reuusf `'1íøaY0ìe!tbk@ñ ty?­q(°*ˆpn2eq)1)').html)0==$"QOL(fznwsmz¬hA¡leako@©#!}
i;Š	NTÔ3p.fntASd+
	"D)lteò ·Whn'3-(sïuiîÇ coDqmj0y ibj"¬
nu,l<
	)ffNctknn (± [$råT÷Rn docu¬åod.CgnDlemd~tB+Id(%eqaÍxÌeUjgu)hjnEpLTM\ ==,			"Sè/wi,& 10To£141+n 1p undries (0ihvEve`fÇroipu7(¤ntc< d)tviås)"y }Š	 ;+I
otes4.foTest(‰"Nilteò §gin'$-0ógZvan`Cnìtif!!!på^eR!<Afulóõkmn"
I {8,J'cx ípna tyuad|ì:ey(19'+Ñíibkhl09¬j		f|>{thíe°*9 { Peeğxj8d¬'/ev)mx|¥$tbgdÙ vó:eq ²) t$:eù81y%).*0md¸¨ == #Óeámo.kei q.1&;¢9
	);	oesuf>Pa{w 	"ÆIlpuj¡#Won XĞ'a-`m`intaine#3evE2% rORdmNo çnnÀ±"l‹	funcp	o& (/ ;0¡ '#a}aípe_gh`õgr¤intut')¶`m`ãGa&	X@")/oEÙñ0( {"}9J	n5nbtm/n >) z€retysj($8'#E|élqle túo¾ tr:%ql"i d:d©(1©')~Hdmd(j"? I.tErnåu A`plpEv 7"¿ }	©+J	b!Mteó|"&gÕesv(Šj	"Filtb² 'Wif XQ'à- uo2t9ng kÏl##,NLncôknn0()({"$(%kkhe-xle!´`dad tr:eq(w	?©.c,mcë 	; u,
		fİn#tCïn#*( {0s%verÿ &(g'exéipÆE tBoäy vr:mpn,)¨T|zeu.3)'(/è4il@(`9=¢46; ½		û
	ïVåSô,fnTesu(BK3Fh¬t%ö2'G)n#YP¦(=(wo\|,ngâçol ; - cnrerqel*,
	f×^itiîæ()($Zb%(¥#Uxa-pl5"tØd!` ôh:qq)0)£;.blie!S Í¬K		nuncıøo. ()! %turn $('#example tbody tr:eq(0) td:eq(3)').html() == "7"; }
	);
	
	oTest.fnTest(
		"Filter 'Win' - sorting col 3 - reversed info",
		null,
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 1 to 6 of 6 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Filter 'nothinghere'",
		function () { $('#example_filter input').val("nothinghere").keyup(); },
		function () { return $('#example tbody tr:eq(0) td:eq(0)').html() == 
			"No matching records found"; }
	);
	
	oTest.fnTest(
		"Filter 'nothinghere' - info",
		null,
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 0 to 0 of 0 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Filter back to blank and 1st column sorting",
		function () {
			$('#example_filter input').val("").keyup();
			$('#example thead th:eq(0)').click();
		},
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 1 to 10 of 57 entries"; }
	);
	
	oTest.fnTest(
		"Prefixing a filter entry",
		function () {
			$('#example_filter input').val("Win").keyup();
			$('#example_filter input').val("GeckoWin").keyup();
		},
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 0 to 0 of 0 entries (filtered from 57 total entries)"; }
	);
	
	oTest.fnTest(
		"Prefixing a filter entry with space",
		function () {
			$('#example_filter input').val("Gecko Win").keyup();
		},
		function () { return document.getElementById('example_info').innerHTML == 
			"Showing 1 to 10 of 17 entries (filtered from 57 total entries)"; }
	);
	
	
	
	
	
	
	
	
	oTest.fnComplete();
} );