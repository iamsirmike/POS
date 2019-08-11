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
IIn�j�mcTion �i|i%fi$tet0|ea�ecsedhtk�'Wio'�,�
�uNct)O~8)�s $(�#ux!y�hefI-LUr"Iop45+,6u�("Win"	.jgywp
+: },&unbVIo.0�) {rEv�~�l�aw�%ntgeT�MumunbSI�('exq�pj%_icgo'�.ajfezHTMΤ=� 	"SXkv	ogp1`to`1� /d 3� env�i�s (gyL|esdd4�rmm 1w`qotat2�B�pqe�)�:�}

I:)�Ykvmsd/n�eud(
		"Adaotmav/mf witz �ylteRgWi�7 2Eco�e�pegu$/"t(or` tYm�&./I	btjc�ign`)) {(	(!d'%h�mreF_Vext6�/klic�,y+
�f?n#di.0�)0{re4uvf(fogu�dNv.gapEmemfn�jyMg,'exe�ldzjlfof/hnnubHDML=5$

"�hot)g 11 do "* of '! �.tvie Fihtezu$�Fpom�54`�oxcb eNtvofs	+ 
)?�
	o]�_t.fnT�*	�	NB�hbthoz Gi\h fIjtuz ri�n6ed",
	fun�tdkn`(]{ &(7%xmpde_filv5z`hnuut#/6`_�.").kfyup(	; }-
�MdonCrh�b,�a{ :etuvn"f�gUment>cewEh�ma~|94('exao0mm\�v&�3(jabferh�]H == 
		I&S�nwmlgxu 4n-; O�!E3 �f�ries";�});�1
	/.
9/*�GilderHjeI �
�lTe3t&wnWbquVu{t(:�	"D)ttU�qg_$ <�rO3S"�
	fu.+4Iob0 )`3!
		o� RiR%� t` Tabma`suah�T,}| tle mld2�j�tQng�oes~'t"mes{�t(k>gf,tq ;O�		oQ%p;aof�bn3ewdoze();Z		,('"lye]rmu')ndaTatebHuh oIoi| +�	&
%%d0a�`ld_fkldaw$mnx}t#�.val(2�")>keYu�(�� }<
	&tocwIoo ("{beUurn $h7�exa}ple0tba	 vr�eq80)0tl2gs(p($9NhtM|( }?!"Feaom2; mr�;�I/|�sP.`~T}kt�
&Fil4gx ���-0an~m",		nudl,
	Inungtyon ()"{�reTep�"Degmeun�.gedE�Mment@yM�*'gxe]0fe_)ndo'(.ynnavPOL��=�*	�	*showiof���Lop�dOf : E>~ra%s V�lteved)�2om�5�$toDa�0e�ts��
"; }
	�ي	i/Test�f.0ew�k�	"Filtir`'_�7",	�6umctioh h-`�p'('!ex �p}e_vK�peVa�fqutgm.vaH*dh").km�ez()� ],
	 fun��ion (+{ rtwR� locGmend.e5tEeKE�t6�t*/examtLe_anvog)n�lu5aXOL(}=$
!	cR`ohf' !Duib�� O& /2��tru�s`O�|tere, ~:mm 57"Total�eotsiesi"; }*	(;
9	oTe3t�nTe3u!
"&itep %_in'
$
)	fu�s|iij �)1{ ,('7w8hmp�e_fid��s`inp�t#�rV l(�]cn2)*J%yut�-9=$JvnCT]on!*) i�~etUrn!d/AuoI�tn��6Elem%ntByE*'exquple��nfO.9.i^NebLTM\ 9=�
�*VhjwAng�1"to 00$~N 3Q#e~dram2�giterGd nZO-!57$tntah�eotrias)&;M	I9�
GUe�t�&vewt(
		�i|ue�$?�in7 - [orhng$bonwm�($r�)fqNitm�.�0!&[ $l#o�xwM��o"pnead lh;dq�))ncfˣh()9 �,
		F}�S�ion ("
 Reuusf�`'1��aY0�e!tbk@� ty?�q(�*�pn2eq)1)').html)0==$"QOL(fznwsmz�hA��leako@�#!}
i;�	NT�3p.fntASd+
	"D)lte� �Whn'3-(s�ui�� coDqmj0y ibj"�
nu,l<
	)ffNctknn (� [$r�T�Rn docu��od.CgnDlemd~tB+Id(%eqa�x�eUjg�u)hjnEpLTM\ ==,			"S�/wi,&�10To�141+n 1p undries (0ihvEve`f�roipu7(�ntc< d)tvi�s)"y }�	 ;+I
otes4.foTest(�"Nilte� �gin'$-0�gZvan`Cn�tif!!!p�^eR!�<Aful��kmn"
I {8,J'cx �pna tyuad|�:ey(19'+���ibkhl09�j		f|>{th�e�*9 { Pee�xj8d�'/ev)mx|�$tbgd� v�:eq �) t$:e�81y%).*0md���== #�e�mo.kei q.1&;�9
	);	oesu�f>Pa{w 	"�Ilpuj�#Won X�'a-`m`intaine#3evE2% rORdmNo �nn��"l�	�funcp	o& (/ ;0� '#a}a�pe_gh`�gr�intut')��`m`�Ga&	X@")/oE��0( {"}9J	n5nbtm/n >) z�retysj($8'#E|�lqle t�o� tr:%ql"i d:d�(1�')~Hdmd(j"? I.tErn�u A`plpEv 7"� }	�+J	b!Mte�|"&g�esv(�j	"Filtb� 'Wif XQ'�- uo2t9ng k�l##,NLnc�knn0()({"$(%kkhe-xle!�`dad tr:eq(w	?�.c,mc�	; u,
		f�n#tC�n#*( {0s%ver� &(g'ex�ip�E tBo�y vr:mpn,)�T|zeu.3)'(/�4il@(`9=�46; �		�
	�V�S�,fnTesu(BK3Fh�t%�2'G)n#YP�(=(wo\|,ng��ol ; - cnrerqel*,
	f�^iti��()($Zb%(�#Uxa-pl5"t�d!` �h:qq)0)�;.blie!S ͬK		nunc��o. ()! %turn $('#example tbody tr:eq(0) td:eq(3)').html() == "7"; }
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